function HashStorageFuncs(){
    let hash = {};
    HashStorageFuncs.prototype.addValue = function(key, value){
    return hash[key] = value;
    };

    HashStorageFuncs.prototype.getValue = function(key){
    return hash[key];
    };

    HashStorageFuncs.prototype.deleteValue = function(key){
    if(!(key in hash[key])){
        return false
    };
    return delete hash[key];
    };

    HashStorageFuncs.prototype.getKeys = function(){
    return hash[key];
    };
}
let HashStorageFunc = new HashStorageFuncs();


HeirOne.prototype = Object.create(HashStorageFuncs.prototype);
HeirOne.prototype.constructor = HeirOne;
function HeirOne(){
        alert('good');
        return HeirOne();
};

let one = new HeirOne();


HeirTwo.prototype = Object.create(HashStorageFuncs.prototype);
HeirTwo.prototype.constructor = HeirTwo;
function HeirTwo(){
    this.getValue = function(key){
            if(key<10){ 
            return alert('good');
            } else {
            return alert('bad');
            };
    };
}
let two = new HeirTwo()





