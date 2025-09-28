//USING LOOP
function sumn(number){
    let sumn=0;
    for(let i=0;i<=number;i++){
        sumn+=i;
    }return sumn;
}console.log(sumn(5));

//USING RECURSION
function sum(n){

    if(n===0){return 0;}
    return n+sum(n-1);
}console.log(sum(15));

