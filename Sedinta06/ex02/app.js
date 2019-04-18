var paragraphElement = document.createElement('p'),
    userAgentStrig = navigator.userAgent,
    message = 'Nu stim ce browser folosesti.';

if (userAgentStrig.indexOf('Chrome') >= 0) {
    message = 'Navighezi folosind Chrome';
}
else if (userAgentStrig.indexOf('Firefox') >= 0) {
    message = 'Navighezi folosind Firefox';
}
else if (userAgentStrig.indexOf('Internet Explorer') >= 0) {
    message = 'Navighezi folosind Internet Explorer';
}
paragraphElement.innerText = message;

document.body.appendChild(paragraphElement);

// function myRemove() {
//     var x = paragraphElement;
// window.setTimeout(function(){ 
//      x.remove();
// }, 500);
// }



var x = paragraphElement;
window.setTimeout(function () {
    x.remove();
}, 1000);
