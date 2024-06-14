# Mods:
## [Rotten Cookies](rottenCookies.js):
### Bookmarklet:
```
javascript:Game.Notify("Installing Mod!","<b>Rotten Cookies</b>",[1,7]);(function(){Game.LoadMod('http://raw.githubusercontent.com/NCResources/My-Cookie-Clicker-Mods/main/rottenCookies.js');})()
```
# Bookmarklets:
## Toggleable:
### Auto-clicker:
```
javascript:if(autoClick==''){PlaySound('snd/tick.mp3');var autoClick=1;Game.Notify('Auto-Clicker Enabled','<b>MWA HA HA HA, it doesn\'t even know that I\'m cheating</b>',[1,7])}else{PlaySound('snd/tickOff.mp3');var autoClick='';Game.Notify('Auto-Clicker Disabled','<b>NOOOOOOOOOOOOOOOOOOO</b>',[1,7])}function click(){if(autoClick!=''){Game.ClickCookie()}}setInterval(click,0)
```
### Dev Tools:
```
javascript:if(devTools==''){PlaySound('snd/tick.mp3')Game.Notify('Dev Tools Enabled','<b>I HAVE THE POWER</b>',[1,7])};Game.OpenSesame();var devTools=1;l('debug').style='display:block'}else{PlaySound('snd/tickOff.mp3');Game.Notify('Dev Tools Disabled','<b>Turn them back on, NOW</b>',[1,7])}var devTools='';l('debug').style='display:none'}
```
## Non-toggleable:
### JavaScript Code Runner:
```
javascript:document.head.innerHTML+=`<a href='javascript:${encodeURIComponent(prompt('Code to run:'))}'id='codeRunner'/>`;document.getElementById('codeRunner').click();document.getElementById('codeRunner').remove()
```
