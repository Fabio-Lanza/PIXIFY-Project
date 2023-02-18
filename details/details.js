const dark = document.querySelector('#dark')
const body = document.querySelector('body')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const imageContainer = document.querySelector('.images-slide')
const imgs = document.querySelectorAll('img')

let currentImg = 1;

function updateImage(){
    if(currentImg > 5){
        currentImg = 1;
    }
    imageContainer.style.transform = `translateX(${(currentImg - 1 ) * 870}px)`
}


next.addEventListener('click', ()=> {
    currentImg--
    updateImage()
})

prev.addEventListener('click', ()=> {
    currentImg++
    updateImage()
})



dark.addEventListener('click', ()=> {
    body.classList.toggle('dark')
})

