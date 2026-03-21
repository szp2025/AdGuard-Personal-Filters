// ==UserScript==
// @name         Omni Eternal ULTRA GOD / MILITARY
// @namespace    Omni-Protocol
// @version      2026.6
// @description  Ultimate Anti-Detect + Security + AI Adaptive Engine
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
'use strict';

/**
 * =========================================================
 * ⚙️ CONFIGURATION GLOBALE
 * =========================================================
 */
const CONFIG = {
    DEBUG: false,
    ROTATION_INTERVAL: 1000 * 60 * 10,
    LEARNING: true
};

function log(...args){
    if(CONFIG.DEBUG) console.log('[OMNI-MIL]', ...args);
}

/**
 * =========================================================
 * 🧠 STOCKAGE IA LOCAL
 * =========================================================
 */
const STORE_KEY = "__omni_ai__";

/**
 * Récupère les données IA depuis le localStorage
 * @returns {Object}
 */
function getStore() {
    try {
        return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
    } catch {
        return {};
    }
}

/**
 * Sauvegarde les données IA
 * @param {Object} data
 */
function saveStore(data) {
    try {
        localStorage.setItem(STORE_KEY, JSON.stringify(data));
    } catch {}
}

/**
 * =========================================================
 * 🧠 GENERATEUR DE PROFIL (ANTI-CORRELATION)
 * =========================================================
 */
function generateProfile() {

    const profiles = [
        { platform:'Win32', gpu:'NVIDIA', cores:8, memory:8 },
        { platform:'Win32', gpu:'AMD', cores:4, memory:4 },
        { platform:'MacIntel', gpu:'Apple', cores:8, memory:8 }
    ];

    const p = profiles[Math.floor(Math.random()*profiles.length)];

    return {
        seed: Math.random().toString(36),
        platform: p.platform,
        gpu: p.gpu,
        cores: p.cores,
        memory: p.memory,
        lang: ['en-US','en','fr-FR'][Math.floor(Math.random()*3)]
    };
}

let PROFILE = generateProfile();

/**
 * Rotation dynamique du profil
 */
setInterval(() => {
    PROFILE = generateProfile();
    log('Rotation profil');
}, CONFIG.ROTATION_INTERVAL);

/**
 * =========================================================
 * 🧠 MOTEUR IA ADAPTATIF
 * =========================================================
 */
function applyAI() {

    if(!CONFIG.LEARNING) return;

    const store = getStore();
    const host = location.hostname;

    if(!store[host]) {
        store[host] = { errors:0 };
    }

    window.addEventListener('error', () => {
        store[host].errors++;
        saveStore(store);
    });
}

/**
 * =========================================================
 * 🔐 CONSISTENCY ENGINE (CRITIQUE)
 * =========================================================
 */
function applyConsistency() {

    Object.defineProperty(navigator, 'platform', { get: () => PROFILE.platform });

    Object.defineProperty(navigator, 'hardwareConcurrency', {
        get: () => PROFILE.cores
    });

    Object.defineProperty(navigator, 'deviceMemory', {
        get: () => PROFILE.memory
    });

    Object.defineProperty(navigator, 'languages', {
        get: () => [PROFILE.lang, 'en']
    });

    Object.defineProperty(navigator, 'webdriver', {
        get: () => false
    });

    window.chrome = { runtime: {} };
}

/**
 * =========================================================
 * 🎨 FINGERPRINT (Canvas + WebGL)
 * =========================================================
 */
function applyFingerprint() {

    const toDataURL = HTMLCanvasElement.prototype.toDataURL;

    HTMLCanvasElement.prototype.toDataURL = function () {
        return toDataURL.apply(this, arguments) + PROFILE.seed;
    };

    const getParameter = WebGLRenderingContext.prototype.getParameter;

    WebGLRenderingContext.prototype.getParameter = function (param) {

        if (param === 37445) return PROFILE.gpu + " Inc.";
        if (param === 37446) return PROFILE.gpu + " Renderer";

        return getParameter.apply(this, arguments);
    };
}

/**
 * =========================================================
 * 🛰 NETWORK PROTECTION (WebRTC + Fetch)
 * =========================================================
 */
function protectNetwork() {

    // WebRTC block
    if (window.RTCPeerConnection) {
        window.RTCPeerConnection = function () {
            return {};
        };
    }

    // Fetch humanization
    const origFetch = window.fetch;

    window.fetch = function (...args) {

        const jitter = 20 + Math.random()*100;

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                origFetch(...args).then(resolve).catch(reject);
            }, jitter);
        });
    };
}

/**
 * =========================================================
 * 🧬 COMPORTEMENT HUMAIN
 * =========================================================
 */
function simulateBehavior() {

    function moveMouse() {
        document.dispatchEvent(new MouseEvent('mousemove', {
            clientX: Math.random()*window.innerWidth,
            clientY: Math.random()*window.innerHeight
        }));
    }

    function scroll() {
        window.scrollBy({
            top: Math.random()*200,
            behavior: 'smooth'
        });
    }

    setInterval(() => {
        moveMouse();
        if(Math.random() > 0.5) scroll();
    }, 3000 + Math.random()*4000);
}

/**
 * =========================================================
 * 🧠 ANTI TIMING
 * =========================================================
 */
function protectTiming() {

    const now = performance.now.bind(performance);

    performance.now = function () {
        return now() + Math.random()*3;
    };
}

/**
 * =========================================================
 * 🛡️ ANTI-EXPLOIT
 * =========================================================
 */
function initAntiExploit() {

    window.eval = function () {
        throw new Error("Blocked eval");
    };

    window.Function = function () {
        throw new Error("Blocked Function");
    };
}

/**
 * =========================================================
 * 🔐 PROTECTION CLIPBOARD
 * =========================================================
 */
function protectClipboard() {

    if(navigator.clipboard) {
        navigator.clipboard.writeText = () => Promise.reject();
    }
}

/**
 * =========================================================
 * 🛰 BLOQUAGE CAPTEURS
 * =========================================================
 */
function blockSensors() {

    if (window.DeviceMotionEvent) window.DeviceMotionEvent = undefined;
    if (window.DeviceOrientationEvent) window.DeviceOrientationEvent = undefined;
}

/**
 * =========================================================
 * 🔒 ISOLATION IFRAME
 * =========================================================
 */
function isolateIframes() {

    const observer = new MutationObserver(() => {
        document.querySelectorAll('iframe').forEach(f => {
            f.setAttribute('sandbox', 'allow-scripts allow-same-origin');
        });
    });

    observer.observe(document, { childList:true, subtree:true });
}

/**
 * =========================================================
 * 🧠 ISOLATION STORAGE
 * =========================================================
 */
function isolateStorage() {

    const prefix = "__omni_" + Math.random().toString(36);

    const origSet = localStorage.setItem;

    localStorage.setItem = function (k,v) {
        return origSet.call(this, prefix + k, v);
    };
}


// 1. Очистка URL от мусора Google (client, sourceid, и т.д.)
if (window.location.hostname.includes('google')) {
    const cleanParams = ['client', 'sourceid', 'ie', 'gs_lcrp', 'oq'];
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    let changed = false;

    cleanParams.forEach(p => { if(params.has(p)) { params.delete(p); changed = true; } });
    
    if (changed) {
        window.history.replaceState({}, '', `${url.pathname}?${params.toString()}${url.hash}`);
    }
}

// 2. Защита "q=" при переходе на другие сайты (Referrer Policy)
document.addEventListener('mousedown', (e) => {
    const a = e.target.closest('a');
    if (a && !a.href.includes(window.location.hostname)) {
        a.rel = "noreferrer noopener"; // Сайт-получатель не увидит твой поисковый запрос
    }
});


/**
 * =========================================================
 * 🚀 INITIALISATION GLOBALE
 * =========================================================
 */
function init() {

    applyAI();
    applyConsistency();
    applyFingerprint();
    protectNetwork();
    simulateBehavior();
    protectTiming();
    initAntiExploit();
    protectClipboard();
    blockSensors();
    isolateIframes();
    isolateStorage();

    log('MILITARY MODE ACTIVE');
}

init();

})();