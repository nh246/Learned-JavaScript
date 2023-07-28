
let array =[];
function arrayman() {
const userin = document.getElementById("array").value;
array = userin.split(",");
disarray();
}
function disarray(){
const out=document.getElementById("result").innerHTML="Array:[" + array.join(", ") + "];";
}