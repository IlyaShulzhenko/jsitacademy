class HashStorageFuncs{
    constructor(){
        this.hash={};
    }
        addValue (key, value){
            return this.hash[key] = value;
        };
    
        getValue(key){
            return this.hash[key];
        };
    
        deleteValue(key){
            if(!(key in this.hash[key])){
            return false;
        }
            return delete this.hash[key];
        };
    
        getKeys(){
            return this.hash[key];
        };
    
}

class HeirOne extends HashStorageFuncs{
    display(){
        return alert('Good');
    };
}

let one = new HeirOne();

class HeirTwo extends HashStorageFuncs{
    getValue(key){
        if(key<10){ 
            return alert('good');
        } else {
            return alert('bad');
        };
    };
}

let two = new HeirTwo();
    
