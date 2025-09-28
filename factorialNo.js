//USING LOOP
function factNo(no){
 let fact=1;
    for(let i=1;i<=no;i++){
        fact*=i;
    }return fact;
}
console.log(factNo(5));
console.log(factNo(3));
        
//USING RECURSION
function factorial(n){
    if(n===0){return 1;}//base case
    return n*factorial(n-1);
}console.log(factNo(5));
console.log(factNo(2));
console.log(factNo(0));
    