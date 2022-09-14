// Déclaration des variables d'affichage du formulaire

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData =  document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName("close");

// LAUNCH MODAL EVENTS
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// fonction qui modifie l'affichage (le css)
// LAUNCH MODAL FORM
function launchModal() {
  modalbg.style.display = "block";
}

// fonction qui modifie l'affichage (css)
// CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = "none";
}

closeBtn[0].addEventListener("click", closeModal);

// DISPLAY NAV RESPONSIVE
// EDIT NAV
function editNav() {
  var x = document.getElementById('myTopnav');
  if(x.className === 'topnav') {
    x.className += 'responsive';
  }
  else{
    x.className ='topnav';
  }
}










