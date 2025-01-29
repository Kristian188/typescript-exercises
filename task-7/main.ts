import { Storage } from "./Storage";

const numArr = new Storage<number>;

numArr.addItem(2)
numArr.addItem(3)
console.log(numArr.getAllItems()) // [2, 3]

numArr.removeItem(2)
console.log(numArr.getAllItems()) // [3]


const strArr = new Storage<string>;

strArr.addItem("apple")
strArr.removeItem("apple")
console.log(strArr.getAllItems()) // []

strArr.addItem("Hello")
console.log(strArr.getAllItems()) // ['Hello']