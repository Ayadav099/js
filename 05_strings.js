//Strings in js 
console.log("Strings in js ");

const name = "ayadav";
const repocount =50;

//concat
///console.log(name + repocount + "Value") outdated old method


console.log(`Hello my name is ${name} and my repo count is ${repocount} `);


const NickName = new String ('hitesh')

console.log(NickName);

//acess key value 
console.log(NickName[0]);
// access prototype


console.log(NickName._proto_);

// let see use of prototype

console.log(NickName.length);
console.log(NickName.toUpperCase())
console.log(NickName.charAt(2))
console.log(NickName.indexOf('t')) 



const newString = NickName.substring(0,5)

console.log(newString)

/// slice
 const anotherstrng= NickName.slice(-8,4)
 
 console.log(anotherstrng)
 
 //trim and replace
 
 const newstrngword= "   alish ";
 console.log(newstrngword);
  console.log(newstrngword.trim()); // will remove spaces
  
  
  
const url = "https://alex.com/alex%20jamine"  

console.log(url.replace('%20', '_'));  // Output: https://example.com/hello_world/alex
console.log(url.includes('alex'));     // Output: true

//split 

const name32= "ayadav-dotnet-angular";

console.log(name32.split('-'))