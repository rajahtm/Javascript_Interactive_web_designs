let dec= document.getElementById("increment");
let finalresult =document.getElementById("result");
let incre= document.getElementById("decrement");
let five =document.getElementById("five");
let dfive =document.getElementById("dfive");
let reset =document.getElementById("reset");
let counter =0;
incre.addEventListener('click',function(){
console.log("clicking")
counter = counter +1;
finalresult.textContent = counter;
})
dec.addEventListener("click",function(){

    
    if(counter >0){
        
    counter = counter-1;
    }
 finalresult.textContent = counter;
    
    
})
five.addEventListener("click",function(){
    counter = counter+5;
    finalresult.textContent = counter;
})
dfive.addEventListener("click",function(){
    if(counter>=5){
        counter = counter -5;
        finalresult.textContent = counter;
    }
})
reset.addEventListener("click",function(){
    counter =0;
    finalresult.textContent =counter;
})
console.log("remaing works")