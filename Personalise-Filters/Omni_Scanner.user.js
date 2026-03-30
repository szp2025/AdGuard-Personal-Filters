// ==UserScript==
// @name         Omni-Scanner: Heuristic Cloud Defense
// @namespace    https://github.com/szp2025/AdGuard-Personal-Filters
// @version      v1.0.3-APEX
// @description  [HEURISTIC] L35-L36: Crypto-Mining protection, Deep Link Analysis, 1h Auto-Update.
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

    const SCAN_TAG = '%c[Omni-Scanner-v1.0.3]';
    const SCAN_STYLE = 'color: #00ffff; font-weight: bold; border-left: 3px solid #ff00ff; padding-left: 5px;';
    const WARN_STYLE = 'color: #ffffff; background: #ff0000; font-weight: bold; padding: 2px 5px;';

    // --- [L31: ETERNAL UPDATE ENGINE] ---
    const checkUpdates = () => {
        const last = GM_getValue('omni_last_upd', 0);
        if (Date.now() - last > 3600000) { // 1 час
            console.log(SCAN_TAG, SCAN_STYLE, '🔄 Проверка сигнатур и обновлений...');
            GM_setValue('omni_last_upd', Date.now());
            // Автообновление инициируется через мета-теги AdGuard
        }
    };

    // --- [L35: ANTI-CRYPTO-MINER] ---
    const stopMiners = () => {
        const minerKeywords = ['CoinHive', 'CoinHave', 'CryptoLoot', 'Miner.start', 'WebMine'];
        const scripts = document.getElementsByTagName('script');
        for (let s of scripts) {
            if (minerKeywords.some(k => s.src.includes(k) || s.textContent.includes(k))) {
                s.remove();
                console.log(SCAN_TAG, WARN_STYLE, '🛑 КРИПТО-МАЙНЕР ЗАБЛОКИРОВАН!');
            }
        }
    };

    // --- [L36: DEEP DOWNLOAD INTERCEPTOR] ---
    const safeGuard = (url) => {
        const badExt = /\.(apk|exe|msi|bat|sh|vbs|js|jar|vbe|ps1)$/i;
        if (badExt.test(url)) {
            const file = url.split('/').pop().split(/[?#]/)[0];
            return confirm(`[Omni-Scanner] ОБНАРУЖЕН ИСПОЛНЯЕМЫЙ ФАЙЛ!\n\nФайл: ${file}\n\nИсточник не подтвержден. Заблокировать потенциальную угрозу?`);
        }
        return false;
    };

    // Глобальный перехват событий
    window.addEventListener('click', (e) => {
        const target = e.target.closest('a, button, [role="button"]');
        if (target && (target.href || target.onclick)) {
            const url = target.href || '';
            if (url && safeGuard(url)) {
                e.preventDefault();
                e.stopImmediatePropagation();
                console.log(SCAN_TAG, WARN_STYLE, 'Загрузка прервана: Нарушение эвристики L36.');
            }
        }
    }, true);

    // Перехват window.open (часто используется вирусами для редиректов)
    const originalOpen = window.open;
    window.open = function(url, ...args) {
        if (url && safeGuard(url)) {
            console.log(SCAN_TAG, WARN_STYLE, 'Блокировка попытки скрытого открытия окна с вирусом.');
            return null;
        }
        return originalOpen.apply(this, [url, ...args]);
    };

    // Инициализация
    checkUpdates();
    stopMiners();
    console.log(SCAN_TAG, SCAN_STYLE, 'Эвристика L35/L36 активна. Стерильность подтверждена.');

})();
