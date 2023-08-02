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
