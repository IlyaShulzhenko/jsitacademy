function inRange(a, b) {
return function(x) {
return x >= a && x <= b;
};
}
let arr = [1,5, 4, 6, 7, 2];
console.log( arr.filter(inRange(2, 7)) ); 
