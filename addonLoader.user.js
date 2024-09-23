// ==UserScript==
// @name Cookie Clicker Add-On Loader
// @version 1.0.0
// @description Loads add-ons into Cookie Clicker
// @namespace http://ncsources0.github.io/My-Bookmarklets
// @match *://*/*
// ==/UserScript==

const Game = unsafeWindow.Game, isReady = setInterval(() => {
    if (Game.ready) {
        clearInterval(isReady);
        loadAddon('https://ncsources0.github.io/My-Bookmarklets/rottenCookies.js', 'Rotten Cookies', [0, 0, 'https://ncsources0.github.io/My-Bookmarklets/rottenCookies.png']);
    }
}, 0);

function loadAddon(url, name, imgData) {
    if (!name) name = 'Add-On'
    if (!imgData) imgData = [16, 5];
    if (Game.mods[name]) {
        console.error(name + ' is already loaded!')
    } else {
        Game.Notify('Loading Add-On!', `<b><a href='${url.substring(0, url.lastIndexOf("/"))}' target='_blank'>${name}</a></b>`, imgData);
        Game.LoadMod(url);
    }
}
