//var str='hello world';
//console.log("1"+"2")

// var isman=true;
// if(isman){
//   console.log('남자다')
// }
// else{
//   console.log('여자다')
// }

// for(var i=0;i<5;i++){console.log(i);}
//
// var person={
//   name: "jiwon ",
//   age: 24,
//   cry: function(){
//     console.log("아")
//   }
// }

//alert("alert");

//for(var i=1;i<=100;i++)console.log(i);
//for(var i=1;i<=100;i++)if((i%2)!=0)console.log(i);
var sum=0,num,end=0;

while(end==0){
  num = prompt('숫자를 입력하라');
  if(num===null){
    console.log(sum);
    end=1;
  }
  else sum+=parseInt(num,10);
}
alert(sum);
