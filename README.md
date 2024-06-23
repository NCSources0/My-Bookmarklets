# Mods:
## [Rotten Cookies](rottenCookies.js):
### Bookmarklet:
```
javascript:if(document.getElementById('topbarOrteil')==null)alert('This only works on Cookie Clicker!');else{Game.Notify('Installing Mod!','<b>Rotten Cookies</b>',[0,0,'https://ncresources.github.io/My-Cookie-Clicker-Mods/rottenCookies.png']);(function(){Game.LoadMod('https://ncresources.github.io/My-Cookie-Clicker-Mods/rottenCookies.js')})()}
```
# Bookmarklets:
## Toggleable:
### Auto-clicker:
```
javascript:if(document.getElementById('topbarOrteil')==null)alert('This only works on Cookie Clicker!');else{if(autoClick==''){PlaySound('snd/tick.mp3');var autoClick=1;Game.Notify('Auto-Clicker Enabled','<b>MWA HA HA HA, it doesn\'t even know that I\'m cheating</b>',[1,7])}else{PlaySound('snd/tickOff.mp3');var autoClick='';Game.Notify('Auto-Clicker Disabled','<b>NOOOOOOOOOOOOOOOOOOO</b>',[1,7])}function click(){if(autoClick!=''){Game.ClickCookie()}}setInterval(click,0)}
```
### Dev Tools:
```
javascript:if(document.getElementById('topbarOrteil')==null)alert('This only works on Cookie Clicker!');else{if(devTools==''){PlaySound('snd/tick.mp3')Game.Notify('Dev Tools Enabled','<b>I HAVE THE POWER</b>',[1,7]);Game.OpenSesame();var devTools=1;l('debug').style='display:block'}else{PlaySound('snd/tickOff.mp3');Game.Notify('Dev Tools Disabled','<b>Turn them back on, NOW</b>',[1,7])}var devTools='';l('debug').style='display:none'}
```
## Non-toggleable:
### JavaScript Code Runner:
```
javascript:document.head.innerHTML+=`<a href='javascript:${encodeURIComponent(prompt('Code to run:'))}'id='codeRunner'/>`;document.head.getElementById('codeRunner').click();document.head.getElementById('codeRunner').remove()
```
