// // var log=document.getElementById('log');
// //
// //
// // debugger
// // console.log(log);
// //
// // log.innerHTML='안녕';
//
//
// var a=document.querySelectorAll('log');
// console.log(log);
// //var a=document.querySelectorAll('#log a');
// //console.log(a);
// //var a=document.querySelectorAll('#log a');
// //console.log(a[0],a[1]);
//
// var a=document.querySelectorAll('log');
// console.log(a[0],a[1]);
//
//
// var div=document.createElement('div');
// div.style.border="1px solid red";
// div.innerHTML="hello!!";
// //document.body.appendChild(div);
// log.appendChild(div);
// log.innerHTML+='<div style="color:red">hello</div>';

// window.load=function(){
//     alert("load1");
// };

// window.addEventListener('load', function(){
//     alert("load1");
// });
// window.addEventListener('load', function(){
//     alert("load2");
// });

// var log = document.getElementById('log');
// document.body.addEventListener('click', function(){
//     console.log("click~~");
// });

// var log = document.getElementById('log');
//
// function printLog(event){
//   console.log('log!!');
// //  debugger;
// }
// log.addEventListener('click',printLog);
document.addEventListener("DOMContentLoaded", function(event) {

  var divs=document.querySelectorAll('#wrap div');
  //console.log(divs);
  function changeBg(event){
    console.log('changeBg');
    //divs[1].style.background-color='blue';
    //console.log(event.currentTarget);
    // divs[0].style.background-color='blue'
    event.currentTarget.style.backgroundColor='blue';
  }

  for(var i=0;i<divs.lenght;i++){
    divs[i].addEventListener('click',changeBg)
  }
});
