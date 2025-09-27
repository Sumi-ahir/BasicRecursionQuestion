function revNumber(n){

    if(n===0) return;
    console.log(n);
    revNumber(n-1);
    
}revNumber(20);