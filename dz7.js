let calculator = (function (){
    let result = 0;
    return {
    add: function(a) {
        result += a;  
    },
    
    multiply: function(a) {
        result *= a; 
    },
    
    divide: function(a) {
        result /= a ;  
    },
    
    substract: function(a) {
        result -= a ;  
    },

    pow: function (a){ 
        result = math.pow(a);
    },

    sqrt: function () {
        result = math.sqrt(); 
    },

    persent: function (a){
        result = a*100;    
    },

    clear: result = 0,
    print() {
    return result
    }
    }
})
()
calculator.add(10);
calculator.add(3);
calculator.print()

