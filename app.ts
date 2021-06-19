console.log("hello typeScript");



//  let newArray:string[]=[];

//  newArray=["isuru",1 ]
let result;
function combine(input1: number | string, input2: number | string) {

    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
       
    } else {
          result=input1.toString() + input2.toString();     
    
    }

    return result;

}

const combineAge = combine(2, 4);
console.log(combineAge);

 const combineName=combine('isuru','dilshan');
 console.log(combineName);

 function genaratedError(message:string , code:number){
     throw {message:message, code:code}
 }

 genaratedError("isuru",500);