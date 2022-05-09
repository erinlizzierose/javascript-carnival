// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorn = document.getElementsByClassName('inflate-an-image')
//getElementsByClassName returns an array-like object of all the child elements
let unicorn0 = document.getElementById('unicorn1')
let unicorn1 = document.getElementById('unicorn2')
let unicorn2 = document.getElementById('unicorn3')

let clickCount0 = 0
let clickCount1 = 0
let clickCount2 = 0

for (i = 0; i < unicorn.length; i++) {
  unicorn[i].onclick = inflate
}

function inflate(event) {
  let image = event.target
  if (image.id == 'unicorn0') {
    if (clickCount0 < 3) {
      clickCount0++
      image.src = './images/unicorn-' + clickCount0 + '.png'
    } else if (clickCount0 == 3) {
      alert('Unicorn Number 1 says thank you!')
    }
  }
  if (image.id == 'unicorn1') {
    if (clickCount1 < 3) {
      clickCount1++
      image.src = './images/unicorn-' + clickCount1 + '.png'
    } else if (clickCount1 == 3) {
      alert('Unicorn Number 2 says thank you!')
    }
  }
  if (image.id == 'unicorn2') {
    if (clickCount2 < 3) {
      clickCount2++
      image.src = './images/unicorn-' + clickCount2 + '.png'
    } else if (clickCount2 == 3) {
      alert('Unicorn Number 3 says thank you!')
    }
  }
}

//I spent quite a bit of time trying some other methods. I have left that code below for reference :)
// let image = event.target
// if (clickCount[i] == 0) {
//   image.src = 'images/unicorn-1.png'
// } else if (clickCount[i] == 1) {
//   image.src = 'images/unicorn-2.png'
// }
// else if
// clickCount[i] += 1

// if (unicorn.count == 0) {
//   image.src = 'images/unicorn-1.png'
// } else if (unicorn.count == 1) {
//   image.src = 'images/unicorn-2.png'
// } else if (unicorn.count == 2) {
//   image.src = 'images/unicorn-3.png'
// }
// count += 1

//could I store the unicorn variables in an array of objects?
// let unicorns = [
//   {
//     name: unicorn[0],
//     count: 0,
//   },
//   {
//     name: unicorn[1],
//     count: 0,
//   },
//   {
//     name: unicorn[2],
//     count: 0,
//   },
// ]

//maybe right a function to update the counts?
// function updateCounts() {
//   let totals = {
//     unicorn1: 0,
//     unicorn2: 0,
//     unicorn3: 0,
//   }
// }

//write function
//call function using onclick method
//change unicorn to correct next image
//keep track of current number
//create some variables - unicorn1 ect to store what image its on
//once full alert pop up "Unicorn number x says thank you!"
