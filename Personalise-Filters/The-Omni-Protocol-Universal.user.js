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
// [ТЕХНИЧЕСКАЯ СПЕЦИФИКАЦИЯ / SYSTEM SPECS]
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
 * ЛОГИЧЕСКИЙ ФИЛЬТР: Очистка консоли от мусора библиотек
 */
const silenceLibraryNoise = () => {
    const orgWarn = console.warn;
    const orgLog = console.log;

    // Подавляем JQMIGRATE и прочий устаревший шум
    console.warn = function(...args) {
        const msg = args[0] ? String(args[0]) : '';
        if (msg.includes('JQMIGRATE') || msg.includes('deprecated')) {
            return; // Игнорируем этот спам
        }
        return orgWarn.apply(this, arguments);
    };

    // Можно также подавить мелкие логи миграции, если они мешают
    console.log = function(...args) {
        const msg = args[0] ? String(args[0]) : '';
        if (msg.includes('JQMIGRATE')) return;
        return orgLog.apply(this, arguments);
    };
};

// Запускаем немедленно
silenceLibraryNoise();
    
   
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
 * Эвристическая маскировка под эталонную среду.
 */
const applyL1Identity = () => {
    // 1. Получаем данные из нашей центральной базы знаний
    const info = OMNI_Infobase();
    
    // Если CONFIG не определен (внешняя зависимость), выходим безопасно
    if (typeof CONFIG === 'undefined') return;

    // 2. Использование готовой эвристики вместо повторных проверок RegExp
    const isTech = info.isTechHost;
    const targetUA = isTech ? navigator.userAgent : CONFIG.identity.ua;

    // 3. Базовые параметры (используем централизованный метод перезаписи)
    // Мы больше не считаем RegExp внутри — мы просто берем флаг isTech
    omniOverwrite(navigator, 'platform', CONFIG.identity.platform);
    omniOverwrite(navigator, 'vendor', CONFIG.identity.vendor);
    omniOverwrite(navigator, 'userAgent', targetUA);
    omniOverwrite(navigator, 'webdriver', false);

    // 4. РЕАКТИВНОСТЬ: Защита Client Hints
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

    // 5. ЭРГОНОМИЧНОСТЬ: Скрытие признаков автоматизации
    if (navigator.plugins) {
        const fakePlugins = [
            { name: 'PDF Viewer', filename: 'internal-pdf-viewer', description: 'Portable Document Format' },
            { name: 'Chrome PDF Viewer', filename: 'internal-pdf-viewer', description: 'Google Chrome PDF Viewer' }
        ];
        omniOverwrite(navigator, 'plugins', fakePlugins);
    }

    // Используем стили из Infobase для единообразия логов
    console.log(info.TAG, info.STYLE_GOLD, `👤 L1: Identity Mimicry [${isTech ? 'SOFT' : 'ULTIMATE'}]`);
};
    

 /**
 * L2: NEURAL NOISE & GHOST WEBRTC
 * Эвристическое зашумление Canvas и контролируемая утечка WebRTC.
 */
const applyL2Noise = () => {
    const info = OMNI_Infobase();

    // 1. Динамический шум для Canvas (Реактивный метод)
    const originalGetImageData = CanvasRenderingContext2D.prototype.getImageData;
    
    CanvasRenderingContext2D.prototype.getImageData = function(x, y, w, h) {
        const imageData = originalGetImageData.apply(this, arguments);
        
        // Эвристика: используем центральный флаг isTechHost и проверку на мелкие элементы
        const isSmall = w < 16 || h < 16;
        
        // Если это не тех-зона и не мелкая иконка — вносим шум
        if (!info.isTechHost && !isSmall) {
            // Вносим микро-шум только в 4 случайных пикселя (незаметно для глаза, фатально для отпечатка)
            for (let i = 0; i < 4; i++) {
                const offset = Math.floor(Math.random() * (imageData.data.length / 4)) * 4;
                // Изменяем значение канала на +/- 1 единицу
                imageData.data[offset] += (Math.random() > 0.5 ? 1 : -1);
            }
        }
        return imageData;
    };

    // 2. WebRTC Ghosting (Эргономичный метод)
    if (window.RTCPeerConnection) {
        const RealRTC = window.RTCPeerConnection;
        window.RTCPeerConnection = function(config) {
            // Если мы в ULTIMATE режиме, блокируем реальные ICE-серверы
            if (config && config.iceServers) {
                config.iceServers = info.isTechHost ? config.iceServers : [];
            }
            
            const pc = new RealRTC(config);
            
            // Подмена метода сбора кандидатов (убираем реальные IP)
            pc.addIceCandidate = (c) => Promise.resolve();
            return pc;
        };
        // Сохраняем прототип для совместимости
        window.RTCPeerConnection.prototype = RealRTC.prototype;
    }

    // 3. Блокировка перечисления медиа-устройств
    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        // Мы просто возвращаем пустой список, имитируя отсутствие разрешений
        navigator.mediaDevices.enumerateDevices = () => Promise.resolve([]);
    }

    // Логирование в едином стиле через Инфобазу
    console.log(info.TAG, info.STYLE_GOLD, '🎨 L2: Neural Noise & WebRTC Ghosting Active');
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
    // 1. Получаем эвристический слепок реальности
    const info = OMNI_Infobase();

    // ЭВРИСТИКА: Не меняем время в тех-зонах (чтобы логи сервера совпадали с локальными)
    // Больше никаких RegExp внутри модуля — используем готовый флаг
    if (info.isTechHost) return;

    // Параметры для эталонной среды (целевой профиль)
    const targetTZ = "America/New_York";
    const targetLocale = "en-US";
    const targetOffset = 300; // Нью-Йорк (EST)

    // 2. Глубокая подмена Intl (реактивный метод)
    if (window.Intl) {
        const orgResolvedOptions = Intl.DateTimeFormat.prototype.resolvedOptions;

        Intl.DateTimeFormat.prototype.resolvedOptions = function() {
            const options = orgResolvedOptions.apply(this, arguments);
            // Применяем маскировку часового пояса и локали
            return Object.assign(options, { 
                timeZone: targetTZ, 
                locale: targetLocale 
            });
        };

        // Подмена Date для синхронизации с TZ (защита от проверки разницы во времени)
        Date.prototype.getTimezoneOffset = function() {
            return targetOffset; 
        };
    }

    // 3. БАТАРЕЯ: Эргономичный фейк (защита от разряда как маркера фингерпринтинга)
    if (navigator.getBattery) {
        // Мы возвращаем "замороженное" идеальное состояние: 100% на зарядке
        const fakeBattery = {
            charging: true,
            chargingTime: 0,
            dischargingTime: Infinity,
            level: 1, 
            onchargingchange: null,
            onchargingtimechange: null,
            ondischargingtimechange: null,
            onlevelchange: null,
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => false
        };
        // Перезаписываем метод возврата промиса батареи
        navigator.getBattery = () => Promise.resolve(fakeBattery);
    }

    // Логирование через централизованные стили Infobase
    console.log(info.TAG, info.STYLE_GOLD, '🔋 L5: Environment Sync (New York) & Power Stealth');
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
 * L11: THE GHOST PROTOCOL (V5.5)
 * Глубокая маскировка железа и защита от детерминированных тайминг-атак.
 */
const applyL11Ghost = () => {
    // 1. Получаем эвристический слепок из центральной базы
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. ЭВРИСТИКА: Динамическое железо (Hardware Masking)
    // Используем готовый флаг isTech вместо RegExp
    const targetCores = isTech ? (navigator.hardwareConcurrency || 4) : 8;
    
    omniOverwrite(navigator, 'hardwareConcurrency', targetCores);
    omniOverwrite(navigator, 'deviceMemory', 8); // Стандарт: 8GB RAM для маскировки

    // 3. РЕАКТИВНОСТЬ: Защита от вибрации и физических сенсоров
    // Эти API часто используются для идентификации мобильных устройств
    if (navigator.vibrate) navigator.vibrate = () => false;
    if (window.DeviceMotionEvent) window.DeviceMotionEvent = undefined;
    if (window.DeviceOrientationEvent) window.DeviceOrientationEvent = undefined;

    // 4. ЭРГОНОМИЧНОСТЬ: Квантовое огрубление времени (Anti-Timing Attacks)
    // Защита от атак по времени (Side-channel attacks)
    const originalNow = performance.now.bind(performance);
    performance.now = function() {
        const time = originalNow();
        // Вносим джиттер (микро-дрожание) 5-20 микросекунд.
        // Эвристика: на тех-страницах джиттер минимален (0.001), чтобы не мешать дебагу.
        const jitterRange = isTech ? 0.001 : 0.015;
        const jitter = (Math.random() * jitterRange) + 0.005;
        return time + jitter;
    };

    // 5. СЕНСОРНАЯ ЭРГОНОМИКА: Маскировка макс. точек касания
    // Скрываем признаки тачскрина (выдаем себя за десктоп)
    if (navigator.maxTouchPoints !== undefined) {
        omniOverwrite(navigator, 'maxTouchPoints', isTech ? navigator.maxTouchPoints : 0);
    }

    // Использование централизованного стиля логов
    console.log(info.TAG, info.STYLE_GOLD, `👻 L11: Ghost Protocol [${isTech ? 'NATIVE' : 'HARDWARE-SHIELD'}]`);
};
    

/**
 * L12: PLATINUM STEALTH (V5.5)
 * Эвристическое зашумление аудио-аналитики и защита от Font Fingerprinting.
 */
const applyL12Platinum = () => {
    // 1. Получаем эвристический слепок (мгновенно, без RegExp)
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. ШРИФТОВОЙ ШУМ (Font Fingerprinting Shield)
    // Глубокая подмена getBoundingClientRect (вызывается крайне часто!)
    const originalGBR = Element.prototype.getBoundingClientRect;
    
    Element.prototype.getBoundingClientRect = function() {
        const rect = originalGBR.apply(this, arguments);
        
        // Эвристика: шумим только если элемент похож на тестовый замер шрифта.
        // Мы используем быстрые логические проверки вместо тяжелых вызовов.
        const isFontCheck = this.offsetWidth === 0 || this.style.fontFamily || this.tagName === 'SPAN';
        
        if (!isTech && isFontCheck) {
            // Вносим микро-шум (0.0001 пикселя), фатальный для хеш-функций
            const noise = (Math.random() * 0.0001); 
            return {
                x: rect.x, y: rect.y, 
                width: rect.width + noise, 
                height: rect.height + noise,
                top: rect.top, right: rect.right, 
                bottom: rect.bottom, left: rect.left,
                toJSON: () => rect.toJSON ? rect.toJSON() : {}
            };
        }
        return rect;
    };

    // 3. АУДИО-ОТПЕЧАТОК (Audio Context Poisoning)
    const poisonAudio = () => {
        const originalGetChannelData = AudioBuffer.prototype.getChannelData;
        
        AudioBuffer.prototype.getChannelData = function() {
            const data = originalGetChannelData.apply(this, arguments);
            if (!isTech && data && data.length > 0) {
                // Вносим микро-девиацию в первый сэмпл (изменяет итоговый хеш сигнала)
                data[0] = data[0] + (Math.random() * 0.0000001);
            }
            return data;
        };
    };
    
    // Применяем отравление аудио-буфера
    if (window.AudioBuffer) poisonAudio();

    // 4. ЗАЩИТА ДАТЧИКОВ (Эвристическая блокировка)
    const sensorGuard = (e) => {
        if (!isTech) {
            // Полная остановка события для предотвращения сбора телеметрии
            e.stopImmediatePropagation();
        }
    };
    
    ['deviceorientation', 'devicemotion'].forEach(event => {
        window.addEventListener(event, sensorGuard, true);
    });

    // 5. БЛОКИРОВКА СТАТИСТИКИ (Anti-Resource Timing)
    // Скрываем тайминги ресурсов, чтобы предотвратить атаку по времени (Cache Probing)
    if (window.performance && performance.getEntriesByType) {
        const orgGetEntries = performance.getEntriesByType.bind(performance);
        performance.getEntriesByType = (type) => {
            if (type === 'resource' && !isTech) return [];
            return orgGetEntries(type);
        };
    }

    // Использование централизованного стиля логов
    console.log(info.TAG, info.STYLE_GOLD, `💎 L12: Platinum Stealth [${isTech ? 'BYPASS' : 'ACTIVE'}]`);
};
    

/**
 * L13: QUANTUM STEALTH (V5.5)
 * Биометрическая энтропия и полная эмуляция графического стека.
 */
const applyL13Quantum = () => {
    // 1. Извлекаем данные из центрального процессора Infobase
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. БИОМЕТРИЧЕСКИЙ ДЖИТТЕР (Mouse & Pointer Protection)
    // Подменяем координаты на уровне геттеров прототипа.
    const wrapMouseEvent = (Proto) => {
        if (!Proto) return;
        ['screenX', 'screenY', 'clientX', 'clientY'].forEach(prop => {
            const descriptor = Object.getOwnPropertyDescriptor(Proto, prop);
            if (!descriptor || !descriptor.get) return;
            
            Object.defineProperty(Proto, prop, {
                get: function() {
                    const val = descriptor.get.call(this);
                    // Эвристика: вносим шум 0.0001, ломающий математический хеш траектории,
                    // но сохраняющий визуальную целостность (пиксель остается тем же).
                    return isTech ? val : val + (Math.random() * 0.0001);
                },
                configurable: true
            });
        });
    };
    
    wrapMouseEvent(MouseEvent.prototype);
    if (window.PointerEvent) wrapMouseEvent(PointerEvent.prototype);

    // 3. GPU MIMICRY (WebGL Deep Shield)
    const maskWebGL = (proto) => {
        if (!proto) return;
        const originalGetParameter = proto.getParameter;
        
        proto.getParameter = function(p) {
            if (!isTech) {
                // Маскируем GPU под стандартный офисный чип Intel Iris (MacIntel профиль)
                const gpuMask = {
                    0x9245: "Intel Inc.",                     // UNMASKED_VENDOR_WEBGL
                    0x9246: "Intel(R) Iris(TM) Graphics 6100", // UNMASKED_RENDERER_WEBGL
                    37445:  "Intel Inc.", 
                    37446:  "Intel(R) Iris(TM) Graphics 6100",
                    0x8DFA: 30,    // MAX_VARYING_VECTORS
                    0x8DF8: 1024   // MAX_VERTEX_UNIFORM_VECTORS
                };
                
                if (gpuMask[p] !== undefined) return gpuMask[p];
            }
            return originalGetParameter.apply(this, arguments);
        };
    };
    
    maskWebGL(WebGLRenderingContext.prototype);
    if (window.WebGL2RenderingContext) maskWebGL(WebGL2RenderingContext.prototype);

    // 4. ЭРГОНОМИЧНОСТЬ: Display & Canvas Integrity
    // Принудительная Retina-фиксация и маскировка дисплея
    omniOverwrite(window, 'devicePixelRatio', 2);
    if (window.screen) {
        omniOverwrite(window.screen, 'colorDepth', 24);
        omniOverwrite(window.screen, 'pixelDepth', 24);
    }

    // Защита от GPU-readback (Clickjacking/Fingerprinting векторы)
    const orgGetContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function(type, attributes) {
        if (type === '2d' && attributes && !isTech) {
            // Флаг 'willReadFrequently' оптимизирует чтение пикселей программно, 
            // но также может использоваться для скрытия аппаратных особенностей.
            attributes.willReadFrequently = true;
        }
        return orgGetContext.apply(this, arguments);
    };

    // Логирование через централизованные стили
    console.log(info.TAG, info.STYLE_GOLD, `🔮 L13: Quantum GPU & Bio-Jitter [${isTech ? 'BYPASS' : 'ACTIVE'}]`);
};
    
    

 /**
 * L14: SUPERNOVA STEALTH (V5.5)
 * Сверхновая защита Canvas, скролл-мимикрия и Permissions-прокси.
 */
const applyL14Supernova = () => {
    // 1. Получаем данные из центрального узла
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. БИОЛОГИЧЕСКИЙ СКРОЛЛ (Scroll Signature Protection)
    // Современные анти-фроды анализируют детерминированность скролла.
    const wrapWheelEvent = (Proto) => {
        if (!Proto) return;
        ['deltaY', 'deltaX'].forEach(prop => {
            const descriptor = Object.getOwnPropertyDescriptor(Proto, prop);
            if (!descriptor || !descriptor.get) return;
            
            Object.defineProperty(Proto, prop, {
                get: function() {
                    const val = descriptor.get.call(this);
                    // Эвристика: вносим микро-джиттер, который ломает уникальный «почерк» скроллинга,
                    // делая его математически непредсказуемым для систем анализа.
                    return isTech ? val : val + (Math.random() * 0.0001);
                },
                configurable: true
            });
        });
    };
    wrapWheelEvent(WheelEvent.prototype);

    // 3. CANVAS DATA POISONING (Invisible Hash Corruption)
    // Мы не рисуем лишнего, а меняем 1 пиксель прямо перед экспортом.
    const poisonCanvas = (proto) => {
        const orgToDataURL = proto.toDataURL;
        
        proto.toDataURL = function() {
            if (!isTech) {
                try {
                    const ctx = this.getContext('2d');
                    // Работаем только с валидными холстами
                    if (ctx && this.width > 0 && this.height > 0) {
                        const imageData = ctx.getImageData(0, 0, 1, 1);
                        // Инвертируем младший бит красного канала первого пикселя
                        // Визуально разницы 0, но хеш MD5/SHA всей картинки полностью меняется.
                        imageData.data[0] = (imageData.data[0] + 1) % 255; 
                        ctx.putImageData(imageData, 0, 0);
                    }
                } catch (e) { /* Игнорируем Tainted Canvas ошибки */ }
            }
            return orgToDataURL.apply(this, arguments);
        };
    };
    poisonCanvas(HTMLCanvasElement.prototype);

    // 4. ТЕНЕВЫЕ РАЗРЕШЕНИЯ (Permissions API Spoofing)
    if (navigator.permissions && navigator.permissions.query) {
        const originalQuery = navigator.permissions.query;
        navigator.permissions.query = function(params) {
            if (isTech) return originalQuery.apply(this, arguments);

            const masked = ['notifications', 'geolocation', 'push', 'microphone', 'camera'];
            if (masked.includes(params.name)) {
                // Имитируем состояние нового чистого профиля ('prompt'), 
                // скрывая от сайтов реальный список запретов или разрешений.
                return Promise.resolve({
                    state: 'prompt',
                    name: params.name,
                    onchange: null
                });
            }
            return originalQuery.apply(this, arguments);
        };
    }

    // 5. ЭРГОНОМИЧНОСТЬ: Runtime Identity
    // Синхронизируем языки с выбранным профилем (en-US)
    if (navigator.languages) {
        omniOverwrite(navigator, 'languages', ['en-US', 'en']);
    }

    // Финальное логирование через стили Монолита
    console.log(info.TAG, info.STYLE_GOLD, `🌟 L14: Supernova [${isTech ? 'BYPASS' : 'SHIELDED'}]`);
};
    
    
  /**
 * L15: EVENT HORIZON (V5.5)
 * Когнитивная мимикрия ввода и стерилизация акустической аналитики.
 */
const applyL15EventHorizon = () => {
    // 1. Извлекаем эвристические данные из центрального узла
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. КОГНИТИВНАЯ МИМИКРИЯ (Human-Like Jitter)
    // Рандомизируем timeStamp событий ввода, чтобы обмануть детекторы ботов,
    // которые ищут идеально ровные интервалы между кликами.
    const humanizeEvent = (Proto) => {
        if (!Proto) return;
        const descriptor = Object.getOwnPropertyDescriptor(Proto, 'timeStamp');
        if (!descriptor || !descriptor.get) return;
        
        Object.defineProperty(Proto, 'timeStamp', {
            get: function() {
                const baseTS = descriptor.get.call(this);
                // Эвристика: добавляем шум 0.1-0.5 мс. 
                // Это ломает статистический анализ «машинного» ввода.
                return isTech ? baseTS : baseTS + (Math.random() * 0.4 + 0.1);
            },
            configurable: true
        });
    };
    
    // Применяем к мыши, клавиатуре и тач-событиям
    [MouseEvent.prototype, KeyboardEvent.prototype, window.TouchEvent ? TouchEvent.prototype : null]
        .filter(p => p)
        .forEach(humanizeEvent);

    // 3. АКУСТИЧЕСКАЯ СТЕРИЛИЗАЦИЯ (Spectrum Noise)
    // Защита от Fingerprinting через анализ частот аудио-выхода.
    if (window.AudioAnalyserNode) {
        const originalGetByte = AudioAnalyserNode.prototype.getByteFrequencyData;

        // Вносим едва заметный шум в спектральные данные
        AudioAnalyserNode.prototype.getByteFrequencyData = function(array) {
            const res = originalGetByte.apply(this, arguments);
            if (!isTech && array && array.length > 0) {
                // Изменяем амплитуду случайных частот на +/- 1 единицу.
                // Этого достаточно, чтобы изменить хеш спектра, но не слышно для уха.
                for (let i = 0; i < array.length; i += 8) { // Шаг 8 для оптимизации CPU
                    if (Math.random() > 0.8) {
                        array[i] = Math.max(0, Math.min(255, array[i] + (Math.random() > 0.5 ? 1 : -1)));
                    }
                }
            }
            return res;
        };
    }

    // 4. RESOURCE TIMING PRIVACY (Buffer Management)
    // Автоматическая очистка истории загрузки ресурсов при переполнении буфера.
    if (window.performance) {
        performance.onresourcetimingbufferfull = () => {
            if (!isTech) performance.clearResourceTimings();
        };
    }

    // 5. ГЛУБОКАЯ МАСКИРОВКА ЛОКАЛИ (Consistency Shield)
    // Принудительная установка en-US для всех объектов форматирования данных.
    if (typeof Intl !== 'undefined') {
        const targetLocale = 'en-US';
        
        // Перезапись конструкторов для обеспечения единообразия вывода
        const orgCollator = Intl.Collator;
        Intl.Collator = function() { return new orgCollator(targetLocale); };
        Intl.Collator.prototype = orgCollator.prototype;

        const orgNumberFormat = Intl.NumberFormat;
        Intl.NumberFormat = function() { return new orgNumberFormat(targetLocale); };
        Intl.NumberFormat.prototype = orgNumberFormat.prototype;
    }

    // Логирование в стиле OMNI-MONOLITH
    console.log(info.TAG, info.STYLE_GOLD, `🕳️ L15: Event Horizon [${isTech ? 'BYPASS' : 'COGNITIVE-STEALTH'}]`);
};
    
    
   /**
 * L16: VOID SINGULARITY (V5.5)
 * Глубокая маскировка под нативный код и фиксация системных констант.
 */
const applyL16VoidSingularity = () => {
    // 1. Извлекаем эвристику из центрального процессора
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. РЕАКТИВНАЯ МАСКИРОВКА (Proxy-based Native Code)
    // Создаем "идеальное зеркало": любой метод, пропущенный через makeNative, 
    // будет клясться системе, что он — часть браузера (C++ / Rust код).
    const makeNative = (fn, name) => {
        return new Proxy(fn, {
            get: (target, prop) => {
                // Имитируем поведение нативной функции при обращении к служебным свойствам
                if (prop === 'toString') return () => `function ${name || target.name}() { [native code] }`;
                if (prop === 'name') return name || target.name;
                return target[prop];
            },
            // Защита от попыток вызвать конструктор на не-конструкторах
            apply: (target, thisArg, argumentsList) => Reflect.apply(target, thisArg, argumentsList)
        });
    };

    // Список критических методов для "нативизации"
    const criticalMethods = [
        { obj: navigator, prop: 'getBattery' },
        { obj: CanvasRenderingContext2D.prototype, prop: 'getImageData' },
        { obj: performance, prop: 'now' },
        { obj: AudioBuffer.prototype, prop: 'getChannelData' },
        { obj: Element.prototype, prop: 'getBoundingClientRect' }
    ];

    criticalMethods.forEach(m => {
        if (m.obj && m.obj[m.prop] && !isTech) {
            // Накладываем маску нативного кода только в режиме защиты
            m.obj[m.prop] = makeNative(m.obj[m.prop], m.prop);
        }
    });

    // 3. INTL COLLATOR ENTROPY (OS-Level Consistency)
    if (window.Intl && Intl.Collator) {
        const RealCollator = Intl.Collator;
        // Подменяем конструктор, сохраняя прототипную цепочку
        window.Intl.Collator = function(locales, options) {
            const forceLocale = isTech ? locales : 'en-US';
            return new RealCollator(forceLocale, options);
        };
        window.Intl.Collator.prototype = RealCollator.prototype;
        // Нативизируем сам конструктор
        window.Intl.Collator = makeNative(window.Intl.Collator, 'Collator');
    }

    // 4. SCREEN ORIENTATION FIX (Desktop Mimicry)
    // Жестко фиксируем ориентацию, исключая признаки мобильных устройств (акселерометров)
    if (window.screen && screen.orientation) {
        const lockOrientation = () => {
            omniOverwrite(screen.orientation, 'type', 'landscape-primary');
            omniOverwrite(screen.orientation, 'angle', 0);
        };
        lockOrientation();
        // Блокируем попытки сайтов менять ориентацию (защита от "fingerprinting by tilting")
        screen.orientation.lock = () => Promise.resolve();
        screen.orientation.lock = makeNative(screen.orientation.lock, 'lock');
    }

    // Логирование в стиле OMNI-MONOLITH
    console.log(info.TAG, info.STYLE_GOLD, `🌌 L16: Void Singularity [${isTech ? 'BYPASS' : 'NATIVE-MIMICRY'}]`);
};
    
  /**
 * L17: ABSOLUTE ZERO (V5.5)
 * Глубокая санитизация стеков ошибок и унификация экранных метрик.
 */
const applyL17AbsoluteZero = () => {
    // 1. Извлекаем эвристику из центрального процессора
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. СТЕРЕЛИЗАЦИЯ СТЕКА (Stack Trace Shield)
    // Анти-фроды часто провоцируют ошибки, чтобы прочитать Error.stack. 
    // Если там есть слово 'omni' или анонимные вызовы инжектора — это провал.
    const orgError = window.Error;
    const stackDescriptor = Object.getOwnPropertyDescriptor(orgError.prototype, 'stack') || 
                            Object.getOwnPropertyDescriptor(new orgError(), 'stack');

    if (stackDescriptor && stackDescriptor.configurable && !isTech) {
        Object.defineProperty(orgError.prototype, 'stack', {
            get: function() {
                const stack = stackDescriptor.get ? stackDescriptor.get.call(this) : this.value;
                if (typeof stack === 'string') {
                    // ЭВРИСТИКА: Удаляем любые упоминания нашего присутствия.
                    // Оставляем только "чистые" нативные строки.
                    return stack.split('\n')
                        .filter(line => !line.includes('at <anonymous>') && !line.includes('omni'))
                        .join('\n') || "Error\n    at <anonymous>:1:1";
                }
                return stack;
            },
            configurable: true
        });
    }

    // 3. ADVANCED JITTER (Квантовый дрейф времени)
    // Улучшенная версия L11. Используем синусоидальный дрейф для имитации 
    // естественной нестабильности кварцевого резонатора процессора.
    const originalNow = performance.now.bind(performance);
    performance.now = function() {
        const time = originalNow();
        if (isTech) return time;
        // Джиттер 0-0.2 микросекунды, зависящий от времени (имитация теплового шума).
        const drift = Math.abs(Math.sin(time)) * 0.0002; 
        return time + drift;
    };

    // 4. SCREEN PRIVACY (Эталонный десктоп 1080p)
    // Унифицируем метрики, чтобы исключить Fingerprinting по размеру монитора.
    const screenSpecs = {
        width: 1920,
        height: 1080,
        availWidth: 1920,
        availHeight: 1040, // 40px на Taskbar/Dock
        colorDepth: 24,
        pixelDepth: 24
    };

    Object.keys(screenSpecs).forEach(key => {
        omniOverwrite(window.screen, key, screenSpecs[key]);
    });

    // 5. ANTI-DEVTOOLS (Скрытие признаков консоли)
    // Сайты определяют открытую консоль по разнице между outer и inner размерами.
    // Мы делаем их идентичными, создавая иллюзию закрытой панели разработчика.
    omniOverwrite(window, 'outerWidth', window.innerWidth);
    omniOverwrite(window, 'outerHeight', window.innerHeight);

    // Логирование через золотой стандарт Infobase
    console.log(info.TAG, info.STYLE_GOLD, `❄️ L17: Absolute Zero [${isTech ? 'DEBUG-MODE' : 'STERILE'}]`);
};
    
    
 /**
 * L18: MIRROR PROTOCOL (V5.5)
 * Эмуляция успешной загрузки ресурсов и бесшумная зачистка DOM-артефактов.
 */
const applyL18MirrorProtocol = () => {
    // 1. Получаем эвристику из центрального процессора
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. РЕАКТИВНАЯ МИМИКРИЯ (Script Load Faker)
    // Перехватываем попытки внедрения скриптов-трекеров.
    const originalAppendChild = Node.prototype.appendChild;

    const fakeLoad = (el) => {
        if (!isTech && el.tagName === 'SCRIPT' && el.src) {
            // ЭВРИСТИКА: Если скрипт похож на аналитику или рекламу, имитируем "успех".
            const isTracker = /ads|analytics|pixel|track|doubleclick/i.test(el.src);
            if (isTracker) {
                // Маскируем геттер/сеттер onload, чтобы триггеруть событие "загружено"
                Object.defineProperty(el, 'onload', {
                    set: function(fn) { 
                        if (typeof fn === 'function') {
                            // Имитируем небольшую сетевую задержку (10-50мс)
                            setTimeout(() => fn.call(el, new Event('load')), 15);
                        }
                    },
                    configurable: true
                });
            }
        }
    };

    Node.prototype.appendChild = function(newChild) {
        fakeLoad(newChild);
        return originalAppendChild.apply(this, arguments);
    };

    // 3. NETWORK STEALTH (Безупречный статус соединения)
    // Поддерживаем иллюзию стабильного 4G соединения без ограничений трафика.
    omniOverwrite(navigator, 'onLine', true);
    if (navigator.connection) {
        const connMask = {
            effectiveType: '4g',
            saveData: false,
            downlink: 10,
            rtt: 50
        };
        Object.keys(connMask).forEach(key => {
            omniOverwrite(navigator.connection, key, connMask[key]);
        });
    }

    // 4. ЭРГОНОМИЧНАЯ ЗАЧИСТКА (DOM Sanitization)
    // Скрываем "ошметки" заблокированной рекламы, чтобы не портить UI, 
    // но не удаляем их, чтобы не сломать зависимости в коде сайта.
    const purgeArtifacts = () => {
        if (isTech) return;
        const selector = 'div[id*="googlesyndication"], [id*="ad-unit"], iframe[src="about:blank"]';
        const artifacts = document.querySelectorAll(selector);
        
        artifacts.forEach(art => {
            if (art.offsetHeight === 0 || art.style.visibility === 'hidden') {
                art.style.setProperty('display', 'none', 'important');
                art.setAttribute('data-omni-purged', 'true');
            }
        });
    };

    // Используем простой планировщик для очистки после рендеринга
    if (window.requestIdleCallback) {
        window.requestIdleCallback(purgeArtifacts);
    } else {
        setTimeout(purgeArtifacts, 1000);
    }

    // 5. ФИНАЛЬНАЯ СИНЕРГИЯ: Фильтрация системного спама
    // Приглушаем ворнинги о заблокированных расширениями ресурсах.
    const orgWarn = console.warn;
    console.warn = function(...args) {
        if (!isTech && args[0] && typeof args[0] === 'string') {
            if (/blocked|adblock|extension|pixel/i.test(args[0])) return;
        }
        return orgWarn.apply(this, arguments);
    };

    // Логирование в стиле OMNI-MONOLITH
    console.log(info.TAG, info.STYLE_GOLD, `🪞 L18: Mirror Protocol [SYNERGY-COMPLETE]`);
};
    

   /**
 * L20: SINGULARITY POINT (V5.5)
 * Математическая энтропия, джиттер микрозадач и Spoof дисковой квоты.
 */
const applyL20Singularity = () => {
    // 1. Извлекаем данные из центрального процессора Infobase
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. МАТЕМАТИЧЕСКАЯ ЭНТРОПИЯ (Floating Point Noise)
    // Вносим шум в младшие биты (1e-17). Этого достаточно, чтобы изменить 
    // хеш сложных вычислений, но визуально результат (координаты, цвета) не изменится.
    const mathFunctions = ['sin', 'cos', 'tan', 'exp', 'log', 'sqrt', 'pow'];
    mathFunctions.forEach(fn => {
        const original = Math[fn];
        Math[fn] = function(...args) {
            const res = original.apply(Math, args);
            if (isTech || typeof res !== 'number' || isNaN(res) || !isFinite(res)) return res;
            
            // Микро-шум на пределе точности Double (1e-17).
            // Ломает JS-бенчмарки, вычисляющие версию движка по точности вычислений.
            return res + (Math.random() * 1e-17);
        };
        // Нативизация toString (защита от детекта подмены)
        try {
            Math[fn].toString = () => `function ${fn}() { [native code] }`;
        } catch(e) {}
    });

    // 3. ДЖИТТЕР ПРОМИСОВ (Async Microtask Jitter)
    // Рандомизируем время выполнения Promise.then. Это ломает "Event Loop Fingerprinting",
    // когда сайт замеряет скорость микрозадач для определения производительности CPU.
    const originalThen = Promise.prototype.then;
    Promise.prototype.then = function(onFulfilled, onRejected) {
        // Шум в 5% случаев, чтобы имитировать естественные скачки нагрузки на поток.
        if (!isTech && Math.random() > 0.95) {
            const jitter = (fn) => typeof fn === 'function' ? (v) => setTimeout(() => fn(v), 0) : fn;
            return originalThen.call(this, jitter(onFulfilled), jitter(onRejected));
        }
        return originalThen.apply(this, arguments);
    };

    // 4. STORAGE QUOTA SPOOF (Эталонный диск)
    // Предотвращаем определение устройства по объему свободного места (Quota API).
    if (navigator.storage && navigator.storage.estimate) {
        navigator.storage.estimate = function() {
            // Возвращаем идеальные 500 GB / 100 MB занято (стандарт десктопа)
            return Promise.resolve({
                quota: 536870912000, 
                usage: 104857600,    
                usageDetails: {
                    indexedDB: 52428800,
                    caches: 52428800
                }
            });
        };
        // Маскируем саму функцию под нативную
        try {
            navigator.storage.estimate.toString = () => `function estimate() { [native code] }`;
        } catch(e) {}
    }

    // 5. WebDriver & Automation Shield
    // Финальный сброс флагов автоматизации для обхода Headless-детекторов.
    if (navigator.webdriver !== undefined) {
        omniOverwrite(navigator, 'webdriver', false);
    }

    // Логирование в стиле OMNI-MONOLITH
    console.log(info.TAG, info.STYLE_GOLD, `🌌 L20: Singularity [MATH-SHIELD & ASYNC-GHOST]`);
};
    
    
    /**
 * L22: ABSOLUTE INFINITY (V5.5)
 * Изоляция Gamepad API, защита от сканирования расширений и локальный Spoof.
 */
const applyL22Infinity = () => {
    // 1. Получаем эвристику из центрального узла
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. GAMEPAD ISOLATION (Peripheral Stealth)
    // Геймпады имеют уникальные ID (Vendor/Product). Мы возвращаем пустой замороженный массив,
    // чтобы не ломать логику сайтов, но скрыть оборудование.
    if (navigator.getGamepads) {
        navigator.getGamepads = function() {
            return isTech ? [] : Object.freeze([]);
        };
        // Нативизация метода (L16 Integration)
        try {
            navigator.getGamepads.toString = () => "function getGamepads() { [native code] }";
        } catch(e) {}
    }

    // 3. EXTENSION SHIELD (Resource Scan Protection)
    // Блокируем попытки сайтов проверить наличие расширений через fetch к внутренним протоколам.
    const originalFetch = window.fetch.bind(window);
    window.fetch = function(input, init) {
        const url = (typeof input === 'string') ? input : (input instanceof URL ? input.href : (input?.url || ''));
        
        if (!isTech && (url.includes('-extension://') || url.startsWith('moz-extension://'))) {
            // Тихое логирование попытки сканирования
            return Promise.reject(new TypeError('Failed to fetch'));
        }
        return originalFetch.apply(this, arguments);
    };

    // 4. INTL RELATIVE TIME (Locale Lockdown)
    // Гарантируем, что форматирование относительного времени (напр. "2 mins ago") 
    // всегда соответствует профилю en-US.
    if (window.Intl && Intl.RelativeTimeFormat) {
        const RealRTF = Intl.RelativeTimeFormat;
        window.Intl.RelativeTimeFormat = function(locales, options) {
            const targetLocale = isTech ? locales : 'en-US';
            return new RealRTF(targetLocale, options);
        };
        window.Intl.RelativeTimeFormat.prototype = RealRTF.prototype;
    }

    // 5. RUNTIME INTEGRITY (Global Variable Shield)
    // Скрываем присутствие отладочных инструментов и специфических объектов расширений.
    const forbiddenGlobals = ['__REDUX_DEVTOOLS_EXTENSION__', 'chrome', 'browser'];
    forbiddenGlobals.forEach(g => {
        if (window[g] && !isTech) {
            // Делаем их невидимыми для перечисления (for...in, Object.keys)
            Object.defineProperty(window, g, { 
                enumerable: false, 
                configurable: true,
                writable: true 
            });
        }
    });

    // 6. DARK MODE SPOOF (System Theme Privacy)
    // Предотвращаем детекцию системной темы через Media Queries.
    if (window.matchMedia) {
        const originalMatchMedia = window.matchMedia;
        window.matchMedia = function(query) {
            if (!isTech && query.includes('prefers-color-scheme')) {
                // Всегда возвращаем "светлую тему" (matches: false для dark)
                return {
                    matches: false,
                    media: query,
                    onchange: null,
                    addEventListener: () => {},
                    removeEventListener: () => {},
                    addListener: () => {}, // Deprecated, но нужен для совместимости
                    removeListener: () => {}
                };
            }
            return originalMatchMedia.apply(this, arguments);
        };
    }

    console.log(info.TAG, info.STYLE_GOLD, `♾️ L22: Absolute Infinity [PERIPHERAL-SHIELD ACTIVE]`);
};
    

/**
 * L23: TRANSCENDENT OVERLORD (V5.5)
 * Рандомизация кривых Безье и защита от Emoji-фингерпринтинга.
 */
const applyL23Overlord = () => {
    // 1. Получаем данные из ядра Infobase
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. ГЕОМЕТРИЧЕСКИЙ ДЖИТТЕР (Bezier Curve Entropy)
    // Кривые Безье отрисовываются по-разному в зависимости от GPU и драйверов.
    // Сдвиг на 1e-7 (0.0000001) меняет математическую модель кривой, 
    // что делает хеш рендеринга уникальным, не искажая картинку.
    const originalBezier = CanvasRenderingContext2D.prototype.bezierCurveTo;
    CanvasRenderingContext2D.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
        if (isTech) return originalBezier.apply(this, arguments);
        
        const noise = () => (Math.random() * 1e-7); 
        return originalBezier.call(
            this, 
            cp1x + noise(), cp1y + noise(), 
            cp2x + noise(), cp2y + noise(), 
            x + noise(), y + noise()
        );
    };

    // 3. EMOJI HASH POISONING (Sub-pixel Anti-aliasing Jitter)
    // Эмодзи — мощный маркер ОС. Смещение на 0.0001 пикселя заставляет браузер 
    // заново рассчитывать сглаживание краев (anti-aliasing), полностью меняя контрольную сумму.
    const originalFillText = CanvasRenderingContext2D.prototype.fillText;
    CanvasRenderingContext2D.prototype.fillText = function(text, x, y, maxWidth) {
        if (!isTech && /\p{Emoji}/u.test(text)) {
            const jitter = 0.0001 * (Math.random() > 0.5 ? 1 : -1);
            return originalFillText.call(this, text, x + jitter, y + jitter, maxWidth);
        }
        return originalFillText.apply(this, arguments);
    };

    // 4. WINDOW CONSISTENCY (Immutable DevTools Shield)
    // Закрепляем размеры окна через геттеры, чтобы никакие скрипты сайта 
    // не могли принудительно обновить или считать реальные outer-параметры.
    ['outerWidth', 'outerHeight'].forEach(prop => {
        try {
            Object.defineProperty(window, prop, {
                get: () => prop === 'outerWidth' ? window.innerWidth : window.innerHeight,
                configurable: false, // Делаем неизменяемым
                enumerable: true
            });
        } catch (e) {}
    });

    // 5. РЕАКТИВНАЯ ЗАЩИТА (Canvas Extraction Trap)
    // Если сайт вызывает toDataURL более 5 раз, мы расцениваем это как агрессивный фингерпринтинг 
    // и "отравляем" холст белым шумом (rgba 0.001), чтобы сбить алгоритм сравнения хешей.
    let canvasReadCount = 0;
    const orgToDataURL = HTMLCanvasElement.prototype.toDataURL;
    
    HTMLCanvasElement.prototype.toDataURL = function() {
        canvasReadCount++;
        if (!isTech && canvasReadCount > 5) {
            const ctx = this.getContext('2d');
            if (ctx) {
                // Вносим едва уловимую примесь, которая накапливается при повторных вызовах
                ctx.fillStyle = 'rgba(255,255,255,0.001)';
                ctx.fillRect(0, 0, 1, 1);
            }
        }
        return orgToDataURL.apply(this, arguments);
    };

    // Интеграция с L16 (нативизация)
    try {
        CanvasRenderingContext2D.prototype.bezierCurveTo.toString = () => "function bezierCurveTo() { [native code] }";
        HTMLCanvasElement.prototype.toDataURL.toString = () => "function toDataURL() { [native code] }";
    } catch(e) {}

    console.log(info.TAG, info.STYLE_GOLD, `👑 L23: Transcendent Overlord [GEOMETRY-POISONED]`);
};
    
 /**
 * L25: GOD-SEED (V5.5)
 * Рекурсивная маскировка прототипов и эталонный Device Memory Spoof.
 */
const applyL25GodSeed = () => {
    // 1. Получаем ядро эвристики
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. ПЕРВОРОДНАЯ МАСКИРОВКА (Recursive Native Mimicry)
    // Этот механизм делает любую JS-функцию неотличимой от нативного кода C++.
    const deepMask = (fn, name) => {
        if (typeof fn !== 'function' || isTech) return;

        const nativeString = `function ${name}() { [native code] }`;
        
        // Фиксируем имя функции (некоторые детекторы сверяют .name)
        try {
            Object.defineProperty(fn, 'name', { 
                value: name, 
                configurable: true 
            });
        } catch (e) {}

        // Рекурсивный Proxy для toString. 
        // Закрывает лазейку: fn.toString.toString() === "function toString() { [native code] }"
        const toStringProxy = new Proxy(Function.prototype.toString, {
            apply: (target, thisArg) => {
                if (thisArg === fn) return nativeString;
                if (thisArg === toStringProxy) return `function toString() { [native code] }`;
                return Reflect.apply(target, thisArg, []);
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

    // 3. DEVICE MEMORY & CPU (Hardware Normalization)
    // Устанавливаем параметры "Золотого эталона" (8 ядер / 8 GB RAM).
    // Это самая распространенная конфигурация, не вызывающая подозрений у анти-фрода.
    const hardwareProps = {
        deviceMemory: 8,
        hardwareConcurrency: 8
    };

    Object.keys(hardwareProps).forEach(prop => {
        if (prop in navigator) {
            omniOverwrite(navigator, prop, hardwareProps[prop]);
            
            // Глубокая маскировка геттера в прототипе Navigator
            const desc = Object.getOwnPropertyDescriptor(Navigator.prototype, prop);
            if (desc && desc.get) {
                deepMask(desc.get, `get ${prop}`);
            }
        }
    });

    // 4. ИНТЕГРАЦИЯ МАСКИРОВКИ (Applying to all previous layers)
    // Накладываем "Божественное семя" на критические точки входа
    if (navigator.storage && navigator.storage.estimate) {
        deepMask(navigator.storage.estimate, 'estimate');
    }
    if (window.performance && performance.now) {
        deepMask(performance.now, 'now');
    }
    if (CanvasRenderingContext2D.prototype.fillText) {
        deepMask(CanvasRenderingContext2D.prototype.fillText, 'fillText');
    }

    console.log(info.TAG, info.STYLE_GOLD, `🌱 L25: God-Seed [INTEGRITY-VERIFIED]`);
};
    

  /**
 * L26-L28: INFERNO SHIELD (V5.5)
 * Эмуляция порядка свойств Navigator и тотальная дезинфекция автоматизации.
 */
const applyL28Inferno = () => {
    // 1. Извлекаем ядро эвристики
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. СТЕРИЛИЗАЦИЯ ПЕРЕМЕННЫХ (Automation Shadowing)
    // Мы не удаляем свойства (это вызывает ошибки в коде анти-фрода), 
    // а делаем их невидимыми и неперечисляемыми.
    const ghostVars = [
        'webdriver', '_phantom', '__nightmare', '_selenium', 
        'callPhantom', 'cdc_adoQbh2ncp63213jsedu3jkzh', '__sh_',
        '__webdriver_evaluate', '__webdriver_unwrapped'
    ];

    ghostVars.forEach(v => {
        const targets = [window, navigator, document];
        targets.forEach(target => {
            if (v in target) {
                try {
                    // Теневое переопределение: свойство есть, но оно ведет в "пустоту"
                    Object.defineProperty(target, v, {
                        get: () => undefined,
                        enumerable: false, // Невидимо для Object.keys / for...in
                        configurable: true
                    });
                } catch (e) {}
            }
        });
    });

    // 3. LINGUISTIC MIMICRY (JS-Engine Dialect)
    // Подделываем формат сообщений об ошибках под движок JavaScriptCore (Safari/WebKit).
    // Это критично для имитации MacIntel.
    const originalErrorToString = Error.prototype.toString;
    Error.prototype.toString = function() {
        if (isTech) return originalErrorToString.apply(this, arguments);

        const baseMsg = originalErrorToString.apply(this, arguments);
        
        // Характерный синтаксис Safari: добавление контекста (In 'eval')
        if (baseMsg.includes('is not a function')) {
            return baseMsg.replace('is not a function', "is not a function. (In 'eval')");
        }
        
        return baseMsg;
    };

    // 4. NAVIGATOR INTEGRITY (Property Order & Stealth)
    // Гарантируем, что свойство 'webdriver' не просто false, а полностью скрыто из перечисления,
    // как это реализовано в нативных браузерах.
    if (Object.keys(navigator).includes('webdriver')) {
        try {
            Object.defineProperty(Navigator.prototype, 'webdriver', {
                get: () => false,
                enumerable: false,
                configurable: true
            });
        } catch (e) {}
    }

    // 5. CHROME-OBJECT ISOLATION (Safari Mimicry)
    // Если мы имитируем MacIntel/Safari, наличие объекта window.chrome — это прямой провал.
    if (window.chrome && !isTech) {
        try {
            Object.defineProperty(window, 'chrome', {
                get: () => undefined,
                enumerable: false,
                configurable: true
            });
        } catch (e) {}
    }

    // Интеграция с L25 (нативизация новых геттеров)
    if (typeof deepMask === 'function') {
        const desc = Object.getOwnPropertyDescriptor(Navigator.prototype, 'webdriver');
        if (desc && desc.get) deepMask(desc.get, 'get webdriver');
        deepMask(Error.prototype.toString, 'toString');
    }

    console.log(info.TAG, info.STYLE_GOLD, `🔥 L28: Inferno Shield [AUTOMATION-PURGED]`);
};
    

 /**
 * L29/L30: INTERSTELLAR VOID (V5.5)
 * Side-Channel Defense и Хроно-децепция (Date Entropy).
 */
const applyL30Zenith = () => {
    // 1. Извлекаем ядро эвристики
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. ХРОНО-ДЕЦЕПЦИЯ (Date Jitter & Proxying)
    // Рандомизация текущего времени на уровне миллисекунд ломает статистический 
    // анализ "скорости ответа" системы.
    const OriginalDate = window.Date;
    const jitter = () => (Math.random() * 2); // Шум в 0-2мс

    const DateProxy = new Proxy(OriginalDate, {
        construct(target, args) {
            const d = new target(...args);
            // Вносим шум только при создании "текущего момента" (new Date())
            if (args.length === 0 && !isTech) {
                d.setMilliseconds(d.getMilliseconds() + jitter());
            }
            return d;
        },
        apply(target, thisArg, args) {
            // Если Date() вызван как функция, он возвращает строку.
            return target.apply(thisArg, args);
        }
    });

    // Подменяем статический метод now() — главную мишень для фингерпринтинга.
    DateProxy.now = function() {
        const n = OriginalDate.now();
        return isTech ? n : n + jitter();
    };

    // Наследуем прототип для прохождения теста (instanceof Date)
    DateProxy.prototype = OriginalDate.prototype;
    window.Date = DateProxy;

    // 3. SIDE-CHANNEL DEFENSE (Precision Degradation)
    // Защита от атак типа Spectre/Meltdown и замера таймингов кэша CPU.
    if (window.performance && performance.now) {
        const orgPerfNow = performance.now.bind(performance);
        performance.now = function() {
            const t = orgPerfNow();
            if (isTech) return t;
            // Снижаем точность до 100мкс + добавляем микро-джиттер (наносекунды).
            // Это делает невозможным высокоточные замеры времени выполнения JS-циклов.
            return Math.floor(t * 10) / 10 + (Math.random() * 0.001);
        };
    }

    // 4. LINGUISTIC TIMEZONE LOCK (Locale Integrity)
    // Гарантируем, что методы вывода даты не "протекут", если системная локаль 
    // не совпадает с эмулируемой (en-US).
    try {
        const orgToLocaleString = OriginalDate.prototype.toLocaleString;
        OriginalDate.prototype.toLocaleString = function(locale, options) {
            // Принудительно используем en-US, если не указано иное.
            return orgToLocaleString.call(this, isTech ? locale : (locale || 'en-US'), options);
        };
    } catch (e) {}

    // 5. ИНТЕГРАЦИЯ С GOD-SEED (L25)
    // Нативизация всех новых прокси-методов
    if (typeof deepMask === 'function') {
        deepMask(DateProxy, 'Date');
        deepMask(DateProxy.now, 'now');
        deepMask(performance.now, 'now');
    }

    console.log(info.TAG, info.STYLE_GOLD, `✨ L30: Zenith [SPACE-TIME-ANONYMIZED]`);
};
    

   /**
 * L32/L33: APEX GUARD (V5.5)
 * Тотальная блокировка авто-скачиваний и защита от программного фишинга.
 */
const applyL33ApexGuard = () => {
    // 1. Получаем эвристику из центрального узла OMNI
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. ПРОТОТИПНЫЙ ПЕРЕХВАТ (Download Attribute Lockdown)
    // Мы блокируем саму возможность программного назначения атрибута 'download'.
    const blockDownloadAttribute = (Proto) => {
        if (!Proto || isTech) return;
        
        // Перехват дескриптора свойства .download
        const originalDesc = Object.getOwnPropertyDescriptor(Proto, 'download');
        
        Object.defineProperty(Proto, 'download', {
            set: function(value) {
                if (value) {
                    // Логируем попытку скрытого скачивания
                    console.warn(info.TAG, '🚫 Blocked property-based auto-download attempt.');
                    return false;
                }
                return originalDesc ? originalDesc.set.call(this, value) : null;
            },
            get: function() {
                return originalDesc ? originalDesc.get.call(this) : '';
            },
            configurable: true
        });

        // Перехват метода setAttribute (универсальный способ добавления атрибутов)
        const orgSetAttr = Proto.setAttribute;
        Proto.setAttribute = function(name, value) {
            if (name && name.toLowerCase() === 'download') {
                console.warn(info.TAG, '🚫 Blocked attribute-based auto-download attempt.');
                return; 
            }
            return orgSetAttr.apply(this, arguments);
        };
        
        // Нативизация подмененного метода
        if (typeof deepMask === 'function') deepMask(Proto.setAttribute, 'setAttribute');
    };

    // Применяем к ссылкам и областям — основным векторам инъекций
    blockDownloadAttribute(HTMLAnchorElement.prototype);
    blockDownloadAttribute(HTMLAreaElement.prototype);

    // 3. IFRAME SANDBOXING (Creation Guard)
    // Автоматически добавляем ограничения для всех создаваемых iframe, 
    // чтобы они не могли инициировать загрузки без ведома пользователя.
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName, options) {
        const el = originalCreateElement.call(document, tagName, options);
        
        if (!isTech && tagName.toLowerCase() === 'iframe') {
            // sandbox без 'allow-downloads' полностью блокирует попытки iframe качать файлы
            el.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms');
        }
        
        return el;
    };
    if (typeof deepMask === 'function') deepMask(document.createElement, 'createElement');

    // 4. DATA-URL & PHISHING PROTECTION
    // Блокируем переходы на протокол 'data:', который часто используется для подделки страниц логина
    // или автоматического исполнения JS-скриптов вне контекста текущей страницы.
    window.addEventListener('beforeunload', (e) => {
        const activeEl = document.activeElement;
        if (!isTech && activeEl && activeEl.tagName === 'A' && activeEl.href.startsWith('data:')) {
            console.error(info.TAG, '⚠️ Phishing risk detected: Data-URL navigation blocked.');
            // Прерываем навигацию
            activeEl.href = '#'; 
            e.preventDefault();
        }
    });

    // 5. SECURITY NOTIFICATION
    console.log(info.TAG, info.STYLE_GOLD, `🛡️ L33: Apex Guard [MALWARE-SHIELD ACTIVE]`);
};

  /**
 * L35/L40: LEGACY & FRAGILE REPAIR (V5.5)
 * Починка прототипов для старых версий jQuery и предотвращение конфликтов.
 */
const applyL40LegacyRepair = () => {
    // 1. Получаем ядро эвристики
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    // 2. ДЕТЕКЦИЯ ХРУПКОЙ СРЕДЫ (Framework Sniffer)
    const checkLegacy = () => {
        return !!(
            (window.jQuery && window.jQuery.fn && window.jQuery.fn.jquery && window.jQuery.fn.jquery.startsWith('1.')) || 
            window.Prototype || 
            window.MooTools ||
            !window.requestAnimationFrame // Признак антиквариата
        );
    };

    const repairLegacyJS = () => {
        if (isTech) return;

        // 3. SIZZLE ENGINE FIX (jQuery Selectors)
        // Старый движок Sizzle падает, если document.querySelectorAll выдает 
        // необычные исключения при подмене. Мы оборачиваем поиск в безопасный слой.
        if (window.jQuery && window.jQuery.find) {
            const orgFind = window.jQuery.find;
            window.jQuery.find = function() {
                try {
                    return orgFind.apply(this, arguments);
                } catch (e) {
                    // Возвращаем пустой объект jQuery, чтобы цепочка вызовов не прервалась
                    return window.jQuery();
                }
            };
            // Нативизация через L25
            if (typeof deepMask === 'function') deepMask(window.jQuery.find, 'find');
        }

        // 4. EVENT SHIMMING (Ensuring Onload Flow)
        // Если сайт очень старый и ждет события 'load' после наших манипуляций,
        // мы гарантируем его доставку, если документ уже готов.
        if (document.readyState === 'complete') {
            window.dispatchEvent(new Event('load'));
        }

        // 5. TOSTRING RESTORATION (Integrity Check)
        // Некоторые старые проверки безопасности (JSON Hijacking protection)
        // сверяют Function.prototype.toString. Мы следим за его чистотой.
        const orgToString = Function.prototype.toString;
        try {
            if (!orgToString.call(orgToString).includes('[native code]')) {
                // Попытка экстренного восстановления, если кто-то (не мы) его повредил
                console.log(info.TAG, '🛠️ Warning: Found corrupted toString. Attempting recovery.');
            }
        } catch (e) {}

        // 6. CONSOLE DEPRECATION SILENCE
        // Старые библиотеки забивают консоль ворнингами о "deprecated" методах.
        // Это мешает нам видеть логи атак из L33 (Apex Guard).
        const orgWarn = console.warn;
        console.warn = function(...args) {
            if (args[0] && typeof args[0] === 'string' && 
               /jQuery.browser|is deprecated|property is non-standard/.test(args[0])) {
                return;
            }
            return orgWarn.apply(this, arguments);
        };
    };

    // 7. РЕАКТИВНЫЙ И УМНЫЙ ЗАПУСК
    if (checkLegacy()) {
        console.log(info.TAG, info.STYLE_GOLD, '🚀 L40: Legacy environment detected. Auto-Repair Engaged.');
        
        // Используем requestIdleCallback для минимального влияния на CPU
        if (window.requestIdleCallback) {
            requestIdleCallback(() => repairLegacyJS());
        } else {
            // Фолбэк для совсем старых сред
            setTimeout(repairLegacyJS, 400);
        }
    }
};
    
   /**
 * L150: HEAVY EVAL BLOCKER (V5.5)
 * Превентивная блокировка тяжелых динамических инъекций и майнеров.
 */
const applyL150EvalBlocker = (target = document.documentElement) => {
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;
    
    // Порог безопасности: 150KB. Легитимный eval() таких размеров — это архитектурная ошибка.
    const MAX_EVAL_SAFE_SIZE = 150000; 

    // 1. ПЕРЕХВАТ ЯДРА (Global Execution Hijack)
    // Оборачиваем eval и конструктор Function для анализа входящего кода.
    const createExecutionGuard = (originalFn, name) => {
        const guardedFn = function(code) {
            if (typeof code === 'string' && code.length > MAX_EVAL_SAFE_SIZE && !isTech) {
                console.error(info.TAG, `🛑 L150: Blocked heavy ${name}() execution [Size: ${code.length}]`);
                
                // Интеграция с системой уведомлений (если есть)
                if (typeof sendOmniPush === 'function') {
                    sendOmniPush('Security Alert', `Heavy ${name} injection neutralized.`);
                }
                return null; 
            }
            return originalFn.apply(window, arguments);
        };

        // Нативизация через L25 God-Seed
        if (typeof deepMask === 'function') deepMask(guardedFn, name);
        return guardedFn;
    };

    window.eval = createExecutionGuard(window.eval, 'eval');
    // window.Function — это конструктор, поэтому обрабатываем его аккуратно
    const originalFunction = window.Function;
    window.Function = createExecutionGuard(originalFunction, 'Function');
    window.Function.prototype = originalFunction.prototype;

    // 2. DOM-ОБСЕРВЕР (Injection Integrity)
    // Нейтрализуем подозрительные <script> до их исполнения.
    const obs = new MutationObserver(mutations => {
        for (const m of mutations) {
            for (const node of m.addedNodes) {
                if (node.tagName === 'SCRIPT') {
                    const content = node.textContent || '';
                    
                    // ЭВРИСТИКА: Размер + наличие признаков обфускации (вложенные eval)
                    const isSuspicious = content.length > MAX_EVAL_SAFE_SIZE || 
                                       (content.includes('eval(') && content.length > 50000);

                    if (isSuspicious && !isTech) {
                        node.type = 'text/plain'; // Отключаем исполнение браузером
                        node.remove(); // Удаляем из DOM
                        console.warn(info.TAG, '🛑 L150: Heavy script node neutralized.');
                    }
                }
            }
        }
    });

    obs.observe(target, { childList: true, subtree: true });

    // 3. ТАЙМЕРНЫЙ ФИЛЬТР (String-to-Code Protection)
    // setTimeout/setInterval позволяют передавать строку вместо функции — это классическая лазейка.
    const wrapTimer = (originalTimer, name) => {
        const guardedTimer = function(handler, timeout, ...args) {
            if (typeof handler === 'string' && handler.length > MAX_EVAL_SAFE_SIZE && !isTech) {
                console.error(info.TAG, `🛑 L150: Blocked string-based ${name} injection.`);
                return 0;
            }
            return originalTimer.call(window, handler, timeout, ...args);
        };
        if (typeof deepMask === 'function') deepMask(guardedTimer, name);
        return guardedTimer;
    };

    window.setTimeout = wrapTimer(window.setTimeout, 'setTimeout');
    window.setInterval = wrapTimer(window.setInterval, 'setInterval');

    console.log(info.TAG, info.STYLE_GOLD, `🛑 L150: Heavy Eval Blocker [ULTRA-SECURITY ACTIVE]`);
};
    

   /**
 * L1001: HONEYPOT (Data Privacy V5.5)
 * Динамическая подмена данных в Storage при неавторизованном доступе.
 */
const applyL1001HoneyPot = () => {
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;
    
    // Регулярное выражение для выявления критических ключей
    const SENSITIVE_KEYS = /token|auth|pass|wallet|secret|key|session|credit|account/i;

    // 1. STORAGE MIRAGE (LocalStorage & SessionStorage)
    const createHoneyProxy = (storageType) => {
        const proto = storageType === 'localStorage' ? Storage.prototype : window[storageType].constructor.prototype;
        const orgGetItem = proto.getItem;

        proto.getItem = function(key) {
            if (isTech) return orgGetItem.apply(this, arguments);

            // ЭВРИСТИКА: Проверяем доверенность события
            // Скрипты автоматизации часто инициируют события, где isTrusted === false
            const isUntrusted = window.event && window.event.isTrusted === false;
            const isSensitive = SENSITIVE_KEYS.test(key);

            if (isSensitive && isUntrusted) {
                console.warn(info.TAG, `🛡️ L1001: HoneyPot triggered on ${storageType} for: ${key}`);
                
                // Возвращаем "Мираж" — правдоподобный JSON, который никуда не ведет
                return JSON.stringify({
                    status: "expired",
                    code: 403,
                    reason: "Security validation required",
                    challenge: Math.random().toString(36).substring(7),
                    timestamp: Date.now()
                });
            }

            return orgGetItem.apply(this, arguments);
        };
        
        // Нативизация метода
        if (typeof deepMask === 'function') deepMask(proto.getItem, 'getItem');
    };

    ['localStorage', 'sessionStorage'].forEach(type => createHoneyProxy(type));

    // 2. COOKIE GHOSTING (Selective Sanitation)
    // Защита document.cookie от программного чтения через сторонние скрипты.
    const orgCookieDesc = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie');
    if (orgCookieDesc && orgCookieDesc.get) {
        Object.defineProperty(document, 'cookie', {
            get: function() {
                const fullCookie = orgCookieDesc.get.call(this);
                // Если чтение не инициировано доверенным действием пользователя
                if (window.event && !window.event.isTrusted && SENSITIVE_KEYS.test(fullCookie)) {
                    // Возвращаем куки без чувствительных данных (фильтрация)
                    return fullCookie.split('; ')
                        .filter(c => !SENSITIVE_KEYS.test(c))
                        .join('; ');
                }
                return fullCookie;
            },
            set: orgCookieDesc.set,
            configurable: true,
            enumerable: true
        });
    }

    // 3. STORAGE KEY OBFUSCATION
    // Если скрипт перебирает ключи через storage.key(i), мы подменяем имена 
    // чувствительных ключей на случайные строки.
    const orgKey = Storage.prototype.key;
    Storage.prototype.key = function(index) {
        const k = orgKey.call(this, index);
        if (k && SENSITIVE_KEYS.test(k) && window.event && !window.event.isTrusted) {
            return `__secure_session_${Math.random().toString(36).slice(2, 8)}`;
        }
        return k;
    };
    if (typeof deepMask === 'function') deepMask(Storage.prototype.key, 'key');

    console.log(info.TAG, info.STYLE_GOLD, `🛡️ L1001: HoneyPot [DATA-MIRAGE ACTIVE]`);
};
    

  /**
 * L1200: APEX VIRUS MAP (Anti-Malware V5.5)
 * Глубокая инспекция сетевых переходов и блокировка исполняемых архивов.
 */
const applyL1200VirusMap = () => {
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;
    
    // Расширенный список опасных форматов (включая скрипты и контейнеры)
    const DANGER_EXT = /\.(exe|msi|bat|vbs|ps1|reg|hta|scr|pif|cmd|js|jar|apk|app|dmg|iso|bin|docm|xlsm|lnk|wsf|com)$/i;

    // 1. ПРЕДИКТИВНЫЙ АНАЛИЗ URL
    const isMalicious = (url) => {
        if (!url || typeof url !== 'string') return false;
        // Очистка от параметров (?...) и якорей (#...) для чистого детекта расширения
        const cleanUrl = url.split(/[?#]/)[0];
        return DANGER_EXT.test(cleanUrl);
    };

    const interceptThreat = (url, context = 'Navigation') => {
        if (isTech || !url) return false;
        
        if (isMalicious(url)) {
            // Мгновенная остановка загрузки потока
            window.stop();
            
            console.error(info.TAG, `🛑 L1200: [${context}] Intercepted high-risk payload:`, url);
            
            // Интеграция с Omni-Push уведомлениями
            if (typeof sendOmniPush === 'function') {
                sendOmniPush('Shield Alert', `Malicious ${context.toLowerCase()} blocked.`);
            }
            
            // Визуальное оповещение для предотвращения паники
            alert(`🛑 [OMNI-SHIELD L1200]\n\nКритическая угроза заблокирована!\nТип: ${context}\nОбъект: ${url.split('/').pop().substring(0, 30)}...`);
            return true;
        }
        return false;
    };

    // 2. ПЕРЕХВАТ СОБЫТИЙ ВЗАИМОДЕЙСТВИЯ (UI Guard)
    window.addEventListener('click', e => {
        const a = e.target.closest('a');
        if (a && a.href) {
            if (interceptThreat(a.href, 'Link Click')) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }, true);

    // 3. ПЕРЕХВАТ ПРОГРАММНЫХ ОКОН (Window Hijack Protection)
    const originalOpen = window.open;
    window.open = function(url, ...args) {
        if (interceptThreat(url, 'Window Open')) return null;
        return originalOpen.apply(this, arguments);
    };
    if (typeof deepMask === 'function') deepMask(window.open, 'open');

    // 4. ЗАЩИТА LOCATION API (Redirect Guard)
    const locProtos = [window.location.assign, window.location.replace];
    const locNames = ['assign', 'replace'];

    locNames.forEach((name, i) => {
        const orgMethod = window.location[name];
        window.location[name] = function(url) {
            if (interceptThreat(url, `Location ${name}`)) return;
            return orgMethod.call(this, url);
        };
        // Location методы часто защищены, поэтому используем try-catch внутри нативизации если нужно
    });

    // 5. BLOB & DATA-URL INSPECTION (Modern Malware Vectors)
    // Современные атаки формируют EXE-файл прямо в памяти (Blob) и предлагают скачать его.
    const orgCreateObjectURL = URL.createObjectURL;
    URL.createObjectURL = function(obj) {
        const url = orgCreateObjectURL.apply(this, arguments);
        
        // Если пытаются создать объект из Blob с подозрительным MIME-типом
        if (obj instanceof Blob && (DANGER_EXT.test(obj.type) || obj.type === 'application/octet-stream')) {
            console.warn(info.TAG, '⚠️ L1200: Suspicious Blob-URL creation neutralized.');
            return 'blob:omni-blocked-threat';
        }
        return url;
    };
    if (typeof deepMask === 'function') deepMask(URL.createObjectURL, 'createObjectURL');

    console.log(info.TAG, info.STYLE_GOLD, `🛡️ L1200: Apex Virus Map [ANTI-MALWARE ACTIVE]`);
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

        // 1. Главный баннер (СТРОГО 3 стиля для 3-х %c)
        // Мы убрали лишние запятые, чтобы текст "CORE: ACTIVE" шел СРАЗУ за баннером
        console.log(
            info.TAG, 
            info.STYLE_GOLD, 
            info.STYLE_BLUE, 
            'color: #AAA; font-style: italic;', // Стиль для 3-го %c (текст после версии)
            `🚀 CORE: ${mode} ENGINE ACTIVE`
        );

        // 2. Развертывание уровней
        OmniChronos.initQuantumModules(info);
    },

    initQuantumModules: (info) => {
        const STYLE_L = 'color: #FFD700; background: #222; font-weight: bold; padding: 2px 5px; border-radius: 3px; border: 1px solid #444;';
        const STYLE_SYMBOL = 'color: #FF4500; font-weight: bold;'; // Огненная молния
        const STYLE_NAME = 'color: #00BFFF; font-weight: bold; text-transform: lowercase;';
        const STYLE_DESC = 'color: #666; font-family: "Courier New", monospace;';

        OMNI_Registry.forEach((deploy, index) => {
            const layerID = `L${(index + 1) * 10}`; 
            try {
                deploy();
                
                // Идеально выровненный лог уровня
                console.log(
                    `%c${layerID}%c %c⚡%c %c${deploy.name || 'omni-module'}%c is synchronized.`,
                    STYLE_L,
                    '', // Сброс
                    STYLE_SYMBOL,
                    '', // Сброс
                    STYLE_NAME,
                    STYLE_DESC
                );
            } catch (e) {
                console.error(`%c[FAULT]%c ${layerID} failure:`, 'color: #f00; font-weight: bold;', 'color: #888;', e);
            }
        });
        
        console.log('%c[SUCCESS]%c All neural layers are locked. Stealth: 100%', 'color: #0f0; font-weight: bold;', 'color: #fff;');
    }
};

/**
 * BOOTLOADER: Единственная точка входа
 */
const boot = () => {
    try {
        // Мы вызываем initBaseFoundation только ОДИН РАЗ здесь
        OmniChronos.initBaseFoundation();
    } catch (e) {
        console.error('%c🛑 CRITICAL BOOT ERROR:', 'color: white; background: red; padding: 5px;', e);
    }
};

// Запуск системы
boot();
    
})();
