// ==UserScript==
// @name         Omni-Device-Bridge
// @namespace    OmniProtocol
// @version      1.0.8
// @description  Системный мост [Stealth Mode]
// @author       Командор
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni-Device-Bridge.user.js
// @downloadURL  https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni-Device-Bridge.user.js
// ==/UserScript==

(function() {
    'use strict';

    const OmniBridge = {
        launch: function(id) {
            const apps = {
                1: 'intent://#Intent;action=android.settings.SETTINGS;end',
                2: 'intent://#Intent;package=app.revanced.android.youtube;end',
                3: 'intent://#Intent;action=android.settings.WIFI_SETTINGS;end',
                4: 'intent://#Intent;action=android.settings.BIOMETRIC_ENROLL;end'
            };
            if (apps[id]) window.location.href = apps[id];
        }
    };

    // Делаем доступным для ручного вызова
    window.OmniBridge = OmniBridge;

    // ГЛОБАЛЬНЫЙ ТРИГГЕР: ДЛИННОЕ НАЖАТИЕ (3 секунды в любом месте)
    let pressTimer;
    document.addEventListener('touchstart', () => {
        pressTimer = window.setTimeout(() => {
            const cmd = prompt("OMNI-SYSTEM v1.0.8\n1: Settings | 2: ReVanced | 3: WiFi | 4: Bio");
            if (cmd) OmniBridge.launch(cmd);
        }, 3000); 
    });

    document.addEventListener('touchend', () => clearTimeout(pressTimer));

    console.log("Omni-Stealth: Active. Hold screen for 3s to trigger.");
})();
