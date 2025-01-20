// 21st Nov, 2024 (6th Mangsir 2081)

/*
    JavaScript (JS) is the most popular lightweight, scripting, and interpreted programming language. 
    It was developed by Brendan Eich in 1995. JavaScript is well-known as a scripting language for web pages, 
    mobile apps, web servers, and many other platforms. It is essential for both front-end and back-end developers 
    to have a strong command of JavaScript, as many job roles require fluency in this language. It is also called
    browser's language.
*/

/*
    *** Exercise Questions (From Notes) ***

    1. What is a correct syntax for assigning a value to a variable? -> x = 5
    2. Which one is NOT a legal variable name? -> -firstName
    3. True or False: JavaScript variable names are case in-sensitive, meaning name is the same as NAME -> F

    Valid or Invalid, Find ?
        var __myName = "Ajit";                   Ans Here ->                                       ~ Valid
        var _1my__Name = "Mandal";               Ans Here ->                                       ~ Valid
        var 1myName = "Mandal";                  Ans Here ->                                       ~ Not Valid
        var $myName = "Ajit Mandal";             Ans Here ->                                       ~ Valid

    1. True or False: JAVA is short for JavaScript. -> False
    2. Who invented JavaScript? -> Brendan Eich
    3. Select the correct JavaScript method for finding the specified HTML element.
        -> document.getElementById("demo").innerHTML

    1. In HTML, JavaScripts must be inserted inside which HTML tags? -> <script> and </script> tag
    2. What is the correct file extension for JavaScript files? -> .js
    3. What is a correct syntax for including a JavaScript in an HTML document? 
            -> <script src="index.js"></script>

    1. How many statements can you find in this line of code:
            let a = 5; let b = 6; c = a + b;
            -> 3
    2. True or False: A semicolons is required after a statement in JavaScript. 
            -> False, not necessary but recommended
    3. How many statements are present inside the function block?
            function genie() {
                let a, b, c;
                a = 5;
                b = 9;
                c = a + b;
            }
            -> 4

    1. What is a correct syntax for creating a comment in JavaScript?
            -> // This is a comment
    2. Select the correct syntax for commenting out the entire section of the code.   
    3. What will be the value of x?            -> 5
                x = 5
                // x = 7

    1. What is NOT a correct syntax for declaring variables?       -> dim x;
    2. Consider the following code:
            let x = 5;
            x = 7;
            x = x + x;
            alert(x);
    3. What will be the alerted result?                            -> 14
    4. Which one is NOT a legal variable name?                     -> first-name
    5. Create a variable called carName, assign the value Volvo to it.     -> let carName = "Volvo";
    6. Create a variable called x, assign the value 50 to it.         -> let x = 50
    7. Display the sum of 5 + 10, using two variables: x and y.
            ->
                let x = 5;
                let y = 10;
                let z = x + y;
                console.log(z);
            or,
                let x = 5;
                let y = 10;
                document.getElementById("demo").innerHTML = x + y;

    8. On one single line, declare three variables named fname, lname, and age, with the values John, Doe, and 46.
            ->
                let fname = 'John', lname = 'Doe, age = 46;

    1. What is a correct use of the let keyword?       -> let x = 5;
    2. True or False: Variables created with the let keyword can never change their value. -> False
    3. True or False: With the let keyword, you can declare variables with the same name in the same block. -> F

    1. True or False: Variables created with the const keyword can never change their value.      -> T
    2. What is a correct use of the const keyword?         -> const x = 5;
    3. True or False: If you create an Array with the const keyword, you cannot change the item values. -> F

    1. Consider the following code:
            let x = 5;
            let y = '8';
            let z = x + y;
        What will be the result of z?               -> 58

    2. Multiply 10 with 5, and alert the result:       -> alert(10*5)
    3. Insert the correct operator to divide 10 by 2:  -> let x = 10/2;

    1. Consider the following code:
             let x = 5;
             x++;
        What will be the result of x?                   -> 6

    2. Insert the correct operator to return the remainder when 15 is divided by 9: -> let x = 15 % 9;
    3. Consider the following code:
                let x = 100 + 50 * 3;
        What will be the result of x?                    -> 250

    1. Consider the following code:
            let x = 5;
            x += 10;
        What will be the result of x?               -> 15
    2. Use the correct assignment operator that will result in x being 15 (same as x = x + y) if x = 10 & y = 5.  
        -> x += y;
    3. Use the correct assignment operator that will result in x being 50 (same as x = x * y) if x = 10 & y = 5.
        -> x *= y

    *** Data Types ***
    1. In JavaScript, what is the data type of the following variable? let x = 7.5     -> Number
    2. True or False: If a variable is declared using the let keyword, it can never change its data type.  -> False
    3. Insert the correct data type for each variable:
            let a = 10;                                     -> Number
            let b = 'Sally';                                -> String
            let c = true;                                   -> Boolean
    
    *** Functions ***
    1. What keyword is used to define a function in JavaScript?             -> function
    2. Execute the function named myFunction.
        function myFunction() {
            alert("Hello World!");                      
        }
                        -> myFunction();
    3. Create a function called "myFunction" by completing the following line.
          alert("Hello World!");

        -> function myFunction (){
            alert("Hello World!");
        }

    4. Make the given function return "Hello".
        function myFunction() {
            ______ "_______";
        }
        document.getElementById("demo").innerHTML = myFunction();

        -> return "Hello";

    // Objects
    1. Consider the following object:
        const car = {
            brand: 'Volvo',
            model: 'EX90',
            drive: function() {
                return true;
            }
        };
        How many properties do the object have?                     -> 2

    2. Alert "John" by extracting information from the person object.
            const person = {
                firstName: "John",
                lastName: "Doe"
            };

            alert(___________);                                     -> alert(person.firstName)

    3. Add the following property and value to the person object: country: Norway.

            const person = {
                firstName: "John",
                lastName: "Doe"
                _______ : _____                                     -> country: "Norway"
            };

    4. Consider the following object:
            const person = {
                name: 'John', age: 50
            };
        Insert the missing parts to alert 'John is 50'.
        alert(_______.______ + '_______' + person.________);

        -> alert(person.name + ' is ' + person.age);
    
    // Object Proerties

    1. Consider the following object:
            const car = {
                brand : 'Volvo',
                model : 'EX90'
            };
            What is NOT a correct syntax to alert 'Volvo'?
                alert(car[brand])
                alert(car.brand)
                alert(car['brand'])
            
                -> alert(car[brand])
    2. True or False: You are allowed to insert new properties to existing objects.     -> True
    3. What is a correct syntax to delete the property model from an object named car?
            del car.model
            del model from car
            delete car.model
            car.model = NULL

            -> delete car.model

    // Object Methods
            1. Consider the following object:
            const person = {
                    firstname: 'Jane',
                    lastname: 'Doe',
                    fullname: function() {
                    return this.firstname + ' ' + this.lastname;
                }
            };
            How many methods do the object have?                            -> 1
        2. Consider the following object:
            const person = {
                firstname: 'Jane',
                lastname: 'Doe',
                fullname: function() {
                return this.firstname + ' ' + this.lastname;
                }
            };
            Insert the missing parts to alert 'Jane Doe'.                   
                ~ alert( ____    _____   ____   ____  );                    -> alert(person.fullname())
        3. True or False:You are allowed to insert new methods to existing objects.     -> True

    // Object Displays
                1. Only one of the following methods are a built-in JavaScript Object method, which one?
                return()
                all()
                entries()
                methods()
            -> entries()

        2. What method can be used to convert JavaScript Objects into JSON strings?

                JSON.toString()
                JSON.stringify()
                JSON.string()

            -> JSON.stringify()

        3. When using Object.values() on a JavaScript Object, what will be the data type of the returned result?
                Array
                String
                JSON
                Object
            -> Array
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

    22nd Dec, 2024 (7th Poush 2081)

    29. What is the disadvantage of using innerHTML in JavaScript?
        There are lots of disadvantages of using the innerHTML in JavaScript as the content will replace everywhere. 
        If you use += like “innerHTML = innerHTML + ‘html’” still the old content is replaced by HTML. 
        It preserves event handlers attached to any DOM elements.

    30. What is the use of void(0) ?
        The void(0) is used to call another method without refreshing the page during the calling time parameter 
        “zero” will be passed.

    JavaScript Interview Questions for Experienced

    31. What is the ‘Strict’ mode in JavaScript and how can it be enabled?
        Strict Mode is a new feature in ECMAScript 5 that allows you to place a program or a function in a 
        “strict” operating context. This strict context prevents certain actions from being taken and throws more 
        exceptions. The statement “use strict” instructs the browser to use the Strict mode, which is a reduced and 
        safer feature set of JavaScript.

    32. How to get the status of a CheckBox?
        The DOM Input Checkbox Property is used to set or return the checked status of a checkbox field. 
        This property is used to reflect the HTML Checked attribute.
            document.getElementById("GFG").checked;
        If the CheckBox is checked then it returns True.

    33. How to explain closures in JavaScript and when to use it?
        The closure is created when a child functions to keep the environment of the parent’s scope even after the 
        parent’s function has already executed. The Closure is a locally declared variable related to a function. 
        The closure will provide better control over the code when using them.

        // Explanation of closure 
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

    34. What is the difference between call() and apply() methods ?
        Both methods are used in a different situation

        call() Method: It calls the method, taking the owner object as argument. The keyword this refers to 
        the ‘owner’ of the function or the object it belongs to. We can call a method that can be used on 
        different objects.

        apply() Method: The apply() method is used to write methods, which can be used on different objects. 
        It is different from the function call() because it takes arguments as an array.

    35. How to target a particular frame from a hyperlink in JavaScript ?
        This can be done by using the target attribute in the hyperlink. Like
        
        <a href="/geeksforgeeks.htm" target="newframe">New Page</a>

    36. Write the errors shown in JavaScript?
            There are three different types of errors in JavaScript.

        Syntax error: A syntax error is an error in the syntax of a sequence of characters or tokens that are 
        intended to be written in a particular programming language.
        Logical error: It is the most difficult error to be traced as it is the error on the logical part of 
        the coding or logical error is a bug in a program that causes to operate incorrectly and terminate 
        abnormally.
        Runtime Error: A runtime error is an error that occurs during the running of the program, also known 
        as an exception.

    37. What is the difference between JavaScript and Jscript?

        JavaScript

        It is a scripting language developed by Netscape.
        It is used to design client and server-side applications.
        It is completely independent of Java language.

        Jscript

        It is a scripting language developed by Microsoft.
        It is used to design active online content for the word wide Web.

    38. What does var myArray = [[]]; statement declares? 
        In JavaScript, this statement is used to declare a two-dimensional array.

    39. How many ways an HTML element can be accessed in JavaScript code? 
        There are four possible ways to access HTML elements in JavaScript which are:

        getElementById() Method: It is used to get the element by its id name.
        getElementsByClass() Method: It is used to get all the elements that have the given classname.
        getElementsByTagName() Method: It is used to get all the elements that have the given tag name.
        querySelector() Method: This function takes CSS style selector and returns the first selected element.

    40. What is the difference between innerHTML & innerText? 
        The innerText property sets or returns the text content as plain text of the specified node, 
        and all its descendants whereas the innerHTML property sets or returns the plain text or HTML contents 
        in the elements. Unlike innerText, inner HTML lets you work with HTML rich text and doesn’t automatically 
        encode and decode text.

    41. What is an event bubbling in JavaScript?
        Consider a situation an element is present inside another element and both of them handle an event. 
        When an event occurs in bubbling, the innermost element handles the event first, then the outer, and so on.

    JavaScript MCQ Coding Interview Questions


            
            













*/