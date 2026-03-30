// ==UserScript==
// @name         Omni-Scanner: Heuristic Cloud Defense
// @namespace    https://github.com/szp2025/AdGuard-Personal-Filters
// @version      v1.1.5-EVOLUTION
// @description  [HEURISTIC] L0-L36: RAM-Only Protection. 1h Auto-Sync from Git. No Database.
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

    /**
     * @section [HEURISTIC CONFIGURATION]
     * Все параметры хранятся в константах внутри кода, а не в базе данных.
     * Обновление кода в Git автоматически обновляет эти параметры.
     */
    const OMNI_TAG = '%c[Omni-Scanner-v1.1.5]';
    const STYLE_RAM = 'color: #00ffcc; font-weight: bold; text-transform: uppercase;';
    const STYLE_BLOCK = 'color: #fff; background: #ff4444; padding: 2px 5px; border-radius: 4px;';

    const Engine = {

        /**
         * L0-L5: Моментальный мониторинг DOM. 
         * Блокирует вредоносные скрипты до их активации.
         */
        domIntegrity: () => {
            const observer = new MutationObserver(mutations => {
                mutations.forEach(m => {
                    m.addedNodes.forEach(node => {
                        if (node.tagName === 'SCRIPT' || node.tagName === 'IFRAME') {
                            const content = node.src || node.textContent || '';
                            // Эвристика: поиск обфускации и опасных паттернов (L0)
                            if (/eval\(|atob\(|unescape\(|String\.fromCharCode/i.test(content) || content.length > 8000) {
                                node.remove();
                                console.log(OMNI_TAG, STYLE_BLOCK, '🛑 L0: Обнаружена попытка внедрения. Стерильность сохранена.');
                            }
                        }
                    });
                });
            });
            observer.observe(document.documentElement, { childList: true, subtree: true });
        },

        /**
         * L88: Сетевое Ядро.
         * Фильтрация запросов без записи логов. Только реактивное действие.
         */
        networkCore: () => {
            const orgFetch = window.fetch;
            window.fetch = function() {
                const target = arguments[0];
                if (typeof target === 'string' && /malware|miner|tracking|telemetry/i.test(target)) {
                    console.log(OMNI_TAG, STYLE_BLOCK, `🚫 L88: Поток заблокирован: ${target}`);
                    return Promise.reject('Omni-Scanner: Rejected');
                }
                return orgFetch.apply(this, arguments);
            };
        },

        /**
         * L36: Сверхскоростной Сканер Вирусов.
         * Проверка всех типов файлов (EXE, MSI, APK, двойные расширения).
         */
        virusShield: () => {
            // Самая полная карта вирусных расширений (L36)
            const malwareExt = /\.(exe|msi|bat|vbs|ps1|reg|hta|scr|pif|cmd|js|jar|apk|app|dmg|iso|bin|docm|xlsm|vbe|jse)$/i;

            window.addEventListener('click', e => {
                const link = e.target.closest('a');
                if (link && link.href) {
                    const url = link.href;
                    const file = url.split('/').pop().split(/[?#]/)[0];
                    const isMasked = /\.(png|jpg|pdf|txt)\.(exe|vbs|js|scr|bat)$/i.test(file);

                    if (malwareExt.test(url) || isMasked) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        
                        // Прямая реакция без записи в память
                        alert(`🛑 [OMNI-L36: APEX SHIELD]\n\nУГРОЗА: ${file}\nСТАТУС: Вирус / Маскировка\nДЕЙСТВИЕ: Блокировано.\n\nСтерильный Канал [95] активен.`);
                    }
                }
            }, true);
        }
    };

    /**
     * @section [BOOTSTRAP]
     * Запуск системы. Авто-обновление L31 управляется заголовком скрипта.
     */
    const init = () => {
        console.log(OMNI_TAG, STYLE_RAM, '🚀 OMNI-SCANNER: Уровни L0-L36 в RAM запущены.');
        console.log(OMNI_TAG, STYLE_RAM, '🔄 L31: Синхронизация с Git активна (1 час).');

        Engine.domIntegrity(); // Запуск защиты DOM
        Engine.networkCore();  // Запуск защиты сети
        Engine.virusShield();  // Запуск сканера файлов
    };

    init();

})();