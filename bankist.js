'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// CREATING AND INSERTING DOM ELEMENTS////

const header = document.querySelector('.header');
console.log(header)
const message = document.createElement('div');
message.classList.add('cookie-message')
// message.textContent = ''
message.innerHTML = ` we use cookies for analytics <button class ="btn btn--close-cookie"> Got it!</button>`;

console.log(message);
header.append(message)
console.log(document.querySelector('.btn--close-cookie'))

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove()
})

message.style.backgroundColor = '#37383d';
message.style.height = '6rem';
message.style.width = '120%';