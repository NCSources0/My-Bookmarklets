# Mods:
## [Rotten Cookies](rottenCookies.js):
### Bookmarklet:
```
javascript:Game.Notify("Installing Mod!","<b>Rotten Cookies</b>",[1,7]);(function(){Game.LoadMod('http://raw.githubusercontent.com/NCResources/My-Cookie-Clicker-Mods/main/rottenCookies.js');})();
```
# Bookmarklets:
## Toggleable:
### Auto-clicker:
```
javascript:if(autoClick==0){PlaySound('snd/tick.mp3');var autoClick=1;Game.Notify('Auto-Clicker Enabled','<b>MWA HA HA HA, it doesn\'t even know that I\'m cheating</b>',[1,7])}else{PlaySound('snd/tickOff.mp3');var autoClick=0;Game.Notify('Auto-Clicker Disabled','<b>NOOOOOOOOOOOOOOOOOOO</b>',[1,7])}function click(){if(autoClick==1){Game.ClickCookie()}}setInterval(click,0);
```
### Dev Tools:
```
javascript:if(l('devConsole').innerHTML==''||devTools=='OFF'){PlaySound('snd/tick.mp3')Game.Notify('Dev Tools Enabled','<b>I HAVE THE POWER</b>',[1,7])};Game.OpenSesame();var devTools='ON';l('debug').style='display:block';}else{PlaySound('snd/tickOff.mp3');Game.Notify('Dev Tools Disabled','<b>Turn them back on, NOW</b>',[1,7])}var devTools='OFF';l('debug').style='display:none';}
```
