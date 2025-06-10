/*let num=55;
if(num%10===0) {
    console.log("good")
} else{
    console.log("bad")
}*/
/*let userName= prompt("Enter your name");
let userAge= prompt("Enter age");
alert(userName +" is "+userAge+" years old");*/
let array=[1,2,3,4,5,6,7,8];
let num=6;
function getElements(array,num){
    for(let i=0;i<=array.length;i++){
        if(array[i]>num){
            console.log(array[i]);
        }
    }
}
getElements(array,num);