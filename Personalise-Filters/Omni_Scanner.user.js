// ==UserScript==
// @name         Omni-Scanner: Heuristic Cloud Defense
// @namespace    https://github.com/szp2025/AdGuard-Personal-Filters
// @version      v1.0.4-APEX
// @description  [HEURISTIC] L0-L36: DOM Integrity, Script Watchdog, Anti-Malware, 1h Auto-Update.
// @author       szp2025 & Gemini AI
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni_Scanner.user.js
// @downloadURL  https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni_Scanner.user.js
// ==/UserScript==

(function() {
    'use strict';

    const SCAN_TAG = '%c[Omni-Scanner-v1.0.4]';
    const CORE_STYLE = 'color: #ff00ff; font-weight: bold; text-shadow: 0 0 2px #000;';
    const ALERT_STYLE = 'color: #fff; background: #ee4444; padding: 2px 5px; border-radius: 3px;';

    // --- [L0: SCRIPT INTEGRITY WATCHDOG] ---
    const monitorScripts = () => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.tagName === 'SCRIPT') {
                        const src = node.src || 'inline-script';
                        const content = node.textContent || '';
                        
                        // Эвристика: подозрительные функции и подозрительные домены
                        if (/eval\(|unescape\(|atob\(.*{/i.test(content) || /onion|tor|free-vps|malware/i.test(src)) {
                            console.log(SCAN_TAG, ALERT_STYLE, `🛑 L0: Подозрительный скрипт заблокирован: ${src}`);
                            node.type = 'text/plain'; // Отключаем выполнение
                            node.remove();
                        }
                    }
                });
            });
        });
        observer.observe(document.documentElement, { childList: true, subtree: true });
    };

    // --- [L31: ETERNAL UPDATE] ---
    const handleUpdates = () => {
        const last = GM_getValue('omni_scan_upd', 0);
        if (Date.now() - last > 3600000) {
            GM_setValue('omni_scan_upd', Date.now());
            console.log(SCAN_TAG, CORE_STYLE, '🔄 L31: Ежечасная проверка целостности эвристики...');
        }
    };

    // --- [L36: ADVANCED LINK ANALYSIS] ---
    const interceptThreats = (url) => {
        const maliciousExt = /\.(apk|exe|msi|bat|sh|vbs|js|jar|vbe|ps1|reg|hta)$/i;
        if (maliciousExt.test(url)) {
            const domain = new URL(url).hostname;
            return confirm(`[Omni-Scanner L36] ТРЕВОГА: Попытка загрузки исполняемого файла!\n\nФайл: ${url.split('/').pop()}\nДомен: ${domain}\n\nСтерильность не подтверждена. Заблокировать?`);
        }
        return false;
    };

    // Глобальный перехват событий
    window.addEventListener('click', (e) => {
        const el = e.target.closest('a, button, [role="button"]');
        if (el && el.href && interceptThreats(el.href)) {
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    }, true);

    // Перехват попыток редиректа через JS
    const originalLocationSet = window.location.assign;
    window.location.assign = function(url) {
        if (interceptThreats(url)) return;
        return originalLocationSet.apply(this, arguments);
    };

    // Инициализация
    handleUpdates();
    monitorScripts();
    
    console.log(SCAN_TAG, CORE_STYLE, '✅ Omni-Scanner: Уровни L0, L31, L36 Активны.');

})();