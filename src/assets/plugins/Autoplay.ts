import Mediaplayer from "../Mediaplayer"
class Autoplay {
    constructor() {
        
    }
  private  run(player:Mediaplayer){
        player.media.muted = true
        if (player.media.muted) {
            player.media.play()
        } else {
            player.media.muted = true
        }
    }
}
export default Autoplay