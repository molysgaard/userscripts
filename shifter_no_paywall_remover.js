// ==UserScript==
// @name         shifter_no_paywall_remover.js
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  remove soft paywall on shifter.no
// @author       Morten Lysgaard
// @match        *://shifter.no/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shifter.no
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Removes offer to subscribe blocking reading of articles
    (function subscribe_block(){
        var el = document.querySelector('.boksen--active');
        if (el) {
            el.remove();
        } else {
            setTimeout(subscribe_block, 100);
        }
    })();

    // Removes modal that asks for newsletter subscription and blocks whole screen
    (function newsletter_block(){
        var el = document.querySelector('.tp-close .tp-active');
          if (el) {
            var evt = new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: 20,
                /* whatever properties you want to give it */
            });
            el.dispatchEvent(evt);
        } else {
            setTimeout(newsletter_block, 100);
        }
    })();
})();


