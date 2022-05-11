// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let head = document.getElementById('head')
let headIndex = 0

let body = document.getElementById('body')
let bodyIndex = 0

let shoes = document.getElementById('shoes')
let shoesIndex = 0

let clothingIndex = 0
//0 = head
//1 = body
//2 = feet

function changeClownHead() {
  if (clothingIndex == 0) {
    if (headIndex < 6 && headIndex >= 0) {
      head.src = './images/head' + headIndex + '.png'
    } else if (headIndex > 4 || headIndex < 0) {
      headIndex = 0
      changeClownHead()
    }
  }
}

function changeClownBody() {
  if (clothingIndex == 1) {
    if (bodyIndex < 6 && bodyIndex >= 0) {
      body.src = './images/body' + bodyIndex + '.png'
      console.log(body)
    } else if (bodyIndex > 4 || bodyIndex < 0) {
      bodyIndex = 0
      changeClownBody()
    }
  }
}

function changeClownShoes() {
  if (clothingIndex == 2) {
    if (shoesIndex < 6 && shoesIndex >= 0) {
      shoes.src = './images/shoes' + shoesIndex + '.png'
    } else if (shoesIndex > 4 || shoesIndex < 0) {
      shoesIndex = 0
      changeClownShoes()
    }
  }
}

document.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'ArrowRight': {
      if (clothingIndex == 0) {
        headIndex++
        changeClownHead()
        break
      } else if (clothingIndex == 1) {
        bodyIndex++
        changeClownBody()
        break
      } else if (clothingIndex == 2) {
        shoesIndex++
        changeClownShoes()
        break
      }
    }

    case 'ArrowLeft': {
      if (clothingIndex == 0) {
        headIndex--
        changeClownHead()
        break
      } else if (clothingIndex == 1) {
        bodyIndex--
        changeClownBody()
        break
      } else if (clothingIndex == 2) {
        shoesIndex--
        changeClownShoes()
        break
      }
    }

    case 'ArrowDown':
      if (clothingIndex < 3) {
        clothingIndex++
      }
      break

    case 'ArrowUp':
      if (clothingIndex > 0) {
        clothingIndex--
      }
      break
  }
})
