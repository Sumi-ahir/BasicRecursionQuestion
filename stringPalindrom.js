//Check if the given String is Palindrome or not
function stringPalindrom(string,start=0,end=string.length-1){

    //BASE CASE
    if(start>=end){return true;}
    //check character
    if(string[start]!==string[end]){return false;}

    return stringPalindrom(string,start+1,end-1);



}console.log(stringPalindrom("na yan"));
console.log(stringPalindrom("book"));
console.log(stringPalindrom("madam"));

//USING LOOP
function isPalindrom(str){
    let i=0;
    j=str.length-1;

    while(i<j){
        if(srt[i]!==str[j]){return false;}
        i++;
        j--;
    }return true;
}
console.log(stringPalindrom("book"));
console.log(stringPalindrom("madam"));