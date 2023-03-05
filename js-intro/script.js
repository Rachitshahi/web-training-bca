10:45 AM
console.log("gogo power rangers0")
console.log(window.document.body.style.background="aqua");
window.setTimeout(function(){
document.body.style.background="green";
window.alert("stppoid")
},5000)

window.setInterval(function(){
document.body.innerHTML=`<h1>${new Date()}</h1>`
},1000);

const result=window.confirm("are you okay?");
console.log(result);
88rbones's profile picture
// console.log("gogo power rangers0")
// console.log(window.document.body.style.background="aqua");
// window.setTimeout(function(){
// document.body.style.background="green";
// window.alert("stppoid")
// },5000)

// window.setInterval(function(){
// document.body.innerHTML=`<h1>${new Date()}</h1>`
// },1000);

// const result=window.confirm("are you okay?");
// console.log(result);

// const result=window.prompt("whta is your name?");
// console.log(result);

const title=document.getElementsByClassName("red");
title[0 ].style.fontSize="60px"

const firstlist=document.querySelectorAll(".red");

firstlist.forEach(function(item){
item.style.color="blue"
})

//events
// document.addEventListener("click",function(){
// console.log("you pressed clicked")
// });

const button=document.querySelector('button');
button.addEventListener("keyup",function(event){
console.log(event);
document.body.style.background="red";
})
