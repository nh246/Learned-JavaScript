






const demo = document.getElementById("demo");
let A = 0;

while (A < 1000000000) {
    A++;
}

demo.innerHTML = A;





let w;

function startWorker() {
    if (typeof Worker !== "undefined") {
        // worker available

        // if w worker is not already defined
        if (typeof w == "undefined") {
            // create a new worker called 'w'
            w = new Worker("worker.js");
        }

        // listening for worker events/messages
        w.onmessage = function (event) {
            document.getElementById("demo").innerHTML = event.data;
        };
    } else {
        alert("Your browser does not support web worker!");
    }
}

function stopWorker() {
    if (typeof Worker !== "undefined") {
        w.terminate();
        w = undefined;
    } else {
        alert("Your browser does not support web worker!");
    }
}







// worker doing its job

let i = 0;

while (i < 1000000000) {
    i++;
}

postMessage(i);