(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var stage = document.querySelector('.stage');
    function domlog(msg) {
      var paragraph = document.createElement('p');
      paragraph.innerText = msg;
      paragraph.classlist = msg;
      document.body.appendChild(paragraph);

    }
    stage.addEventListener('mouseover', function () {
      domlog('Mousel-ul este pe ecran');
    });
    stage.addEventListener('mouseout', function () {
      domlog('Mouse-ul nu este pe ecran');
    });
  });
})();