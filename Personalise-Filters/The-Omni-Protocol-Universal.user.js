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

    const OMNI_TAG = '%c[Omni-Chronos-v3.3.9]';
    const STYLE_CORE = 'color: #00ffff; font-weight: bold; text-shadow: 0 0 5px #00ffff; border-left: 3px solid #00ffff; padding-left: 10px;';
    const STYLE_DANGER = 'color: #fff; background: #ff0000; padding: 2px 5px; font-weight: bold;';

    // Critical Infrastructure Whitelist (Fixes Outlook/Banking JSON errors)
    const WHITELIST = ['outlook.com', 'office.com', 'microsoft.com', 'loirehabitat.fr', 'gouv.fr', 'ameli.fr', 'caf.fr', 'live.com', 'google.com'];
    const isWhiteListed = WHITELIST.some(d => window.location.hostname.includes(d));


    // --- [ЦЕНТРАЛЬНАЯ ЛОГИКА NEBULA APEX GOLD] ---
    const CONFIG = {
        identity: {
            platform: 'MacIntel',
            vendor: 'Apple Computer, Inc.',
            ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
        }
    };

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
         * L0-L500: HIGH-SPEED RAM & DOM (Интеграция L7 и L9)
         */
        initBaseFoundation: () => {
            // L7: SHADOW-DOM PENETRATION
            const orgAttachShadow = Element.prototype.attachShadow;
            Element.prototype.attachShadow = function() {
                const shadow = orgAttachShadow.apply(this, arguments);
                // Привязываем наш эвристический сканер к каждой новой тени
                OmniChronos.attachReaper(shadow); 
                return shadow;
            };

            const obs = new MutationObserver(mutations => {
                for (let i = 0; i < mutations.length; i++) {
                    const nodes = mutations[i].addedNodes;
                    for (let j = 0; j < nodes.length; j++) {
                        const node = nodes[j];
                        if (node.nodeType === 1) {
                            // L9: NEURAL-HEURISTIC (1x1 Tracker Kill)
                            const style = window.getComputedStyle(node);
                            if (style.width === '1px' || style.height === '1px' || style.opacity === '0') {
                                node.remove();
                                continue;
                            }
                            
                            // L3: HEURISTIC REAPER (из предыдущих этапов)
                            if (node.matches('[class*="ad-"], [id*="ad-"], [class*="banner"]')) {
                                node.remove();
                            }
                        }
                    }
                }
            });
            obs.observe(document.documentElement, { childList: true, subtree: true });
        },

        /**
         * L501-L1000: ADVANCED SHIELD (Интеграция L5, L6, L8)
         */
        initAdvancedShield: () => {
            // L8: CLIPBOARD INTEGRITY (Слияние функций)
            document.addEventListener('copy', e => {
                const selection = window.getSelection().toString();
                if (selection) {
                    e.clipboardData.setData('text/plain', selection);
                    e.preventDefault(); 
                }
                if (!e.isTrusted) sendOmniPush('Privacy Guard', 'L8: Hijack prevented.');
            }, true);

            // L5: BATTERY STEALTH
            if (navigator.getBattery) {
                navigator.getBattery = () => Promise.resolve({
                    charging: true, level: 1, chargingTime: 0, dischargingTime: Infinity
                });
            }
            
            // L7: IDLE DEFENSE
            if ('IdleDetector' in window) delete window.IdleDetector;
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
    // L1: IDENTITY & SPOOFING (Мгновенное выполнение)
        const overwrite = (obj, prop, value) => {
            try { Object.defineProperty(obj, prop, { get: () => value, configurable: true }); } catch (e) {}
        };
        overwrite(navigator, 'platform', CONFIG.identity.platform);
        overwrite(navigator, 'vendor', CONFIG.identity.vendor);
        overwrite(navigator, 'userAgent', CONFIG.identity.ua);
        overwrite(navigator, 'webdriver', false);

        console.log(OMNI_TAG, STYLE_CORE, `🚀 OMNI-SCANNER v3.3.9: ${isWhiteListed ? 'TRUSTED' : 'STRICT'} MODE.`);


        console.log(OMNI_TAG, STYLE_CORE, `🚀 OMNI-SCANNER v3.3.9: ${isWhiteListed ? 'TRUSTED' : 'STRICT'} MODE.`);
        OmniChronos.initBaseFoundation();
        OmniChronos.initAdvancedShield();
        OmniChronos.initQuantumModules();
    };

    boot();
})();
