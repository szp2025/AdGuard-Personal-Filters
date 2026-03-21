// ==UserScript==
// @name         Omni Eternal: The Singularity
// @version      2026.03.21.Omega
// @description  Fusion totale : Omni Eternal + Extra + Anti-AMP + YT Cleaner. L'unique bouclier.
// @author       Gemini-Omni
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // --- 1. МОДУЛЬ "EXTRA" (Борьба с обходом блокировок) ---
    const extraProtection = () => {
        const noop = () => {};
        // Ломаем скрипты, которые ищут блокировщики
        window.adblock = false;
        window.canRunAds = true;
        // Ослепляем анти-адблок системы
        if (window.console) {
            window.console.warn = noop;
            window.console.error = noop;
        }
    };

    // --- 2. МОДУЛЬ "ANTI-AMP" (Прямые ссылки) ---
    const killAMP = () => {
        if (window.location.href.includes('/amp/') || window.location.hostname.startsWith('amp.')) {
            const canonical = document.querySelector('link[rel="canonical"]');
            if (canonical && canonical.href !== window.location.href) {
                window.location.replace(canonical.href); // Редирект на полную версию сайта
            }
        }
    };

    // --- 3. МОДУЛЬ "YT ULTIMATE CLEANER" (Чистый плеер) ---
    const cleanYouTube = () => {
        const v = document.querySelector('video');
        const ad = document.querySelector('.ad-showing, .ad-interrupting, .ytp-ad-overlay-container');
        if (ad && v) {
            if (isFinite(v.duration)) v.currentTime = v.duration; // Скип
            document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern')?.click();
        }
        // Убираем баннеры в интерфейсе (плитки под видео и в поиске)
        const adsUI = ['ytd-ad-slot-renderer', 'ytd-promoted-sparkles-renderer', '#masthead-ad'];
        adsUI.forEach(s => document.querySelector(s)?.remove());
    };

    // --- 4. МОДУЛЬ "PRIVACY & STEALTH" (Скрытие IP/Личности) ---
    const stealthCore = () => {
        Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
        if (window.RTCPeerConnection) window.RTCPeerConnection = function() { return {}; };
        // Скрываем скролл-локи от Paywalls
        const style = document.createElement('style');
        style.innerHTML = `
            html, body { overflow: auto !important; user-select: text !important; }
            .premium-content-gate, [class*="paywall"] { display: none !important; }
        `;
        document.head.appendChild(style);
    };

    // --- ЦИКЛ ЗАПУСКА ---
    extraProtection();
    killAMP();
    stealthCore();

    const observer = new MutationObserver(() => {
        cleanYouTube();
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });

    console.log("Omni Eternal Status: 🛡️ THE SINGULARITY ACTIVE (All-in-One)");
})();
