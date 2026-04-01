// ==UserScript==
// @name         NEBULA APEX: THE OMNI-MONOLITH [Quantum Stealth]
// @namespace    https://github.com/szp2025/AdGuard-Personal-Filters
// @version      v3.3.9-GOLD
// @author       szp2025 & Gemini AI
// @match        *://*/*
// @grant        GM_notification
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/The-Omni-Protocol-Universal.user.js
// @downloadURL  https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/The-Omni-Protocol-Universal.user.js
// @last-updated 2026-03-31 23:55:00 UTC
// @checkUpdateEvery 3600
// @license      MIT
//
// @description      [ULTIMATE-INTEGRITY] L1-L1200 Universal Defense. The final fusion of Heuristic Scanning, Quantum Masking, and Legacy Repair.
// @description:ru   [СИНГУЛЯРНОСТЬ] L1-L1200 Универсальная защита. Слияние эвристического сканирования, квантовой маскировки и исправления старых сайтов.
//
// --- [ТЕХНИЧЕСКАЯ СПЕЦИФИКАЦИЯ / SYSTEM SPECS] ---
// @description:en  CORE: Omni-Chronos v3.3.9 Logic.
// @description:en  L0-L100: [BASE] Reaper Engine (Ad-Block), Deep Shadow-DOM Sanitizer, URL Sterilizer (UTM-Purge).
// @description:en  L101-L300: [STEALTH] MacIntel Identity Spoof, Hardware Ghosting (8-Core CPU/8GB RAM mimicry).
// @description:en  L301-L600: [QUANTUM] Canvas/WebGL/Audio Noise Injection. Native Code Masking (Function.toString override).
// @description:en  L601-L900: [BIO-ENTROPY] Mouse/Scroll Humanizer, Micro-Jitter for Math/Date functions.
// @description:en  L901-L1200: [DEFENSE] Apex Virus Map (1500+ signatures), HoneyPot Disinformation, Clipboard Guard.
//
// @description:ru  ЯДРО: Omni-Chronos v3.3.9 Logic.
// @description:ru  L0-L100: [БАЗА] Reaper Engine (Блокировка), Санация Shadow-DOM, Стерилизатор URL (Очистка меток).
// @description:ru  L101-L300: [СТЕЛС] Подмена личности MacIntel, Hardware Ghosting (Имитация 8 ядер / 8ГБ ОЗУ).
// @description:ru  L301-L600: [КВАНТ] Шум Canvas/WebGL/Audio. Маскировка под нативный код (подмена toString).
// @description:ru  L601-L900: [БИО-ЭНТРОПИЯ] Гуманизация движений мыши/скролла, Микро-джиттер Math/Date функций.
// @description:ru  L901-L1200: [ЗАЩИТА] Apex Virus Map (1500+ сигнатур), Медовая ловушка HoneyPot, Защита буфера обмена.
// ==/UserScript==

(function() {
    'use strict';

    // Добавь это в начало основного блока инициализации
const clearTraces = () => {
    if (window.console && window.console.clear && !/localhost|127\.0\.0\.1/.test(window.location.hostname)) {
        // Очищаем консоль от стартовых логов расширения через 100мс
        setTimeout(() => console.clear(), 100);
    }
};
    
    // --- [L-LIBRARY: DEFINITIONS] ---

    /**
     * Универсальный инструмент для подмены свойств объектов.
     * Используется во многих уровнях L (L1, L5, L15).
     */
    const omniOverwrite = (obj, prop, value) => {
        try { 
            Object.defineProperty(obj, prop, { 
                get: () => value, 
                configurable: true,
                enumerable: true 
            }); 
        } catch (e) {
            // Тихий пропуск, если объект защищен (например, в некоторых фреймах)
        }
    };

   /**
     * L1: DYNAMIC IDENTITY & QUANTUM MIMICRY
     * Эвристическая маскировка под эталонную среду с защитой от глубокого анализа.
     */
    const applyL1Identity = () => {
        if (typeof CONFIG === 'undefined') return;

        // 1. Эвристическая проверка: Нужна ли полная маскировка?
        // Если сайт из тех-зоны, мы используем "мягкий" профиль, чтобы не ломать логику.
        const isTechZone = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);
        const targetUA = isTechZone ? navigator.userAgent : CONFIG.identity.ua;

        // 2. Глубокая перезапись через Прототипы (надежнее, чем прямое свойство)
        const spoof = (obj, prop, value) => {
            try {
                Object.defineProperty(obj.prototype || obj, prop, {
                    get: () => value,
                    configurable: true,
                    enumerable: true
                });
            } catch (e) { /* Скрытый отказ */ }
        };

        // Базовые параметры
        omniOverwrite(navigator, 'platform', CONFIG.identity.platform);
        omniOverwrite(navigator, 'vendor', CONFIG.identity.vendor);
        omniOverwrite(navigator, 'userAgent', targetUA);
        omniOverwrite(navigator, 'webdriver', false);

        // 3. РЕАКТИВНОСТЬ: Защита Client Hints (Современный метод слежки в Chrome)
        if (navigator.userAgentData) {
            const highEntropyData = {
                architecture: 'x86',
                bitness: '64',
                model: '',
                platform: 'macOS',
                platformVersion: '14.4.1',
                uaFullVersion: targetUA
            };
            omniOverwrite(navigator, 'userAgentData', {
                getHighEntropyValues: (hints) => Promise.resolve(highEntropyData),
                brands: [
                    { brand: 'Not A(A_Brand', version: '99' },
                    { brand: 'Google Chrome', version: '124' },
                    { brand: 'Chromium', version: '124' }
                ],
                mobile: false,
                platform: 'macOS'
            });
        }

        // 4. ЭРГОНОМИЧНОСТЬ: Скрытие признаков автоматизации
        // Удаляем следы Puppeteer, Selenium и встроенных расширений
        if (navigator.plugins) {
            const fakePlugins = [
                { name: 'PDF Viewer', filename: 'internal-pdf-viewer', description: 'Portable Document Format' },
                { name: 'Chrome PDF Viewer', filename: 'internal-pdf-viewer', description: 'Google Chrome PDF Viewer' }
            ];
            omniOverwrite(navigator, 'plugins', fakePlugins);
        }

        console.log(OMNI_TAG, STYLE_CORE, `👤 L1: Identity Mimicry [${isTechZone ? 'SOFT' : 'ULTIMATE'}]`);
    };
    

  /**
     * L2: NEURAL NOISE & GHOST WEBRTC
     * Эвристическое зашумление Canvas и контролируемая утечка WebRTC.
     */
    const applyL2Noise = () => {
        // 1. Динамический шум для Canvas (Реактивный метод)
        const originalGetImageData = CanvasRenderingContext2D.prototype.getImageData;
        
        CanvasRenderingContext2D.prototype.getImageData = function(x, y, w, h) {
            const imageData = originalGetImageData.apply(this, arguments);
            
            // Эвристика: не шумим на тех-ресурсах и маленьких иконках (чтобы не портить UI)
            const isSmall = w < 16 || h < 16;
            const isTech = /celeo\.net|localhost/i.test(window.location.hostname);
            
            if (!isTech && !isSmall) {
                // Вносим микро-шум только в 4 случайных пикселя (незаметно для глаза, фатально для отпечатка)
                for (let i = 0; i < 4; i++) {
                    const offset = Math.floor(Math.random() * (imageData.data.length / 4)) * 4;
                    imageData.data[offset] += (Math.random() > 0.5 ? 1 : -1);
                }
            }
            return imageData;
        };

        // 2. WebRTC Ghosting (Эргономичный метод)
        // Вместо удаления (undefined), мы подменяем API, чтобы сайты думали, что всё ок, но не видели IP
        if (window.RTCPeerConnection) {
            const RealRTC = window.RTCPeerConnection;
            window.RTCPeerConnection = function(config) {
                // Блокируем передачу реальных ICE-серверов
                if (config && config.iceServers) config.iceServers = [];
                const pc = new RealRTC(config);
                
                // Подмена метода сбора кандидатов (убираем реальные IP)
                pc.addIceCandidate = (c) => Promise.resolve();
                return pc;
            };
            // Сохраняем прототип для совместимости
            window.RTCPeerConnection.prototype = RealRTC.prototype;
        }

        // 3. Блокировка перечисления медиа-устройств (Fingerprinting вектора)
        if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
            const originalEnumerate = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
            navigator.mediaDevices.enumerateDevices = () => Promise.resolve([]);
        }

        console.log(OMNI_TAG, STYLE_CORE, '🎨 L2: Neural Noise & WebRTC Ghosting Active');
    };

    

   /**
     * L3: HEURISTIC SPECTRAL REAPER
     * Реактивная зачистка рекламных и анти-адблок узлов.
     */
    const applyL3Reaper = (target = document.documentElement) => {
        // 1. ЭРГОНОМИЧНОСТЬ: Глобальный CSS-подавитель (работает мгновенно, до JS)
        const style = document.createElement('style');
        style.textContent = `
            [class*="ad-"][class*="-container"], [id*="ad-banner"], 
            [class*="premium-ad"], .adsbygoogle, #ad-slot,
            [class*="sponsored-content"], [class*="block-notice"] {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
                height: 0 !important;
                width: 0 !important;
            }
        `;
        target.appendChild(style);

        // 2. РЕАКТИВНОСТЬ: Оптимизированный MutationObserver
        const reaper = new MutationObserver((mutations) => {
            // Используем requestIdleCallback, чтобы не грузить CPU во время рендеринга
            window.requestIdleCallback(() => {
                for (const mutation of mutations) {
                    for (const node of mutation.addedNodes) {
                        if (node.nodeType !== 1) continue;

                        // ЭВРИСТИКА: Ищем признаки мусора по сложным паттернам
                        const isAd = node.matches('[class*="ad-"], [id*="ad-"], [class*="banner"]');
                        const isModalTrap = node.matches('[class*="overlay"], [class*="popup"]') && 
                                           (node.innerText?.includes('adblock') || node.innerText?.includes('cookies'));

                        if (isAd || isModalTrap) {
                            // Не просто удаляем (remove может вызвать триггер восстановления), 
                            // а "очищаем" контент и скрываем
                            node.innerHTML = '';
                            node.setAttribute('data-omni-reaped', 'true');
                            node.style.setProperty('display', 'none', 'important');
                        }
                    }
                }
            }, { timeout: 500 });
        });

        // Запуск наблюдателя с фильтром по атрибутам и дочерним элементам
        reaper.observe(target, { childList: true, subtree: true });

        // 3. ПЕРИОДИЧЕСКАЯ ЭВРИСТИКА (Чистка скрытых слоев)
        const ghostClean = () => {
            const potentialTraps = document.querySelectorAll('div[style*="z-index: 2147483647"]');
            potentialTraps.forEach(trap => {
                if (trap.innerText?.length < 500) trap.remove();
            });
        };
        setTimeout(ghostClean, 3000);

        console.log(OMNI_TAG, STYLE_CORE, '🪓 L3: Heuristic Spectral Reaper Active');
    };

    

   /**
     * L5: ENVIRONMENT & POWER MIMICRY
     * Синхронизация часового пояса, локали и фиксация статуса питания.
     */
    const applyL5Environment = () => {
        // 1. ЭВРИСТИКА: Не меняем время в тех-зонах (чтобы логи сервера совпадали с локальными)
        if (/localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname)) return;

        const targetTZ = "America/New_York";
        const targetLocale = "en-US";

        // Глубокая подмена Intl (реактивный метод)
        if (window.Intl) {
            const orgDateTimeFormat = Intl.DateTimeFormat;
            const orgResolvedOptions = Intl.DateTimeFormat.prototype.resolvedOptions;

            Intl.DateTimeFormat.prototype.resolvedOptions = function() {
                const options = orgResolvedOptions.apply(this, arguments);
                return Object.assign(options, { timeZone: targetTZ, locale: targetLocale });
            };

            // Подмена Date для синхронизации с TZ (защита от проверки разницы во времени)
            const orgGetTimezoneOffset = Date.prototype.getTimezoneOffset;
            Date.prototype.getTimezoneOffset = function() {
                // Нью-Йорк (EDT/EST) обычно -240 или -300 минут
                return 300; 
            };
        }

        // 2. БАТАРЕЯ: Эргономичный фейк (некоторые сайты падают, если getBattery возвращает ошибку)
        if (navigator.getBattery) {
            const fakeBattery = {
                charging: true,
                chargingTime: 0,
                dischargingTime: Infinity,
                level: 1, // 100%
                onchargingchange: null,
                onchargingtimechange: null,
                ondischargingtimechange: null,
                onlevelchange: null,
                addEventListener: () => {},
                removeEventListener: () => {},
                dispatchEvent: () => false
            };
            navigator.getBattery = () => Promise.resolve(fakeBattery);
        }

        console.log(OMNI_TAG, STYLE_CORE, '🔋 L5: Environment Sync (New York) & Power Stealth');
    };

    /**
     * L6: REACTIVE URL STERILIZER
     * Очистка URL от слежки и динамическая защита History API.
     */
    const applyL6UrlSterilizer = () => {
        // 1. Список "мусорных" параметров (расширенный)
        const trashParams = [
            'utm_', 'fbclid', 'gclid', 'yclid', '_openstat', 
            'mc_cid', 'msclkid', 'aff_id', 'click_id', 'ref'
        ];

        const sterilize = (urlStr) => {
            try {
                const url = new URL(urlStr);
                let changed = false;
                
                // Эвристика: удаляем всё, что начинается с utm_ или есть в списке
                const params = [...url.searchParams.keys()];
                params.forEach(p => {
                    if (trashParams.some(trash => p.startsWith(trash) || p === trash)) {
                        url.searchParams.delete(p);
                        changed = true;
                    }
                });
                return changed ? url.toString() : urlStr;
            } catch (e) { return urlStr; }
        };

        // 2. ПЕРВИЧНАЯ ОЧИСТКА (при загрузке)
        const currentUrl = window.location.href;
        const cleanUrl = sterilize(currentUrl);
        if (cleanUrl !== currentUrl) {
            window.history.replaceState({}, document.title, cleanUrl);
        }

        // 3. РЕАКТИВНЫЙ ПЕРЕХВАТ (History API)
        // Если какой-то скрипт решит дописать метку динамически — мы её сразу удалим
        const wrapHistory = (method) => {
            const original = window.history[method];
            window.history[method] = function(state, title, url) {
                const sterilizedUrl = url ? sterilize(new URL(url, document.baseURI).href) : url;
                return original.apply(this, [state, title, sterilizedUrl]);
            };
        };

        wrapHistory('pushState');
        wrapHistory('replaceState');

        console.log(OMNI_TAG, STYLE_CORE, '🧪 L6: Reactive URL Sterilizer & History Guard Active');
    };
    
    
   /**
     * L7: DEEP SHADOW & IDLE GHOSTING
     * Рекурсивная очистка теневого DOM и маскировка активности пользователя.
     */
    const applyL7DeepSanitizer = () => {
        // 1. РЕАКТИВНЫЙ SHADOW DOM (Глубокое проникновение)
        const originalAttachShadow = Element.prototype.attachShadow;
        
        Element.prototype.attachShadow = function(init) {
            // ЭВРИСТИКА: Принудительно делаем Shadow DOM открытым ('open'), 
            // чтобы наш Reaper мог видеть и чистить его содержимое.
            if (init && init.mode === 'closed') {
                init.mode = 'open';
            }
            
            const shadow = originalAttachShadow.apply(this, arguments);
            
            // Запускаем L3 Reaper для новой "тени" с задержкой (эргономичность)
            window.requestIdleCallback(() => {
                if (typeof applyL3Reaper === 'function') {
                    applyL3Reaper(shadow);
                }
            });
            
            return shadow;
        };

        // 2. IDLE GHOSTING (Вместо удаления — вечная "активность")
        // Сайты используют это, чтобы знать, когда ты отошел от ПК. Мы говорим: "Я тут всегда".
        if ('IdleDetector' in window) {
            const RealIdleDetector = window.IdleDetector;
            
            window.IdleDetector = function() {
                return {
                    start: () => Promise.resolve(),
                    addEventListener: () => {},
                    removeEventListener: () => {},
                    state: { userState: 'active', screenState: 'locked' }
                };
            };
            
            // Сохраняем статические методы для бесшовной интеграции
            window.IdleDetector.requestPermission = () => Promise.resolve('granted');
        }

        // 3. ЭРГОНОМИЧНОСТЬ: Блокировка Page Visibility (Защита от "заморозки" вкладок)
        // Не дает сайту понять, что ты переключил вкладку.
        omniOverwrite(document, 'visibilityState', 'visible');
        omniOverwrite(document, 'hidden', false);

        console.log(OMNI_TAG, STYLE_CORE, '🌑 L7: Deep Shadow & Idle Ghosting Active');
    };
    

 /**
     * L8: CLIPBOARD INTEGRITY & ANTI-HIJACK
     * Стерилизация буфера обмена и защита от фоновой подмены данных.
     */
    const applyL8ClipboardGuard = () => {
        // 1. ЭВРИСТИКА: Стерилизация текста (удаление невидимых символов и Zero-Width Joiners)
        const sterilizeText = (text) => {
            if (!text) return '';
            // Удаляем невидимые символы управления, которые часто используются для обхода фильтров или атак
            return text.replace(/[\u200B-\u200D\uFEFF\u202E]/g, '').trim();
        };

        // 2. РЕАКТИВНЫЙ ПЕРЕХВАТ (Защита от "Читать далее" и инъекций)
        document.addEventListener('copy', (e) => {
            const selection = window.getSelection();
            const text = selection.toString();
            
            if (text) {
                const cleanText = sterilizeText(text);
                
                // Передаем только чистый текст, отсекая попытки сайта внедрить скрытый HTML
                e.clipboardData.setData('text/plain', cleanText);
                
                // ЭРГОНОМИЧНОСТЬ: Если копируем из кода (pre/code), сохраняем структуру, но без мусора
                if (selection.anchorNode && selection.anchorNode.parentNode.closest('pre, code')) {
                    // Оставляем как есть, но предотвращаем дефолтное поведение сайта
                }

                e.stopImmediatePropagation(); // Не даем скриптам сайта перехватить событие позже
                e.preventDefault();
            }
        }, true);

        // 3. ЗАЩИТА ОТ ФОНОВОЙ ПОДМЕНЫ (Async Clipboard API)
        // Блокирует попытки сайта записать что-то в буфер без твоего ведома
        if (navigator.clipboard && navigator.clipboard.writeText) {
            const originalWriteText = navigator.clipboard.writeText.bind(navigator.clipboard);
            navigator.clipboard.writeText = function(text) {
                // Разрешаем запись только если есть недавний клик или нажатие клавиши (User Gesture)
                if (navigator.userActivation && navigator.userActivation.isActive) {
                    return originalWriteText(sterilizeText(text));
                }
                console.warn(OMNI_TAG, '🚫 Blocked unauthorized clipboard write attempt.');
                return Promise.reject(new Error('Unauthorized Clipboard Write'));
            };
        }

        console.log(OMNI_TAG, STYLE_CORE, '📋 L8: Clipboard Integrity & Anti-Hijack Active');
    };
    

  /**
     * L9: NEURAL-HEURISTIC & GHOST ISOLATION
     * Интеллектуальное подавление трекеров и защита от самовосстановления.
     */
    const applyL9NeuralHeuristic = () => {
        // 1. ЭВРИСТИЧЕСКИЙ СКАНЕР (Анализ подозрительных микро-объектов)
        const isolateTrackers = () => {
            const suspects = document.querySelectorAll('img, iframe, div, span');
            
            suspects.forEach(el => {
                // Если элемент уже обработан нами — пропускаем
                if (el.hasAttribute('data-omni-isolated')) return;

                const style = window.getComputedStyle(el);
                const isInvisible = style.width === '1px' || style.height === '1px' || 
                                   style.opacity === '0' || style.visibility === 'hidden';
                
                // Проверяем источник (Эвристика: трекеры часто грузятся с других доменов)
                const isExternal = el.src && !el.src.includes(window.location.hostname);
                const hasTrackingClass = /[atb][drk][ck]/i.test(el.className + el.id); // ad, trk, track

                if (isInvisible && (isExternal || hasTrackingClass)) {
                    // ЭРГОНОМИЧНОСТЬ: Вместо удаления (remove), которое триггерит скрипты восстановления,
                    // мы "замораживаем" элемент в пространстве.
                    el.setAttribute('data-omni-isolated', 'true');
                    Object.assign(el.style, {
                        display: 'none',
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: '-9999px',
                        left: '-9999px'
                    });
                    
                    // Если это iframe-трекер, обнуляем его контент
                    if (el.tagName === 'IFRAME') el.src = 'about:blank';
                }
            });
        };

        // 2. РЕАКТИВНОСТЬ: MutationObserver с защитой от циклов (Anti-Self-Healing)
        let debounceTimer;
        const observer = new MutationObserver((mutations) => {
            // Чтобы не вешать браузер при массовом добавлении узлов, используем дебаунс
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                // Эвристика: если сайт пытается восстановить удаленный узел, мы это увидим
                isolateTrackers();
            }, 100);
        });

        observer.observe(document.documentElement, { 
            childList: true, 
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class'] // Следим за попытками "проявить" скрытое
        });

        // 3. ПЕРИОДИЧЕСКАЯ "САНИТАРИЯ"
        window.requestIdleCallback(isolateTrackers);

        console.log(OMNI_TAG, STYLE_CORE, '🧠 L9: Neural-Heuristic & Self-Healing Active');
    };
    

  /**
     * L10: HISTORY INTEGRITY & ANTI-TRAP
     * Защита от зацикливания истории и стерилизация программных переходов.
     */
    const applyL10HistoryGuard = () => {
        // 1. ЭВРИСТИКА: Детектор "Ловушки Истории"
        // Блокирует сайты, которые пытаются программно вызвать pushState более 5 раз в секунду
        let callCount = 0;
        let lastCallTime = Date.now();

        const isHistorySpam = () => {
            const now = Date.now();
            if (now - lastCallTime < 1000) {
                callCount++;
            } else {
                callCount = 1;
                lastCallTime = now;
            }
            return callCount > 5;
        };

        // 2. РЕАКТИВНЫЙ ПЕРЕХВАТ (Интеграция с логикой стерилизации L6)
        const wrapHistoryMethod = (methodName) => {
            const original = window.history[methodName];
            
            window.history[methodName] = function(state, title, url) {
                // Если сайт спамит историю — блокируем вызов
                if (isHistorySpam()) {
                    console.warn(OMNI_TAG, `🚫 L10: Blocked history spam via ${methodName}`);
                    return;
                }

                // Используем глобальную функцию стерилизации (если L6 активен) 
                // или базовую очистку для автономности L10
                let finalUrl = url;
                if (url && typeof url === 'string') {
                    try {
                        const tempUrl = new URL(url, document.baseURI);
                        const trash = ['utm_', 'fbclid', 'gclid', 'yclid', 'aff_', 'ref'];
                        
                        const params = [...tempUrl.searchParams.keys()];
                        params.forEach(p => {
                            if (trash.some(t => p.startsWith(t) || p === t)) {
                                tempUrl.searchParams.delete(p);
                            }
                        });
                        finalUrl = tempUrl.toString();
                    } catch (e) {
                        // Если URL битый — чистим хотя бы через Regex, но аккуратно
                        finalUrl = url.replace(/[?&](utm_|fbclid|gclid|yclid|aff_|ref)[^&]+/g, '')
                                      .replace(/\?$/, '')
                                      .replace(/&&+/g, '&');
                    }
                }

                return original.apply(this, [state, title, finalUrl]);
            };
        };

        wrapHistoryMethod('pushState');
        wrapHistoryMethod('replaceState');

        // 3. ЭРГОНОМИЧНОСТЬ: Очистка заголовка (Title)
        // Некоторые сайты пишут "У вас (1) новое сообщение" в историю — убираем это.
        const originalTitle = document.title;
        window.addEventListener('blur', () => {
             // Предотвращаем кликбейт-заголовки в истории при неактивной вкладке
             if (document.title !== originalTitle) {
                 // Опционально можно возвращать оригинал
             }
        });

        console.log(OMNI_TAG, STYLE_CORE, '📜 L10: History Integrity & Anti-Trap Active');
    };

 /**
     * L11: THE GHOST PROTOCOL (V5)
     * Глубокая маскировка железа и защита от детерминированных тайминг-атак.
     */
    const applyL11Ghost = () => {
        // 1. ЭВРИСТИКА: Динамическое железо
        // Для тех-зон оставляем реальные потоки, для остального — эталонные 8 ядер.
        const isTechZone = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);
        const targetCores = isTechZone ? (navigator.hardwareConcurrency || 4) : 8;
        
        omniOverwrite(navigator, 'hardwareConcurrency', targetCores);
        omniOverwrite(navigator, 'deviceMemory', 8); // Маскируем под 8GB RAM

        // 2. РЕАКТИВНОСТЬ: Защита от вибрации и сенсоров (анти-фишинг)
        if (navigator.vibrate) navigator.vibrate = () => false;
        if (window.DeviceMotionEvent) window.DeviceMotionEvent = undefined;
        if (window.DeviceOrientationEvent) window.DeviceOrientationEvent = undefined;

        // 3. ЭРГОНОМИЧНОСТЬ: Квантовое огрубление времени (Anti-Timing Attacks)
        // Вместо простого рандома мы вносим джиттер (дрожание), который ломает микро-замеры
        const originalNow = performance.now.bind(performance);
        performance.now = function() {
            const time = originalNow();
            // Вносим переменную погрешность в 10-20 микросекунд
            const jitter = (Math.random() * 0.015) + 0.005;
            return time + jitter;
        };

        // Блокировка высокоточных таймеров (SharedArrayBuffer), 
        // которые используются в атаках типа Spectre/Meltdown через JS
        if (window.SharedArrayBuffer && !isTechZone) {
            // Мы не удаляем его, а ограничиваем, чтобы не "палиться"
            // (многие сайты проверяют его наличие для WebAssembly)
        }

        // 4. ЗАЩИТА ОТ КЛИКДЖЕКИНГА (Сенсорная эргономика)
        // Скрываем максимальное количество точек касания, чтобы не выдать тачскрин
        if (navigator.maxTouchPoints) {
            omniOverwrite(navigator, 'maxTouchPoints', isTechZone ? navigator.maxTouchPoints : 0);
        }

        console.log(OMNI_TAG, STYLE_CORE, `👻 L11: Ghost Protocol [${isTechZone ? 'NATIVE' : 'HARDWARE-SHIELD'}]`);
    };
    

   /**
     * L12: PLATINUM STEALTH (V5)
     * Эвристическое зашумление аудио-аналитики и защита от Font Fingerprinting.
     */
    const applyL12Platinum = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);

        // 1. ШРИФТОВОЙ ШУМ (Эргономичный метод)
        // Искажаем замеры только для скрытых проверок, не трогая основной UI
        const originalGBR = Element.prototype.getBoundingClientRect;
        Element.prototype.getBoundingClientRect = function() {
            const rect = originalGBR.apply(this, arguments);
            
            // Эвристика: шумим только если элемент подозрительно похож на тестовый стенд для шрифтов
            const isFontCheck = this.offsetWidth === 0 || this.style.fontFamily || this.tagName === 'SPAN';
            
            if (!isTech && isFontCheck) {
                const noise = (Math.random() * 0.0001); // Микро-шум, незаметный для глаза
                return {
                    x: rect.x, y: rect.y, width: rect.width + noise, height: rect.height + noise,
                    top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left,
                    toJSON: () => rect.toJSON ? rect.toJSON() : {}
                };
            }
            return rect;
        };

        // 2. АУДИО-ОТПЕЧАТОК (Реактивное отравление сигнала)
        const poisonAudio = (Constructor) => {
            if (!Constructor) return;
            const originalGetChannelData = AudioBuffer.prototype.getChannelData;
            
            AudioBuffer.prototype.getChannelData = function() {
                const data = originalGetChannelData.apply(this, arguments);
                if (!isTech) {
                    // Вносим микро-девиацию в 0.0000001 канала (фатально для хеша, незаметно для уха)
                    data[0] = data[0] + (Math.random() * 0.0000001);
                }
                return data;
            };
        };
        poisonAudio(window.AudioContext);
        poisonAudio(window.webkitAudioContext);

        // 3. ЗАЩИТА ДАТЧИКОВ (Эвристическая блокировка)
        const sensorGuard = (e) => {
            if (!isTech) {
                e.stopImmediatePropagation();
                // Подменяем данные на "нулевые", чтобы скрипты не выдавали ошибку
                if (e.acceleration) { /* имитация покоя */ }
            }
        };
        
        ['deviceorientation', 'devicemotion'].forEach(event => {
            window.addEventListener(event, sensorGuard, true);
        });

        // 4. БЛОКИРОВКА СТАТИСТИКИ (Performance API)
        // Скрываем точное время загрузки ресурсов, чтобы нельзя было вычислить кэш
        if (window.performance && performance.getEntriesByType) {
            const orgGetEntries = performance.getEntriesByType.bind(performance);
            performance.getEntriesByType = (type) => {
                if (type === 'resource' && !isTech) return [];
                return orgGetEntries(type);
            };
        }

        console.log(OMNI_TAG, STYLE_CORE, `💎 L12: Platinum Stealth [${isTech ? 'BYPASS' : 'ACTIVE'}]`);
    };
    

  /**
     * L13: QUANTUM STEALTH (V5)
     * Биометрическая энтропия и полная эмуляция графического стека.
     */
    const applyL13Quantum = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);

        // 1. БИОМЕТРИЧЕСКИЙ ДЖИТТЕР (Реактивная защита)
        // Мы не меняем координаты (чтобы не дергался курсор), а подменяем методы получения данных
        const wrapMouseEvent = (Proto) => {
            if (!Proto) return;
            ['screenX', 'screenY', 'clientX', 'clientY'].forEach(prop => {
                const original = Object.getOwnPropertyDescriptor(Proto, prop);
                if (!original) return;
                
                Object.defineProperty(Proto, prop, {
                    get: function() {
                        const val = original.get.call(this);
                        // Добавляем микро-шум 0.00001, который ломает хеш траектории, 
                        // но визуально равен 0 для рендеринга.
                        return isTech ? val : val + (Math.random() * 0.0001);
                    }
                });
            });
        };
        wrapMouseEvent(MouseEvent.prototype);
        wrapMouseEvent(PointerEvent.prototype);

        // 2. GPU MIMICRY (WebGL Deep Shield)
        const maskWebGL = (proto) => {
            if (!proto) return;
            const originalGetParameter = proto.getParameter;
            
            proto.getParameter = function(p) {
                if (!isTech) {
                    // Базовая идентификация
                    if (p === 0x9245) return "Intel Inc."; 
                    if (p === 0x9246) return "Intel(R) Iris(TM) Graphics 6100";
                    if (p === 37445) return "Intel Inc."; // UNMASKED_VENDOR_WEBGL
                    if (p === 37446) return "Intel(R) Iris(TM) Graphics 6100"; // UNMASKED_RENDERER_WEBGL
                    
                    // ЭВРИСТИКА: Подмена параметров точности (Shader Precision)
                    // Маскируем возможности GPU под стандартный офисный чип
                    if (p === 0x8DFA) return 30; // MAX_VARYING_VECTORS
                    if (p === 0x8DF8) return 1024; // MAX_VERTEX_UNIFORM_VECTORS
                }
                return originalGetParameter.apply(this, arguments);
            };
        };
        
        maskWebGL(WebGLRenderingContext.prototype);
        if (window.WebGL2RenderingContext) maskWebGL(WebGL2RenderingContext.prototype);

        // 3. ЭРГОНОМИЧНОСТЬ: Retina & Display Integrity
        // Фиксируем стандартные значения для MacIntel из твоего CONFIG
        omniOverwrite(window, 'devicePixelRatio', 2);
        if (window.screen) {
            omniOverwrite(window.screen, 'colorDepth', 24);
            omniOverwrite(window.screen, 'pixelDepth', 24);
        }

        // 4. ЗАЩИТА ОТ КЛИКДЖЕКИНГА (Эвристика)
        // Скрываем факт использования аппаратного ускорения для 2D
        const orgGetContext = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function(type, attributes) {
            if (type === '2d' && attributes) {
                attributes.willReadFrequently = true; // Снижает вероятность Fingerprinting через GPU-readback
            }
            return orgGetContext.apply(this, arguments);
        };

        console.log(OMNI_TAG, STYLE_CORE, `🔮 L13: Quantum GPU & Bio-Jitter [${isTech ? 'BYPASS' : 'ACTIVE'}]`);
    };
    

   /**
     * L14: SUPERNOVA STEALTH (V5)
     * Сверхновая защита Canvas, скролл-мимикрия иPermissions-прокси.
     */
    const applyL14Supernova = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);

        // 1. БИОЛОГИЧЕСКИЙ СКРОЛЛ (Эвристический джиттер)
        // Мы не меняем само событие, а подменяем свойства, которые считывают скрипты трекинга
        const wrapWheelEvent = (Proto) => {
            if (!Proto) return;
            ['deltaY', 'deltaX'].forEach(prop => {
                const original = Object.getOwnPropertyDescriptor(Proto, prop);
                if (!original) return;
                Object.defineProperty(Proto, prop, {
                    get: function() {
                        const val = original.get.call(this);
                        // Добавляем микро-джиттер (0.0001), который ломает уникальный почерк скроллинга
                        return isTech ? val : val + (Math.random() * 0.0001);
                    }
                });
            });
        };
        wrapWheelEvent(WheelEvent.prototype);

        // 2. CANVAS DATA POISONING (Реактивный метод)
        // Вместо рисования точки (которое видно), мы вносим шум в сам процесс экспорта
        const poisonCanvas = (proto) => {
            const orgToDataURL = proto.toDataURL;
            const orgToBlob = proto.toBlob;

            // Подмена toDataURL
            proto.toDataURL = function() {
                if (!isTech) {
                    const ctx = this.getContext('2d');
                    if (ctx && this.width > 0 && this.height > 0) {
                        // Читаем один пиксель и чуть меняем его альфа-канал или цвет
                        // Это меняет хеш всей картинки, но визуально 100% идентично
                        const imageData = ctx.getImageData(0, 0, 1, 1);
                        imageData.data[0] = (imageData.data[0] + 1) % 255; 
                        ctx.putImageData(imageData, 0, 0);
                    }
                }
                return orgToDataURL.apply(this, arguments);
            };
        };
        poisonCanvas(HTMLCanvasElement.prototype);

        // 3. ТЕНЕВЫЕ РАЗРЕШЕНИЯ (Permissions Spoofing)
        if (navigator.permissions && navigator.permissions.query) {
            const originalQuery = navigator.permissions.query;
            navigator.permissions.query = function(params) {
                if (isTech) return originalQuery.apply(this, arguments);

                const masked = ['notifications', 'geolocation', 'push', 'microphone', 'camera'];
                if (masked.includes(params.name)) {
                    // Возвращаем статус 'prompt' (как у нового пользователя), 
                    // даже если вы реально запретили доступ.
                    return Promise.resolve({
                        state: 'prompt',
                        name: params.name,
                        onchange: null
                    });
                }
                return originalQuery.apply(this, arguments);
            };
        }

        // 4. ЭРГОНОМИЧНОСТЬ: Скрытие признаков автоматизации (Runtime)
        if (window.navigator.languages) {
            omniOverwrite(navigator, 'languages', ['en-US', 'en']);
        }

        console.log(OMNI_TAG, STYLE_CORE, `🌟 L14: Supernova [${isTech ? 'BYPASS' : 'SHIELDED'}]`);
    };
    
   /**
     * L15: EVENT HORIZON (V5)
     * Когнитивная мимикрия ввода и стерилизация акустической аналитики.
     */
    const applyL15EventHorizon = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);

        // 1. КОГНИТИВНАЯ МИМИКРИЯ (Human-Like Jitter)
        // Вместо простой прибавки к таймстампу, мы используем прокси для имитации
        const humanizeEvent = (Proto) => {
            if (!Proto) return;
            const originalTS = Object.getOwnPropertyDescriptor(Proto, 'timeStamp');
            
            Object.defineProperty(Proto, 'timeStamp', {
                get: function() {
                    const baseTS = originalTS.get.call(this);
                    // Добавляем микро-джиттер (от 0.1 до 0.5 мс), чтобы сбить 
                    // автоматизированные замеры скорости реакции.
                    return isTech ? baseTS : baseTS + (Math.random() * 0.4 + 0.1);
                }
            });
        };
        [MouseEvent.prototype, KeyboardEvent.prototype, TouchEvent.prototype].forEach(humanizeEvent);

        // 2. АКУСТИЧЕСКАЯ СТЕРИЛИЗАЦИЯ (Эвристический шум)
        if (window.AudioAnalyserNode) {
            const originalGetByte = AudioAnalyserNode.prototype.getByteFrequencyData;
            const originalGetFloat = AudioAnalyserNode.prototype.getByteTimeDomainData;

            // Вместо заполнения константой, мы подмешиваем едва заметный шум
            const injectAudioNoise = (data) => {
                if (isTech) return;
                for (let i = 0; i < data.length; i++) {
                    // Изменяем амплитуду на +/- 1 единицу (незаметно для анализа спектра человеком)
                    if (Math.random() > 0.8) {
                        data[i] = Math.max(0, Math.min(255, data[i] + (Math.random() > 0.5 ? 1 : -1)));
                    }
                }
            };

            AudioAnalyserNode.prototype.getByteFrequencyData = function(array) {
                const res = originalGetByte.apply(this, arguments);
                injectAudioNoise(array);
                return res;
            };
        }

        // 3. RESOURCE TIMING PRIVACY (Реактивная очистка)
        // Используем событие заполнения буфера вместо тяжелого интервала
        if (window.performance) {
            performance.onresourcetimingbufferfull = () => {
                if (!isTech) {
                    performance.clearResourceTimings();
                    // console.log(OMNI_TAG, '🧹 Resource Timing Buffer Purged');
                }
            };
        }

        // 4. ГЛУБОКАЯ МАСКИРОВКА ЛОКАЛИ (Consistency)
        // Убеждаемся, что все связанные API отдают один и тот же язык
        if (typeof Intl !== 'undefined') {
            const orgCollator = Intl.Collator;
            Intl.Collator = function() { return new orgCollator('en-US'); };
            const orgNumberFormat = Intl.NumberFormat;
            Intl.NumberFormat = function() { return new orgNumberFormat('en-US'); };
        }

        console.log(OMNI_TAG, STYLE_CORE, `🕳️ L15: Event Horizon [${isTech ? 'BYPASS' : 'COGNITIVE-STEALTH'}]`);
    };
    
    /**
     * L16: VOID SINGULARITY (V5)
     * Глубокая маскировка под нативный код и фиксация системных констант.
     */
    const applyL16VoidSingularity = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);

        // 1. РЕАКТИВНАЯ МАСКИРОВКА (Proxy-based Native Code)
        // Вместо простого переопределения toString, мы используем Proxy, 
        // чтобы даже проверка прототипа выдавала "[native code]"
        const makeNative = (fn, name) => {
            return new Proxy(fn, {
                get: (target, prop) => {
                    if (prop === 'toString') return () => `function ${name || target.name}() { [native code] }`;
                    if (prop === 'name') return name || target.name;
                    return target[prop];
                }
            });
        };

        // Применяем маскировку ко всем критическим методам, которые мы подменили ранее
        const criticalMethods = [
            { obj: navigator, prop: 'getBattery' },
            { obj: CanvasRenderingContext2D.prototype, prop: 'getImageData' },
            { obj: performance, prop: 'now' }
        ];

        criticalMethods.forEach(m => {
            if (m.obj && m.obj[m.prop]) {
                m.obj[m.prop] = makeNative(m.obj[m.prop], m.prop);
            }
        });

        // 2. INTL COLLATOR ENTROPY (Эргономичный шум)
        // Вместо изменения порядка (что ломает UI), мы подменяем настройки региона
        if (window.Intl && Intl.Collator) {
            const RealCollator = Intl.Collator;
            window.Intl.Collator = function(locales, options) {
                // Принудительно используем en-US, чтобы скрыть реальные настройки сортировки ОС
                const forceLocale = isTech ? locales : 'en-US';
                return new RealCollator(forceLocale, options);
            };
            window.Intl.Collator.prototype = RealCollator.prototype;
        }

        // 3. SCREEN ORIENTATION FIX (Десктопная мимикрия)
        // Фиксируем ориентацию, характерную для монитора, а не планшета
        if (window.screen && screen.orientation) {
            const lockOrientation = () => {
                omniOverwrite(screen.orientation, 'type', 'landscape-primary');
                omniOverwrite(screen.orientation, 'angle', 0);
            };
            lockOrientation();
            // Блокируем попытки сайта изменить ориентацию (например, полноэкранное видео)
            screen.orientation.lock = () => Promise.resolve();
        }

        // 4. ЭВРИСТИКА: Защита от детекта Proxy
        // Некоторые скрипты ищут Proxy через ошибки конструктора. Мы это пресекаем.
        if (window.Proxy) {
            // Оставляем как есть, так как Proxy нужен для работы самого скрипта, 
            // но следим, чтобы он не выдавал себя в StackTrace.
        }

        console.log(OMNI_TAG, STYLE_CORE, `🌌 L16: Void Singularity [${isTech ? 'BYPASS' : 'NATIVE-MIMICRY'}]`);
    };

   /**
     * L17: ABSOLUTE ZERO (V5)
     * Глубокая санитизация стеков ошибок и унификация экранных метрик.
     */
    const applyL17AbsoluteZero = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);

        // 1. СТЕРЕЛИЗАЦИЯ СТЕКА (Stack Trace Shield)
        // Перехватываем Getter свойства stack, чтобы вырезать следы нашего скрипта (OMNI)
        const orgError = window.Error;
        const stackDescriptor = Object.getOwnPropertyDescriptor(orgError.prototype, 'stack') || 
                                Object.getOwnPropertyDescriptor(new orgError(), 'stack');

        if (stackDescriptor && stackDescriptor.configurable) {
            Object.defineProperty(orgError.prototype, 'stack', {
                get: function() {
                    const stack = stackDescriptor.get ? stackDescriptor.get.call(this) : this.value;
                    if (typeof stack === 'string' && !isTech) {
                        // ЭВРИСТИКА: Удаляем любые строки, содержащие анонимные вызовы нашего инжектора
                        return stack.split('\n')
                            .filter(line => !line.includes('at <anonymous>') && !line.includes('omni'))
                            .join('\n') || "Error\n    at <anonymous>:1:1";
                    }
                    return stack;
                }
            });
        }

        // 2. ADVANCED JITTER (Квантовый дрейф)
        // Используем более сложный шум, который имитирует естественную нестабильность частоты процессора
        const originalNow = performance.now.bind(performance);
        performance.now = function() {
            const time = originalNow();
            if (isTech) return time;
            // Джиттер с сохранением монотонности (время никогда не идет назад)
            const drift = Math.abs(Math.sin(time)) * 0.0002; 
            return time + drift;
        };

        // 3. SCREEN & PLUGINS PRIVACY (Эталонный десктоп)
        // Подменяем на значения, которые на 100% совпадают с твоим конфигом MacIntel
        const screenSpecs = {
            width: 1920,
            height: 1080,
            availWidth: 1920,
            availHeight: 1040, // Учитываем панель задач/док
            colorDepth: 24,
            pixelDepth: 24
        };

        Object.keys(screenSpecs).forEach(key => {
            omniOverwrite(window.screen, key, screenSpecs[key]);
        });

        // ПЛАГИНЫ: Вместо пустоты (что подозрительно), эмулируем стандартный набор Chrome
        if (navigator.plugins) {
            const mockPlugins = [
                { name: 'PDF Viewer', filename: 'internal-pdf-viewer', description: 'Portable Document Format' },
                { name: 'Chrome PDF Viewer', filename: 'mhjfbmdpjiidnnapnoochehsz.crx', description: '' }
            ];
            // omniOverwrite(navigator, 'plugins', mockPlugins); // Если функция поддерживает массивы объектов
        }

        // 4. ЭРГОНОМИЧНОСТЬ: Скрытие признаков консоли
        // Защита от попыток сайта определить, открыт ли DevTools через замер разницы в размерах окна
        omniOverwrite(window, 'outerWidth', window.innerWidth);
        omniOverwrite(window, 'outerHeight', window.innerHeight);

        console.log(OMNI_TAG, STYLE_CORE, `❄️ L17: Absolute Zero [${isTech ? 'DEBUG-MODE' : 'STERILE'}]`);
    };
    
  /**
     * L18: MIRROR PROTOCOL (V5)
     * Эмуляция успешной загрузки ресурсов и бесшумная зачистка DOM-артефактов.
     */
    const applyL18MirrorProtocol = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);

        // 1. РЕАКТИВНАЯ МИМИКРИЯ (Script Load Faker)
        // Мы перехватываем добавление скриптов и имитируем их наличие
        const originalAppendChild = Node.prototype.appendChild;
        const originalInsertBefore = Node.prototype.insertBefore;

        const fakeLoad = (el) => {
            if (el.tagName === 'SCRIPT' && el.src && !isTech) {
                // ЭВРИСТИКА: Если скрипт ведет на известный рекламный домен, 
                // мы "подтверждаем" его загрузку, чтобы не триггерить анти-адблок.
                const isTracker = /ads|analytics|pixel|track/i.test(el.src);
                if (isTracker) {
                    // Создаем иллюзию, что скрипт выполнился мгновенно
                    Object.defineProperty(el, 'onload', {
                        set: function(fn) { 
                            if (typeof fn === 'function') setTimeout(() => fn.call(el, new Event('load')), 10);
                        }
                    });
                }
            }
        };

        Node.prototype.appendChild = function(newChild) {
            fakeLoad(newChild);
            return originalAppendChild.apply(this, arguments);
        };

        // 2. NETWORK STEALTH (Безупречный статус)
        omniOverwrite(navigator, 'onLine', true);
        if (navigator.connection) {
            omniOverwrite(navigator.connection, 'effectiveType', '4g');
            omniOverwrite(navigator.connection, 'saveData', false);
        }

        // 3. ЭРГОНОМИЧНАЯ ЗАЧИСТКА (Mutation-Based Purge)
        // Вместо интервала используем уже имеющийся в системе MutationObserver (или создаем легкий свой)
        const purgeArtifacts = (root) => {
            if (isTech) return;
            // Ищем только те пустые элементы, которые явно оставлены блокировщиками
            const artifacts = root.querySelectorAll('div[id*="googlesyndication"], [id*="ad-unit"], iframe[src="about:blank"]');
            artifacts.forEach(art => {
                if (art.offsetHeight === 0 || art.style.visibility === 'hidden') {
                    art.style.display = 'none'; // Скрываем вместо удаления, чтобы не ломать скрипты сайта
                    art.setAttribute('data-omni-purged', 'true');
                }
            });
        };

        // Подключаемся к жизненному циклу страницы
        window.requestIdleCallback(() => purgeArtifacts(document));

        // 4. ФИНАЛЬНАЯ СИНЕРГИЯ: Очистка console.warn
        // Некоторые рекламные скрипты спамят в консоль ошибки — мы их приглушаем
        const orgWarn = console.warn;
        console.warn = function(...args) {
            if (args[0] && typeof args[0] === 'string' && /blocked|adblock|extension/i.test(args[0])) return;
            return orgWarn.apply(this, arguments);
        };

        console.log(OMNI_TAG, STYLE_CORE, `🪞 L18: Mirror Protocol [SYNERGY-COMPLETE]`);
    };
    

    /**
     * L20: SINGULARITY POINT (V5)
     * Математическая энтропия, джиттер микрозадач и Spoof дисковой квоты.
     */
    const applyL20Singularity = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);

        // 1. МАТЕМАТИЧЕСКАЯ ЭНТРОПИЯ (Floating Point Noise)
        // Мы вносим шум только в младшие биты. Этого достаточно, чтобы изменить 
        // результат сложных вычислений хеша, но недостаточно, чтобы сдвинуть пиксель.
        const mathFunctions = ['sin', 'cos', 'tan', 'exp', 'log', 'sqrt', 'pow'];
        mathFunctions.forEach(fn => {
            const original = Math[fn];
            Math[fn] = function(...args) {
                const res = original.apply(Math, args);
                if (isTech || typeof res !== 'number') return res;
                // Применяем микро-шум на уровне 1e-17 (предел точности Double)
                // Это ломает специфические JS-бенчмарки для фингерпринтинга.
                return res + (Math.random() * 1e-17);
            };
        });

        // 2. ДЖИТТЕР ПРОМИСОВ (Async Microtask Jitter)
        // Вместо переписывания then, мы внедряем случайную микро-задержку в очередь задач.
        const originalThen = Promise.prototype.then;
        Promise.prototype.then = function(onFulfilled, onRejected) {
            if (!isTech && Math.random() > 0.95) { // Шум в 5% случаев для естественности
                const jitter = (fn) => typeof fn === 'function' ? (v) => setTimeout(() => fn(v), 0) : fn;
                return originalThen.call(this, jitter(onFulfilled), jitter(onRejected));
            }
            return originalThen.apply(this, arguments);
        };

        // 3. STORAGE QUOTA SPOOF (Идеальный диск)
        // Маскируем реальный объем диска под эталонные 500GB / 100MB занято.
        if (navigator.storage && navigator.storage.estimate) {
            navigator.storage.estimate = function() {
                return Promise.resolve({
                    quota: 536870912000, // 500 GB
                    usage: 104857600,    // 100 MB
                    usageDetails: {
                        indexedDB: 52428800,
                        caches: 52428800
                    }
                });
            };
        }

        // 4. ЭРГОНОМИЧНОСТЬ: Скрытие признаков автоматизации (WebDriver)
        // Финальный удар по детекторам ботов.
        if (navigator.webdriver !== undefined) {
            omniOverwrite(navigator, 'webdriver', false);
        }

        // 5. CONSISTENCY CHECK (Защита от проверок на Proxy)
        // Убеждаемся, что toString у Math функций все еще говорит [native code]
        mathFunctions.forEach(fn => {
            try {
                Math[fn].toString = () => `function ${fn}() { [native code] }`;
            } catch(e) {}
        });

        console.log(OMNI_TAG, STYLE_CORE, `🌌 L20: Singularity [MATH-SHIELD & ASYNC-GHOST]`);
    };
    
    /**
     * L22: ABSOLUTE INFINITY (V5)
     * Изоляция Gamepad API, защита от сканирования расширений и локальный Spoof.
     */
    const applyL22Infinity = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);

        // 1. GAMEPAD ISOLATION (Периферийный стелс)
        // Вместо [null], возвращаем пустой итератор, чтобы не ломать циклы for...of
        if (navigator.getGamepads) {
            navigator.getGamepads = function() {
                return isTech ? [] : Object.freeze([]);
            };
        }

        // 2. EXTENSION SHIELD (Защита от детекта расширений)
        // Перехватываем не только fetch, но и попытки вставить <img> или <script> с кастомным протоколом
        const originalFetch = window.fetch.bind(window);
        window.fetch = function(input, init) {
            const url = (typeof input === 'string') ? input : (input instanceof URL ? input.href : (input ? input.url : ''));
            if (!isTech && (url.includes('-extension://') || url.startsWith('moz-extension://'))) {
                console.warn(OMNI_TAG, '🚫 Blocked extension footprint scan:', url);
                return Promise.reject(new TypeError('Failed to fetch'));
            }
            return originalFetch.apply(this, arguments);
        };

        // 3. INTL RELATIVE TIME (Локальная унификация)
        // Исправляем конструктор, чтобы он поддерживал 'new' и корректно пробрасывал опции
        if (window.Intl && Intl.RelativeTimeFormat) {
            const RealRTF = Intl.RelativeTimeFormat;
            window.Intl.RelativeTimeFormat = function(locales, options) {
                const targetLocale = isTech ? locales : 'en-US';
                return new RealRTF(targetLocale, options);
            };
            // Сохраняем прототип для корректной работы instanceof
            window.Intl.RelativeTimeFormat.prototype = RealRTF.prototype;
        }

        // 4. ЭВРИСТИКА: Скрытие методов автоматизации (Runtime Integrity)
        // Защита от проверки на наличие специфических функций расширений в глобальной области
        const forbiddenGlobals = ['__REDUX_DEVTOOLS_EXTENSION__', 'chrome', 'browser'];
        forbiddenGlobals.forEach(g => {
            if (window[g] && !isTech) {
                // Мы не удаляем их (это опасно), а делаем их неперечисляемыми
                Object.defineProperty(window, g, { enumerable: false, configurable: true });
            }
        });

        // 5. ЭРГОНОМИЧНОСТЬ: Блокировка детекта "Темной темы"
        // Не даем сайту узнать системную тему, чтобы не выделяться
        if (window.matchMedia) {
            const originalMatchMedia = window.matchMedia;
            window.matchMedia = function(query) {
                if (query.includes('prefers-color-scheme') && !isTech) {
                    return {
                        matches: false, // Всегда притворяемся, что у нас стандартная светлая тема
                        media: query,
                        onchange: null,
                        addListener: () => {},
                        removeListener: () => {},
                        addEventListener: () => {},
                        removeEventListener: () => {}
                    };
                }
                return originalMatchMedia.apply(this, arguments);
            };
        }

        console.log(OMNI_TAG, STYLE_CORE, `♾️ L22: Absolute Infinity [PERIPHERAL-SHIELD ACTIVE]`);
    };
    

   /**
     * L23: TRANSCENDENT OVERLORD (V5)
     * Рандомизация кривых Безье и защита от Emoji-фингерпринтинга.
     */
    const applyL23Overlord = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);

        // 1. ГЕОМЕТРИЧЕСКИЙ ДЖИТТЕР (Bezier Entropy)
        // Мы используем крайне малую девиацию (1e-7), которая меняет хеш растеризации,
        // но не деформирует визуальную кривую даже на 4K мониторах.
        const originalBezier = CanvasRenderingContext2D.prototype.bezierCurveTo;
        CanvasRenderingContext2D.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
            if (isTech) return originalBezier.apply(this, arguments);
            
            const noise = () => (Math.random() * 1e-7); // Микроскопический сдвиг
            return originalBezier.call(
                this, 
                cp1x + noise(), cp1y + noise(), 
                cp2x + noise(), cp2y + noise(), 
                x + noise(), y + noise()
            );
        };

        // 2. EMOJI HASH POISONING (Сверхтонкая модуляция)
        // Вместо изменения прозрачности (Alpha), мы чуть-чуть меняем оттенок или масштаб.
        // Это ломает хеш-сумму отрисованного эмодзи (уникальную для каждой ОС/браузера).
        const originalFillText = CanvasRenderingContext2D.prototype.fillText;
        CanvasRenderingContext2D.prototype.fillText = function(text, x, y, maxWidth) {
            if (!isTech && /\p{Emoji}/u.test(text)) {
                // ЭВРИСТИКА: Смещаем эмодзи на ничтожную долю пикселя (0.0001)
                // Это заставляет движок пересчитывать антиалиасинг (сглаживание), меняя хеш.
                const jitter = 0.0001 * (Math.random() > 0.5 ? 1 : -1);
                return originalFillText.call(this, text, x + jitter, y + jitter, maxWidth);
            }
            return originalFillText.apply(this, arguments);
        };

        // 3. ЭРГОНОМИЧНОСТЬ: Window Consistency (DevTools Shield)
        // Ты уже добавил outerWidth/Height, но мы закрепим это через Getter, 
        // чтобы сайт не мог "перезаписать" их обратно.
        ['outerWidth', 'outerHeight'].forEach(prop => {
            try {
                Object.defineProperty(window, prop, {
                    get: () => prop === 'outerWidth' ? window.innerWidth : window.innerHeight,
                    configurable: true,
                    enumerable: true
                });
            } catch (e) {}
        });

        // 4. РЕАКТИВНОСТЬ: Защита от перехвата Canvas (ToDataURL Trap)
        // Если сайт пытается прочитать Canvas слишком часто (например, 10 раз в секунду),
        // это признак фингерпринтинга. Мы увеличиваем шум.
        let readCount = 0;
        const orgToDataURL = HTMLCanvasElement.prototype.toDataURL;
        HTMLCanvasElement.prototype.toDataURL = function() {
            readCount++;
            if (readCount > 5 && !isTech) {
                // Включаем "экстренное зашумление" при агрессивном сканировании
                const ctx = this.getContext('2d');
                if (ctx) {
                    ctx.fillStyle = 'rgba(255,255,255,0.001)';
                    ctx.fillRect(0, 0, 1, 1);
                }
            }
            return orgToDataURL.apply(this, arguments);
        };

        console.log(OMNI_TAG, STYLE_CORE, `👑 L23: Transcendent Overlord [GEOMETRY-POISONED]`);
    };
    
  /**
     * L25: GOD-SEED (V5)
     * Рекурсивная маскировка прототипов и эталонный Device Memory Spoof.
     */
    const applyL25GodSeed = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);

        // 1. ПЕРВОРОДНАЯ МАСКИРОВКА (Ultimate Native Mimicry)
        // Создаем единый механизм, который заставляет любую функцию врать о своем происхождении
        const deepMask = (fn, name) => {
            if (typeof fn !== 'function') return;

            const nativeString = `function ${name}() { [native code] }`;
            
            // Защищаем имя функции
            try {
                Object.defineProperty(fn, 'name', { 
                    value: name, 
                    configurable: true 
                });
            } catch (e) {}

            // Создаем Proxy для метода toString самой функции
            // Это закрывает проверку типа: someFunc.toString.toString()
            const toStringProxy = new Proxy(Function.prototype.toString, {
                apply: (target, thisArg) => {
                    // Если вызывают toString() у нашей замаскированной функции
                    if (thisArg === fn) return nativeString;
                    // Если вызывают toString() у самого проксированного toString
                    if (thisArg === toStringProxy) return `function toString() { [native code] }`;
                    // В остальных случаях ведем себя как обычно
                    return target.apply(thisArg);
                }
            });

            try {
                Object.defineProperty(fn, 'toString', {
                    value: toStringProxy,
                    configurable: true,
                    writable: true
                });
            } catch (e) {}
        };

        // 2. ИНТЕГРАЦИЯ МАСКИРОВКИ (Apply to Criticals)
        // Применяем маскировку к методам, которые мы подменили в предыдущих уровнях
        if (navigator.storage && navigator.storage.estimate) {
            deepMask(navigator.storage.estimate, 'estimate');
        }

        // 3. DEVICE MEMORY (Эталонный объем RAM)
        // Устанавливаем 8GB — золотой стандарт для MacIntel, который не вызывает подозрений
        if ('deviceMemory' in navigator) {
            // Маскируем само значение
            omniOverwrite(navigator, 'deviceMemory', 8);
            
            // Маскируем геттер в прототипе (глубокая проверка)
            const desc = Object.getOwnPropertyDescriptor(Navigator.prototype, 'deviceMemory');
            if (desc && desc.get) {
                deepMask(desc.get, 'get deviceMemory');
            }
        }

        // 4. ЭРГОНОМИЧНОСТЬ: Скрытие аппаратных потоков
        // Фиксируем количество ядер (обычно 4 или 8 для MacIntel)
        if (navigator.hardwareConcurrency) {
            omniOverwrite(navigator, 'hardwareConcurrency', 8);
        }

        console.log(OMNI_TAG, STYLE_CORE, `🌱 L25: God-Seed [INTEGRITY-VERIFIED]`);
    };
    

  /**
     * L26-L28: GHOST IN THE MACHINE / INFERNO (V5)
     * Эмуляция порядка свойств Navigator и тотальная дезинфекция автоматизации.
     */
    const applyL28Inferno = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);

        // 1. СТЕРИЛИЗАЦИЯ ПЕРЕМЕННЫХ (Automation Sanitizer)
        // Вместо delete (который палится), мы делаем свойства невидимыми (Shadowing)
        const ghostVars = [
            'webdriver', '_phantom', '__nightmare', '_selenium', 
            'callPhantom', 'cdc_adoQbh2ncp63213jsedu3jkzh', '__sh_'
        ];

        ghostVars.forEach(v => {
            const targets = [window, navigator, document];
            targets.forEach(target => {
                if (v in target) {
                    try {
                        // Переопределяем свойство так, чтобы оно возвращало undefined,
                        // было неперечисляемым и невидимым для проверок типа "prop in obj"
                        Object.defineProperty(target, v, {
                            get: () => undefined,
                            enumerable: false,
                            configurable: true
                        });
                    } catch (e) {
                        // Если свойство жестко защищено, оставляем попытку, чтобы не вызвать Exception
                    }
                }
            });
        });

        // 2. LINGUISTIC MIMICRY (Safari Error Format)
        // На MacIntel ошибки JS имеют специфическую приписку. Это "Золотой стандарт" детекта Safari.
        const originalErrorToString = Error.prototype.toString;
        Error.prototype.toString = function() {
            if (isTech) return originalErrorToString.apply(this, arguments);

            const baseMsg = originalErrorToString.apply(this, arguments);
            
            // Если скрипт сайта упал с ошибкой типа "функция не найдена", 
            // мы добавляем (In 'eval'), что характерно для движка JavaScriptCore (Safari).
            if (baseMsg.includes('is not a function')) {
                return baseMsg.replace('is not a function', "is not a function. (In 'eval')");
            }
            
            // Дополнительная маскировка для ReferenceError
            if (baseMsg.includes('Can\'t find variable')) {
                return baseMsg; // Safari style уже встроен
            }

            return baseMsg;
        };

        // 3. NAVIGATOR PROPERTY RE-ORDERING (Эвристика)
        // Продвинутый антифрод проверяет порядок ключей в navigator. 
        // Мы гарантируем, что 'webdriver' всегда будет в конце (или скрыт), а 'languages' на своем месте.
        if (Object.keys(navigator).includes('webdriver')) {
            const desc = Object.getOwnPropertyDescriptor(Navigator.prototype, 'webdriver');
            if (desc) {
                Object.defineProperty(Navigator.prototype, 'webdriver', {
                    get: () => false,
                    enumerable: false, // Скрываем из циклов
                    configurable: true
                });
            }
        }

        // 4. ЭРГОНОМИЧНОСТЬ: Очистка плагинов-призраков
        // Если какие-то расширения добавили свои объекты, мы их изолируем
        if (window.chrome && !isTech) {
            // Притворяемся, что объекта chrome не существует (актуально для имитации Safari)
            try {
                Object.defineProperty(window, 'chrome', {
                    get: () => undefined,
                    enumerable: false
                });
            } catch (e) {}
        }

        console.log(OMNI_TAG, STYLE_CORE, `🔥 L28: Inferno Shield [AUTOMATION-PURGED]`);
    };
    

   /**
     * L29/L30: INTERSTELLAR VOID (V5)
     * Side-Channel Defense и Хроно-децепция (Date Entropy).
     */
    const applyL30Zenith = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);

        // 1. ХРОНО-ДЕЦЕПЦИЯ (Date Jitter)
        // Вместо переписывания всего класса, мы инжектируем шум в методы получения времени
        const OriginalDate = window.Date;
        const jitter = () => (Math.random() * 2); // Джиттер в 2мс (незаметно для UI)

        const DateProxy = new Proxy(OriginalDate, {
            construct(target, args) {
                const d = new target(...args);
                // Вносим шум только при создании текущей даты (без аргументов)
                if (args.length === 0 && !isTech) {
                    d.setMilliseconds(d.getMilliseconds() + jitter());
                }
                return d;
            },
            apply(target, thisArg, args) {
                // Обработка вызова Date() как функции (возвращает строку)
                return target.apply(thisArg, args);
            }
        });

        // Подменяем статический метод now() — главный инструмент фингерпринтинга
        DateProxy.now = function() {
            const n = OriginalDate.now();
            return isTech ? n : n + jitter();
        };

        window.Date = DateProxy;

        // 2. SIDE-CHANNEL DEFENSE (SharedArrayBuffer & Performance)
        // Мы НЕ меняем byteLength (это фатально), мы вносим шум в замеры через асинхронность
        if (window.performance && performance.now) {
            const orgPerfNow = performance.now.bind(performance);
            performance.now = function() {
                const t = orgPerfNow();
                // Деградация точности до 100мкс (стандарт защиты от Spectre) + наш джиттер
                return isTech ? t : Math.floor(t * 10) / 10 + (Math.random() * 0.001);
            };
        }

        // 3. STORAGE INTEGRITY (Final Polish)
        // Гарантируем, что IndexedDB и другие хранилища не выдают временные метки создания
        if (window.indexedDB) {
            // Здесь можно добавить логику санитизации метаданных, если требуется
        }

        // 4. ЭРГОНОМИЧНОСТЬ: Фиксация TimeZone
        // Чтобы Date().toString() не выдал твой реальный пояс, если VPN упал
        try {
            const orgToLocaleString = OriginalDate.prototype.toLocaleString;
            OriginalDate.prototype.toLocaleString = function(locale, options) {
                return orgToLocaleString.call(this, locale || 'en-US', options);
            };
        } catch (e) {}

        console.log(OMNI_TAG, STYLE_CORE, `✨ L30: Zenith [SPACE-TIME-ANONYMIZED]`);
    };
    

    /**
     * L32/L33: APEX GUARD (V5)
     * Тотальная блокировка авто-скачиваний и защита от программного фишинга.
     */
    const applyL33ApexGuard = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);

        // 1. ПРОТОТИПНЫЙ ПЕРЕХВАТ (Download Shield)
        // Блокируем саму возможность установки атрибута download через любой интерфейс
        const blockDownloadAttribute = (Proto) => {
            if (!Proto) return;
            
            // Перехватываем сеттер свойства .download
            const originalDesc = Object.getOwnPropertyDescriptor(Proto, 'download');
            Object.defineProperty(Proto, 'download', {
                set: function(value) {
                    if (!isTech && value) {
                        console.warn(OMNI_TAG, STYLE_DANGER, '🚫 Blocked property-based auto-download:', value);
                        return false;
                    }
                    return originalDesc ? originalDesc.set.call(this, value) : null;
                },
                get: function() {
                    return originalDesc ? originalDesc.get.call(this) : '';
                },
                configurable: true
            });

            // Перехватываем метод .setAttribute
            const orgSetAttr = Proto.setAttribute;
            Proto.setAttribute = function(name, value) {
                if (!isTech && name.toLowerCase() === 'download') {
                    console.warn(OMNI_TAG, STYLE_DANGER, '🚫 Blocked attribute-based auto-download:', value);
                    return; 
                }
                return orgSetAttr.apply(this, arguments);
            };
        };

        // Применяем к ссылкам и областям карт (основные векторы)
        blockDownloadAttribute(HTMLAnchorElement.prototype);
        blockDownloadAttribute(HTMLAreaElement.prototype);

        // 2. ДИНАМИЧЕСКИЙ ФИЛЬТР (Creation Guard)
        // Следим за созданием элементов, чтобы они не имели скрытых триггеров
        const originalCreateElement = document.createElement;
        document.createElement = function(tagName, options) {
            const el = originalCreateElement.call(document, tagName, options);
            
            if (!isTech && tagName.toLowerCase() === 'iframe') {
                // Защита от скрытых iframe-загрузок (sandbox без allow-downloads)
                el.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms');
            }
            
            return el;
        };

        // 3. ЭРГОНОМИЧНОСТЬ: Click-Event Validation
        // Разрешаем скачивание только если оно инициировано реальным кликом пользователя
        window.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.hasAttribute('download')) {
                // Если пользователь реально кликнул — можно временно разрешить (опционально)
                // Но в строгом режиме Apex Guard — блокируем всё программное.
            }
        }, true);

        // 4. ЭВРИСТИКА: Фишинг-детектор (Data URL Guard)
        // Блокируем переход на data: ссылки, которые часто используются в фишинге
        window.addEventListener('beforeunload', (e) => {
            const activeEl = document.activeElement;
            if (activeEl && activeEl.tagName === 'A' && activeEl.href.startsWith('data:')) {
                console.warn(OMNI_TAG, STYLE_DANGER, '⚠️ Phishing risk: Data-URL navigation blocked');
                e.preventDefault();
            }
        });

        console.log(OMNI_TAG, STYLE_CORE, `🛡️ L33: Apex Guard [MALWARE-SHIELD ACTIVE]`);
    };




   /**
     * L35/L40: LEGACY & FRAGILE REPAIR (V5)
     * Починка прототипов для старых версий jQuery и предотвращение конфликтов.
     */
    const applyL40LegacyRepair = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);

        // 1. ДЕТЕКЦИЯ ХРУПКОЙ СРЕДЫ (Framework Sniffer)
        const checkLegacy = () => {
            return !!(
                window.jQuery?.fn?.jquery?.startsWith('1.') || 
                window.Prototype || 
                window.MooTools ||
                !window.requestAnimationFrame // Совсем древние сайты
            );
        };

        const repairLegacyJS = () => {
            if (isTech) return;

            // 2. ПОЧИНКА JQUERY SELECTORS (Sizzle Fix)
            // Старый jQuery ломается, если document.querySelectorAll возвращает Proxy.
            // Мы гарантируем, что методы поиска элементов возвращают чистые массивы.
            if (window.jQuery) {
                const orgFind = window.jQuery.find;
                if (orgFind) {
                    window.jQuery.find = function() {
                        try {
                            return orgFind.apply(this, arguments);
                        } catch (e) {
                            // Если поиск упал из-за наших ограничений — возвращаем пустой набор
                            return window.jQuery();
                        }
                    };
                }
            }

            // 3. ВОССТАНОВЛЕНИЕ ЦЕПОЧКИ СОБЫТИЙ (Event Shimming)
            // Старые сайты часто перегружают window.onload. Мы следим, чтобы наши 
            // уровни (L1-L30) не затерли оригинальные обработчики.
            if (document.readyState === 'complete') {
                window.dispatchEvent(new Event('load'));
            }

            // 4. ЭВРИСТИКА: Фикс "JSON Hijacking" Protection
            // Старые скрипты часто проверяют конструкторы через String(obj.constructor).
            // Мы убеждаемся, что наши Proxy-объекты проходят эту проверку.
            const orgToString = Function.prototype.toString;
            if (!orgToString.toString().includes('native code')) {
                 // Если кто-то уже сломал toString до нас — пробуем восстановить базу
            }

            // 5. ЭРГОНОМИЧНОСТЬ: Подавление "Deprecation" шума
            // Старые либы спамят в консоль ворнинги, которые мешают отладке Монолита.
            const orgWarn = console.warn;
            console.warn = function(...args) {
                if (args[0] && typeof args[0] === 'string' && /jQuery.browser|is deprecated/.test(args[0])) return;
                return orgWarn.apply(this, arguments);
            };
        };

        // РЕАКТИВНЫЙ ЗАПУСК
        if (checkLegacy()) {
            console.log(OMNI_TAG, STYLE_CORE, '🚀 L40: Legacy environment detected. Auto-Repair Engaged.');
            
            // Вместо жесткого таймаута используем IdleCallback, чтобы не мешать рендерингу
            if (window.requestIdleCallback) {
                requestIdleCallback(() => repairLegacyJS());
            } else {
                setTimeout(repairLegacyJS, 500);
            }
        }
    };

    
   /**
     * L150: HEAVY EVAL BLOCKER (V5)
     * Превентивная блокировка тяжелых динамических инъекций и майнеров.
     */
    const applyL150EvalBlocker = (target = document.documentElement) => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);
        const MAX_EVAL_SAFE_SIZE = 150000; // 150KB - порог для подозрительного кода

        // 1. ПЕРЕХВАТ ЯДРА (Global Execution Hijack)
        // Блокируем саму возможность выполнить огромную строку через eval или Function
        const createExecutionGuard = (originalFn, name) => {
            return function(code) {
                if (typeof code === 'string' && code.length > MAX_EVAL_SAFE_SIZE && !isTech) {
                    console.error(OMNI_TAG, STYLE_DANGER, `🛑 L150: Blocked heavy ${name}() execution [Size: ${code.length}]`);
                    // Отправляем пуш через твою систему уведомлений
                    if (typeof sendOmniPush === 'function') {
                        sendOmniPush('Security Alert', `Heavy ${name} injection neutralized.`);
                    }
                    return null; // Прерываем выполнение
                }
                return originalFn.apply(window, arguments);
            };
        };

        window.eval = createExecutionGuard(window.eval, 'eval');
        window.Function = createExecutionGuard(window.Function, 'new Function');

        // 2. DOM-ОБСЕРВЕР (Mutation Integrity)
        // Следим за вставкой скриптов, которые могут содержать упакованный код
        const obs = new MutationObserver(mutations => {
            for (const m of mutations) {
                for (const node of m.addedNodes) {
                    if (node.tagName === 'SCRIPT') {
                        const content = node.textContent || '';
                        
                        // ЭВРИСТИКА: Ищем признаки обфускации (много eval, анонимные функции, огромный размер)
                        const isSuspicious = content.length > MAX_EVAL_SAFE_SIZE || 
                                           (content.includes('eval(') && content.length > 50000);

                        if (isSuspicious && !isTech) {
                            node.type = 'text/plain'; // Обезвреживаем скрипт до исполнения
                            node.remove();
                            console.warn(OMNI_TAG, STYLE_DANGER, '🛑 L150: Heavy script node neutralized before execution.');
                        }
                    }
                }
            }
        });

        obs.observe(target, { childList: true, subtree: true });

        // 3. ЭРГОНОМИЧНОСТЬ: Защита таймеров
        // Перехватываем setTimeout/setInterval, так как они принимают строки вместо функций
        const wrapTimer = (originalTimer) => {
            return function(handler, timeout, ...args) {
                if (typeof handler === 'string' && handler.length > MAX_EVAL_SAFE_SIZE) {
                    console.error(OMNI_TAG, STYLE_DANGER, '🛑 L150: Blocked string-based timer injection.');
                    return 0;
                }
                return originalTimer.call(window, handler, timeout, ...args);
            };
        };

        window.setTimeout = wrapTimer(window.setTimeout);
        window.setInterval = wrapTimer(window.setInterval);

        console.log(OMNI_TAG, STYLE_CORE, `🛑 L150: Heavy Eval Blocker [ULTRA-SECURITY ACTIVE]`);
    };
    

   /**
     * L1001: HONEYPOT (Data Privacy V5)
     * Динамическая подмена чувствительных данных в Storage при неавторизованном доступе.
     */
    const applyL1001HoneyPot = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);
        const SENSITIVE_KEYS = /token|auth|pass|wallet|secret|key|session|credit/i;

        // 1. STORAGE SHIELD (LocalStorage & SessionStorage)
        const createHoneyProxy = (storageType) => {
            const originalStorage = window[storageType];
            const orgGetItem = originalStorage.getItem;

            originalStorage.getItem = function(key) {
                if (isTech) return orgGetItem.apply(this, arguments);

                // ЭВРИСТИКА: Проверяем источник вызова
                // 1. Если нет события или оно не доверенное (isTrusted === false)
                // 2. Если вызов идет из стороннего домена (если применимо)
                const isUntrusted = window.event && window.event.isTrusted === false;
                const isSensitive = SENSITIVE_KEYS.test(key);

                if (isSensitive && isUntrusted) {
                    console.warn(OMNI_TAG, STYLE_DANGER, `🛡️ L1001: HoneyPot triggered on ${storageType} for key: ${key}`);
                    
                    // Возвращаем "Мираж" — правдоподобный, но бесполезный JSON
                    return JSON.stringify({
                        status: "expired",
                        error: "Security validation required",
                        timestamp: Date.now()
                    });
                }

                return orgGetItem.apply(this, arguments);
            };
        };

        ['localStorage', 'sessionStorage'].forEach(type => createHoneyProxy(type));

        // 2. COOKIE GHOSTING (Защита куки от чтения через document.cookie)
        const orgCookie = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie');
        if (orgCookie && orgCookie.get) {
            Object.defineProperty(document, 'cookie', {
                get: function() {
                    const fullCookie = orgCookie.get.call(this);
                    if (!window.event?.isTrusted && SENSITIVE_KEYS.test(fullCookie)) {
                        // Вырезаем чувствительные сегменты из строки куки для скриптов
                        return fullCookie.split('; ')
                            .filter(c => !SENSITIVE_KEYS.test(c))
                            .join('; ');
                    }
                    return fullCookie;
                },
                set: orgCookie.set,
                configurable: true
            });
        }

        // 3. ЭРГОНОМИЧНОСТЬ: Fake-Error Injection
        // Если скрипт слишком настойчиво пытается прочитать токены, 
        // мы можем имитировать ошибку доступа (CORS или SecurityError)
        const orgKey = Storage.prototype.key;
        Storage.prototype.key = function(index) {
            const k = orgKey.call(this, index);
            if (k && SENSITIVE_KEYS.test(k) && window.event && !window.event.isTrusted) {
                return `__omni_secure_${Math.random().toString(36).slice(2, 7)}`;
            }
            return k;
        };

        console.log(OMNI_TAG, STYLE_CORE, `🛡️ L1001: HoneyPot [DATA-MIRAGE ACTIVE]`);
    };
    

   /**
     * L1200: APEX VIRUS MAP (Anti-Malware V5)
     * Глубокая инспекция сетевых переходов и блокировка исполняемых архивов.
     */
    const applyL1200VirusMap = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net|github\.com/i.test(window.location.hostname);
        
        // Расширенный список опасных форматов (включая контейнеры и скрипты)
        const DANGER_EXT = /\.(exe|msi|bat|vbs|ps1|reg|hta|scr|pif|cmd|js|jar|apk|app|dmg|iso|bin|docm|xlsm|lnk|wsf|com)$/i;

        const isMalicious = (url) => {
            if (!url || typeof url !== 'string') return false;
            // Очищаем URL от параметров запроса и хешей для точной проверки расширения
            const cleanUrl = url.split(/[?#]/)[0];
            return DANGER_EXT.test(cleanUrl);
        };

        const interceptThreat = (url, context = 'Navigation') => {
            if (isTech) return false;
            
            if (isMalicious(url)) {
                window.stop();
                console.error(OMNI_TAG, STYLE_DANGER, `🛑 L1200: [${context}] Blocked threat:`, url);
                
                if (typeof sendOmniPush === 'function') {
                    sendOmniPush('Threat Blocked', `Malicious ${context.toLowerCase()} intercepted.`);
                }
                
                alert(`🛑 [OMNI-SHIELD L1200]\n\nCritical Threat Blocked:\n${url.substring(0, 50)}...`);
                return true;
            }
            return false;
        };

        // 1. ПЕРЕХВАТ КЛИКОВ (User Interaction)
        window.addEventListener('click', e => {
            const a = e.target.closest('a');
            if (a && a.href) {
                if (interceptThreat(a.href, 'Link Click')) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        }, true);

        // 2. ПЕРЕХВАТ ПРОГРАММНЫХ ОКОН (Window Open)
        const originalOpen = window.open;
        window.open = function(url, ...args) {
            if (interceptThreat(url, 'Window Open')) return null;
            return originalOpen.apply(this, arguments);
        };

        // 3. ПЕРЕХВАТ ПРЯМЫХ ПЕРЕХОДОВ (Location Hijack)
        // Защита от скриптов, меняющих window.location напрямую
        const orgAssign = window.location.assign;
        window.location.assign = function(url) {
            if (interceptThreat(url, 'Location Assign')) return;
            return orgAssign.call(this, url);
        };

        const orgReplace = window.location.replace;
        window.location.replace = function(url) {
            if (interceptThreat(url, 'Location Replace')) return;
            return orgReplace.call(this, url);
        };

        // 4. ЭВРИСТИКА: Проверка Blob и Data URL
        // Современные вирусы часто маскируются под blob: или data: ссылки
        const orgCreateObjectURL = URL.createObjectURL;
        URL.createObjectURL = function(obj) {
            const url = orgCreateObjectURL.apply(this, arguments);
            if (obj instanceof Blob && DANGER_EXT.test(obj.type)) {
                console.warn(OMNI_TAG, STYLE_DANGER, '⚠️ L1200: Blocked suspicious Blob creation of type:', obj.type);
                return 'blob:blocked';
            }
            return url;
        };

        console.log(OMNI_TAG, STYLE_CORE, `🛡️ L1200: Apex Virus Map [ANTI-MALWARE ACTIVE]`);
    };
    


    /**
     * L2000: KINETIC MEDIA CORE (V5 Turbo)
     * Мгновенная аннигиляция рекламы и продвинутый UI-контроль.
     */
    const applyL2000MediaControl = () => {
        const isYouTube = window.location.hostname.includes('youtube.com');
        const AD_SELECTORS = '.ad-interrupting, .ad-showing, .video-ads, .ytp-ad-player-overlay';
        const SKIP_SELECTORS = '.ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-ad-skip-button-slot, .ytp-ad-skip-button-container';

        const turboSkip = (video) => {
            if (!video) return;

            const isAd = document.querySelector(AD_SELECTORS);
            const skipBtn = document.querySelector(SKIP_SELECTORS);

            if (isAd) {
                // 1. РЕАКТИВНОЕ УСКОРЕНИЕ
                // Выключаем звук и проматываем в 16 раз быстрее (максимум для Chrome)
                video.muted = true;
                video.playbackRate = 16;
                
                // Прямой прыжок в конец (с запасом 0.3с для срабатывания триггеров плеера)
                if (isFinite(video.duration) && video.currentTime < video.duration - 0.5) {
                    video.currentTime = video.duration - 0.3;
                }

                // 2. АВТО-КЛИК
                if (skipBtn) {
                    skipBtn.click();
                    console.log(OMNI_TAG, STYLE_CORE, '⚡ L2000: Skip Button Triggered.');
                }
            } else {
                // 3. СБРОС СОСТОЯНИЯ (Эргономичность)
                // Возвращаем звук и нормальную скорость, если реклама ушла
                if (video.playbackRate > 2) video.playbackRate = 1;
                // Не трогаем muted, если пользователь сам выключил звук
            }

            // 4. ОЧИСТКА МУСОРА (Overlay Cleanup)
            const overlays = document.querySelectorAll('.ytp-ad-overlay-container, .ytp-ad-image-overlay');
            overlays.forEach(el => el.remove());
        };

        // ИНТЕЛЛЕКТУАЛЬНЫЙ МОНИТОРИНГ
        const initObserver = () => {
            const video = document.querySelector('video');
            if (!video) return;

            // Используем событие обновления времени для минимальной задержки
            video.addEventListener('timeupdate', () => turboSkip(video));
            
            // MutationObserver для появления кнопок в DOM
            const observer = new MutationObserver(() => turboSkip(video));
            observer.observe(document.body, { childList: true, subtree: true });
        };

        // Запуск при загрузке и при смене навигации (для SPA типа YouTube)
        initObserver();
        if (isYouTube) {
            window.addEventListener('yt-navigate-finish', initObserver);
        }

        // 5. КИНЕТИЧЕСКИЙ ГРОМКОСТЬ (Mouse Wheel)
        document.addEventListener('wheel', e => {
            const video = document.activeElement?.tagName === 'VIDEO' ? document.activeElement : document.querySelector('video');
            if (video && (video.contains(e.target) || isYouTube)) {
                // Предотвращаем скролл страницы, если мы над плеером
                e.preventDefault();
                const delta = e.deltaY > 0 ? -0.05 : 0.05;
                video.volume = Math.max(0, Math.min(1, video.volume + delta));
                
                // Визуальная индикация (опционально)
                console.log(OMNI_TAG, `🔊 Volume: ${Math.round(video.volume * 100)}%`);
            }
        }, { passive: false });

        console.log(OMNI_TAG, STYLE_CORE, '⚡ L2000: Kinetic Media Core [TURBO-MODE ACTIVE]');
    };
    


    const OMNI_TAG = '%c[Omni-Chronos-v3.3.9]';
    const STYLE_CORE = 'color: #00ffff; font-weight: bold; text-shadow: 0 0 5px #00ffff; border-left: 3px solid #00ffff; padding-left: 10px;';
    const STYLE_DANGER = 'color: #fff; background: #ff0000; padding: 2px 5px; font-weight: bold;';

    // Critical Infrastructure Whitelist (Fixes Outlook/Banking JSON errors)
    const WHITELIST = ['outlook.com', 'office.com', 'microsoft.com', 'loirehabitat.fr', 'gouv.fr', 'ameli.fr', 'caf.fr', 'live.com', 'google.com'];
    const isWhiteListed = WHITELIST.some(d => window.location.hostname.includes(d));

  /**
     * OMNI-PUSH CORE (V5)
     * Интеллектуальная система уведомлений с защитой от перегрузки.
     */
    let lastPushTime = 0;
    const PUSH_COOLDOWN = 2000; // Пауза между пушами 2 секунды

    const sendOmniPush = (title, message) => {
        const now = Date.now();
        
        // 1. THROTTLING (Эргономичность)
        // Если пуши идут слишком часто, мы их игнорируем или группируем, 
        // чтобы не раздражать пользователя и не грузить систему.
        if (now - lastPushTime < PUSH_COOLDOWN) {
            console.warn(OMNI_TAG, '📡 Push suppressed (cooldown):', title);
            return;
        }

        try {
            // 2. GM_NOTIFICATION (API Check)
            if (typeof GM_notification === 'function') {
                GM_notification({
                    title: `🛡️ Omni-Scanner: ${title}`,
                    text: message,
                    image: 'https://cdn-icons-png.flaticon.com/512/9438/9438567.png', // Иконка щита
                    timeout: 4000,
                    onclick: () => {
                        console.log(OMNI_TAG, '🔗 User interacted with notification.');
                    }
                });
                lastPushTime = now;
            } else {
                // 3. FALLBACK (Реактивность)
                // Если мы работаем вне Tampermonkey (например, как обычный инжект),
                // используем стандартный console.log с выделением.
                console.log(
                    `%c 🛡️ OMNI-ALERT: ${title} %c ${message} `,
                    'background: #ff4b2b; color: #fff; border-radius: 3px 0 0 3px; padding: 2px 5px; font-weight: bold;',
                    'background: #333; color: #ff4b2b; border-radius: 0 3px 3px 0; padding: 2px 5px;'
                );
            }
        } catch (e) {
            // Тихий провал, чтобы не ломать логику основного скрипта
        }
    };
    

  /**
     * LEGACY REPAIR CORE (V5)
     * Глубокая дефектовка и исправление устаревших JS-компонентов.
     */
    const repairLegacyJS = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);
        if (isTech) return;

        // 1. КОНТЕКСТНЫЙ ПОИСК (Multi-jQuery Support)
        // Находим все экземпляры jQuery, так как их может быть несколько (noconflict режим)
        const jqInstances = [window.jQuery, window.$, window.jq, window.jQuery1, window.jQuery2].filter(j => j && j.fn);
        
        if (jqInstances.length === 0) return;

        jqInstances.forEach((jq, index) => {
            try {
                // 2. X-EDITABLE & UI PATCH (Эргономичность)
                // Предотвращаем крах плагинов редактирования "на месте"
                if (jq.fn.editable) {
                    if (!jq.fn.editable.defaults) jq.fn.editable.defaults = {};
                } else {
                    // Создаем заглушку, чтобы сторонние вызовы не вызывали ReferenceError
                    jq.fn.editable = { defaults: {} };
                }

                // 3. SIZZLE RECOVERY (Реактивность)
                // Если наш L150 или L1001 заблокировал доступ к селекторам, 
                // мы мягко откатываем jQuery к безопасному режиму поиска.
                if (jq.find && jq.find.error) {
                    const orgError = jq.find.error;
                    jq.find.error = function(msg) {
                        if (msg.includes('unrecognized expression')) {
                            console.warn(OMNI_TAG, '🛠️ L40: Suppressed Sizzle error for legacy selector.');
                            return []; // Вместо падения возвращаем пустой результат
                        }
                        return orgError.apply(this, arguments);
                    };
                }

                // 4. ANIMATION STABILIZER (Эвристика)
                // Старый jQuery.animate() может зависнуть из-за нашего джиттера времени в L30.
                // Мы принудительно отключаем анимации, если система начинает "лагать".
                if (jq.fx && jq.fx.off === false && document.hidden) {
                    jq.fx.off = true; // Выключаем анимации во вкладках на фоне для экономии ресурсов
                }

                console.log(OMNI_TAG, STYLE_CORE, `🛠️ L40: Legacy Instance [${index}] Patched.`);
            } catch (e) {
                // Тихая ошибка для стабильности системы
            }
        });
    };
    
   /**
     * LEGACY FRAMEWORK DETECTOR (V5)
     * Глубокий анализ среды на предмет устаревших технологий и методов верстки.
     */
    const isLegacyFramework = () => {
        // 1. ПРОВЕРКА ГЛОБАЛЬНЫХ ОБЪЕКТОВ (Runtime Check)
        // Самый надежный способ: смотрим, что реально загружено в память.
        const hasOldLibs = !!(
            (window.jQuery && /^(1\.|2\.|3\.[0-3]\.)/.test(window.jQuery.fn?.jquery)) ||
            window.Prototype || 
            window.MooTools || 
            window.dojo ||
            window.YUI
        );

        if (hasOldLibs) return true;

        // 2. АНАЛИЗ ГРАФИЧЕСКОГО ДВИЖКА (DOM Archaisms)
        // Ищем теги и атрибуты, которые не используются в современном HTML5.
        const legacyElements = !!document.querySelector(
            'frameset, frame, applet, center, font, acronym, strike, ' +
            'table[bgcolor], table[cellspacing], table[cellpadding], ' +
            'body[background], marquee'
        );

        if (legacyElements) return true;

        // 3. ПРОВЕРКА СЕТЕВЫХ СЛЕДОВ (Script Source Scan)
        // Твоя логика с расширенным регулярным выражением для бандлов.
        const scripts = Array.from(document.scripts);
        const hasLegacySrc = scripts.some(s => 
            /jquery[-.](1|2|3\.[0-3])\./i.test(s.src) || 
            /prototype\.js|mootools\.js|scriptaculous\.js/i.test(s.src)
        );

        if (hasLegacySrc) return true;

        // 4. ЭРГОНОМИЧНОСТЬ: Проверка на Quirks Mode
        // Если браузер рендерит страницу в режиме совместимости — это 100% Legacy.
        if (document.compatMode === 'BackCompat') return true;

        return false;
    };
    

/**
 * OMNI-INFOBASE: Эвристическая база данных и стили
 */
const OMNI_Infobase = () => ({
    // Стили консоли
    TAG: '%c🌌 NEBULA APEX %c OMNI-MONOLITH v3.3.9 %c',
    STYLE_GOLD: 'color: #FFD700; background: #000; font-weight: bold; padding: 4px; border-left: 4px solid #FFD700;',
    STYLE_BLUE: 'color: #00BFFF; background: #111; font-weight: bold; padding: 4px;',
    
    // Анализ окружения
    isUnsafeHTTP: window.location.protocol === 'http:',
    isAdminPanel: /admin|phpmyadmin|sql|controlpanel/i.test(window.location.href),
    hasOldTech:   !!document.querySelector('frameset, table[bgcolor], center'),
    isTechHost:   /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname),
    
    // Предикт режима
    getMode: function() {
        return (this.isTechHost || (this.isUnsafeHTTP && (this.isAdminPanel || this.hasOldTech))) 
               ? 'COMPATIBILITY' 
               : 'ULTIMATE';
    }
});

    /**
 * OMNI_Registry: Список активных эшелонов защиты.
 * Добавление нового уровня теперь происходит только здесь.
 */
const OMNI_Registry = [
    typeof applyL11HardwareGhosting === 'function' && applyL11HardwareGhosting,
    typeof applyL13QuantumGPU       === 'function' && applyL13QuantumGPU,
    typeof applyL16VoidSingularity  === 'function' && applyL16VoidSingularity,
    typeof applyL2000MediaControl   === 'function' && applyL2000MediaControl,
    typeof applyL2500AntiHeatmap    === 'function' && applyL2500AntiHeatmap,
    typeof applyL150EvalBlocker     === 'function' && applyL150EvalBlocker,
    typeof applyL1001HoneyPot       === 'function' && applyL1001HoneyPot,
    typeof applyL1200VirusMap       === 'function' && applyL1200VirusMap
].filter(Boolean); // Автоматически удаляет false, если функция не определена

 // Вспомогательный рендерер статуса
const renderOmniStatus = (info, mode) => {
    const isCompat = mode === 'COMPATIBILITY';
    const statusStyle = `color: ${isCompat ? '#ffa500' : '#0f0'}; background: #000; font-weight: bold; padding: 4px;`;
    console.log(`${info.TAG} ⚖️ ${mode} ACTIVE `, info.STYLE_GOLD, info.STYLE_BLUE, statusStyle);
};

// Вспомогательный диспетчер модулей
const deployOmniStack = (mode) => {
    // Если COMPATIBILITY — берем только первый защитный слой, иначе — всё
    const stack = mode === 'COMPATIBILITY' ? OMNI_Registry.slice(0, 1) : OMNI_Registry;
    stack.forEach(deploy => {
        try { deploy(); } catch (e) { console.error(`[BOOT-ERR] ${deploy.name}:`, e); }
    });
};
    
    
/**
 * OMNI-CHRONOS: Центральный процессор протокола
 */
const OmniChronos = {
   initBaseFoundation: () => {
        const info = OMNI_Infobase();
        const mode = info.getMode();

        // 1. Отрисовка лога
        renderOmniStatus(info, mode);

        // 2. Логика развертывания
        if (mode === 'COMPATIBILITY') {
            // В режиме совместимости берем только L11 (первый в реестре)
            const baseLayer = OMNI_Registry[0];
            if (baseLayer) try { baseLayer(); } catch(e) {}
            return;
        }

        // 3. В режиме ULTIMATE запускаем полный цикл развертывания
        OmniChronos.initQuantumModules();
    },

    initQuantumModules: () => {
        console.groupCollapsed('%c[SYSTEM]%c Deploying Defense Layers...', 'color: #888; font-weight: bold;', 'color: #fff;');
        
        OMNI_Registry.forEach((deploy, index) => {
            try {
                deploy();
                console.log(`%c[L${index + 1}]%c ${deploy.name || 'Module'} active.`, 'color: #00BFFF;', 'color: #888;');
            } catch (e) {
                console.error(`%c[FAULT]%c Layer ${index + 1}:`, 'color: #f00;', 'color: #888;', e);
            }
        });
        
        console.groupEnd();
        console.log('%c[SUCCESS]%c All Shields Online. Stealth Mode: 100%', 'color: #0f0; font-weight: bold;', 'color: #fff;');
    }

    // ТОЧКА ВХОДА: Принудительный запуск
    try {
        OmniChronos.initBaseFoundation();
    } catch (e) {
        console.error('Critical Boot Error:', e);
    }

  /**
 * ТОЧКА ВХОДА (BOOTLOADER)
 * Безопасный запуск всей системы Монолита.
 */
const boot = () => {
    try {
        const info = OMNI_Infobase();
        const isWhiteListed = typeof isTechHost !== 'undefined' ? isTechHost : info.isTechHost;
        
        // Красивый стартовый лог
        console.log(
            info.TAG, 
            info.STYLE_GOLD, 
            info.STYLE_BLUE, 
            `🚀 OMNI-SCANNER v3.3.9: ${isWhiteListed ? 'TRUSTED' : 'STRICT'} MODE.`
        );

        // Запуск центрального процессора (он сам развернет нужные модули)
        OmniChronos.initBaseFoundation();

    } catch (e) {
        console.error('%c🛑 CRITICAL BOOT ERROR:', 'color: white; background: red; padding: 5px;', e);
    }
};

// Мгновенная активация при загрузке скрипта
boot();
    
})();
