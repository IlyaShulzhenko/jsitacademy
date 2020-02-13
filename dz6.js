
function unique (array) {
   let uniqueArray = [];
       for (let i=0; i<array.length; i++)  { 
           if (!uniqueArray.includes(array[i])){
               uniqueArray.push(array[i]);
           }
       }  
return uniqueArray
}
alert = unique([3,2,3,1,5,6,6,5,4,5,6])












function deepEqual (a,b) {
    if (a === b) {
        return true
    } else if (typeof (a) === 'Object' || typeof (b) === 'Object' || Object.keys(a).length === Object.keys(b).length) {
        for  (let key in a){
            if (!deepEqual(a[key], b[key])){
            return false;
            }   
        } 
    return true    
    }
    return false
}

deepEqual([2], [2])


