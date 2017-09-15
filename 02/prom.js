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
