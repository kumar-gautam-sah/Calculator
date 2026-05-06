let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click' , (e) =>{
        if(e.target.innerHTML == '='){
    try {
        string = eval(string);
    } catch {
        string = "Error";
    }
    input.value = string;
    }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0 , string.length-1);
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
// taking input from keyboard.
document.addEventListener("keydown", (e) => {
    e.preventDefault(); // CRITICAL FIX

    const key = e.key;

    if (!isNaN(key)) {
        string += key;
    }

    else if (["+", "-", "*", "/" , "%"].includes(key)) {
        string += key;
    }

    else if (key === ".") {
        string += ".";
    }

    else if (key === "Enter") {
        try {
            string = eval(string);
        } catch {
            string = "Error";
        }
    }

    else if (key === "Backspace" || key === "Delete") {
        string = string.substring(0, string.length - 1);
    }

    else if (key === "Escape") {
        string = "";
    }

    input.value = string;
});