// ==UserScript==
// @name         Spotify Downloader - NCSources0 edition
// @version      0.1
// @description  Adds functionality to download buttons in Spotify if you don't have premium, using spotdownloader.com.
// @author       NCSources0
// @match        *://open.spotify.com/*
// @match        *://spotdownloader.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spotify.com
// ==/UserScript==

try {
  if (location.hostname === 'spotdownloader.com') new MutationObserver(() => {
    const downloadBtn = document.querySelector('#result button');
    if (new URLSearchParams(location.search).has('download') && downloadBtn && !downloadBtn.hasAttribute('downloading')) {
      downloadBtn.toggleAttribute('downloading');
      downloadBtn.click();
    }
  }).observe(document.getElementById('result'), { childList: true, subtree: true });

  else if (location.hostname === 'open.spotify.com') new MutationObserver(() => {
    const albumBtn = document.querySelector('button[aria-label="Download"]');
    if (albumBtn && !location.pathname.startsWith('/collection/tracks')) {
      const newAlbumBtn = document.createElement('button');
      newAlbumBtn.onclick = () => open(`http://spotdownloader.com/?link=${location}&download`);
      newAlbumBtn.innerHTML = albumBtn.innerHTML;
      newAlbumBtn.classList.add(...albumBtn.classList)
      albumBtn.replaceWith(newAlbumBtn);
    }

    const contextMenu = document.querySelector('div#context-menu ul');
    if (contextMenu && contextMenu.firstElementChild.querySelector('span').textContent === 'Add to playlist') {
      const last = contextMenu.lastElementChild;
      if (!last.hasAttribute('downloadBtn')) {
        const lastBtn = last.querySelector('button')
        const lastSVG = lastBtn.querySelector('svg')

        const li = document.createElement('li');
        li.classList.add(...last.classList);
        li.toggleAttribute('downloadBtn');

        const downloadBtn = document.createElement('button');
        downloadBtn.classList.add(...lastBtn.classList);

        const downloadSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        downloadSVG.classList.add(...lastSVG.classList);
        downloadSVG.setAttribute('viewBox', lastSVG.getAttribute('viewBox'));
        downloadSVG.style = lastSVG.getAttribute('style');
        downloadSVG.innerHTML = '<path d="M 7.985 12.31 L 3.062 7.38 L 4.369 6.08 L 7.062 8.77 L 7.062 0 L 8.908 0 L 8.908 8.77 L 11.6 6.08 L 12.908 7.38 L 7.985 12.31 Z M 2.439 16 C 1.931 16 1.497 15.82 1.138 15.46 C 0.779 15.1 0.6 14.66 0.6 14.15 L 0.6 12.31 L 2.446 12.31 L 2.446 14.15 L 13.523 14.15 L 13.523 12.31 L 15.369 12.31 L 15.369 14.15 C 15.369 14.66 15.188 15.1 14.827 15.46 C 14.465 15.82 14.03 16 13.522 16 L 2.439 16 Z"></path>';

        const downloadSpan = document.createElement('span');
        downloadSpan.classList.add(...lastBtn.querySelector('span').classList);
        downloadSpan.textContent = 'Download Song';

        downloadBtn.addEventListener('click', async () => {
          let shareBtn = contextMenu.querySelectorAll('li button div span');
          for (const span of shareBtn) {
            if (span.textContent.toLowerCase().trim() === 'share') {
              shareBtn = span.parentElement.parentElement;
              break;
            }
          }

          const event = new PointerEvent('mouseover', { bubbles: true });
          shareBtn.dispatchEvent(event);

          await new Promise(r => setTimeout(r, 100));
          shareBtn = shareBtn.parentElement;
          shareBtn.querySelector('div[data-tippy-root] ul li').querySelector('button').click();

          await new Promise(r => setTimeout(r, 100));
          navigator.clipboard.readText().then(text => open(`http://spotdownloader.com/?link=${text}&download`));
        });

        downloadBtn.append(downloadSVG, downloadSpan);
        li.append(downloadBtn);
        contextMenu.append(li);
      }
    }
  }).observe(document.body, { childList: true, subtree: true });
} catch {}