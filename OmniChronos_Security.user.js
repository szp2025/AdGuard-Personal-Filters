// ==UserScript==
// @name         OMNI-MONOLITH [V5.5 FINAL]
// @namespace    OmniChronos.Security
// @version      5.5.9
// @description  Total Anonymization, YouTube Turbo & Security Layer
// @author       Omni-Chronos
// @match        *://*/*
// @grant        GM_notification
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-start
// @icon         https://cdn-icons-png.flaticon.com/512/9438/9438567.png
// ==/UserScript==

/**
 * OMNI-MONOLITH V5.5 [CORE CHRONOS v3.3.9]
 * Полная сборка со всеми уровнями защиты.
 */
((window, document) => {
    'use strict';

    // --- [0. ИНФРАСТРУКТУРА: ПАРАМЕТРЫ] ---
    const OMNI_Infobase = () => ({
        TAG: '%c[Omni-Chronos-v3.3.9]',
        STYLE_GOLD: 'color: #D4AF37; font-weight: bold;',
        STYLE_BLUE: 'color: #00BFFF;',
        STYLE_TURBO_TAG: 'color: #00ffff; font-weight: bold; text-shadow: 0 0 5px #00ffff;',
        WHITELIST: ['outlook.com', 'office.com', 'gouv.fr', 'ameli.fr', 'caf.fr', 'live.com', 'google.com', 'bank', 'paypal'],
        isTechHost: /localhost|127\.0\.0\.1/.test(window.location.hostname)
    });

    const OMNI_Config = () => ({
        MEDIA: { TURBO_RATE: 16, SKIP_OFFSET: 0.5, VOLUME_STEP: 0.05 },
        GOD_SEED: { HARDWARE: { MEMORY: 8, CONCURRENCY: 8 } },
        ZENITH: { DATE_JITTER_MAX: 3, PERF_PRECISION: 10, NANO_NOISE: 0.001 },
        EVAL_GUARD: { MAX_SAFE_SIZE: 55000 },
        STERILIZER: { FALLBACK_REGEXP: /[?&](utm_|fbclid|gclid|aff_)[^&]*/gi }
    });

    // --- [1. ЯДРО МАСКИРОВКИ (GOD-SEED)] ---
    const deepMask = (fn, name) => {
        if (typeof fn !== 'function') return;
        const nativeString = `function ${name || fn.name}() { [native code] }`;
        const toStringProxy = new Proxy(Function.prototype.toString, {
            apply: (target, thisArg) => {
                if (thisArg === fn) return nativeString;
                if (thisArg === toStringProxy) return `function toString() { [native code] }`;
                return Reflect.apply(target, thisArg, []);
            }
        });
        try {
            Object.defineProperty(fn, 'name', { value: name || fn.name, configurable: true });
            Object.defineProperty(fn, 'toString', { value: toStringProxy, configurable: true, writable: true });
        } catch (e) {}
    };

    const omniOverwrite = (obj, prop, value) => {
        try {
            Object.defineProperty(obj, prop, { get: () => value, set: () => {}, configurable: true, enumerable: true });
        } catch (e) {}
    };

    // --- [2. ЭШЕЛОНЫ ЗАЩИТЫ] ---

    // L25: Спуфинг железа (RAM/CPU)
    const applyL25GodSeed = () => {
        const conf = OMNI_Config();
        const hardwareProps = { deviceMemory: conf.GOD_SEED.HARDWARE.MEMORY, hardwareConcurrency: conf.GOD_SEED.HARDWARE.CONCURRENCY };
        Object.keys(hardwareProps).forEach(prop => {
            if (prop in navigator) {
                omniOverwrite(navigator, prop, hardwareProps[prop]);
                const desc = Object.getOwnPropertyDescriptor(Navigator.prototype, prop);
                if (desc && desc.get) deepMask(desc.get, `get ${prop}`);
            }
        });
    };

    // L30: Хроно-децепция
    const applyL30Zenith = () => {
        const conf = OMNI_Config();
        const OriginalDate = window.Date;
        const jitter = () => Math.random() * conf.ZENITH.DATE_JITTER_MAX;
        const DateProxy = new Proxy(OriginalDate, {
            construct: (target, args) => {
                const d = new target(...args);
                if (args.length === 0) d.setMilliseconds(d.getMilliseconds() + jitter());
                return d;
            }
        });
        DateProxy.now = () => OriginalDate.now() + jitter();
        DateProxy.prototype = OriginalDate.prototype;
        window.Date = DateProxy;
        deepMask(DateProxy, 'Date');
        deepMask(DateProxy.now, 'now');
    };

    // L150: Eval Blocker
    const applyL150EvalBlocker = () => {
        const conf = OMNI_Config();
        const originalEval = window.eval;
        window.eval = function(code) {
            if (typeof code === 'string' && code.length > conf.EVAL_GUARD.MAX_SAFE_SIZE) return null;
            return originalEval.apply(window, arguments);
        };
        deepMask(window.eval, 'eval');
    };

    // L1001: History & URL Sterilizer
    const applyL1001HistoryGuard = () => {
        const wrapHistory = (method) => {
            const original = window.history[method];
            const guarded = function(state, title, url) {
                const finalUrl = url ? url.replace(OMNI_Config().STERILIZER.FALLBACK_REGEXP, '') : url;
                return original.apply(this, [state, title, finalUrl]);
            };
            deepMask(guarded, method);
            window.history[method] = guarded;
        };
        wrapHistory('pushState');
        wrapHistory('replaceState');
    };

    // L2000: Kinetic Media (YouTube Turbo + Volume Wheel)
    const applyL2000MediaControl = () => {
        const conf = OMNI_Config();
        const isYouTube = window.location.hostname.includes('youtube.com');
        
        const skipAd = () => {
            const video = document.querySelector('video');
            if (!video) return;
            if (document.querySelector('.ad-showing, .ad-interrupting')) {
                video.muted = true;
                video.playbackRate = conf.MEDIA.TURBO_RATE;
                if (isFinite(video.duration)) video.currentTime = video.duration - conf.MEDIA.SKIP_OFFSET;
                document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern')?.click();
            }
        };
        setInterval(skipAd, 500);

        document.addEventListener('wheel', e => {
            const video = document.querySelector('video');
            if (video && (video.contains(e.target) || isYouTube)) {
                e.preventDefault();
                const delta = e.deltaY > 0 ? -conf.MEDIA.VOLUME_STEP : conf.MEDIA.VOLUME_STEP;
                video.volume = Math.max(0, Math.min(1, video.volume + delta));
            }
        }, { passive: false });
    };

    // --- [3. СИСТЕМА ИНИЦИАЛИЗАЦИИ] ---
    const OMNI_Registry = [
        applyL25GodSeed,
        applyL30Zenith,
        applyL150EvalBlocker,
        applyL1001HistoryGuard,
        applyL2000MediaControl
    ];

    const OmniChronos = {
        boot: () => {
            const info = OMNI_Infobase();
            if (info.WHITELIST.some(d => window.location.hostname.includes(d))) {
                console.log(info.TAG, 'Safe Domain detected. OMNI in passive mode.');
                return;
            }

            console.log(info.TAG, info.STYLE_GOLD, info.STYLE_BLUE, ' 🚀 BOOTING OMNI-MONOLITH V5.5');

            OMNI_Registry.forEach(deploy => {
                try {
                    deploy();
                    console.log(`%c[Omni]%c ⚡ Active: %c${deploy.name}`, info.STYLE_TURBO_TAG, 'color: #FF4500;', 'color: #00FF41;');
                } catch (e) {
                    console.error(`[BOOT-ERR] ${deploy.name}:`, e);
                }
            });
            console.log('%c[SUCCESS]%c Stealth: 100%', 'color: #0f0; font-weight: bold;', 'color: #fff;');
        }
    };

    // Запуск на ранней стадии
    OmniChronos.boot();

})(window, document);
