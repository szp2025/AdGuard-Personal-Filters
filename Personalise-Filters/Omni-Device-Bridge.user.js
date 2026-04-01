// ==UserScript==
// @name         Omni-Device-Bridge
// @namespace    OmniProtocol
// @version      1.4.0
// @description  Системный мост [Hash-Trigger Mode]
// @author       Командор
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni-Device-Bridge.user.js
// @downloadURL  https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni-Device-Bridge.user.js
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

    // ГЛАВНЫЙ ТРИГГЕР: Проверка хэштега в URL
    function checkOmni() {
        if (window.location.hash === '#omni') {
            // Очищаем хэштег, чтобы не зациклиться
            history.replaceState(null, null, ' ');
            
            const cmd = prompt("OMNI-COMMANDER v1.4.0\n1: Settings | 2: ReVanced | 3: WiFi");
            if (cmd) launch(cmd);
        }
    }

    // Проверяем при загрузке и при изменении URL
    checkOmni();
    window.addEventListener('hashchange', checkOmni);

    console.log("Omni-Bridge v1.4.0: Ожидание хэштега #omni");
})();
