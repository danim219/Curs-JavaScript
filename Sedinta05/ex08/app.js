var button = document.getElementById('clicker');

button.addEventListener('click', function() {
  alert('Ai apasat butonul!');
});

button.addEventListener('click', clickHandler);


var rButton = document.getElementById('remove');
rButton.addEventListener('remove', function() {
  button.removeEventListener('remove', clickHandler);
});
