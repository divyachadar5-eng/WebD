// let obj={
//     id:1,
//     firstName:"divya",
//     lastName:"chadar",
//     fullName:function(city,age){
//         console.log(this.firstName+ this.lastName+city);
//     }
// }
// //obj.fulName()
// let userOne={
//     id:10,
//     firstName:"chockroch",
//     lastName:"janta party",
// }
// // obj.fullName.call(userOne,"jabalpur")
// obj.fulName.apply(userOne,["delhi",20])



// let user1={
//     name:"divya",
//     age:22,
//     address:{
//         city:"jabalpur"
//     }
// }
// let user2=structuredClone(user1)
// user2.address.city="bhopal"
// console.log(user1.address.city);
// console.log(user2.address.city);


// let arr=[1,2,3,4]
// console.log(Array.prototype);


// let str="js css"
// console.log(str.length);
// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.trim());
// console.log(str.includes("s"));
// console.log(str.indexOf("j"));
// console.log(str.substring(0,4),"substring");
// console.log(str.substr(0,4),"substr");
// console.log(str.split(""));



let str="js js js"
let ans=str.split("").reverse().join("")
console.log(ans);
console.log(str.replaceAll("js","html"));
console.log(str.charAt(0));
console.log(str.replaceAll("j",""));
console.log(str.replaceAll("js",""));