const randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function gussing() {
    const usernum = parseInt(document.getElementById("usernum").value);

    if (isNaN(usernum)) {
        document.getElementById("massage").innerHTML= "Please enter a valid number";
        return;
        
    }
    attempts ++;
    if (usernum === randomNum) {
        document.getElementById("massage").innerHTML= "Cngratulations! It's the correct number";
        document.getElementById("usernum").disabled= true;
    }
    else if (usernum < randomNum)
    {
        document.getElementById("massage").innerHTML="Guess higher number";
    }
    else{
        document.getElementById("massage").innerHTML= "Guess lower number";
    }
}