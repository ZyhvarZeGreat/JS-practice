'use strict';

const modal = document.querySelector('.modal'); 
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

const openBtns = document.querySelectorAll('.show-modal')

console.log(openBtns)
for (let  i = 0; i < openBtns.length; i++){
    openBtns[i].addEventListener('click', function showModal(){
        console.log('clicked')
        modal.classList.remove('hidden')
    })
}

closeBtn.addEventListener('click',function hideModal()  {
modal.classList.add('hidden')
})

document.addEventListener('keydown',function(e){
if (e.key === 'Escape'){
    modal.classList.add('hidden')
}
else if (e.key === 'm'){
    modal.classList.remove('hidden')
}
})