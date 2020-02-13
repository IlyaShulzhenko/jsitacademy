// a*x*x+b*x+c=0 

let solveEquations = function(a, b, c) {
    let x1;
    let x2;

    let D = b * b - 4 * a * c;
    
    if (D < 0) {  
        return [];  
    } else if (D === 0) {
        x1 = -b / (2 * a) ;
        return [x1];             
    } else if (D > 0) {
        x1 = ((-b + Math.sqrt(D)) / (2 * a)), 
        x2 = ((-b - Math.sqrt(D)) / (2 * a));
        return [x1, x2];
    } else if (a === 0) {
        x1 = -c / b ;
        return [x1];    
    } 
} 

a = prompt('введите коэффициент а');  
b = prompt('введите коэффициент в'); 
c = prompt('введите коэффициент с');  
let result = solveEquations (a, b, c);
if ( result.length === 0 ){
    result = 'нет корней';
}
alert (`Решение квадратного уравнения: ${result}`);
        

