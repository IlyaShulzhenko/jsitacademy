function max( array ) {
    let maxValue = array[0];
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] > maxValue) {
        maxValue = array[i];
      }
    }
  
    return maxValue;
  }
  console.log(max([3,5,2,65,45,34,5,4,3,444,3,4,5,]));


    // function max() {
    //   let maxValue = arguments[0];
      
    //   for (let i = 0; i < arguments.length; i++) {
    //     if (arguments[i] > maxValue) {
    //       maxValue = arguments[i];
    //     }
    //   }
    
    //   return maxValue;
    // }
    
    // console.log(max(2,5,3,53,2,4,5))
    
 

