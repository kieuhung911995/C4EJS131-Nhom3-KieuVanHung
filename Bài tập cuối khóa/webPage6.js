let fullName=document.querySelector('#fullName').value;
let numberPeople=document.querySelector('#numberPeople').value;
let phoneNumber=document.querySelector('#phoneNumber').value;
let dateTime=document.querySelector('#dateTime').value;
let btn=document.querySelector('#btn');
btn.addEventListener('click',submit);
function submit(){
if (fullName!=='' && numberPeople!=='' && phoneNumber!=='' && dateTime !==''){  
alert('Your booking is success, hope to see you at DANTE!')
}
};

