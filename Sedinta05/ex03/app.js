function calculateRectangleArea(L, l) {
  return L * l;
}
var cd1 = calculateRectangleArea(100, 250),
    cd2 = calculateRectangleArea(350, 200);
console.log((cd2 * 25) - (cd1 * 25));

console.log('--------')

var cdnew = calculateRectangleArea(400, 370);
console.log((cdnew * 25) / 10);
