import Mediaplayer from "../Mediaplayer"
class Autopause {
    threshold:number
    player:Mediaplayer
    constructor() {
        this.threshold = 0.50
        this.observador = this.observador.bind(this)
        this.visible = this.visible.bind(this)
    }
  private  run(player:Mediaplayer){
      this.player = player
      const config = {
          threshold: this.threshold
      }
      const observer = new IntersectionObserver(this.observador,config)
      observer.observe(this.player.media)
      document.addEventListener("visibilitychange",this.visible)
    }
 private   observador(entries:IntersectionObserverEntry[]){
        const entry = entries[0].isIntersecting
        if (entry) {
          this.player.media.play()  
        } else {
            this.player.media.pause()
        }
        
    }
    visible(){
        const isVisible = document.visibilityState === "visible"
        if (isVisible) {
            this.player.media.play()
        } else {
            this.player.media.pause()
        }
    }
}
export default Autopause