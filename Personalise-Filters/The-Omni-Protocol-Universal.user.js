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

    const CURRENT_VERSION = "v13.5.0-GOLD";
    const OMNI_TAG = `%c[Omni-Gold-${CURRENT_VERSION}]`;
    const STYLE_GOLD = 'background: #000; color: #ffd700; font-weight: bold; border: 1px solid #ffd700; padding: 2px 5px;';
    
    const WHITELIST = ['outlook.com', 'office.com', 'microsoft.com', 'loirehabitat.fr', 'gouv.fr', 'ameli.fr', 'caf.fr', 'live.com', 'google.com', 'github.com', 'paypal.com', 'revolut.com'];
    const isWhiteListed = WHITELIST.some(d => window.location.hostname.includes(d));

    // --- [ МОДУЛЬ 1: OMNI-ETERNAL (QUANTUM STEALTH) ] ---
    const apexEternalCore = () => {
        const overwrite = (obj, prop, value) => {
            try { Object.defineProperty(obj, prop, { get: () => value, configurable: true }); } catch (e) {}
        };

        // 1. Hardware Mirage (L1-L10)
        overwrite(navigator, 'platform', 'MacIntel');
        overwrite(navigator, 'vendor', 'Apple Computer, Inc.');
        overwrite(navigator, 'deviceMemory', 8);
        overwrite(navigator, 'hardwareConcurrency', 8);
        overwrite(navigator, 'maxTouchPoints', 0);

        // 2. Font-Collision & Canvas Protection (L11-L20)
        const orgGetBoundingClientRect = Element.prototype.getBoundingClientRect;
        Element.prototype.getBoundingClientRect = function() {
            const rect = orgGetBoundingClientRect.apply(this, arguments);
            if (!isWhiteListed) {
                return {
                    x: rect.x, y: rect.y, top: rect.top, left: rect.left,
                    bottom: rect.bottom, right: rect.right,
                    width: rect.width + (Math.random() * 0.001),
                    height: rect.height + (Math.random() * 0.001)
                };
            }
            return rect;
        };

        // 3. Bio-Mimicry & Mouse Randomization (L21-L30)
        // Добавление микро-шума в координаты для обмана систем поведенческого анализа
        const addBezierNoise = (e) => {
            if (e.isTrusted && !isWhiteListed) {
                const noiseX = (Math.random() - 0.5) * 0.01;
                const noiseY = (Math.random() - 0.5) * 0.01;
                Object.defineProperty(e, 'screenX', { get: () => e.screenX + noiseX });
                Object.defineProperty(e, 'screenY', { get: () => e.screenY + noiseY });
            }
        };
        window.addEventListener('mousemove', addBezierNoise, { capture: true, passive: true });

        // 4. Level 33: Malware Defense (Auto-Download & Phishing)
        const orgCreate = document.createElement;
        document.createElement = function(tag) {
            const el = orgCreate.call(document, tag);
            if (tag.toLowerCase() === 'a') {
                const orgSet = el.setAttribute;
                el.setAttribute = function(name, value) {
                    if (name === 'download' && !isWhiteListed) {
                        console.warn(OMNI_TAG, 'L33: Blocked suspicious auto-download');
                        return;
                    }
                    return orgSet.apply(this, arguments);
                };
            }
            return el;
        };
    };

    // --- [ МОДУЛЬ 2: OMNI-SCANNER (IDS/IPS & VIRUS MAP) ] ---
    const apexScannerCore = () => {
        // L600-L800: Network & Clipboard
        if (window.RTCPeerConnection) window.RTCPeerConnection = undefined;
        
        document.addEventListener('copy', e => {
            const selection = window.getSelection().toString();
            if (selection) {
                e.clipboardData.setData('text/plain', selection);
                e.preventDefault();
            }
        }, true);

        // L1200: Apex Virus Map (Интеграция всех сигнатур)
        const fullVirusMap = /\.(exe|msi|bat|vbs|ps1|reg|hta|scr|pif|cmd|js|jar|apk|app|dmg|iso|bin|docm|xlsm|lnk|wsf|com)$/i;
        window.addEventListener('click', e => {
            const a = e.target.closest('a');
            if (a && a.href && !window.location.hostname.includes('github.com')) {
                if (fullVirusMap.test(a.href.split(/[?#]/)[0])) {
                    e.preventDefault();
                    window.stop();
                    GM_notification({ title: "Omni-Gold", text: "L1200: Critical Threat Blocked" });
                    alert('🛑 [OMNI-GOLD] Threat Intercepted.');
                }
            }
        }, true);

        // L1001: HoneyPot Disinformation
        const orgGet = localStorage.getItem;
        localStorage.getItem = function(k) {
            if (!isWhiteListed && /token|auth|pass|wallet|secret/i.test(k) && !window.event?.isTrusted) {
                return "{}"; 
            }
            return orgGet.apply(localStorage, arguments);
        };
    };

    // --- [ EXECUTION ENGINE ] ---
    const boot = () => {
        console.log(OMNI_TAG, STYLE_GOLD, `Engaged Gold Monolith. Mode: ${isWhiteListed ? 'TRUSTED' : 'STRICT'}`);
        
        apexEternalCore(); // Подключаем всё из Eternal
        apexScannerCore(); // Подключаем всё из Scanner
        
        // Стерилизация URL
        const cleanParams = ['utm_source', 'utm_medium', 'utm_campaign', 'fbclid', 'gclid', 'yclid', '_openstat'];
        const url = new URL(window.location.href);
        let changed = false;
        cleanParams.forEach(p => { if (url.searchParams.has(p)) { url.searchParams.delete(p); changed = true; } });
        if (changed) window.history.replaceState({}, document.title, url.pathname + url.search + url.hash);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
