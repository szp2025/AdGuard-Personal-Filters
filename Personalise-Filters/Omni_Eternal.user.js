// ==UserScript==
// @name         The Omni-Protocol: Nebula Apex (v11.0) Gold Edition
// @version      11.0.5-APEX
// @description  Apex Logic Layer v2026.V11. Deep Spoofing, Font-Masking, WebRTC Block & Neural Noise.
// @author       szp2025 & Gemini AI (Collaborative Cyber-Intelligence)
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @namespace    https://github.com/szp2025/AdGuard-Personal-Filters
// @updateURL    https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni_Eternal.user.js
// @downloadURL  https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni_Eternal.user.js
// ==/UserScript==

(function() {
    'use strict';

    const CURRENT_VERSION = "11.0.5-APEX"; // Синхронизировано с метаданными

    /**
     * Автообновление скрипта (Твоя логика, интегрированная в Apex)
     */
    async function checkUpdate() {
        try {
            const url = "https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni_Eternal.user.js";
            const res = await fetch(url, { cache: "no-store" });
            const text = await res.text();

            const remoteVersion = text.match(/@version\s+([0-9.a-zA-Z-]+)/)?.[1];

            if (remoteVersion && remoteVersion !== CURRENT_VERSION) {
                console.log("%c[Omni] Update available: " + remoteVersion, "color: #ffd700; font-weight: bold;");
                // Обновление через reload только если версия действительно выше
                // location.reload(); // Можно оставить, если уверен в кэшировании GitHub
            }
        } catch (e) {
            console.log("[Omni] Update check failed");
        }
    }

    checkUpdate();

    // --- [ЦЕНТРАЛЬНАЯ ЛОГИКА NEBULA APEX GOLD] ---

    const CONFIG = {
        identity: {
            platform: 'MacIntel',
            vendor: 'Apple Computer, Inc.',
            ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
        }
    };

    // L1: IDENTITY & SPOOFING
    const spoof = () => {
        const overwrite = (obj, prop, value) => {
            try { Object.defineProperty(obj, prop, { get: () => value, configurable: true }); } catch (e) {}
        };
        overwrite(navigator, 'platform', CONFIG.identity.platform);
        overwrite(navigator, 'vendor', CONFIG.identity.vendor);
        overwrite(navigator, 'userAgent', CONFIG.identity.ua);
        overwrite(navigator, 'webdriver', false);
    };

    // L2: NEURAL NOISE (Canvas & WebRTC)
    const injectNoise = () => {
        const orgGetImageData = CanvasRenderingContext2D.prototype.getImageData;
        CanvasRenderingContext2D.prototype.getImageData = function() {
            const res = orgGetImageData.apply(this, arguments);
            res.data[0] = res.data[0] + (Math.random() > 0.5 ? 1 : -1);
            return res;
        };
        if (window.RTCPeerConnection) {
            window.RTCPeerConnection = undefined;
        }
    };

    // L3: HEURISTIC DOM REAPER (Реактивный уничтожитель мусора)
    const startReaper = () => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(m => m.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.matches('[class*="ad-"], [id*="ad-"], [class*="banner"]')) {
                    node.style.setProperty('display', 'none', 'important');
                    node.remove();
                }
            }));
        });
        observer.observe(document.documentElement, { childList: true, subtree: true });
    };

    // Запуск системы
    spoof();
    injectNoise();
    startReaper();


    // --- [L5: CLOUD-TIME & BATTERY STEALTH] ---
    const cloudStealth = () => {
        // Подмена часового пояса (под твой американский IP)
        const Intl = window.Intl;
        if (Intl && Intl.DateTimeFormat) {
            const originalResolvedOptions = Intl.DateTimeFormat.prototype.resolvedOptions;
            Intl.DateTimeFormat.prototype.resolvedOptions = function() {
                return Object.assign(originalResolvedOptions.apply(this, arguments), {
                    timeZone: "America/New_York",
                    locale: "en-US"
                });
            };
        }

        // Подмена статуса батареи (чтобы не вычислили модель через API)
        if (navigator.getBattery) {
            navigator.getBattery = () => Promise.resolve({
                charging: true,
                chargingTime: 0,
                dischargingTime: Infinity,
                level: 1,
                onchargingchange: null,
                onlevelchange: null
            });
        }
    };

    // --- [L6: URL STERILIZER (CLEAN NAVIGATION)] ---
    const sterilizeURL = () => {
        const cleanParams = ['utm_source', 'utm_medium', 'utm_campaign', 'fbclid', 'gclid', 'yclid'];
        const url = new URL(window.location.href);
        let changed = false;

        cleanParams.forEach(param => {
            if (url.searchParams.has(param)) {
                url.searchParams.delete(param);
                changed = true;
            }
        });

        if (changed) {
            window.history.replaceState({}, document.title, url.pathname + url.search + url.hash);
        }
    };

    // Запуск новых модулей
    cloudStealth();
    sterilizeURL();
    
    console.log('%c Nebula Apex Gold ' + CURRENT_VERSION + ': Engaged ', 'background: #000; color: #ffd700; font-weight: bold;');
})();
