const listElem = document.querySelector('.list')


function sayHi(event) {
    if (event.target.classList.contains('list-item')) {
        console.log(event.target.textContent)
    }
}
listElem.addEventListener('click', sayHi)