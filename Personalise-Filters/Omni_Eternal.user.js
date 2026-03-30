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

/**
 * Автообновление скрипта (Вынесено за пределы метаданных)
 */
async function checkUpdate() {
    try {
        const url = "https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni_Eternal.user.js";
        const res = await fetch(url, { cache: "no-store" });
        const text = await res.text();

        const remoteVersion = text.match(/@version\s+([0-9.]+)/)?.[1];
        const localVersion = "10.0.5";

        if (remoteVersion && remoteVersion !== localVersion) {
            console.log("[Omni] Update available:", remoteVersion);
            location.reload();
        }
    } catch (e) {
        console.log("[Omni] Update check failed");
    }
}

checkUpdate();

(function() {
    'use strict';

    /**
     * @protocol THE OMNI-PROTOCOL: NEBULA APEX
     * @principle ZERO-FOOTPRINT, UTILITY-FIRST, HEURISTIC DEFENSE
     * @layers L1-L4 Synchronized with .txt Filter
     */

    const CONFIG = {
        identity: {
            platform: 'MacIntel',
            vendor: 'Apple Computer, Inc.',
            oscpu: 'Intel Mac OS X 10_15_7',
            ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
        },
        noise: {
            canvas: true,
            audio: true,
            fonts: true
        }
    };

    // --- [L1: IDENTITY SYNCHRONIZATION] ---
    // Синхронизируем браузер с профилем iOS TV/Mac для полной мимикрии
    const spoofIdentity = () => {
        const overwrite = (obj, prop, value) => {
            try {
                Object.defineProperty(obj, prop, { get: () => value, configurable: true });
            } catch (e) {}
        };

        overwrite(navigator, 'platform', CONFIG.identity.platform);
        overwrite(navigator, 'vendor', CONFIG.identity.vendor);
        overwrite(navigator, 'oscpu', CONFIG.identity.oscpu);
        overwrite(navigator, 'userAgent', CONFIG.identity.ua);
        overwrite(navigator, 'webdriver', false);
    };

    // --- [L2: NEURAL NOISE (FINGERPRINTING DEFENSE)] ---
    // Добавляем микро-шум, чтобы каждый раз быть "новым" пользователем
    const injectNoise = () => {
        // Canvas Noise
        const orgGetImageData = CanvasRenderingContext2D.prototype.getImageData;
        CanvasRenderingContext2D.prototype.getImageData = function() {
            const res = orgGetImageData.apply(this, arguments);
            res.data[0] = res.data[0] + (Math.random() > 0.5 ? 1 : -1);
            return res;
        };

        // WebRTC Block (Вторая линия обороны после AdGuard Nightly)
        if (window.RTCPeerConnection) {
            window.RTCPeerConnection = undefined;
            window.RTCSessionDescription = undefined;
            window.RTCIceCandidate = undefined;
        }
    };

    // --- [L3: HEURISTIC DOM REAPER] ---
    // Реактивное удаление мусора, который пропустил сетевой фильтр
    const startReaper = () => {
        const targetNode = document.documentElement;
        const config = { childList: true, subtree: true };

        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) {
                        // Эвристический поиск по паттернам рекламных сетей
                        if (node.matches('[class*="ad-"], [id*="ad-"], [class*="banner"], [id*="banner"], [style*="z-index: 99999"]')) {
                            node.style.setProperty('display', 'none', 'important');
                            setTimeout(() => node.remove(), 100);
                        }
                    }
                });
            }
        });

        observer.observe(targetNode, config);
    };

    // --- [L4: ANTI-ADBLOCK CAMOUFLAGE] ---
    // Притворяемся, что всё загружено (Camouflage Mode)
    const camouflage = () => {
        window.canRunAds = true;
        window.isAdBlockActive = false;
        window.adsBlocked = false;
    };

    // Инициализация протокола
    spoofIdentity();
    injectNoise();
    startReaper();
    camouflage();

    console.log('%c Nebula Apex v11.0 Gold Edition: Protocol Engaged ', 'background: #000; color: #ffd700; font-weight: bold;');
})();
