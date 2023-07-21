function tempcon(){
    let cal= parseFloat(document.getElementById("cel").value);
    let far= parseFloat(document.getElementById("far").value);

    let res= ((far-32)/9)*5;
    document.getElementById("result").textContent= res;
}