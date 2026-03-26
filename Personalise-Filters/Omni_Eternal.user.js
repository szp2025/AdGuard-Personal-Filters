// ==UserScript==
// @name         The Omni-Protocol: Eternal Agent (APEX ULTRA)
// @version      10.0.5
// @description  Apex Logic Layer v2026.V10. Deep Spoofing, Font-Masking, WebRTC Block & Neural Noise.
// @author       szp2025 & Gemini AI
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @namespace    https://github.com/szp2025/AdGuard-Personal-Filters
// @updateURL    https://cdn.jsdelivr.net/gh/szp2025/AdGuard-Personal-Filters@main/Personalise-Filters/Omni_Eternal.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/szp2025/AdGuard-Personal-Filters@main/Personalise-Filters/Omni_Eternal.user.js
// ==UserScript==

(function() {
    'use strict';

    // === КОНФИГ ПЕРВОГО КЛАССА ===
    const s = {
        hc: 8, // Cores
        dm: 8, // Memory (GB)
        pl: "Win32",
        vendor: "Intel Inc.",
        renderer: "Intel(R) UHD Graphics",
        ln: ["ru-RU", "ru", "en-US", "en", "fr-FR", "fr"]
    };

    // === МОДУЛЬ 1: ГЛУБОКАЯ МИМИКРИЯ (NAVIGATOR SPOOF) ===
    // Используем Prototype Spoofing — это труднее обнаружить
    const applyDeepSpoof = () => {
        const p = navigator.__proto__;
        const d = (prop, val) => {
            try {
                Object.defineProperty(p, prop, { get: () => val, configurable: true });
            } catch (e) {}
        };

        d('hardwareConcurrency', s.hc);
        d('deviceMemory', s.dm);
        d('platform', s.pl);
        d('languages', s.ln);
        d('webdriver', false);
        d('doNotTrack', "1");
    };
    applyDeepSpoof();

    // === МОДУЛЬ 2: FONT-MASKING (Защита от слежки через шрифты) ===
    const fontMask = () => {
        const offsetWidth = HTMLElement.prototype.__lookupGetter__('offsetWidth');
        const offsetHeight = HTMLElement.prototype.__lookupGetter__('offsetHeight');
        if (offsetWidth && offsetHeight) {
            Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
                get: function() {
                    const val = offsetWidth.apply(this);
                    return val > 0 ? val + (Math.random() > 0.5 ? 1 : 0) : val;
                }
            });
            Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
                get: function() {
                    const val = offsetHeight.apply(this);
                    return val > 0 ? val + (Math.random() > 0.5 ? 1 : 0) : val;
                }
            });
        }
    };
    fontMask();

    // === МОДУЛЬ 3: WEBRTC LEAK PROTECTION (Блокировка локального IP) ===
    if (window.RTCPeerConnection) {
        window.RTCPeerConnection = function() {
            return {
                createOffer: () => Promise.reject("WebRTC Blocked"),
                setLocalDescription: () => {},
                close: () => {}
            };
        };
    }

    // === МОДУЛЬ 4: CANVAS & WEBGL NEURAL NOISE (Искажение отпечатка) ===
    const injectNeuralNoise = () => {
        const orgGetImageData = CanvasRenderingContext2D.prototype.getImageData;
        CanvasRenderingContext2D.prototype.getImageData = function() {
            const imageData = orgGetImageData.apply(this, arguments);
            imageData.data[Math.floor(Math.random() * 10)] ^= 1;
            return imageData;
        };

        const orgGetParameter = WebGLRenderingContext.prototype.getParameter;
        WebGLRenderingContext.prototype.getParameter = function(p) {
            if (p === 37445) return s.vendor;
            if (p === 37446) return s.renderer;
            return orgGetParameter.apply(this, arguments);
        };
    };
    injectNeuralNoise();

    // === МОДУЛЬ 5: CLOAKING ENGINE (ANTI-ANTI-ADBLOCK & COOKIES) ===
    const apexCloaking = () => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        const style = window.getComputedStyle(node);
                        if (style.position === 'fixed' && (parseInt(style.zIndex) > 99)) {
                            const content = node.innerText || "";
                            if (/adblock|блокировщик|disable ad|advertising|cookies|accept all/i.test(content)) {
                                node.remove();
                                document.body.style.setProperty('overflow', 'auto', 'important');
                                document.documentElement.style.setProperty('overflow', 'auto', 'important');
                            }
                        }
                    }
                });
            });
        });
        observer.observe(document.documentElement, { childList: true, subtree: true });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apexCloaking);
    } else {
        apexCloaking();
    }

    console.log("%c[Omni-Protocol Eternal v10.0.5 APEX ULTRA Active]", "color: #00ffff; font-weight: bold; text-shadow: 0 0 10px #00ffff;");
})();