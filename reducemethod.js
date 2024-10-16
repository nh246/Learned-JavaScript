const nums=[10,20,35,30]
const total = nums.reduce((sum , num)=>{ 
    // here the use of sum is that it stors the operation of the function
    // here the use of num is that it stors each value of the nums array each time it loops and The 0 is the initial value of sum
//    console.log(sum ,num)
    return num + sum 

},0)

const friends = [
    {fName: "nazmul" , age: 22},
    {fName: "kamal" , age: 18},
    {fName: "josim" , age: 30},
    {fName: "faruk" , age: 35},

];

const obReduce = friends.reduce( (total, ages)=>{
   
    console.log(total, ages)
    return ages.age + total 


} ,0 )