console.log("hello typeScript");
//  let newArray:string[]=[];
//  newArray=["isuru",1 ]
var result;
function combine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAge = combine(2, 4);
console.log(combineAge);
var combineName = combine('isuru', 'dilshan');
console.log(combineName);
function genaratedError(message, code) {
    throw { message: message, code: code };
}
genaratedError("isuru", 500);
