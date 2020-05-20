// function printMessage(age, city) {
//     console.log(`Hello ${this.firstName}, email ${this.email}, age: ${age}, city: ${city}`);
// }
// let user = {
//     firstName: "Alex",
//     email: "gmail.com",
// }

export function bind(func, context, ...args) {
    return function(...funcArgs) {
        console.log(funcArgs, args)
        let res = func.apply(context, funcArgs.concat(args))
        return res
    }
}
// printMessage.bind(user)(30, 'Kiev');
// printMessage.bind(user, 30)('Kiev');
// printMessage.bind(user, 30, 'Kiev')();
//1 use bind 
//input: function, obj, arg1, agr2 ... argN 
//output: function
// function bind(func, context, ...args) {
//     console.log(args);
//     return func.bind(context, ...args);
// }
// bind(printMessage, user)(30, 'Kiev');
// bind(printMessage, user, 30)('Kiev');
// bind(printMessage, user, 30, 'Kiev')();
// custom bind
//input: function, obj, arg1, agr2 ... argN 
//output: function
//algo
//1. put func to the context +++
//2. call func as object property +++
// function bind(func, context, ...bindArgs) {
//     // console.log("1", func);
//     // console.log("2", context);
//     // console.log("3", args);
//     return function(...funcArgs) {
//         let copyContext = Object.assign({}, context)

//         copyContext.tempFunction = func;

//         return copyContext.tempFunction(...bindArgs, ...funcArgs);

//     }
// }
// bind(printMessage, user)(30, 'Kiev');
// bind(printMessage, user, 30)('Kiev');
// bind(printMessage, user, 30, 'Kiev')();

// console.log(user)

// function bind(func, context, ...args) {
//     return function(...funcArgs) {
//         let res = func.call(context, ...funcArgs, ...args)
//         return res
//     }
// }
// bind(printMessage, user)(30, 'Kiev');
// bind(printMessage, user, 30)('Kiev');
// bind(printMessage, user, 30, 'Kiev')();

// console.log(user)