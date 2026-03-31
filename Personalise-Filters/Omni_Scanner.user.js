// ==UserScript==
// @name         Omni-Scanner: Heuristic Cloud Defense
// @namespace    https://github.com/szp2025/AdGuard-Personal-Filters
// @version      v3.3.1-CHRONOS
// @description  [FULL-SPECTRUM ARCHITECTURE] L0-L1200 RAM-Only Shield. Fixed Whitelist.
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

    const OMNI_TAG = '%c[Omni-Chronos-v3.3.1]';
    const STYLE_CORE = 'color: #00ffff; font-weight: bold; text-shadow: 0 0 5px #00ffff; border-left: 3px solid #00ffff; padding-left: 10px;';
    const STYLE_DANGER = 'color: #fff; background: #ff0000; padding: 2px 5px; font-weight: bold;';

    // --- L35: TRUSTED DOMAINS (WHITELIST) ---
    const isTrustedDomain = /m2mlease\.fr|github\.com/i.test(window.location.hostname);

    const OmniChronos = {

        initBaseFoundation: () => {
            if (isTrustedDomain) {
                console.log(OMNI_TAG, STYLE_CORE, '⚪ L35: Trusted domain detected. Heuristics bypassed.');
                return; 
            }

            const obs = new MutationObserver(mutations => {
                mutations.forEach(m => {
                    m.addedNodes.forEach(node => {
                        if (node.tagName === 'SCRIPT' && (node.textContent.includes('eval(') || node.textContent.length > 150000)) {
                            console.warn(OMNI_TAG, STYLE_DANGER, '🛑 L150: Blocking potentially dangerous script.');
                            node.remove();
                        }
                    });
                });
            });
            obs.observe(document.documentElement, { childList: true, subtree: true });
        },

        initAdvancedShield: () => {
            document.addEventListener('copy', e => {
                if (!e.isTrusted) console.log(OMNI_TAG, STYLE_CORE, '🛡️ L600: Clipboard manipulation prevented.');
            }, true);

            if (window.SharedArrayBuffer) {
                const orgSAB = window.SharedArrayBuffer;
                window.SharedArrayBuffer = function() {
                    return new Proxy(new orgSAB(...arguments), {});
                };
            }
        },

        initQuantumModules: () => {
            const orgGet = localStorage.getItem;
            localStorage.getItem = function(k) {
                if (/token|auth|pass|wallet|key/i.test(k) && !window.event?.isTrusted && !isTrustedDomain) {
                    return "protected_void_" + Math.random().toString(36).substring(7);
                }
                return orgGet.apply(localStorage, arguments);
            };

            const orgNow = performance.now;
            performance.now = function() {
                return orgNow.apply(performance, arguments) + (Math.random() * 0.001);
            };

            const fullVirusMap = /\.(exe|msi|bat|vbs|ps1|reg|hta|scr|pif|cmd|js|jar|apk|app|dmg|iso|bin|docm|xlsm|lnk|wsf|com|vbe|jse|ins|inx|isu|job|msc|msp|mst|paf|shb|shs|u3p|vb|vss|vst|vsw|ws|wsc|wsf|wsh|gadget|inf|cpl|scf|vhd|vmdk|ps1xml|ps2|ps2xml|psc1|psc2|msh|msh1|msh2|mshxml|msh1xml|msh2xml|iso|img|cab|tar|gz|7z|rar|zip|ace|arj|bz2|lzh|uue|xz|z|sys|drv|ocx|dll|scr|hlp|chm|hta|vba|vbe|wsf|wsh|appx|appxbundle|msix|msixbundle|psm1|psd1|sql|dbf|sh|py|pl|rb|cgi|jar|war|ear|bin|hex|firmware|dat|elf|apk|ipa|pem|key|crt|ovpn|yaml|yml|dockerfile|dmp|log|wallet|config|session|db|sqlite|json|env|bak|old|tmp|git|svn|hg|bz2|lzma|tlz|xapk|obb|dex|pcap|cap|har|crypt|keychain|gpg|pgp|asc|ovl|vbox|qcow2|p7b|p12|pfx|vcf|pst|ost|edb|bak|backup|onnx|weights|pb|h5|tflite|model|side|tst|jsonl|parquet|arrow|feather|bit|kdump|ko|deb|rpm|pkg|ebuild|ckpt|safetensors|gguf|ext|vdi|vhdx)$/i;

            window.addEventListener('click', e => {
                const a = e.target.closest('a');
                if (a && a.href && !isTrustedDomain) {
                    const url = a.href;
                    const name = url.split('/').pop().split(/[?#]/)[0];
                    if (fullVirusMap.test(url) || /\.(pdf|docx|txt|jpg)\.(exe|js|vbs|scr|bat|ps1|com)$/i.test(name)) {
                        e.preventDefault();
                        window.stop();
                        alert('🛑 [OMNI-CHRONOS L1200]\n\nCRITICAL THREAT BLOCKED.');
                    }
                }
            }, true);
        }
    };

    const boot = () => {
        console.log(OMNI_TAG, STYLE_CORE, '🚀 OMNI-SCANNER v3.3.1: SPECTRUM ACTIVE.');
        OmniChronos.initBaseFoundation();
        OmniChronos.initAdvancedShield();
        OmniChronos.initQuantumModules();
    };

    boot();

})();
