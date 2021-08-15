'use strict';
//Select Elements And Assign them to variables
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeModalBtn = document.querySelector('.close-modal');
let showModalBtns = document.querySelectorAll('.show-modal');

//open modal function
let openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//closed modal function
let closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Access All of showModalBtns
for (let i = 0; i < showModalBtns.length; i++) {
  //Showing modal window--
  showModalBtns[i].addEventListener('click', openModal);
}

//closed modal window
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//handaling Esc Button
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
