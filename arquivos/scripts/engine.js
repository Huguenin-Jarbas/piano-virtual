const pianokeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider =document.querySelector(".volume-slider input ")
const keysCheck = document.querySelector(".keys-check input")



let mapedKeys =[]
let audio = new Audio("arquivos/tunes/a.wav")

const playTune = (key) => {
  audio.src = `arquivos/tunes/${key}.wav`
  audio.play()

  const clickedKay = document.querySelector(`[data-key="${key}"]`) 
  clickedKay.classList.add("active")
  setTimeout(() =>{
    clickedKay.classList.remove("active")
  }, 150)

}


pianokeys.forEach((key) => {
  key.addEventListener("click" ,() => playTune(key.dataset.key))
  mapedKeys.push(key.dataset.key)
  
});

document.addEventListener("keydown", (e) => {

  if(mapedKeys.includes(e.key)){
    playTune(e.key)
  }
})

const handleVolume = (e) => {
  audio.volume = e.target.value;
}

const showKeys = () =>{
  pianokeys.forEach(key => key.classList.toggle("hide"))
}

volumeSlider.addEventListener("input", handleVolume)

keysCheck.addEventListener("click", showKeys)