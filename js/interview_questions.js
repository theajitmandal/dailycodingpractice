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
        else it returns false.  Nan -> True, Else False

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

        window.prompt() instructs the browser to display a dialog with an optional message prompting the user to 
        input some text, and to wait until the user either submits the text or cancels the dialog.

        Syntax:
        prompt()
        prompt(message)
        prompt(message, defaultValue)

        Parameters
        message Optional
        A string of text to display to the user. Can be omitted if there is nothing to show in the prompt window.

        defaultValue Optional
        A string containing the default value displayed in the text input field.

        Return value
        A string containing the text entered by the user, or null.

        Example:
        let sign = prompt("What's your sign?");

        if (sign.toLowerCase() === "scorpio") {
            alert("Wow! I'm a Scorpio too!");
        }

        // there are many ways to use the prompt feature
        sign = window.prompt(); // open the blank prompt window
        sign = prompt(); //  open the blank prompt window
        sign = window.prompt("Are you feeling lucky"); // open the window with Text "Are you feeling lucky"
        sign = window.prompt("Are you feeling lucky", "sure"); // open the window with Text "Are you feeling lucky" and default value "sure"

        My Example:
          <body>
            <button onclick="myFunction()">Click here!</button>
            <p id="demo"></p>

            <script>

            function myFunction(){
                const myName = prompt("Enter your name", "Tom");
                document.getElementById('demo').innerHTML = `Hi + ${myName} + How are you?`;
            }

            </script>
            </body>

    16. What is the ‘this’ keyword in JavaScript?
        Functions in JavaScript are essential objects. Like objects, it can be assign to variables, 
        pass to other functions, and return from functions. And much like objects, they have their own properties. 
        ‘this’ stores the current execution context of the JavaScript program. Thus, when it use inside a function, 
        the value of ‘this’ will change depending on how the function is defined, how it is invoked, and the default 
        execution context.

    17. Explain the working of timers in JavaScript. Also explain the drawbacks of using the timer, if any.
        The timer executes some specific code at a specific time or any small amount of code in repetition to do 
        that you need to use the functions setTimout, setInterval, and clearInterval. If the JavaScript code sets 
        the timer to 2 minutes and when the times are up then the page displays an alert message “times up”. 
        The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

    18. What is the difference between ViewState and SessionState?
        ViewState: It is specific to a single page in a session.
        SessionState: It is user specific that can access all the data on the web pages.
        
    19. How to submit a form using JavaScript?
        You can use document.form[0].submit()method to submit the form in JavaScript.

    20. Does JavaScript support automatic type conversion? 
        Yes, JavaScript supports automatic type conversion.

    21. What are all the looping structures in JavaScript?
        while loop: A while loop is a control flow statement that allows code to be executed repeatedly based on a 
                    given Boolean condition. The while loop can be thought of as a repeating if statement.
        for loop: A for loop provides a concise way of writing the loop structure. Unlike a while loop, 
                    for statement consumes the initialization, condition and increment/decrement in one line 
                    thereby providing a shorter, easy to debug structure of looping.
        do while: A do-while loop is similar to while loop with the only difference that it checks the condition
                after executing the statements, and therefore is an example of Exit Control Loop.

    22. How can the style/class of an element be changed?
        To change the style/class of an element there are two possible ways. We use document.getElementByID method
            document.getElementById("myText").style.fontSize = "16px;
            document.getElementById("myText").className = "class";

    23. Explain how to read and write a file using JavaScript?
        The readFile() functions is used for reading operation.
            readFile( Path, Options, Callback)
        The writeFile() functions is used for writing operation.
            writeFile( Path, Data, Callback)


    24. What is called Variable typing in JavaScript ?
        The variable typing is the type of variable used to store a number and using that same variable to 
            assign a “string”.

            Geeks = 42;
            Geeks = "GeeksforGeeks";

    25. How to convert the string of any base to integer in JavaScript?
        In JavaScript, parseInt() function is used to convert the string to an integer. 
        This function returns an integer of base which is specified in second argument of parseInt() function. 
        The parseInt() function returns Nan (not a number) when the string doesn’t contain number.

    26. Explain how to detect the operating system on the client machine?
        To detect the operating system on the client machine, one can simply use navigator.appVersion or 
            navigator.userAgent property. The Navigator appVersion property is a read-only property and it 
            returns the string that represents the version information of the browser.
            
            Deprecated(Not Approve of Something): This feature is no longer recommended. Though some browsers might 
            still support it, it may have already been removed from the relevant web standards, may be in the process of being
            dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible.

    12th Dec, 2024 (27th Mangsir 2081)
    27. What are the types of Pop up boxes available in JavaScript?
            There are three types of pop boxes available in JavaScript.

            Alert
            Confirm
            Prompt

    28. What is the difference between an alert box and a confirmation box?
        An alert box will display only one button which is the OK button. It is used to inform the user about the 
        agreement has to agree. But a Confirmation box displays two buttons OK and cancel, 
        where the user can decide to agree or not.









*/