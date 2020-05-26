const el2 = document.querySelectorAll('li')
console.log(typeof el2)
console.log(el2)
let text = Array.from(el2).map(el => el.textContent)
console.log(text)

const listOfEl = document.querySelector('.list')
const elOne = document.createElement('li')
elOne.textContent = 1
listOfEl.prepend(elOne)

const elTwo = document.createElement('li')
elTwo.textContent = 8
listOfEl.append(elTwo)

const elFour = document.createElement('li')
const specialEl = document.querySelector('.special')
elFour.textContent = 4
specialEl.before(elFour)

const elSix = document.createElement('li')
elSix.textContent = 6
specialEl.after(elSix)