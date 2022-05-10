// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let cells = document.getElementsByTagName('td')

let mole = new Image()
mole.id = 'mole'
mole.src = 'mole.PNG'

let audio = new Audio()
audio.src = 'whack-audio.wav'

//put cells data into an array
let cellsArray = Array.prototype.slice.call(cells)

function showTheMole() {
  let randomIndex = Math.floor(Math.random() * cellsArray.length)
  let randomCell = cellsArray[randomIndex]
  randomCell.appendChild(mole)
}
showTheMole()

for (let i = 0; i < cellsArray.length; i++) {
  cells[i].onclick = whackedMole
}

function playAudio() {
  audio.currentTime = 0
  audio.play()
}
function whackedMole(event) {
  if (event.target === mole) {
    playAudio()
    mole.parentElement.removeChild(mole)
    showTheMole()
    console.log('you whacked a mole')
  }
}
