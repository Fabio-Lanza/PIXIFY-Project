const dark = document.querySelector('#dark')
const body = document.querySelector('body')



dark.addEventListener('click', ()=> {
    body.classList.toggle('dark')
})