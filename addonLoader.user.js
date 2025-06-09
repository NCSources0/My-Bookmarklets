// ==UserScript==
// @name         Cookie Clicker Add-On Loader
// @version      0.1
// @description  Loads add-ons into Cookie Clicker automatically
// @author       NCSources0
// @match        *://*/*
// ==/UserScript==

const addons = [ // "url" is the only required parameter.
  {url: 'https://ncsources0.github.io/My-Bookmarklets/rottenCookies.js', name: 'Rotten Cookies', img: [0, 0, 'https://ncsources0.github.io/My-Bookmarklets/rottenCookies.png']}
]

function loadAddon(url, name = url.split('/').pop(), img = [16, 5]) {
  if (Game.mods[name]) console.error(name + ' is already loaded!');
  else {
    Game.Notify('Loading Add-On!', `<b><a href='${url.substring(0, url.lastIndexOf("/"))}' target='_blank'>${name}</a></b>`, img);
    Game.LoadMod(url);
  }
}

await new Promise(r => setTimeout(r, 10000));

if (Game && addons.length > 0) {
  const isReady = setInterval(() => {
    if (Game.ready) {
      clearInterval(isReady);
      addons.forEach(data => {
        loadAddon(data.url, data?.name, data?.img)
      });
    }
  }, 1000);
}
else console.error('Couldn\'t load add-ons!');