const itemElem1 = document.querySelector('.list-item:first-child')

function hi1(event) {
    console.log(event.target.textContent)
    console.log(event.target === itemElem1)
}
itemElem1.addEventListener('click', hi1)

const itemElem2 = document.querySelector('.list-item:nth-child(2)')

itemElem2.addEventListener('click', hi1)

const itemElem3 = document.querySelector('.list-item:last-child')

itemElem3.addEventListener('click', hi1)