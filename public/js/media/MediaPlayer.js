function MediaPlayer(config) {
  this.media = config.el;
}
MediaPlayer.prototype.play = function () {
  this.media.play();
};
MediaPlayer.prototype.stop = function () {
  this.media.pause();
};
MediaPlayer.prototype.togglePlay = function () {
  this.media.paused ? this.play() : this.stop();
};

export default MediaPlayer;
