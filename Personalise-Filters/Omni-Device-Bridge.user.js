// ==UserScript==
// @name         Omni-Device-Bridge
// @namespace    OmniProtocol
// @version      1.6.0
// @description  Системный мост [Omnibox Bypass]
// @author       Командор
// @match        *://*/*
// @match        chrome://omnibox/*
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

    // Слушаем глобальный вызов
    window.omniTrigger = () => {
        const cmd = prompt("OMNI-SYSTEM\n1: Settings\n2: ReVanced\n3: WiFi");
        if (cmd) launch(cmd);
    };

    // Авто-активация, если зашли через наш ярлык
    if (window.location.hash === '#run') {
        window.omniTrigger();
    }
})();
