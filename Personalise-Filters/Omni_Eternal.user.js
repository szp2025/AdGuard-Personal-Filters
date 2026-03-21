// ==UserScript==
// @name         Omni Eternal BLACK LEVEL++
// @namespace    Omni-Protocol
// @version      2026.5
// @description  Ultimate Anti-Detect AI Engine (Black Level)
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
'use strict';

/**
 * =========================================================
 * ⚙️ CONFIG
 * =========================================================
 */
const CONFIG = {
    DEBUG: false,
    ROTATION_INTERVAL: 1000 * 60 * 10 // 10 min
};

function log(...a){ if(CONFIG.DEBUG) console.log('[BLACK]',...a); }

/**
 * =========================================================
 * 🧠 PROFILE GENERATOR (анти-корреляция)
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
 * =========================================================
 * 🔁 PROFILE ROTATION (soft)
 * =========================================================
 */
setInterval(() => {
    PROFILE = generateProfile();
    log('Profile rotated');
}, CONFIG.ROTATION_INTERVAL);

/**
 * =========================================================
 * 🧠 CONSISTENCY ENGINE (самое важное)
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
 * 🎨 CANVAS + WEBGL (согласованный spoof)
 * =========================================================
 */
function applyGraphics() {

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
 * 🛰 WEBRTC HARD BLOCK
 * =========================================================
 */
function blockWebRTC() {

    if (window.RTCPeerConnection) {
        window.RTCPeerConnection = function () {
            return {};
        };
    }
}

/**
 * =========================================================
 * 🔐 NETWORK HUMANIZATION
 * =========================================================
 */
function humanizeNetwork() {

    const origFetch = window.fetch;

    window.fetch = function (...args) {

        const jitter = 20 + Math.random()*120;

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                origFetch(...args).then(resolve).catch(reject);
            }, jitter);
        });
    };
}

/**
 * =========================================================
 * 🧬 REAL BEHAVIOR MODEL
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
        if (Math.random() > 0.5) scroll();
    }, 3000 + Math.random()*4000);
}

/**
 * =========================================================
 * 🧠 ANTI-TIMING ATTACK
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
 * 🧠 STORAGE ISOLATION
 * =========================================================
 */
function isolateStorage() {

    const prefix = "__omni_" + Math.random().toString(36);

    const origSet = localStorage.setItem;

    localStorage.setItem = function (k,v) {
        return origSet.call(this, prefix + k, v);
    };
}

/**
 * =========================================================
 * 🛡️ ANTI-EXPLOIT (защита от XSS / инъекций)
 * =========================================================
 */
function initAntiExploit() {

    const origEval = window.eval;
    window.eval = function () {
        throw new Error("eval blocked");
    };

    const origFunction = window.Function;
    window.Function = function () {
        throw new Error("Function constructor blocked");
    };

    log('Anti-Exploit ON');
}

/**
 * =========================================================
 * 🔐 CLIPBOARD PROTECTION
 * =========================================================
 */
function protectClipboard() {

    navigator.clipboard.writeText = () => Promise.reject();

    log('Clipboard protected');
}

/**
 * =========================================================
 * 🛰 SENSOR BLOCK
 * =========================================================
 */
function blockSensors() {

    if (window.DeviceMotionEvent) window.DeviceMotionEvent = undefined;
    if (window.DeviceOrientationEvent) window.DeviceOrientationEvent = undefined;

    log('Sensors blocked');
}

/**
 * =========================================================
 * 🔒 IFRAME ISOLATION
 * =========================================================
 */
function isolateIframes() {

    const observer = new MutationObserver(() => {
        document.querySelectorAll('iframe').forEach(f => {
            f.setAttribute('sandbox', 'allow-scripts allow-same-origin');
        });
    });

    observer.observe(document, { childList:true, subtree:true });

    log('Iframes isolated');
}

/**
 * =========================================================
 * 🚀 INIT
 * =========================================================
 */
function init() {

    applyConsistency();
    applyGraphics();
    blockWebRTC();
    humanizeNetwork();
    simulateBehavior();
    protectTiming();
    isolateStorage();

    log('BLACK LEVEL ACTIVE');
}

init();

})();