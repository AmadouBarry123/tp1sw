////////////////// Obtenez le modal d'inscription ///////////////////////


function registerUser() {
  
  var email = document.getElementsByName('email')[0].value;
  var username = document.getElementsByName('uname')[0].value;
  var password = document.getElementsByName('psw')[0].value;
  
  //Stocker valeurs

  localStorage.setItem('email', email);
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

}


function userInfo() {
  // Associer les variables au valeur entree dans linscription
  var username = document.getElementsByName('uname')[1].value;
  var password = document.getElementsByName('psw')[1].value;
  
  var storedUsername = localStorage.getItem('username');
  var storedPassword = localStorage.getItem('password');
  // Comparer les valeurs pour voir si sa fonctionne
  if(username === storedUsername && password === storedPassword) {
      alert('Connexion réussie');
      window.location.href = 'accueil.html';
   
  } else {
      alert('Les informations de connexion ne correspondent pas');
     
  }
}

 // Relier 
document.querySelector('.signupbtn').addEventListener('click', function(event) {
  registerUser();
});

document.getElementById('sub').addEventListener('click', function(event) {
  userInfo();
});




// ////////////////// Obtenez le modal d'inscription ///////////////////////
// var modal = document.getElementById('id01');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// ///////////////// Obtenez le modal de connexion //////////////////////////
// var modal2 = document.getElementById('id02');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
// window.onclick = function(event) {
//     if (event.target == modal2) {
//         modal.style.display = "none";
//     }
// }