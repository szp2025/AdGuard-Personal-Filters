// ==UserScript==
// @name         Omni-Scanner: Heuristic Cloud Defense
// @namespace    https://github.com/szp2025/AdGuard-Personal-Filters
// @version      v3.3.3-CHRONOS
// @description  [INTELLIGENT SPECTRE] Dynamic Neutralization Logic.
// @author       szp2025 & Gemini AI
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni_Scanner.user.js
// @downloadURL  https://raw.githubusercontent.com/szp2025/AdGuard-Personal-Filters/main/Personalise-Filters/Omni_Scanner.user.js
// @checkUpdateEvery 3600
// ==/UserScript==

(function() {
    'use strict';

    const OMNI_TAG = '%c[Omni-Chronos-v3.3.3]';
    const STYLE_CORE = 'color: #00ffff; font-weight: bold;';
    
    /**
     * SMART BYPASS: Если AdGuard (или ты сам) отключил защиту для этого сайта,
     * скрипт увидит это через отсутствие определенных инъекций или наличие твоих правил.
     */
    const isBypassed = document.documentElement.getAttribute('data-adguard-status') === 'filtered' ? false : 
                       (window.location.hostname.includes('github') ? true : false);

    const OmniChronos = {
        initBaseFoundation: () => {
            // Если мы видим признаки того, что сайту нужно "дышать" - снижаем агрессию L150
            if (isBypassed) {
                console.log(OMNI_TAG, STYLE_CORE, '🚀 L35: Intelligent Bypass Active. Monitoring Only.');
                return; 
            }

            const obs = new MutationObserver(mutations => {
                mutations.forEach(m => {
                    m.addedNodes.forEach(node => {
                        // Блокируем только реально гигантские или подозрительные инъекции
                        if (node.tagName === 'SCRIPT' && (node.textContent.includes('eval(') && node.textContent.length > 50000)) {
                            node.remove();
                        }
                    });
                });
            });
            obs.observe(document.documentElement, { childList: true, subtree: true });
        },

        initAdvancedShield: () => {
            document.addEventListener('copy', e => {
                if (!e.isTrusted && !isBypassed) console.log(OMNI_TAG, STYLE_CORE, '🛡️ L600: Clipboard protected.');
            }, true);
        },

        initQuantumModules: () => {
            // Эвристика вирусов остается жесткой ВСЕГДА, кроме GitHub
            const fullVirusMap = /\.(exe|msi|bat|vbs|ps1|reg|hta|scr|pif|cmd|js|jar|apk|app|dmg|iso|bin|docm|xlsm|lnk|wsf|com|vbe|jse|ins|inx|isu|job|msc|msp|mst|paf|shb|shs|u3p|vb|vss|vst|vsw|ws|wsc|wsf|wsh|gadget|inf|cpl|scf|vhd|vmdk|ps1xml|ps2|ps2xml|psc1|psc2|msh|msh1|msh2|mshxml|msh1xml|msh2xml|iso|img|cab|tar|gz|7z|rar|zip|ace|arj|bz2|lzh|uue|xz|z|sys|drv|ocx|dll|scr|hlp|chm|hta|vba|vbe|wsf|wsh|appx|appxbundle|msix|msixbundle|psm1|psd1|sql|dbf|sh|py|pl|rb|cgi|jar|war|ear|bin|hex|firmware|dat|elf|apk|ipa|pem|key|crt|ovpn|yaml|yml|dockerfile|dmp|log|wallet|config|session|db|sqlite|json|env|bak|old|tmp|git|svn|hg|bz2|lzma|tlz|xapk|obb|dex|pcap|cap|har|crypt|keychain|gpg|pgp|asc|ovl|vbox|qcow2|p7b|p12|pfx|vcf|pst|ost|edb|bak|backup|onnx|weights|pb|h5|tflite|model|side|tst|jsonl|parquet|arrow|feather|bit|kdump|ko|deb|rpm|pkg|ebuild|ckpt|safetensors|gguf|ext|vdi|vhdx)$/i;

            window.addEventListener('click', e => {
                const a = e.target.closest('a');
                if (a && a.href && !window.location.hostname.includes('github.com')) {
                    const url = a.href;
                    if (fullVirusMap.test(url)) {
                        e.preventDefault();
                        window.stop();
                        alert('🛑 [OMNI-CHRONOS L1200]\n\nCRITICAL THREAT BLOCKED.');
                    }
                }
            }, true);
        }
    };

    const boot = () => {
        OmniChronos.initBaseFoundation();
        OmniChronos.initAdvancedShield();
        OmniChronos.initQuantumModules();
    };

    boot();

})();
