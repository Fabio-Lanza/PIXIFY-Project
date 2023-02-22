const dark = document.querySelector('#dark')
const body = document.querySelector('body')


dark.addEventListener('click', ()=> {
    if(body.classList.toggle('dark')){
        dark.innerHTML = 'Light Mode'
    }else{
        dark.innerHTML = 'Dark Mode'
    }
    
})