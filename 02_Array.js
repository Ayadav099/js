// array 



const myarray= [0,1,2,3,4,5,6,7]

//console.log(myarray[0])

const fruits = ["Apple", "orange", "banana"]

//another way to create array 
const myarray2= new Array(1,2,3,4)


// array method
myarray.push(8) // add value in array 
myarray.pop() //  remove last index


myarray.unshift(9)  // it will add first index value in array

//console.log(myarray)  // [ 9, 0, 1, 2, 3, 4, 5, 6, 7]


myarray.shift()  // it will remove fist index value of array 


//console.log(myarray)  // [  0, 1, 2, 3, 4, 5, 6, 7]


// lets ask some Questions  in array by methods

//console.log(myarray.includes(9)) //false
//console.log(myarray.indexOf(9))  //-1 


const newArray = myarray.join()
//console.log(myarray)
//console.log(newArray)

// =========================slice , splice ==================================//

console.log("orignalArray",myarray)  //orignalArray [ 0, 1, 2, 3,4, 5, 6, 7]

const myNary1= myarray.slice(1,3)


console.log( "slice____A", myNary1)  // [1,2]
console.log("B",myarray) // B [  0, 1, 2, 3,  4, 5, 6, 7]

//1, slice doesn't contain last index value 
// 2, its doesn't manipulate original array 


// 2 splice
const myNary2= myarray.splice(1,3)
console.log(console.log( "splice____b", myNary2)) //splice____b [ 1, 2, 3 ]

console.log("C",myarray) //C [ 0, 4, 5, 6, 7 ]

// 1, splice  contain last index value 
// 2, its manipulate original array 














