let result=document.querySelector('#result');
let submit=document.querySelector('#submit');
submit.addEventListener('click',function(event){
    event.preventDefault()
  });


function showResult (){
let a=document.querySelector('#a').value;
let b=document.querySelector('#b').value;
if (a==='' || b===''){alert('ban phai dien so a,b')};
if (a>b){alert('ban phai nhap a<b')};
if (b<2){alert('ban phai nhap b>2')};
for(c=2;c<b;c++){
    let check=0;
    for(i=2;i<c;i++){
        if(c%i==0){check=1; break;}
    }
    if (check==0){let li=document.createElement('span');
li.innerHTML=c;
result.appendChild(li);
}
};
};

