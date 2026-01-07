const marvel_heroes= ["Iron Man","Hulk","Spider Man"]
const dc_heroes = ["Batman","Flash","Super Man"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

/* CONCAT
const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes); 
*/

// ************SPREAD***********
const all_new_heroes = [...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes);

const another_array = [1 ,2 ,3 , [4 , 5 , 6 ] , 7 , [ 8 , 9 , [ 10 , 11]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Guru"))
console.log(Array.from("Guru"));
console.log(Array.from({name: "Guru"}));   //DILLCHASP.




