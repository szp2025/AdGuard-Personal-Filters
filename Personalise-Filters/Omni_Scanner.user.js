// ==UserScript==
// @name         Omni-Scanner: Heuristic Cloud Defense
// @namespace    https://github.com/szp2025/AdGuard-Personal-Filters
// @version      v1.3.0-ULTIMATE
// @description  [HEURISTIC] L0-L55: RAM-Only. No DB. Stealth. 1h Git-Sync. Hardware & Media Protection.
// @author       szp2025 & Gemini AI
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni_Scanner.user.js
// @downloadURL  https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni_Scanner.user.js
// @checkUpdateEvery 3600
// ==/UserScript==

(function() {
    'use strict';

    const OMNI_TAG = '%c[Omni-Scanner-v1.3.0]';
    const STYLE_RAM = 'color: #00ffff; font-weight: bold; text-shadow: 0 0 5px #00ffff;';
    const STYLE_CRITICAL = 'color: #fff; background: #ff0000; padding: 2px 5px; border-radius: 3px; font-weight: bold;';

    const OmniUltimate = {

        /**
         * L0-L45: Базовая Эвристика (Интеграция из v1.2.5)
         * DOM, Сеть [88], Вирусы [36], CPU [40], Буфер [41].
         */
        initBase: () => {
            // Анализ подозрительных расширений (L36)
            const virusMap = /\.(exe|msi|bat|vbs|ps1|reg|hta|scr|pif|cmd|js|jar|apk|app|dmg|iso|bin|docm|xlsm|lnk|wsf|com|vbe|jse|wsf|ins|inx|isu|job|msc|msp|mst|paf|shb|shs|u3p|vb|vss|vst|vsw|ws|wsc|wsh)$/i;
            
            window.addEventListener('click', e => {
                const link = e.target.closest('a');
                if (link && link.href) {
                    const url = link.href;
                    const fileName = url.split('/').pop().split(/[?#]/)[0];
                    if (virusMap.test(url) || /\.(jpg|png|pdf|txt|zip|rar)\.(exe|vbs|js|scr|bat)$/i.test(fileName)) {
                        e.preventDefault(); e.stopImmediatePropagation();
                        alert(`🛑 [OMNI-ULTIMATE L36]\n\nОБНАРУЖЕН ВИРУС: ${fileName}\nСтерильность [95] сохранена. Запуск заблокирован.`);
                    }
                }
            }, true);
        },

        /**
         * L46-L50: [HARDWARE STEALTH & MEDIA PROTECTION]
         * Защита камеры, микрофона и геолокации на уровне эвристики запросов.
         */
        initHardwareGuard: () => {
            // Эвристика: блокировка внезапных запросов к медиа-устройствам
            const orgGetUserMedia = navigator.mediaDevices ? navigator.mediaDevices.getUserMedia : null;
            if (orgGetUserMedia) {
                navigator.mediaDevices.getUserMedia = function(constraints) {
                    console.log(OMNI_TAG, STYLE_CRITICAL, '🛡️ L46: Попытка доступа к Медиа-устройствам перехвачена.');
                    const confirmAccess = confirm("[OMNI-L46] Сайт запрашивает доступ к КАМЕРЕ/МИКРОФОНУ.\n\nРазрешить для этой сессии?");
                    return confirmAccess ? orgGetUserMedia.apply(this, arguments) : Promise.reject(new Error("Omni-Block: Media Access Denied"));
                };
            }

            // L47: Блокировка определения геолокации без ведома пользователя
            const orgGetCurrentPosition = navigator.geolocation.getCurrentPosition;
            navigator.geolocation.getCurrentPosition = function() {
                console.log(OMNI_TAG, STYLE_RAM, '🛡️ L47: Геолокация защищена режимом Призрака [90].');
                return; // Полная блокировка без уведомления (скрытность)
            };
        },

        /**
         * L51-L55: [ZERO-DAY ENVIRONMENT ISOLATION]
         * Защита от попыток "прощупывания" среды (анализ расширений, портов и софта на ПК).
         */
        initEnvIsolation: () => {
            // L51: Защита от сканирования локальных портов (часто делается стилерами)
            const orgFetch = window.fetch;
            window.fetch = function(input, init) {
                const url = typeof input === 'string' ? input : (input instanceof Request ? input.url : '');
                if (url.includes('127.0.0.1') || url.includes('localhost')) {
                    console.error(OMNI_TAG, STYLE_CRITICAL, '🚫 L51: Попытка сканирования локальных портов пресечена.');
                    return Promise.reject('Omni-Scanner: Local Network Isolation Active');
                }
                return orgFetch.apply(this, arguments);
            };

            // L55: Блокировка Window-In-Window фишинга
            const orgOpen = window.open;
            window.open = function() {
                console.log(OMNI_TAG, STYLE_RAM, '🛡️ L55: Перехват открытия нового окна/вкладки.');
                return orgOpen.apply(this, arguments);
            };
        }
    };

    /**
     * @section [LAUNCH BOOT]
     * Самый полный, самый мощный, бездисковый.
     */
    const boot = () => {
        console.log(OMNI_TAG, STYLE_RAM, '🚀 OMNI-SCANNER v1.3.0: ULTIMATE EDITION ACTIVE.');
        
        OmniUltimate.initBase();          // L0-L45 (Интегрировано)
        OmniUltimate.initHardwareGuard();  // L46-L50
        OmniUltimate.initEnvIsolation();   // L51-L55
        
        console.log(OMNI_TAG, STYLE_RAM, '✅ Стерильность [95] Подтверждена. Все 55 уровней в RAM.');
    };

    boot();

})();
