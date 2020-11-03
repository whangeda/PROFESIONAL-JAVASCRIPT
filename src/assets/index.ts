//TODO: IMPORTACION DE  MODULOS
import Mediaplayer from "./Mediaplayer"
import Autoplay from "./plugins/Autoplay"
import Autopause from "./plugins/Autopause"
//TODO: VARTIABLES DE DOM
const $play:HTMLElement = document.getElementById("play")
const $muted:HTMLElement = document.getElementById("muted")
const $video:HTMLVideoElement = document.querySelector("video")

//TODO:CREACION DE OBJETOS
const corto = new Mediaplayer({media:$video,plugins:[new Autoplay(),new Autopause()]})
$play.addEventListener("click",(e)=> corto.toglePlay())
$muted.addEventListener("click",(e)=>corto.togleMuted())