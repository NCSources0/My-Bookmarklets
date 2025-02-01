// ==UserScript==
// @name         Scroll Stopper
// @version      The-first-and-last
// @description  Stop scrolling.
// @author       NCSources0
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// ==/UserScript==

setInterval(function (path) {
  path = location.pathname.split("/");
  if (path[1] == "shorts") location.replace(`http://youtu.be/${path[2]}`);
}, 0);
