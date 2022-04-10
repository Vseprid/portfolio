const player = document.querySelector('.player');
export const video = player.querySelector('.viewer');
export const toggle = player.querySelector('.toggle');
export const ranges = player.querySelectorAll('.player__slider');
export const progress = player.querySelector('.progress');
export const volumeButton = player.querySelector('.button-volume');
export const volume = player.querySelector('.volume');
export const playButton = player.querySelector('.play');
export const poster = player.querySelector('.player__poster');

export function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    poster.classList.add('player__poster_playing');
}

export function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
    playButton.style.display = (this.paused ? 'block' : 'none');
}

export const mousedown = [false];

export function handleRangeUpdate(event) {
    const range = event?.target || this;
    video[range.name] = range.value;
    if (range === progress && !video.paused) {
      video.pause();
      mousedown[0] = true;
    }
}

export function handleProgress() {
    progress.value = video.currentTime;
}

export function handleButtonVolume() {
    video.volume === 0 ?
    volumeButton.style.backgroundImage = `url(/assets/svg/volumeoff.svg)` :
    volumeButton.style.backgroundImage = `url(/assets/svg/volumeup.svg)`;
}

export function progressTrack(event) {
    const range = event?.target || this;
    const value = (range === progress ?
      range.value / 58 * 100 :
      range.value * 100);

    range.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`
}

export function changeVolume () {
    const rangeVolume = player.querySelector('.volume');
    if (!changeVolume.volume) changeVolume.volume = 0;

    if (rangeVolume.value === '0') {
      rangeVolume.value = changeVolume.volume;
      handleRangeUpdate.call(rangeVolume);
      handleButtonVolume()
    } else {
      changeVolume.volume = rangeVolume.value;
      rangeVolume.value = 0;
      handleRangeUpdate.call(rangeVolume);
      handleButtonVolume();
    }
}