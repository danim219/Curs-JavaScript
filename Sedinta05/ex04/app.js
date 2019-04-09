var calculateRectangleArea = (L, l) => {
  return L * l;
}
var
    wall2   = calculateRectangleArea(2.5, 4),
    wall3   = calculateRectangleArea(2.5, 6),
    door    = calculateRectangleArea(2.2, 1.5),
    window$ = calculateRectangleArea(2, 1.5);
console.log( 'Aveti nevoie de ' + ((2 * wall2 + 2 * wall3) - door - window$) + ' metrii de tapet.');

var area =  ((2 * wall2 + 2 * wall3) - door - window$ - door - window$);
if (area > 20)
alert ('O sa coste mult :(((( ')
