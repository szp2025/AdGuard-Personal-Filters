// ==UserScript==
// @name         Omni-Device-Bridge
// @namespace    OmniProtocol
// @version      1.0.7
// @description  Системный мост управления [Double-Tap Mode]
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
        config: {
            APPS: {
                1: 'intent://#Intent;action=android.settings.SETTINGS;end',
                2: 'intent://#Intent;package=app.revanced.android.youtube;end',
                3: 'intent://#Intent;action=android.settings.WIFI_SETTINGS;end',
                4: 'intent://#Intent;action=android.settings.BIOMETRIC_ENROLL;end'
            }
        },
        launch: function(id) {
            const intent = this.config.APPS[id];
            if (intent) window.location.href = intent;
        }
    };

    // ГЛОБАЛЬНЫЙ ОБРАБОТЧИК (Вместо кнопки)
    // Просто быстро нажмите дважды в любом пустом месте сайта
    document.addEventListener('dblclick', function() {
        const cmd = prompt("OMNI-BRIDGE v1.0.7\n1: Settings | 2: ReVanced | 3: WiFi | 4: Bio");
        if (cmd) OmniBridge.launch(cmd);
    });

    // Резервный вариант: кнопка для сайтов, где dblclick занят
    function injectFinal() {
        if (document.getElementById('omni-trigger')) return;
        const trigger = document.createElement('div');
        trigger.id = 'omni-trigger';
        trigger.style = 'position:fixed; top:0; right:0; width:30px; height:30px; z-index:2147483647; background:rgba(0,255,255,0.1); border-bottom-left-radius:100%;';
        trigger.onclick = () => {
             const cmd = prompt("OMNI-BRIDGE\n1: Settings\n2: ReVanced\n3: WiFi\n4: Bio");
             if (cmd) OmniBridge.launch(cmd);
        };
        document.documentElement.appendChild(trigger);
    }

    setTimeout(injectFinal, 3000);
    console.log('Omni-Bridge: Ready. Double-tap to start.');
})();
