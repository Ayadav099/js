// primitive 

// 7 types =>  string ,Number,Boolean,number,undefined ,symbol,BIGINT


// Refrence ( Non primitive)

// Arrays,objects,functions


//Q 1. js is dynamically or statically type
 // ans == dynamically type 




const score = 100;
const scoreval=100.3;
const loggedin=false;
const outsidetemp=null;

let email;

//symbol

const id = Symbol('123')
const anotherId=Symbol('123');

console.log('symbolinpt', id===anotherId)



// 2. reftype (non -primitive)

const heros = ["shalktiman", "nagraz", " Doga"] // array

// object

 let myobj= {
    name:"Amar",
    age:23

 }

 // functions

 const myfunction =  function(){
    console.log("hello function here")
 }

 //chek type
 console.log(typeof myfunction)