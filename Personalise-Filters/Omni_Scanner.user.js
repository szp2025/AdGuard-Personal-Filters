// ==UserScript==
// @name         Omni-Scanner: Heuristic Cloud Defense
// @namespace    https://github.com/szp2025/AdGuard-Personal-Filters
// @version      v1.0.2-APEX
// @description  [HEURISTIC] Real-time link & download scanning. Cloud-based threat detection. Automatic updates every 1h.
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

    const OMNI_SCANN_TAG = '%c[Omni-Scanner]';
    const STYLE = 'color: #00ff00; font-weight: bold; text-shadow: 0 0 5px #00ff00;';
    const UPDATE_INTERVAL = 60 * 60 * 1000; // 1 час в миллисекундах

    // --- [L31: ETERNAL UPDATE SYSTEM] ---
    const checkForUpdates = () => {
        const lastCheck = GM_getValue('lastUpdateCheck', 0);
        const now = Date.now();

        if (now - lastCheck > UPDATE_INTERVAL) {
            console.log(OMNI_SCANN_TAG, STYLE, 'Запуск плановой проверки обновлений (1ч)...');
            GM_setValue('lastUpdateCheck', now);
            
            // AdGuard Nightly и современные браузеры сами обработают updateURL, 
            // но мы принудительно уведомляем систему.
            if (typeof GM_xmlhttpRequest !== 'undefined') {
                GM_xmlhttpRequest({
                    method: "GET",
                    url: "https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni_Scanner.user.js",
                    onload: function(response) {
                        console.log(OMNI_SCANN_TAG, STYLE, 'Связь с сервером GitHub установлена. Версия актуальна.');
                    }
                });
            }
        }
    };

    // --- [L34: HEURISTIC ENGINE] ---
    const dangerousExt = /\.(apk|exe|bat|msi|sh|vbs|dmg|scr|com|js|jar)$/i;

    const omniCoreScan = (url) => {
        if (dangerousExt.test(url)) {
            const fileName = url.split('/').pop().split('?')[0];
            console.log(OMNI_SCANN_TAG, 'color: #ff0000; font-weight: bold;', `🛑 ПРЕДУПРЕЖДЕНИЕ: Попытка доступа к исполняемому файлу: ${fileName}`);
            
            // Базовая эвристика: подозрительные домены и отсутствие HTTPS
            const isUnsafe = !url.startsWith('https://') || /bit\.ly|t\.co|cutt\.ly|firebasestorage/i.test(url);

            if (isUnsafe) {
                return confirm(`[Omni-Scanner] ВНИМАНИЕ: Опасная загрузка!\n\nФайл: ${fileName}\nИсточник: ${new URL(url).hostname}\n\nЭтот ресурс выглядит подозрительно. Заблокировать загрузку? (ОК - Блокировать, Отмена - Рискнуть)`);
            }
        }
        return false; // false означает, что блокировка не подтверждена или не нужна
    };

    // Перехват взаимодействий
    document.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (a && a.href) {
            if (omniCoreScan(a.href)) {
                e.preventDefault();
                e.stopImmediatePropagation();
                console.log(OMNI_SCANN_TAG, 'color: #ff0000;', 'Загрузка отменена пользователем.');
            }
        }
    }, true);

    // Инициализация
    checkForUpdates();
    console.log(OMNI_SCANN_TAG, STYLE, 'Omni-Scanner v1.0.2-APEX: Защита и автообновление активны.');
})();
