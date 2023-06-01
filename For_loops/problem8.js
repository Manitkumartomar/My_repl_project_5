//Average of even numbers
let start=1;
let end=50;
let sum=0;
let count=0;
for(i=start;i<=end;i++){
  if(i%2==0){
    sum=sum+i;
    count++;
  }
}
console.log("Average is", sum/count);
