let score="77"

console.log(typeof score)
//yaha pe hame aage jaake fix pataa nhi hai ki vo number hoga ya string

let valueInNumber=Number(score)
console.log(typeof valueInNumber) // ab hame fix pataa hai ki vo number hoga
// "77" => 77
// "77abc" => NaN
// "abc77" => NaN
// true => 1 ; false => 0


let isLoggedIn="Guru"
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// "" => false
// "Guru" => true