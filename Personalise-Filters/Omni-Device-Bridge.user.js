// ==UserScript==
// @name         Omni-Device-Bridge
// @namespace    OmniProtocol
// @version      1.7.0
// @description  Системный мост [Internal Debug Final]
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
            3: 'intent://#Intent;action=android.settings.WIFI_SETTINGS;end',
            4: 'intent://#Intent;action=android.settings.BIOMETRIC_ENROLL;end'
        };
        if (apps[id]) window.location.href = apps[id];
    };

    // Создаем глобальный обработчик
    window.Omni = {
        run: () => {
            const cmd = prompt("OMNI-CORE v1.7.0\n1: Settings | 2: ReVanced\n3: WiFi | 4: Biometrics");
            if (cmd) launch(cmd);
        }
    };

    // Слушатель для быстрой активации через встряску URL
    if (window.location.hash === '#omni') {
        history.replaceState(null, null, ' ');
        window.Omni.run();
    }
})();
