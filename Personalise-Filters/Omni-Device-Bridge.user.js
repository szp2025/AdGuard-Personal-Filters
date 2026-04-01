// ==UserScript==
// @name         Omni-Device-Bridge
// @namespace    OmniProtocol
// @version      1.1.2
// @description  Системный мост [AdGuard Trigger Mode]
// @author       Командор
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni-Device-Bridge.user.js
// @downloadURL  https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni-Device-Bridge.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Функция запуска интентов
    const launch = (id) => {
        const apps = {
            1: 'intent://#Intent;action=android.settings.SETTINGS;end',
            2: 'intent://#Intent;package=app.revanced.android.youtube;end',
            3: 'intent://#Intent;action=android.settings.WIFI_SETTINGS;end'
        };
        if (apps[id]) window.location.href = apps[id];
    };

    // Слушатель "Секретного слова" в поиске
    // Если введете в любом поле ввода "omni" и нажмете пробел - выскочит меню
    document.addEventListener('input', function(e) {
        if (e.target.value.toLowerCase() === 'omni ') {
            e.target.value = ''; // Очищаем поле
            const cmd = prompt("OMNI-BRIDGE\n1: Настройки\n2: ReVanced\n3: WiFi");
            if (cmd) launch(cmd);
            
            // Стучимся в AdGuard для лога
            fetch('https://omni.system/trigger?v=1.1.2').catch(()=>{});
        }
    });

    // Резервный триггер: 3 быстрых тапа по логотипу любого сайта (или верху страницы)
    let clicks = 0;
    document.addEventListener('click', () => {
        clicks++;
        if (clicks === 3) {
            const cmd = prompt("OMNI-MENU\n1: Settings | 2: ReVanced | 3: WiFi");
            if (cmd) launch(cmd);
            clicks = 0;
        }
        setTimeout(() => { clicks = 0; }, 1000);
    });

})();
