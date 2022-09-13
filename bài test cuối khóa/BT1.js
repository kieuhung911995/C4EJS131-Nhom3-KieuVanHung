let result=document.querySelector('#result');
let submit=document.querySelector('#submit');
submit.addEventListener('click',showResult);
function showResult (){
let a=document.querySelector('#aValue').value;
let b=document.querySelector('#bValue').value;
if (a==='' || b===''){alert('error')};

if (a==='number' && b==='number'){
    let c;
    if(a<=b){
    for(i=2;i<b;i++){
        if(i)
        result.innerHTML=c  
    }
}
else{
    for(i=b+1;i<a;i++){
        result.innerHTML=c;
}
}
}
};