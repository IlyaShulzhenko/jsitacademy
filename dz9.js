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
};
let HashStorageFunc = new HashStorageFuncs(key,value);
HashStorageFunc.addValue(key,value);
HashStorageFunc.getValue(key);
HashStorageFunc.deleteValue(key);
HashStorageFunc.getKeys();

// 
// 
// // 
// let drinkStorage = {
// drinkName: information,
// }
// let drinkStorage = new drinkStorage ()