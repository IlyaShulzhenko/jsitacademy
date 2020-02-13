function HashStorageFuncs(){
    let hash = {};
    this.addValue = function(key, value){
    return hash[key] = value;
    };

    this.getValue = function(key){
    return hash[key];
    };

    this.deleteValue = function(key){
    if(!(key in hash[key])){
        return false
    };
    return delete hash[key];
    };

    this.getKeys = function(){
    return hash[key];
    };
}
let HashStorageFunc = new HashStorageFuncs(key,value);

function HeirOne(){
    HashStorageFuncs.call(this);
    this.display = function(key,value){
        return alert(key,value);
    };
}
let disp = new HeirOne(key,value);

function HeirTwo(){
    HashStorageFuncs.apply(this,arguments);
    let parentAddValue = this.addValue;
    this.addValue = function(){  
        parentAddValue.call(this);
        return arguments.toUpperCase();
    };
}