class HashStorageFuncs{
    constructor(){
        this.hash={};
        let addValue = function(key, value){
            return this.hash[key] = value;
        };
    
        let getValue = function(key){
            return this.hash[key];
        };
    
        let deleteValue = function(key){
            if(!(key in this.hash[key])){
            return false;
        }
            return delete this.hash[key];
        };
    
        let getKeys = function(){
            return this.hash[key];
        };
    }
}

class HeirOne extends HashStorageFuncs{
}
    display (key,value){
        return alert(key,value);
    }
}
let one = new HeirOne();

class HeirTwo extends HashStorageFuncs{
}
    rating (key){
        if(key<10){ 
            return alert('good');
        } else {
            return alert('bad');
        }
    }
}

let two = new HeirTwo();
    
    
