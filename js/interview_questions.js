// 21st Nov, 2024 (6th Mangsir 2081)

/*
    JavaScript (JS) is the most popular lightweight, scripting, and interpreted programming language. 
    It was developed by Brendan Eich in 1995. JavaScript is well-known as a scripting language for web pages, 
    mobile apps, web servers, and many other platforms. It is essential for both front-end and back-end developers 
    to have a strong command of JavaScript, as many job roles require fluency in this language.
*/

// JS Interview Questions (From Geeks For Geeks)

/*

    1. What are the differences between Java and JavaScript?

        Java is an object Oriented Programming language while 
        JavaScript is a client-side scripting language. Both of them are totally different from each other.

        Java: It is one of the most popular programming languages. 
        It is an object-oriented programming language and has a virtual machine platform that allows you to 
        create compiled programs that run on nearly every platform. Java promised, “Write Once, Run Anywhere”.

        JavaScript: It is a light-weighted programming language (“scripting language”) for developing interactive 
        web pages. It can insert dynamic text into the HTML elements. JavaScript is also known as the browser’s language.

    // 25th Nov, 2024 (10th Mangsir, 2081)

    2. What are Data Types in JavaScript?

        JavaScript data types are categorized into two parts i.e. primitive and non-primitive types.

        Primitive Data Type: The predefined data types provided by JavaScript language are known as primitive data type. 
            Primitive data types are also known as in-built data types. (NSBSUNB)
            Numbers
            Strings
            Boolean
            Symbol
            Undefined
            Null
            BigInt

        Non-Primitive Data Type: The data types that are derived from primitive data types are known as non-primitive data types. 
        It is also known as derived data types or reference data types.
            Objects
            Functions
            Arrays

    3. Which symbol is used for comments in JavaScript? 
    
        Comments prevent the execution of statements. Comments are ignored while the compiler executes the code. 
        
        There are two type of symbols to represent comments in JavaScript:

            a. Double slash: It is known as a single-line comment. 

                            // Single Line Comment

            b. Slash with Asterisk: It is known as a multi-line comment.

                            /* 
                            Multi-line comments
                            ...
                            */

/*
    27th Nov, 2024 (12th Mangsir, 2081)

    4. What would be the result of 3+2+”7″?
        Here, 3 and 2 behave like an integer, and “7” behaves like a string. So 3 plus 2 will be 5. 
        Then the output will be 5+”7″ = 57.

    5. What is the use of the isNaN function?
        isNan function determines whether the passed value is NaN (Not a number) and is of the type “Number”. 
        In JavaScript, the value NaN is considered a type of number. It returns true if the argument is not a number, 
        else it returns false.

    6. Which is faster in JavaScript and ASP script?
        JavaScript is faster compared to ASP Script. JavaScript is a client-side scripting language and does not 
        depend on the server to execute. 
        The ASP script is a server-side scripting language always dependable on the server.

    28th Nov, 2024 (12th Mangsir, 2081)

    7. What is negative infinity?
        The negative infinity is a constant value represents the lowest available value. 
        It means that no other number is lesser than this value. 
        It can be generate using a self-made function or by an arithmetic operation. JavaScript shows 
        the NEGATIVE_INFINITY value as -Infinity.
        
        const n = -infinity;
        console.log(n);         ->-gives errors as "infinity is not defined"

        const n = -Infinity;
        console.log(n);         ->-Infinity
        console.log(typeof(n)); -> Number

    8. Is it possible to break JavaScript Code into several lines?
        Yes, it is possible to break the JavaScript code into several lines in a string statement. 
        It can be broken by using the backslash n ‘\n’. 

        For example:
            console.log("A Online Computer Science Portal\n for Geeks")

        The code-breaking line is avoid by JavaScript which is not preferable.
            let gfg= 10, GFG = 5,
            Geeks =
            gfg + GFG;

    9. Which company developed JavaScript?
        Netscape developed JavaScript and was created by Brenden Eich in the year of 1995.
        Netscape Communications Corporation (originally Mosaic Communications Corporation) was an American independent 
        computer services company with headquarters in Mountain View, California, and then Dulles, Virginia.
        Its Netscape web browser was once dominant but lost to Internet Explorer and other competitors in the 
        first browser war, with its market share falling from more than 90 percent in the mid-1990s[3] to less 
        than one percent in 2006.

    10. What are undeclared and undefined variables?
        Undefined: It occurs when a variable is declared but not assign any value. Undefined is not a keyword. 
        It is a datatype.
        
        Undeclared: It occurs when we try to access any variable which is not initialized or declared earlier using 
        the var or const keyword. If we use ‘typeof’ operator to get the value of an undeclared variable, 
        we will face the runtime error with the return value as “undefined”. 
        The scope of the undeclare variables is always global.

    3rd Dec, 2024 (18th Mangsir, 2081)

    11. Write a JavaScript code for adding new elements dynamically. 
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <style>
                .newChild {
                color: red;
                }
            </style>
        </head>
        <body>
            <button onclick="newChild()">Click Here to Add New Child</button>

            <script>
                function newChild() {
                    let newChild = document.createElement("p");
                    newChild.textContent = "I am added new child";
                    newChild.setAttribute("class", "newChild");
                    document.body.appendChild(newChild);
                }
            </script>
        </body>
        </html>

    12. What are global variables? How are these variables declared, and what are the problems associated with them?
        In contrast, global variables are the variables that define outside of functions. These variables have a 
        global scope, so they can be used by any function without passing them to the function as parameters. 

        let petName = "Rocky"; // Global Variable
        myFunction();

        function myFunction() {
            console.log("Inside myFunction - Type of petName:", typeof petName);
            console.log("Inside myFunction - petName:", petName);
        }

        console.log("Outside myFunction - Type of petName:", typeof petName);
        console.log("Outside myFunction - petName:", petName);

        // Output:
            Inside myFunction - Type of petName: string
            Inside myFunction - petName: Rocky
            Outside myFunction - Type of petName: string
            Outside myFunction - petName: Rocky

        It is difficult to debug and test the code that relies on global variables.

        13. What do you mean by NULL in JavaScript?
        The NULL value represents that no value or no object. It is known as empty value/object.

        14. How to delete property-specific values?
        The delete keyword deletes the whole property and all the values at once like
            let courses={Course: "Programming", Duration:90};
            delete courses.Course;

        15. What is a prompt box?
        The prompt box is a dialog box with an optional message prompting the user to input some text. 
        It is often used if the user wants to input a value before entering a page. It returns a string 
        containing the text entered by the user, or null.





*/