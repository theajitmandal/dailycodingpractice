// const n = -Infinity;
// console.log(n);
// console.log(typeof(n));

// let a=5;
// const b = 6;

// console.log(a);
// // console.log(b);
// console.log(typeof(b));

// {
//     console.log(a);  
//     // console.log(typeof(a));
//     console.log(typeof(a));
    
// }

function foo() { 
    let b = 1; 
    function inner() { 
        return b; 
    } 
    return inner; 
} 
let get_func_inner = foo(); 

console.log(get_func_inner()); 
console.log(get_func_inner()); 
console.log(get_func_inner());








