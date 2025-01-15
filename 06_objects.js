// singleton
//Object.create



  const mysym= Symbol("Alex")

   const JsUser= {
    name:"Amar",
    age:22,
    [mysym]:"henry",
    "Fullname":"Amar yadav",
    location:"Chandigarh",
    email:"ayadav@google.com",
    isloggedIn:false,
    lastLoginDays:["Monday","Saturday"]
   }
//lets access object

// 
console.log(JsUser.email)
console.log(JsUser["Fullname"])
console.log(JsUser[mysym])

JsUser.email="ayadav77@gmail.com";
//Object.freeze(JsUser);// freeze object
JsUser.email="yadavamar903@gmail.com";

console.log(JsUser)

// lets add functions
JsUser.greetings = function(){
    console.log("Hello Brother")
}


JsUser.greetingsTwo = function(){
    console.log(`Hello Js user,${this.name}`)
}


console.log(JsUser.greetings())
console.log(JsUser.greetingsTwo())
   

