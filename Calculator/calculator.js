// function tambah() {
//     //input 1
//     const num1 = parseFloat(document.getElementById('number1').value);
//     //input 2
//     const num2 = parseFloat(document.getElementById('number2').value);
    
//     document.getElementById('result').textContent = "Result = " + (num1 + num2);
//     // textContent = 'Result = ' + (num1 + num2);
// }

// function kurang() {
//     //input 1
//     const num1 = parseFloat(document.getElementById('number1').value);
//     //input 2
//     const num2 = parseFloat(document.getElementById('number2').value);
        
//     document.getElementById('result').textContent = "Result =" + (num1 - num2);
// }

// function kali() {
//     //input 1
//     const num1 = parseFloat(document.getElementById('number1').value);

//     //input 2
//     const num2 = parseFloat(document.getElementById('number2').value);
        
//     document.getElementById('result').textContent = "Result =" + (num1 * num2);
// }

// function bagi() {
//     //input 1
//     const num1 = parseFloat(document.getElementById('number1').value);
//     //input 2
//     const num2 = parseFloat(document.getElementById('number2').value);
        
//     document.getElementById('result').textContent = "Result =" + (num1 / num2);
// }

function calculate(operation) {
    //input 1
    const num1 = parseFloat(document.getElementById('number1').value);
    //input 2
    const num2 = parseFloat(document.getElementById('number2').value);

    switch (operation) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            if (num1 < num2) {
                result = num1 / num2
                break;
            } else {
                result = "can not divide by 0";
            }
            
        default:
            break;
    }
    document.getElementById('result').textContent = "Result = " + result;
}