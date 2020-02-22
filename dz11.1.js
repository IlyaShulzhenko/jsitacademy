function HashStorageFuncs(){
    this.hash = {};
}
HashStorageFuncs.prototype.addValue = function(key, value){
    return this.hash[key] = value;
    }

HashStorageFuncs.prototype.getValue = function(key){
    return this.hash[key];
    }

HashStorageFuncs.prototype.deleteValue = function(key){
    if(!(key in this.hash[key])){
        return false;
    }
    return delete this.hash[key];
    }

HashStorageFuncs.prototype.getKeys = function(){
    return this.hash[key];
    }

let HashStorageFunc = new HashStorageFuncs();


HeirOne.prototype = Object.create(HashStorageFuncs.prototype);
HeirOne.prototype.constructor = HeirOne;
HeirOne.prototype.addValue = function(){
    HashStorageFunc.prototype.addValue.apply(this, arguments);
        return alert('good');
}

let heirone = new HeirOne(); 


HeirTwo.prototype = Object.create(HashStorageFuncs.prototype);
HeirTwo.prototype.constructor = HeirTwo;
HeirTwo.prototype.conclusion = function(){
    if(key<10){ 
        return alert('good');
    } else {
        return alert('bad');
    }
}
let two = new HeirTwo();





