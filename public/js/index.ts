import MediaPlayer from './media/MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/ads';

const video = document.querySelector('video');
const play: HTMLElement = document.querySelector('#playButton');
const mute: HTMLElement = document.querySelector('#muteButton');

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

play.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .catch((error) => console.log(error.message));
}
