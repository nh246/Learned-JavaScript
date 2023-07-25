function calfact(){
    const userin = parseInt(document.getElementById("userin").value);
    if (isNaN(userin)|| userin < 0 || !Number.isInteger(userin)) {
        document.getElementById("result").textContent= "Enter a non negative integer";
        return;
    }
    else{
        const factresult = fact(userin);
        document.getElementById("result").textContent = `Factorial of ${userin} is: ${factresult}`;

    }

    function fact (n){
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * fact(n - 1);
        }
    }
}