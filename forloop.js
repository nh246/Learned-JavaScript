const fruits = ["Banana", "Orange", "Apple", "Mango"];
        let fLen = fruits.length;
        
        let text = "<ul>";
        for (let i = 0; i < fLen; i++) {
          text += "<li>" + fruits[i] + "</li>";
        }
        text += "</ul>";
        
        document.getElementById("demo").innerHTML = text;
//The line by line out put
//         <ul><li>Banana</li>
// <ul><li>Banana</li><li>Orange</li>
// <ul><li>Banana</li><li>Orange</li><li>Apple</li>
// <ul><li>Banana</li><li>Orange</li><li>Apple</li><li>Mango</li>
// <ul><li>Banana</li><li>Orange</li><li>Apple</li><li>Mango</li></ul>

// ========== for of loop =========== 

const arr =[1,2,3,4,5,]

for (const num of arr) {
  console.log(num);
}


// ======= for in loop ======== 




// ======= foreach loop ========
const coding =["jk","ruby","cpp","run"]

// coding.forEach( function (item){
// console.log(item);
// } )

coding.forEach((item)=>{
console.log(item);
})
