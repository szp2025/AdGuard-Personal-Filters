// ==UserScript==
// @name         Omni-Device-Bridge
// @namespace    OmniProtocol
// @version      1.5.0
// @description  Системный мост [Chrome-Internal Mode]
// @author       Командор
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const launch = (id) => {
        const apps = {
            1: 'intent://#Intent;action=android.settings.SETTINGS;end',
            2: 'intent://#Intent;package=app.revanced.android.youtube;end',
            3: 'intent://#Intent;action=android.settings.WIFI_SETTINGS;end'
        };
        if (apps[id]) window.location.href = apps[id];
    };

    // Создаем глобальную функцию, которую Chrome сможет вызвать из адресной строки
    window.omni = () => {
        const cmd = prompt("OMNI-INTERNAL\n1: Settings | 2: ReVanced | 3: WiFi");
        if (cmd) launch(cmd);
    };

    // Если мы на странице ошибки (как на твоем скрине), пробуем пробиться через заголовок
    if (document.title.includes("omni.system")) {
        window.omni();
    }
})();
