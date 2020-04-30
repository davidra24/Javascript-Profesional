import MediaPlayer from '../media/MediaPlayer';

class AutoPlay {
  constructor() {}
  run(player: MediaPlayer) {
    player.media.muted = !player.media.muted;
    player.play();
  }
}

export default AutoPlay;
