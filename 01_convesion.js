// data types conversions


let score = 50
console.log(score);

//console.log(typeof score)// type cheking

let AnotherScore = "33"

//console.log(typeof AnotherScore)

// here i am converting string into number type

let valueInNumber = Number (AnotherScore)

//console.log(typeof (valueInNumber))


let score1 = "22Abv"

//console.log('hereis score 2 : ',score1)

let valueInNumberwithString = Number (score1)

//console.log(typeof (valueInNumberwithString))/// here it will return number
//console.log(valueInNumberwithString)   

/// output NAN ==  Not a numbar 



let score2 = true

console.log('bool value  : ',score2)

let valueInbool = Number (score2)

//console.log(typeof (valueInbool))/// here it will return number
//console.log(valueInbool)   /// 1 output

// conslusion

// "22" => 22
// "22abc" => NAN
// true => 1 , false => 0 


// let boolIsloggedIn = Boolean(isloggedin)
// console.log(`boolIsloggedIn ${boolIsloggedIn}`)
// let boolIsloggedIn1 = typeof(isloggedin) /// true
// console.log( boolIsloggedIn1 )// output number 


let isloggedin = 1

let   boolIsloggedIn = Boolean(isloggedin)
console.log( typeof boolIsloggedIn)
console.log(boolIsloggedIn)


/// 1=> true , 0 => false
// " " => false
// "amar" => true



// string conversion 

let someNumber = 45

let StringInvalue = String(someNumber)
console.log(StringInvalue)
console.log(typeof StringInvalue)







