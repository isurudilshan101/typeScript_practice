// console.log("hel cript");



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

 const person : {
     name:string,
     age:number
 }={
     name: "isuru",
     age:20
 }

console.log(person.age);

const person1={
    name:"isuru",
    age:20,
    hobies:["cricket", "volley ball", "sdfg"]
}

// for(const hobby of person1.hobies){
//     console.log(hobby);
// }

person1.hobies.map((item=>{
    console.log(item);
})) ;


let arr1=[2,6,9,8,9];
let arr2=[1];
 
console.log(...arr1,...arr2);
 