// ==UserScript==
// @name         Omni-Device-Bridge
// @namespace    OmniProtocol
// @version      1.3.0
// @description  Системный мост [URL-Trigger Mode]
// @author       Командор
// @match        *://omni.system/*
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
        if (apps[id]) window.location.replace(apps[id]);
    };

    // Если мы зашли на omni.system, сразу открываем меню
    if (window.location.host === 'omni.system') {
        const cmd = prompt("OMNI-COMMANDER\n1: Settings | 2: ReVanced | 3: WiFi");
        if (cmd) launch(cmd);
    }
})();
