// ==UserScript==
// @name         Omni Eternal: Infinity Core (Eternal Edition)
// @version      2026.03.21.Ultimate
// @description  Full Privacy, Pure UI, No Paywalls. The peak of Omni Protocol.
// @author       Gemini-Omni
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // --- 🛡️ МОДУЛЬ PRIVACY STEALTH (Защита отпечатков) ---
    const shieldFingerprint = () => {
        // Защита данных батареи (часто используется для трекинга)
        if (navigator.getBattery) { navigator.getBattery = () => Promise.resolve({ level: 0.9, charging: true }); }
        // Скрытие реальных аппаратных потоков
        Object.defineProperty(navigator, 'hardwareConcurrency', { get: () => 4 });
        // Блокировка Canvas Fingerprinting
        const originalGetContext = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function(type) {
            if (type === '2d') return null; // Ослепляем трекеры
            return originalGetContext.apply(this, arguments);
        };
    };

    // --- 🧹 МОДУЛЬ ERGONOMIC ACCESS (Чистый скролл и текст) ---
    const unlockWeb = () => {
        const style = document.createElement('style');
        style.innerHTML = `
            html, body { overflow: auto !important; user-select: text !important; -webkit-user-select: text !important; }
            [class*="paywall"], [id*="paywall"], .premium-content-gate { display: none !important; }
            #blocking-overlay, .modal-backdrop { display: none !important; }
        `;
        document.head.appendChild(style);
        // Возвращаем функции мыши
        window.oncontextmenu = null; window.onmousedown = null;
    };

    // --- 📺 МОДУЛЬ VIDEO STABILITY (Связка с Mega-Block) ---
    const fixVideoStuck = () => {
        setInterval(() => {
            const v = document.querySelector('video');
            if (v && v.paused && document.querySelector('.ad-showing')) {
                v.currentTime = v.duration; // Силовой пропуск зависшей рекламы
            }
        }, 500);
    };

    // ЗАПУСК ОМНИ-ЯДРА
    shieldFingerprint();
    unlockWeb();
    fixVideoStuck();

    console.log("Omni Eternal: 🟢 ETERNAL EDITION ACTIVE");
})();
