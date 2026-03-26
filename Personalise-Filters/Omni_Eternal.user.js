// ==UserScript==
// @name         Omni-Protocol: Eternal Agent (APEX MAX)
// @version      10.0.1
// @description  Maximalist Cyber-Shield: Neural Noise, Audio-SDR, Font-Masking & Battery-Ghost.
// @author       szp2025 & Gemini AI
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @namespace    https://github.com/szp2025
// @updateURL    https://cdn.jsdelivr.net/gh/szp2025/AdGuard-Personal-Filters@main/Personalise-Filters/Omni_Eternal.user.js
// @downloadURL  https://cdn.JSdelivr.net/gh/szp2025/AdGuard-Personal-Filters@main/Personalise-Filters/Omni_Eternal.user.js
// ==/UserScript==

(function() {
    'use strict';

    // 1. КОНФИГ ПЕРВОГО КЛАССА
    const apexConfig = {
        hc: 8,
        dm: 8,
        pl: "Win32",
        vendor: "Intel Inc.",
        renderer: "Intel(R) UHD Graphics",
        ln: ["ru-RU", "ru", "en-US", "en", "fr-FR", "fr"]
    };

    // 2. ГЛУБОКАЯ МИМИКРИЯ (NAVIGATOR & HARDWARE)
    const spoof = (obj) => {
        const props = {
            hardwareConcurrency: apexConfig.hc,
            deviceMemory: apexConfig.dm,
            platform: apexConfig.pl,
            languages: apexConfig.ln,
            webdriver: false,
            doNotTrack: "1"
        };
        for (let key in props) {
            try {
                Object.defineProperty(obj, key, { get: () => props[key], configurable: true });
            } catch (e) {}
        }
    };
    spoof(navigator);

    // 3. FONT-MASKING (НОВОЕ: Защита от слежки через список шрифтов)
    const fontShield = () => {
        const orgOffsetWidth = HTMLElement.prototype.__lookupGetter__('offsetWidth');
        const orgOffsetHeight = HTMLElement.prototype.__lookupGetter__('offsetHeight');
        if (orgOffsetWidth && orgOffsetHeight) {
            Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
                get: function() {
                    const val = orgOffsetWidth.apply(this);
                    return val > 0 ? val + (Math.random() > 0.5 ? 1 : 0) : val;
                }
            });
        }
    };
    fontShield();

    // 4. WEBRTC LEAK PROTECTION (НОВОЕ: Блокировка утечки локального IP)
    if (window.RTCPeerConnection) {
        window.RTCPeerConnection = function() {
            return {
                createOffer: () => Promise.reject("WebRTC Blocked by Omni-Protocol"),
                setLocalDescription: () => {},
                close: () => {}
            };
        };
    }

    // 5. AUDIO-FINGERPRINT SHIELD
    const audioShield = () => {
        const orgGetByteFrequencyData = window.AudioAnalyserNode && AudioAnalyserNode.prototype.getByteFrequencyData;
        if (orgGetByteFrequencyData) {
            AudioAnalyserNode.prototype.getByteFrequencyData = function(array) {
                orgGetByteFrequencyData.apply(this, arguments);
                for (let i = 0; i < array.length; i += 16) { array[i] ^= 1; }
            };
        }
    };
    audioShield();

    // 6. BATTERY-GHOST (Скрытие уровня заряда)
    if (navigator.getBattery) {
        navigator.getBattery = () => Promise.resolve({
            charging: true, level: 0.99, chargingTime: 0, dischargingTime: Infinity, addEventListener: () => {}
        });
    }

    // 7. CANVAS & WEBGL NEURAL NOISE
    const injectNoise = () => {
        const orgG = CanvasRenderingContext2D.prototype.getImageData;
        CanvasRenderingContext2D.prototype.getImageData = function() {
            const d = orgG.apply(this, arguments);
            d.data[Math.floor(Math.random() * 10)] ^= 1;
            return d;
        };

        const orgP = WebGLRenderingContext.prototype.getParameter;
        WebGLRenderingContext.prototype.getParameter = function(p) {
            if (p === 37445) return apexConfig.vendor;
            if (p === 37446) return apexConfig.renderer;
            return orgP.apply(this, arguments);
        };
    };
    injectNoise();

    // 8. ANTI-ANTI-ADBLOCK & COOKIE-KILLER
    const killPopups = () => {
        const obs = new MutationObserver((mutations) => {
            for (let m of mutations) {
                for (let n of m.addedNodes) {
                    if (n.nodeType === 1) {
                        const t = n.innerText || "";
                        if (/adblock|блокировщик|disable ad|advertising|cookies|accept all/i.test(t) && 
                           (window.getComputedStyle(n).position === 'fixed' || window.getComputedStyle(n).zIndex > 100)) {
                            n.remove();
                            document.body.style.setProperty('overflow', 'auto', 'important');
                            document.documentElement.style.setProperty('overflow', 'auto', 'important');
                        }
                    }
                }
            }
        });
        obs.observe(document.documentElement, { childList: true, subtree: true });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', killPopups);
    } else {
        killPopups();
    }

    console.log("%c[APEX MAX ARMED: AUTO-UPDATE ACTIVE]", "color: #00ffff; font-weight: bold; text-shadow: 0 0 10px #00ffff;");
})();
