// ==UserScript==
// @name         Omni-Device-Bridge
// @namespace    OmniProtocol
// @version      1.0.9
// @description  Системный мост [PUSH-Notification Mode]
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

    // Функция вызова меню
    function showOmniMenu() {
        const cmd = prompt("OMNI-SYSTEM v1.0.9\n1: Settings | 2: ReVanced | 3: WiFi | 4: Bio");
        if (cmd) OmniBridge.launch(cmd);
    }

    // ЗАПРОС ПРАВ НА УВЕДОМЛЕНИЯ
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }

    // СОЗДАНИЕ ПУША ПРИ ЗАГРУЗКЕ
    function sendOmniPush() {
        if (Notification.permission === "granted") {
            const notification = new Notification("OMNI-BRIDGE АКТИВЕН", {
                body: "Нажмите здесь, чтобы открыть панель управления",
                icon: "https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png", // Или любой ваш лого
                tag: "omni-link",
                renotify: false,
                requireInteraction: true // Пуш не исчезнет сам!
            });

            notification.onclick = function(event) {
                event.preventDefault(); // Запрещаем переход по ссылке
                window.focus();
                showOmniMenu();
            };
        }
    }

    // Запускаем через 3 секунды после открытия сайта
    setTimeout(sendOmniPush, 3000);

    // Оставляем "План Б" - Длинное нажатие 3 сек
    let pressTimer;
    document.addEventListener('touchstart', () => {
        pressTimer = window.setTimeout(showOmniMenu, 3000); 
    });
    document.addEventListener('touchend', () => clearTimeout(pressTimer));

})();
