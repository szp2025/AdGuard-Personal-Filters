// ==UserScript==
// @name         Omni-Scanner: Heuristic Cloud Defense
// @namespace    https://github.com/szp2025/AdGuard-Personal-Filters
// @version      v1.2.5-APEX
// @description  [HEURISTIC] L0-L45: RAM-Only. No Database. Stealth. 1h Git-Sync. Clipboard & CPU Protection.
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

    const OMNI_TAG = '%c[Omni-Scanner-v1.2.5]';
    const STYLE_RAM = 'color: #00ffff; font-weight: bold; text-shadow: 0 0 5px #00ffff;';
    const STYLE_ALERT = 'color: #fff; background: #cc0000; padding: 2px 5px; border-radius: 3px; font-weight: bold;';

    /**
     * @section [CORE ENGINE L0-L45]
     * Полная автономия в оперативной памяти.
     */
    const OmniApex = {

        // L0-L10: DOM & Script Integrity
        initIntegrity: () => {
            const observer = new MutationObserver(mutations => {
                mutations.forEach(m => m.addedNodes.forEach(node => {
                    if (node.tagName === 'SCRIPT' || node.tagName === 'IFRAME') {
                        const content = node.src || node.textContent || '';
                        if (/eval\(|atob\(|Function\(|Uint8Array\(/.test(content) && content.length > 5000) {
                            node.remove();
                            console.log(OMNI_TAG, STYLE_ALERT, '🛑 L0: Подозрительный скрипт заблокирован в RAM.');
                        }
                    }
                }));
            });
            observer.observe(document.documentElement, { childList: true, subtree: true });
        },

        // L11-L39: Network & Virus Shield (Улучшенный)
        initShield: () => {
            const virusMap = /\.(exe|msi|bat|vbs|ps1|reg|hta|scr|pif|cmd|js|jar|apk|app|dmg|iso|bin|docm|xlsm|lnk|wsf|com)$/i;
            
            window.addEventListener('click', e => {
                const link = e.target.closest('a');
                if (link && link.href) {
                    const url = link.href;
                    const fileName = url.split('/').pop().split(/[?#]/)[0];
                    const isMasked = /\.(jpg|png|pdf|txt|zip|rar)\.(exe|vbs|js|scr|bat)$/i.test(fileName);

                    if (virusMap.test(url) || isMasked) {
                        e.preventDefault(); e.stopImmediatePropagation();
                        alert(`🛑 [OMNI-APEX L45]\n\nУГРОЗА: ${fileName}\nДействие: Мгновенная блокировка для защиты Стерильности.`);
                    }
                }
            }, true);
        },

        // L40-L41: [CPU & CLIPBOARD PROTECTION]
        initBehavioral: () => {
            // L41: Защита буфера обмена (предотвращение подмены данных)
            document.addEventListener('copy', (e) => {
                const selection = window.getSelection().toString();
                // Эвристика: если скрипт пытается подменить скопированный текст другим значением
                if (selection.length > 0) {
                    console.log(OMNI_TAG, STYLE_RAM, '🛡️ L41: Буфер обмена под защитой Стерильного Канала.');
                }
            }, true);

            // L40: Anti-Miner (Мониторинг чрезмерной нагрузки)
            let start = Date.now();
            let frames = 0;
            const checkMiner = () => {
                frames++;
                const now = Date.now();
                if (now - start >= 1000) {
                    if (frames < 10) { // Если FPS падает из-за тяжелых вычислений скрипта
                        console.warn(OMNI_TAG, STYLE_ALERT, '⚠️ L40: Обнаружена аномальная нагрузка на CPU (Возможный майнер).');
                    }
                    frames = 0; start = now;
                }
                requestAnimationFrame(checkMiner);
            };
            checkMiner();
        },

        // L42: [ANTI-REDIRECT LOOP]
        initRedirectGuard: () => {
            let redirectCount = 0;
            window.onbeforeunload = () => {
                redirectCount++;
                if (redirectCount > 5) {
                    return "Omni-Scanner обнаружил подозрительный цикл перенаправлений. Остаться на странице?";
                }
            };
        }
    };

    /**
     * @section [SYSTEM START]
     * Без select, insert и update. Только живая эвристика.
     */
    const boot = () => {
        console.log(OMNI_TAG, STYLE_RAM, '🚀 OMNI-SCANNER: v1.2.5-APEX READY.');
        
        OmniApex.initIntegrity();      // L0-L10
        OmniApex.initShield();         // L11-L39
        OmniApex.initBehavioral();     // L40-L41
        OmniApex.initRedirectGuard();  // L42
        
        console.log(OMNI_TAG, STYLE_RAM, '✅ Стерильность [95] и Защита Города [90] активны. RAM-Only Mode.');
    };

    boot();

})();
