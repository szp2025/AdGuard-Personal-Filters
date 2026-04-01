// ==UserScript==
// @name         Omni-Device-Bridge
// @namespace    OmniProtocol
// @version      1.0.6
// @description  Системный мост управления телефоном [Shadow-DOM Active]
// @author       Командор
// @match        *://*/*
// @grant        unsafeWindow
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni-Device-Bridge.user.js
// @downloadURL  https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni-Device-Bridge.user.js
// ==/UserScript==

(function() {
    'use strict';

    // 1. БАЗА ДАННЫХ ИНТЕНТОВ
    const OmniBridge = {
        config: {
            VERSION: '1.0.6',
            DEPLOYED: '2026-04-01 22:40',
            APPS: {
                SETTINGS: 'intent://#Intent;action=android.settings.SETTINGS;end',
                REVANCED: 'intent://#Intent;package=app.revanced.android.youtube;end',
                WIFI: 'intent://#Intent;action=android.settings.WIFI_SETTINGS;end',
                BIO: 'intent://#Intent;action=android.settings.BIOMETRIC_ENROLL;end'
            }
        },
        launch: function(appKey) {
            const intent = this.config.APPS[appKey];
            if (intent) window.location.replace(intent);
        }
    };

    window.OmniBridge = OmniBridge;

    // 2. СОЗДАНИЕ ИЗОЛИРОВАННОЙ КНОПКИ (Shadow DOM)
    function injectBridge() {
        if (document.getElementById('omni-root')) return;

        const host = document.createElement('div');
        host.id = 'omni-root';
        host.style = 'position:fixed; bottom:100px; right:10px; z-index:2147483647 !important; width:50px; height:50px;';
        document.documentElement.appendChild(host);

        const shadow = host.attachShadow({mode: 'closed'});
        const btn = document.createElement('div');
        
        btn.innerHTML = 'Ω';
        btn.style = `
            width: 46px; height: 46px; 
            background: rgba(0, 40, 60, 0.9); 
            color: #00ffff; 
            border-radius: 50%; 
            display: flex; align-items: center; justify-content: center; 
            border: 2px solid #00ffff; 
            font-size: 24px; font-family: sans-serif;
            box-shadow: 0 0 15px rgba(0,255,255,0.6);
            cursor: pointer;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        `;

        btn.onclick = () => {
            const action = prompt(`OMNI-BRIDGE v${OmniBridge.config.VERSION}\n${OmniBridge.config.DEPLOYED}\n\n1: Settings\n2: ReVanced\n3: WiFi\n4: Bio`);
            if(action === '1') OmniBridge.launch('SETTINGS');
            if(action === '2') OmniBridge.launch('REVANCED');
            if(action === '3') OmniBridge.launch('WIFI');
            if(action === '4') OmniBridge.launch('BIO');
        };

        shadow.appendChild(btn);
    }

    // Запуск через 2 секунды после загрузки (чтобы Chrome успел прогрузить AdGuard)
    setTimeout(injectBridge, 2000);

})();
