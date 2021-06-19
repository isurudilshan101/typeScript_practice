// console.log("hel cript");
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// //  let newArray:string[]=[];
// //  newArray=["isuru",1 ]
// let result;
// function combine(input1: number | string, input2: number | string) {
//     if (typeof input1 === "number" && typeof input2 === "number") {
//         result = input1 + input2;
//     } else {
//           result=input1.toString() + input2.toString();     
//     }
//     return result;
// }
// const combineAge = combine(2, 4);
// console.log(combineAge);
//  const combineName=combine('isuru','dilshan');
//  console.log(combineName);
//  function generateError(message:string , code:number){
//      throw {message:message, errorCode:code}
//  }
//  generateError('isuru',500);
var person = {
    name: "isuru",
    age: 20
};
console.log(person.age);
var person1 = {
    name: "isuru",
    age: 20,
    hobies: ["cricket", "volley ball", "sdfg"]
};
// for(const hobby of person1.hobies){
//     console.log(hobby);
// }
person1.hobies.map((function (item) {
    console.log(item);
}));
var arr1 = [2, 6, 9, 8, 9];
var arr2 = [1];
console.log.apply(console, __spreadArray(__spreadArray([], arr1), arr2));
