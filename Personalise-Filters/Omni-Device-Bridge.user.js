// ==UserScript==
// @name         Omni-Device-Bridge
// @namespace    OmniProtocol
// @version      1.0.3
// @description  Системный мост управления телефоном
// @author       Командор
// @match        *://*/*
// @grant        unsafeWindow
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni-Device-Bridge.user.js
// @downloadURL  https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni-Device-Bridge.user.js
// ==/UserScript==

(function() {
    'use strict';

    // 1. ОПРЕДЕЛЕНИЕ МОСТА (Ядро системы)
    const OmniBridge = {
        config: {
            TAG: '%c[OMNI-BRIDGE]',
            STYLE: 'color: #00ffff; font-weight: bold;',
            APPS: {
                SETTINGS: 'intent://#Intent;action=android.settings.SETTINGS;end',
                REVANCED: 'intent://#Intent;package=app.revanced.android.youtube;end',
                WIFI: 'intent://#Intent;action=android.settings.WIFI_SETTINGS;end'
            }
        },
        launch: function(appKey) {
            const intent = this.config.APPS[appKey];
            if (intent) {
                console.log(this.config.TAG, this.config.STYLE, `Запуск системного модуля: ${appKey}...`);
                window.location.href = intent;
            }
        }
    };

    // Делаем мост доступным глобально
    window.OmniBridge = OmniBridge;

    // 2. ОТРИСОВКА КНОПКИ (Интерфейс)
    function createOmniButton() {
        if (document.getElementById('omni-bridge-btn')) return; // Защита от дублей
        
        let btn = document.createElement('div');
        btn.id = 'omni-bridge-btn';
        btn.innerHTML = 'Ω';
        btn.style = 'position:fixed; bottom:80px; right:20px; width:45px; height:45px; background:rgba(0,30,30,0.6); color:#00ffff; border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:9999999; border:1px solid #00ffff; font-size:20px; cursor:pointer; backdrop-filter:blur(5px); box-shadow: 0 0 10px rgba(0,255,255,0.5);';
        
        btn.onclick = function() {
            let action = prompt("OMNI-COMMAND:\n1: Settings\n2: ReVanced\n3: WiFi");
            if(action == '1') OmniBridge.launch('SETTINGS');
            if(action == '2') OmniBridge.launch('REVANCED');
            if(action == '3') OmniBridge.launch('WIFI');
        };
        
        document.body.appendChild(btn);
        console.log('%c[OMNI-BRIDGE] КНОПКА ВИЗУАЛИЗИРОВАНА', 'color: #00ffff;');
    }

    // Ждем появления body, чтобы прикрепить кнопку
    if (document.body) {
        createOmniButton();
    } else {
        const observer = new MutationObserver(() => {
            if (document.body) {
                createOmniButton();
                observer.disconnect();
            }
        });
        observer.observe(document.documentElement, { childList: true });
    }

    console.log('%c[OMNI-BRIDGE] СИСТЕМА АКТИВИРОВАНА', 'color: #00ffff;');
})();
