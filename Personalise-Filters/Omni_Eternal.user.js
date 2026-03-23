// ==UserScript==
// @name         The Omni-Protocol: Eternal Agent
// @version      7.5.0
// @description  Advanced Logic Layer for Omni-Protocol v2026.V15. Интеллектуальный стелс, анти-фингерпринтинг и обход детекторов блокировки.
// @author       Architect & Gemini 3 Flash
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @run-at       document-start
// @namespace    https://github.com/szp2025/AdGuard-Personal-Filters
// @updateURL    https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni_Eternal.user.js
// @downloadURL  https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni_Eternal.user.js
// ==UserScript==

(function() {
    'use strict';

    /**
     * МОДУЛЬ 1: ЦИФРОВАЯ МИМИКРИЯ (IDENTITY SPOOFING)
     * Устанавливает стандарт "Win32 / 8 Cores / 8GB" для всех сайтов.
     */
    const stealthConfig = {
        hardwareConcurrency: 8,
        deviceMemory: 8,
        platform: "Win32",
        languages: ["ru-RU", "ru", "en-US", "en"],
        doNotTrack: "1"
    };

    const applyStealth = (target) => {
        Object.keys(stealthConfig).forEach(key => {
            try {
                Object.defineProperty(target, key, {
                    get: () => stealthConfig[key],
                    configurable: true
                });
            } catch (e) { /* Игнорируем защищенные свойства */ }
        });
    };

    applyStealth(navigator);

    /**
     * МОДУЛЬ 2: КВАНТОВЫЙ ШУМ (ANTI-FINGERPRINTING)
     * Добавляет микро-искажения в Canvas и WebGL, чтобы ваш отпечаток менялся.
     */
    const injectNoise = () => {
        const originalGetImageData = CanvasRenderingContext2D.prototype.getImageData;
        CanvasRenderingContext2D.prototype.getImageData = function(x, y, w, h) {
            const imageData = originalGetImageData.apply(this, arguments);
            // Добавляем минимальный шум в первый пиксель (невидимо для глаза, критично для хеша)
            imageData.data[0] = imageData.data[0] + (Math.random() > 0.5 ? 1 : -1);
            return imageData;
        };

        // Защита WebGL от сбора параметров видеокарты
        const orgGetParameter = WebGLRenderingContext.prototype.getParameter;
        WebGLRenderingContext.prototype.getParameter = function(parameter) {
            // Маскируем вендора и рендерер под стандартные
            if (parameter === 37445) return 'Intel Inc.'; // UNMASKED_VENDOR_WEBGL
            if (parameter === 37446) return 'Intel(R) UHD Graphics'; // UNMASKED_RENDERER_WEBGL
            return orgGetParameter.apply(this, arguments);
        };
    };
    injectNoise();

    /**
     * МОДУЛЬ 3: АННИГИЛЯЦИЯ ТРЕКЕРОВ В ПАМЯТИ (MEMORY PURGE)
     * Подменяет объекты аналитики "пустышками", чтобы скрипты сайтов не выдавали ошибок.
     */
    const killTrackers = () => {
        const noop = () => {};
        window.ga = noop;
        window.gtag = noop;
        window.fbq = noop;
        window._gaq = { push: noop };
        window.google_ad_client = true; // Обман Anti-Adblock
        
        // Защита от отслеживания через буфер обмена
        document.addEventListener('copy', (e) => {
            e.stopImmediatePropagation();
        }, true);
    };
    killTrackers();

    /**
     * МОДУЛЬ 4: ANTI-ANTI-ADBLOCK (CLOAKING)
     * Автоматически скрывает баннеры "Отключите блокировщик" и предотвращает блокировку прокрутки.
     */
    const antiAntiAdblock = () => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        const text = node.innerText || "";
                        if (text.includes("AdBlock") || text.includes("блокировщик") || text.includes("disable ad")) {
                            node.style.display = 'none';
                            document.body.style.overflow = 'auto'; // Возвращаем скролл
                        }
                    }
                });
            });
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    };
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', antiAntiAdblock);
    } else {
        antiAntiAdblock();
    }

    console.log("%c[Omni-Protocol Agent v7.5.0 Active]", "color: #00ff00; font-weight: bold;");
})();
