function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
  this.initPlugins();
}
MediaPlayer.prototype.initPlugins = function () {
  const player = {
    play: () => this.play(),
    stop: () => this.stop(),
    media: this.media,
    get muted() {
      return this.media.muted;
    },
    set muted(value) {
      this.media.muted = value;
    },
  };
  this.plugins.forEach((plugin) => {
    plugin.run(player);
  });
};
MediaPlayer.prototype.play = function () {
  this.media.play();
};
MediaPlayer.prototype.stop = function () {
  this.media.pause();
};
MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};
MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};
MediaPlayer.prototype.toggleMute = function () {
  if (this.media.muted) {
    this.unmute();
  } else {
    this.mute();
  }
};
MediaPlayer.prototype.togglePlay = function () {
  this.media.paused ? this.play() : this.stop();
};

export default MediaPlayer;
