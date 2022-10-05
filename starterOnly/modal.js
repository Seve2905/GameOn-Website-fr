// Déclaration des variables d'affichage du formulaire

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.getElementsByClassName("close");

// DECLARATION DE L'ACTION QUI OUVRIRA LE FORMULAIRE
// LAUNCH MODAL EVENTS
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// AFFICHAGE DU FORMULAIRE
// fonction qui modifie l'affichage (le css)
// LAUNCH MODAL FORM
function launchModal() {
  modalbg.style.display = "block";
}


// DECLARATION DE L'ACTION QUI FERMERA LE FORMULAIRE
closeBtn[0].addEventListener("click", closeModal);


// FERMETURE DU FORMULAIRE
// fonction qui modifie l'affichage (css)
// CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = "none";
}



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










