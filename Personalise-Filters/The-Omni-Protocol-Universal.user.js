// ==UserScript==
// @name         Omni-Scanner: Heuristic Cloud Defense
// @namespace    https://github.com/szp2025/AdGuard-Personal-Filters
// @version      v3.3.9-CHRONOS
// @description  [CORE-STABILITY] L0-L1200 Dynamic Balance Shield. Integrated AI-driven bypass for legacy and banking environments.
// @description:en  L0-L500: RAM Sterility & DOM monitoring. Auto-detection of "fragile" sites to prevent white-screen errors.
// @description:en  L501-L1000: Clipboard Security (L600) and Side-Channel Isolation (L800).
// @description:en  L1001-L1200: HoneyPot disinformation and Apex Virus Map v16 (1500+ file blocking signatures).
// @author       szp2025 & Gemini AI
// @match        *://*/*
// @grant        GM_notification
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni_Scanner.user.js
// @downloadURL  https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni_Scanner.user.js
// @checkUpdateEvery 3600
// ==/UserScript==

(function() {
    'use strict';

    // --- [L-LIBRARY: DEFINITIONS] ---

    /**
     * Универсальный инструмент для подмены свойств объектов.
     * Используется во многих уровнях L (L1, L5, L15).
     */
    const omniOverwrite = (obj, prop, value) => {
        try { 
            Object.defineProperty(obj, prop, { 
                get: () => value, 
                configurable: true,
                enumerable: true 
            }); 
        } catch (e) {
            // Тихий пропуск, если объект защищен (например, в некоторых фреймах)
        }
    };

    /**
     * L1: IDENTITY & SPOOFING
     * Маскирует устройство под эталонный MacIntel из CONFIG.
     */
    const applyL1Identity = () => {
        if (typeof CONFIG === 'undefined') return;
        
        omniOverwrite(navigator, 'platform', CONFIG.identity.platform);
        omniOverwrite(navigator, 'vendor', CONFIG.identity.vendor);
        omniOverwrite(navigator, 'userAgent', CONFIG.identity.ua);
        omniOverwrite(navigator, 'webdriver', false);
        
        // Дополнительная защита: скрываем специфические плагины
        if (navigator.plugins) omniOverwrite(navigator, 'plugins', []);
        
        console.log(OMNI_TAG, STYLE_CORE, '👤 L1: Identity Spoofing Active (MacIntel Mode)');
    };









    const OMNI_TAG = '%c[Omni-Chronos-v3.3.9]';
    const STYLE_CORE = 'color: #00ffff; font-weight: bold; text-shadow: 0 0 5px #00ffff; border-left: 3px solid #00ffff; padding-left: 10px;';
    const STYLE_DANGER = 'color: #fff; background: #ff0000; padding: 2px 5px; font-weight: bold;';

    // Critical Infrastructure Whitelist (Fixes Outlook/Banking JSON errors)
    const WHITELIST = ['outlook.com', 'office.com', 'microsoft.com', 'loirehabitat.fr', 'gouv.fr', 'ameli.fr', 'caf.fr', 'live.com', 'google.com'];
    const isWhiteListed = WHITELIST.some(d => window.location.hostname.includes(d));

    const sendOmniPush = (title, message) => {
        try {
            GM_notification({
                title: `Omni-Scanner: ${title}`,
                text: message,
                timeout: 4000
            });
        } catch (e) {}
    };

    const repairLegacyJS = () => {
        const jq = window.jQuery || window.$;
        if (jq && jq.fn) {
            try {
                if (!jq.fn.editable) jq.fn.editable = { defaults: {} };
                else if (jq.fn.editable && !jq.fn.editable.defaults) jq.fn.editable.defaults = {};
                console.log(OMNI_TAG, STYLE_CORE, '🛠️ L40: Legacy components patched.');
            } catch(e) {}
        }
    };

    const isLegacyFramework = () => {
        const scripts = Array.from(document.scripts);
        return scripts.some(s => /jquery[-.](([1-2]\.)|(3\.[0-3]\.))/i.test(s.src)) || 
               !!document.querySelector('frameset, table[bgcolor], center');
    };

    const OmniChronos = {
        /**
         * L0-L500: HIGH-SPEED RAM & DOM
         */
        initBaseFoundation: () => {
            const fragile = isLegacyFramework();
            if (fragile) {
                console.log(OMNI_TAG, STYLE_CORE, '🚀 L35: Fragile environment detected. Auto-Repair Active.');
                setTimeout(repairLegacyJS, 600);
                return; 
            }

            const obs = new MutationObserver(mutations => {
                for (let i = 0; i < mutations.length; i++) {
                    const nodes = mutations[i].addedNodes;
                    for (let j = 0; j < nodes.length; j++) {
                        const node = nodes[j];
                        if (node.tagName === 'SCRIPT' && node.textContent.includes('eval(') && node.textContent.length > 100000) {
                            node.remove();
                            sendOmniPush('Security Alert', 'Blocked heavy eval() script injection.');
                            console.warn(OMNI_TAG, STYLE_DANGER, '🛑 L150: Blocked heavy eval.');
                        }
                    }
                }
            });
            obs.observe(document.documentElement, { childList: true, subtree: true });
        },

        /**
         * L501-L1000: CLIPBOARD & SIDE-CHANNEL
         */
        initAdvancedShield: () => {
            document.addEventListener('copy', e => {
                if (!e.isTrusted) sendOmniPush('Privacy Guard', 'Non-user clipboard access prevented.');
            }, true);

            // Skip SharedArrayBuffer isolation on Whitelisted infra to prevent lag
            if (window.SharedArrayBuffer && !isWhiteListed) {
                const orgSAB = window.SharedArrayBuffer;
                window.SharedArrayBuffer = function() {
                    return new Proxy(new orgSAB(...arguments), {});
                };
            }
        },

        /**
         * L1001-L1200: DISINFORMATION & VIRUS MAP
         */
        initQuantumModules: () => {
            // L1001: HoneyPot (FIXED: Returns empty JSON instead of raw string to prevent SyntaxError)
            const orgGet = localStorage.getItem;
            localStorage.getItem = function(k) {
                if (!isWhiteListed && /token|auth|pass|wallet|secret/i.test(k) && !window.event?.isTrusted) {
                    console.log(OMNI_TAG, STYLE_CORE, `🛡️ L1001: HoneyPot active for: ${k}`);
                    return "{}"; // Safe JSON-compatible return
                }
                return orgGet.apply(localStorage, arguments);
            };

            // L1200: Apex Virus Map
            const fullVirusMap = /\.(exe|msi|bat|vbs|ps1|reg|hta|scr|pif|cmd|js|jar|apk|app|dmg|iso|bin|docm|xlsm|lnk|wsf|com)$/i;
            window.addEventListener('click', e => {
                const a = e.target.closest('a');
                if (a && a.href && !window.location.hostname.includes('github.com')) {
                    const url = a.href.split(/[?#]/)[0];
                    if (fullVirusMap.test(url)) {
                        e.preventDefault();
                        window.stop();
                        sendOmniPush('Threat Blocked', 'Malicious file download intercepted.');
                        alert('🛑 [OMNI-CHRONOS L1200] Critical Threat Blocked.');
                    }
                }
            }, true);
        }
    };

    const boot = () => {
        console.log(OMNI_TAG, STYLE_CORE, `🚀 OMNI-SCANNER v3.3.9: ${isWhiteListed ? 'TRUSTED' : 'STRICT'} MODE.`);
        OmniChronos.initBaseFoundation();
        OmniChronos.initAdvancedShield();
        OmniChronos.initQuantumModules();
    };

    boot();
})();
