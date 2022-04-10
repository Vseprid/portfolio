import * as hamburgerWindow from './hamburger-window.js';
import {portfolioButtons, changeImage} from './change-images.js';
import preloadImages from './preload-images.js';
import {switchLang, switchInHeader} from './get-translate.js';
import {themeElem, changeTheme, theme} from './light-theme.js';
import {setLocalStorage, getLocalStorage} from './local-storage.js';
import {buttons, rippleButton} from './ripple-button.js';
import {video, toggle, ranges, progress, volume, volumeButton, playButton, poster,
        togglePlay, updateButton, mousedown, handleRangeUpdate, handleProgress,
        handleButtonVolume, progressTrack, changeVolume} from './video.js';

hamburgerWindow.hamburger.addEventListener('click', hamburgerWindow.toggleMenu);
hamburgerWindow.nav.addEventListener('click', hamburgerWindow.closeMenu);

preloadImages();

portfolioButtons.addEventListener('click', changeImage);

switchLang.addEventListener('click', switchInHeader);


themeElem.addEventListener('click', () => {
  theme[0] = (theme[0] == 'dark' ? 'light' : 'dark');
  changeTheme(theme[0]);
});

window.addEventListener('beforeunload', setLocalStorage)

window.addEventListener('load', getLocalStorage)

buttons.forEach(element => element.addEventListener('click', rippleButton));


video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
poster.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', () => {
  progressTrack.call(progress);
  progressTrack.call(volume);
  handleProgress();
});
video.addEventListener('volumechange', handleButtonVolume);
toggle.addEventListener('click', togglePlay);
ranges.forEach(range => range.addEventListener('input', (event) => {
  handleRangeUpdate(event);
  progressTrack(event);
}));
progress.addEventListener('change', () => {
  mousedown[0] && video.play();
  mousedown[0] = false;
});
volumeButton.addEventListener('click', changeVolume);