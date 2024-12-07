// Demonstrating 'var'
function varExample() {
    console.log("varExample function:");

    // Hoisting with var
    console.log(x); // Outputs: undefined (hoisted but not initialized)
    var x = 5;
    console.log(x); // Outputs: 5 (after initialization)

    // Redeclaration with var
    var x = 10; // Redeclaring the variable is allowed
    console.log(x); // Outputs: 10
}

varExample();

// Demonstrating 'let'
function letExample() {
    console.log("\nletExample function:");

    // Hoisting with let (throws error if accessed before declaration)
    // console.log(y); // Uncommenting this line will throw ReferenceError: Cannot access 'y' before initialization
    let y = 5;
    console.log(y); // Outputs: 5

    // Reassigning with let
    y = 10;
    console.log(y); // Outputs: 10

    // Redeclaration with let (throws error)
    // let y = 15; // Uncommenting this line will throw SyntaxError: Identifier 'y' has already been declared
}

letExample();

// Demonstrating 'const'
function constExample() {
    console.log("\nconstExample function:");

    // Hoisting with const (throws error if accessed before declaration)
    // console.log(z); // Uncommenting this line will throw ReferenceError: Cannot access 'z' before initialization
    const z = 5;
    console.log(z); // Outputs: 5

    // Reassigning with const (throws error)
    // z = 10; // Uncommenting this line will throw TypeError: Assignment to constant variable.

    // Modifying objects with const
    const obj = { name: "Alice", age: 25 };
    obj.age = 26; // Allowed: We can modify the object properties
    console.log(obj); // Outputs: { name: 'Alice', age: 26 }

    // Redeclaration with const (throws error)
    // const obj = { name: "Bob", age: 30 }; // Uncommenting this line will throw SyntaxError: Identifier 'obj' has already been declared
}

constExample();
