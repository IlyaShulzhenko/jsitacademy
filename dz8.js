function myBind(func, context, arr){
    return function(...arg){
        return func.apply(context, arr.concat(arg));
    };
}


















// let bind = function (fn, context, arg){

//    bindArgs = function().call(arg);

//     return function() {

//         let fnArg = fn.call(arg);

//         return fn.call(context, bindArgs.fnArg);
//     }
// }

// // mybing()()
// // function qq(func, context, ...arg)
// // function fn(a,b,c){}
// // ret function(...arg)
// // function.apply(cont.arg.concAT(arg))

// function bind(func, context, ...arg) {
//     return function() {
//     return func.apply(context, args);
//     };
//     }