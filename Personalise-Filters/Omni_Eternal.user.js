// ==UserScript==
// @name         Omni-Protocol Eternal
// @version      10.0.0
// @description  Apex Logic Layer
// @author       szp2025
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @namespace    https://github.com/szp2025
// ==/UserScript==

(function() {
    'use strict';
    const s = {
        hc: 8,
        dm: 8,
        pl: "Win32",
        ln: ["ru-RU", "ru", "en-US", "en", "fr-FR", "fr"]
    };

    const apply = (t) => {
        Object.defineProperty(t, 'hardwareConcurrency', { get: () => s.hc });
        Object.defineProperty(t, 'deviceMemory', { get: () => s.dm });
        Object.defineProperty(t, 'platform', { get: () => s.pl });
        Object.defineProperty(t, 'languages', { get: () => s.ln });
    };
    apply(navigator);

    const noise = () => {
        const orgG = CanvasRenderingContext2D.prototype.getImageData;
        CanvasRenderingContext2D.prototype.getImageData = function() {
            const d = orgG.apply(this, arguments);
            d.data[0] ^= 1;
            return d;
        };
    };
    noise();

    const cloak = () => {
        const obs = new MutationObserver((ms) => {
            ms.forEach((m) => {
                m.addedNodes.forEach((n) => {
                    if (n.nodeType === 1 && /adblock|блокировщик|disable ad/i.test(n.innerText)) {
                        n.remove();
                        document.body.style.overflow = 'auto';
                    }
                });
            });
        });
        obs.observe(document.documentElement, { childList: true, subtree: true });
    };
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', cloak);
    } else {
        cloak();
    }
    console.log("Omni v10 Active");
})();
