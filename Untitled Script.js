// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-brown; icon-glyph: magic;
// ==UserScript==
// @name          prevent pop-ad
// @include       http://animeflv.net/*
// @include       https://eyoon.co/embed*
// @include       http://embed.novamov.com/embed*
// @include       http://www.auroravid.to/embed*
// @include       http://embed.videoweed.es/embed*
// @include       http://www.bitvid.sx/embed*
// @include       http://mz.yourupload.com/rotate/yourupload/*
// @include       http://www.mp4upload.com/embed*
// @run-at        document-start
// @grant         none
// ==/UserScript==
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        try { jQuery._data(document, 'events').mouseup = null; } catch(e) {}
        window.oncontextmenu = null;
        document.head.insertAdjacentHTML('beforeend',
            '<style>div[style*="z-index"], div[style*="fixed"] { pointer-events:none!important }</style>');
    });
    var __addEventListener = window.addEventListener;
    window.addEventListener = document.addEventListener = function(type, fn, capture) {
        //console.log(this, type, fn); // debug logging
        if (/^(ceop|click|mousedown|mouseup|mousemove|contextmenu)$/.test(type)) {
            //console.log('Prevented', type, 'registration on', this, fn);
        } else {
            __addEventListener.call(this, type, fn, capture);
        }
    };
})();