// ==UserScript==
// @name         Omni-Device-Bridge
// @namespace    OmniProtocol
// @version      1.0.5
// @description  Системный мост управления телефоном [Auto-Check: 1h]
// @author       Командор
// @match        *://*/*
// @grant        unsafeWindow
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni-Device-Bridge.user.js
// @downloadURL  https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni-Device-Bridge.user.js
// @updateCheck  3600
// ==/UserScript==

/**
 * СТАТУС СИСТЕМЫ:
 * Последнее обновление: 2026-04-01 | 22:15
 * Цикл проверки: 3600s (1 час)
 */

(function() {
    'use strict';

    const OmniBridge = {
        config: {
            TAG: '%c[OMNI-BRIDGE]',
            STYLE: 'color: #00ffff; font-weight: bold;',
            VERSION: '1.0.5',
            DEPLOYED: '2026-04-01 22:15',
            APPS: {
                SETTINGS: 'intent://#Intent;action=android.settings.SETTINGS;end',
                REVANCED: 'intent://#Intent;package=app.revanced.android.youtube;end',
                WIFI: 'intent://#Intent;action=android.settings.WIFI_SETTINGS;end',
                BIO: 'intent://#Intent;action=android.settings.BIOMETRIC_ENROLL;end'
            }
        },
        launch: function(appKey) {
            const intent = this.config.APPS[appKey];
            if (intent) {
                console.log(this.config.TAG, this.config.STYLE, `Запуск модуля: ${appKey}...`);
                window.location.href = intent;
            }
        }
    };

    window.OmniBridge = OmniBridge;

    // Функция создания интерфейса
    function createOmniButton() {
        if (document.getElementById('omni-bridge-btn')) return;
        
        let btn = document.createElement('div');
        btn.id = 'omni-bridge-btn';
        btn.innerHTML = 'Ω';
        btn.style = 'position:fixed; bottom:85px; right:15px; width:48px; height:48px; background:rgba(0,20,30,0.8); color:#00ffff; border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:9999999; border:1px solid #00ffff; font-size:22px; cursor:pointer; backdrop-filter:blur(10px); box-shadow: 0 0 15px rgba(0,255,255,0.4);';
        
        btn.onclick = function() {
            let action = prompt(`OMNI-CONTROL v${OmniBridge.config.VERSION}\nLast Update: ${OmniBridge.config.DEPLOYED}\nNext Check: in 1 hour\n\n1: Общие настройки\n2: YouTube ReVanced\n3: Wi-Fi Сети\n4: Биометрия`);
            if(action == '1') OmniBridge.launch('SETTINGS');
            if(action == '2') OmniBridge.launch('REVANCED');
            if(action == '3') OmniBridge.launch('WIFI');
            if(action == '4') OmniBridge.launch('BIO');
        };
        
        document.body.appendChild(btn);
    }

    // Инициализация при появлении DOM
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

    // Принудительный запрос обновления через AdGuard API (если доступно)
    console.log(OmniBridge.config.TAG, OmniBridge.config.STYLE, `Omni-Bridge v${OmniBridge.config.VERSION} активен. Проверка обновлений: каждый час.`);
})();
