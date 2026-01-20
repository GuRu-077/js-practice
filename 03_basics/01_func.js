 function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
 }
 
 const result = addTwoNumbers(3,5)

 addTwoNumbers(3,5)

//  console.log("Result :", result);

function loginUserMessage(username){
    if(username === undefined){
        // console.log("Please Enter a Valid User Name!");
        return
    }
    return `${username} just logged in`  //String Interpolation--
}
// console.log(loginUserMessage("Guru")); // Agar yaha kuch value pass nhi karenge to undefined aayega--

function CalculateCartPrice(val1 , val2 ,...num1){   //yaha val1 aur val 2 me 200,400 jayega
    return num1
}
// console.log(CalculateCartPrice(200,400,500));

const user ={
    username : "Guru Chaudhary",
    age : 20
}
function handleObjects(anyObject){
    console.log(`Username is ${anyObject.username} and Age is ${anyObject.age}`);
}
handleObjects(user)