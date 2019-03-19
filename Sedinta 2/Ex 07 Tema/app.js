var form = document.querySelector('form'),
  nameInput = document.getElementById('nameInput'),
    passInput = document.getElementById('passInput'),
    passRepeatInput = document.getElementById('passRepeatInput'),
    errorPass = document.getElementById('error');

form.addEventListener('submit', function(e) {
  var nameValue = nameInput.value,
      passValue = passInput.value,
      passRepeatValue = passRepeatInput.value;

  if (passValue === passRepeatValue) {
 console.log('Numele este: ' + nameValue + ' cu parola: ' + passValue);
} else {
  alert('Parolele sunt diferite');
}
 if(passValue.length < 5){
   error = 'Minim 5 caractere';
   errorPass.innerText = 'Minim 5 caractere';
 }
  e.preventDefault();
});
