function calculate(){
    // get the input
    let first=parseFloat(document.getElementById("num").value);
    let second=parseFloat(document.getElementById("num1").value);
    // Doing calculation
    if (document.getElementById("add").checked) {
        result = first + second;
    }
    else if (document.getElementById("subtract").checked) {
        result = first - second;
    }
    else if (document.getElementById("multiply").checked) {
        result = first * second;
    }
    else if (document.getElementById("divide").checked) {
        result = first / second;
    }

    // printing result 
    document.getElementById("Result").textContent = result;
}