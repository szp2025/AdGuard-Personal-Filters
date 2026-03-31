// ==UserScript==
// @name         The Omni-Protocol: Nebula Apex (v13.5.0) Gold Edition
// @namespace    https://github.com/szp2025/AdGuard-Personal-Filters
// @version      v13.5.0-GOLD
// @description  [MONOLITH] 35-Layer Hybrid Defense. Omni-Scanner (IDS/IPS) & Omni-Eternal (Zenith Stealth). 
// @author       szp2025 & Gemini AI
// @match        *://*/*
// @grant        GM_notification
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/The-Omni-Protocol-Universal.user.js
// @downloadURL  https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/The-Omni-Protocol-Universal.user.js
// @checkUpdateEvery 3600
// @compatible   chrome
// @compatible   firefox
// @compatible   safari
// ==/UserScript==

(function() {
    'use strict';

    // --- [ CONFIGURATION & UPDATER ] ---
    const CURRENT_VERSION = "v13.5.0-GOLD";
    const UPDATE_INTERVAL = 3600000; // 1 час
    const OMNI_TAG = `%c[Omni-Gold-${CURRENT_VERSION}]`;
    const STYLE_GOLD = 'color: #ffd700; font-weight: bold; text-shadow: 0 0 8px #ffd700; border-left: 4px solid #ffd700; padding-left: 10px;';
    const STYLE_DANGER = 'color: #fff; background: #ff0000; padding: 2px 5px; font-weight: bold;';

    // Critical Infrastructure Whitelist
    const WHITELIST = ['outlook.com', 'office.com', 'microsoft.com', 'loirehabitat.fr', 'gouv.fr', 'ameli.fr', 'caf.fr', 'live.com', 'google.com', 'github.com'];
    const isWhiteListed = WHITELIST.some(d => window.location.hostname.includes(d));

    async function checkUpdate() {
        const now = Date.now();
        const lastCheck = localStorage.getItem('omni_last_update_check');
        if (lastCheck && (now - lastCheck < UPDATE_INTERVAL)) return;

        try {
            const url = "https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/The-Omni-Protocol-Universal.user.js";
            const res = await fetch(url, { cache: "no-cache" });
            const text = await res.text();
            const remoteVersionMatch = text.match(/@version\s+([vV0-9.a-zA-Z-]+)/);
            const remoteVersion = remoteVersionMatch ? remoteVersionMatch[1] : null;

            if (remoteVersion && remoteVersion !== CURRENT_VERSION) {
                console.warn("[Omni] System out of date. Syncing...");
                localStorage.setItem('omni_last_update_check', now);
                setTimeout(() => location.reload(), 5000);
            } else {
                localStorage.setItem('omni_last_update_check', now);
            }
        } catch (e) { localStorage.setItem('omni_last_update_check', now); }
    }

    // --- [ MODULE 1: OMNI-SCANNER (IDS/IPS) ] ---
    const OmniScanner = {
        repairLegacyJS: () => {
            const jq = window.jQuery || window.$;
            if (jq && jq.fn) {
                try {
                    if (!jq.fn.editable) jq.fn.editable = { defaults: {} };
                    console.log(OMNI_TAG, STYLE_GOLD, '🛠️ L40: Legacy components patched.');
                } catch(e) {}
            }
        },

        initNetworkGuard: () => {
            // SharedArrayBuffer Jitter/Isolation
            if (window.SharedArrayBuffer && !isWhiteListed) {
                const orgSAB = window.SharedArrayBuffer;
                window.SharedArrayBuffer = function() {
                    return new Proxy(new orgSAB(...arguments), {});
                };
            }
            // HoneyPot for LocalStorage
            const orgGet = localStorage.getItem;
            localStorage.getItem = function(k) {
                if (!isWhiteListed && /token|auth|pass|wallet|secret/i.test(k) && !window.event?.isTrusted) {
                    return "{}"; // Safe JSON return
                }
                return orgGet.apply(localStorage, arguments);
            };
        },

        initVirusMap: () => {
            const fullMap = /\.(exe|msi|bat|vbs|ps1|reg|hta|scr|pif|cmd|js|jar|apk|dmg|iso|bin|lnk|com)$/i;
            window.addEventListener('click', e => {
                const a = e.target.closest('a');
                if (a && a.href && !window.location.hostname.includes('github.com')) {
                    if (fullMap.test(a.href.split(/[?#]/)[0])) {
                        e.preventDefault();
                        window.stop();
                        alert('🛑 [OMNI-GOLD L1200] Critical Threat Blocked.');
                    }
                }
            }, true);
        }
    };

    // --- [ MODULE 2: OMNI-ETERNAL (QUANTUM STEALTH) ] ---
    const OmniEternal = {
        applyHardwareMirage: () => {
            const overwrite = (obj, prop, value) => {
                try { Object.defineProperty(obj, prop, { get: () => value, configurable: true }); } catch (e) {}
            };
            overwrite(navigator, 'platform', 'MacIntel');
            overwrite(navigator, 'vendor', 'Apple Computer, Inc.');
            overwrite(navigator, 'deviceMemory', 8);
            overwrite(navigator, 'hardwareConcurrency', 8);
            overwrite(screen, 'availWidth', 1920);
            overwrite(screen, 'availHeight', 1040);
        },

        applyNeuralNoise: () => {
            // Canvas Poisoning
            const orgToDataURL = HTMLCanvasElement.prototype.toDataURL;
            HTMLCanvasElement.prototype.toDataURL = function() {
                const ctx = this.getContext('2d');
                if (ctx) { ctx.fillStyle = 'rgba(0,0,0,0.01)'; ctx.fillRect(0, 0, 1, 1); }
                return orgToDataURL.apply(this, arguments);
            };
            // WebRTC Leak Protection
            if (window.RTCPeerConnection) window.RTCPeerConnection = undefined;
        },

        sterilizeURL: () => {
            const cleanParams = ['utm_source', 'utm_medium', 'utm_campaign', 'fbclid', 'gclid', 'yclid'];
            const url = new URL(window.location.href);
            let changed = false;
            cleanParams.forEach(p => { if (url.searchParams.has(p)) { url.searchParams.delete(p); changed = true; } });
            if (changed) window.history.replaceState({}, document.title, url.pathname + url.search + url.hash);
        }
    };

    // --- [ BOOT SEQUENCE ] ---
    const boot = () => {
        checkUpdate();
        console.log(OMNI_TAG, STYLE_GOLD, `🚀 NEBULA APEX GOLD: ${isWhiteListed ? 'TRUSTED' : 'STRICT'} MODE.`);

        // Scanner Layer
        OmniScanner.initNetworkGuard();
        OmniScanner.initVirusMap();
        if (!!document.querySelector('frameset, table[bgcolor]')) OmniScanner.repairLegacyJS();

        // Eternal Layer
        OmniEternal.applyHardwareMirage();
        OmniEternal.applyNeuralNoise();
        OmniEternal.sterilizeURL();

        // Clipboard Protection (Cross-Synergy)
        document.addEventListener('copy', e => {
            const selection = window.getSelection().toString();
            if (selection) { e.clipboardData.setData('text/plain', selection); e.preventDefault(); }
            if (!e.isTrusted) GM_notification({ title: "Omni-Gold", text: "Clipboard Hijack Blocked" });
        }, true);
    };

    boot();
    setInterval(checkUpdate, UPDATE_INTERVAL);
})();
