//using loop
function revArray(arr=[]){
  for(let i=0;i<Math.floor(arr.length/2);i++){
    let temp=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-i-1]=temp;
  }return arr;
}console.log(revArray(arr=[1,2,3,4,5]));

//using recursion
function revArray1(arr1,start=0,end=arr1.length-1){
  //Base  case
  if(start>=end){return arr1;}
  //swap elements
  let temp=arr1[start];
  arr1[start]=arr1[end];
  arr1[end]=temp;

  return revArray(arr1,start+1,end-1);
}
let arr1=[5,6,7,8,9];
console.log(revArray1(arr1));
