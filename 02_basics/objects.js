//Object Literals 

// ****SYMBOL****
const mySym = Symbol("key1") // Decalaration


const JsUser ={
    name : "Guru",
    "full name" : "Guru Chaudhary",
    age : 20,
    [mySym] :"MyKey1",  //Use symbol 
    email : "guru@google.com",
    address : "Greater Noida",
    isLoggedIn: false,
    lastLogindays:["Monday","Saturday"]
}

    console.log(JsUser.email);// generally used 
    console.log(JsUser["full name"]); // specially used to access string data types
    console.log(JsUser[mySym]);

    Object.freeze(JsUser) // Freeze Particular Object Details.