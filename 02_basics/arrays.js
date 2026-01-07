const myArr=[0,1,2,3,4,5,6]
const myHeroes= ["Iron Man","Hulk"]

const myArr2 = new Array(1,2,3,4)
// console.log(myHeroes[1]);

// Array Methods
myArr.push(7)
console.log(myArr);

// Slice , Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)     //No effecy on orginial array
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)      //Manipulates Array(removes the elements)
console.log("C", myArr);
console.log(myn2);
