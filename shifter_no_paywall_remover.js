// ==UserScript==
// @name         shifter_no_paywall_remover.js
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  remove soft paywall on shifter.no
// @author       Morten Lysgaard
// @match        *://shifter.no/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shifter.no
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    (function init(){
        var el = document.querySelector('.boksen--active');
        if (el) {
            el.remove();
        } else {
            setTimeout(init, 100);
        }
    })();
})();


