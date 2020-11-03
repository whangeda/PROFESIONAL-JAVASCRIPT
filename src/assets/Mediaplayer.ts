class Mediaplayer {
    media:HTMLVideoElement
    plugins:Array <any>
    constructor(config) {
        let {media,plugins} = config
        this.media = media
        this.plugins = plugins ||[]
        this.initPlugins()
    }
    toglePlay(){
        if (this.media.paused) {
            this.media.play()
        } else {
            this.media.pause()
        }
    }
 private   initPlugins(){
     this.plugins.forEach((elem)=>{
         elem.run(this)
     })
    }
    togleMuted(){
        if (!this.media.muted) {
            this.media.muted = true
        } else {
            this.media.muted = false
        }
    }
}
export default Mediaplayer