(function() {
    document.addEventListener('DOMContentLoaded', function() {
      var showButton = document.querySelector('#showButton'),
        toggleEventButton = document.querySelector('#toggleEventButton'),
        eventBound = true;
  
      function showAlert() {
        alert('Butonul a fost apasat');
      }
  
      showButton.addEventListener('click', showAlert);
  
      toggleEventButton.addEventListener('click', function() {
        if (eventBound) {
          showButton.removeEventListener('click', showAlert);
          eventBound = false;
        } else {
          showButton.addEventListener('click', showAlert);
          eventBound = true;
        }
      });
    });
  })();