let jsonObj = {
    name: "NH",
    channel: "CWH",
    friend: "Rohan Das",
    food: "Bhindi" 
} 
console.log(jsonObj);
let myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);

myJsonStr = myJsonStr.replace('NH', 'RAkib');
console.log(myJsonStr)

newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj)



