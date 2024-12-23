//stack and heap in js 
console.log("Try programiz.pro");


// Stack (Primitive) , Heap (Non -primitive)

let DepartmentName = ".net developer";

let AnotherDepartment = DepartmentName

  AnotherDepartment = "Angular developer"; 


console.log(AnotherDepartment);//Angular developer
console.log(DepartmentName);//.net developer

// copy refrec 


let user ={
    email:"user@gmail.com",
    upi:"usere@ybl"
}


let usertwo= user

usertwo.email="ayadav@gmail.com";

console.log(usertwo.email);
console.log(user.email);


// head holds rref value mean original memory