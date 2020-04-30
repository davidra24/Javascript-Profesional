class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handlerIntersection = this.handlerIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player) {
    this.player = player;

    /**
     * @threshold -> Umbral que define el porcentaje del elemento que debe estar en el contenedor
     */
    const config = {
      threshold: this.threshold,
    };

    /**
     * @handler -> Intersección en el objeto observado
     * @config -> Configuración del Intersection
     */
    const observer = new IntersectionObserver(this.handlerIntersection, config);

    observer.observe(this.player.media);

    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  /**
   *
   * @param {*} entries -> Los elementos que está obervando
   */
  handlerIntersection(entries) {
    const entry = entries[0];
    console.log(entry);

    if (entry.intersectionRatio >= this.threshold) {
      this.player.play();
    } else {
      this.player.stop();
    }
  }

  handleVisibilityChange() {
    if (document.visibilityState === 'visible') {
      this.player.play();
    } else {
      this.player.stop();
    }
  }
}

export default AutoPause;
