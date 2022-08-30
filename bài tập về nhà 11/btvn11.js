//BT1 (mẫu)
/*let click = document.querySelector('.click');
click.addEventListener('click', () => {
  color();
})

function color() {
  let random_color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = random_color;
}*/

// BT1 (tự làm)
let colors=['pink','red','blue','green','yellow','grey'];
let i=0;
document.getElementById('click').onclick=function changeColor() {
  if(i<colors.length)
  {document.body.style.backgroundColor=colors[i];
  i++};
  if(i>=colors.length)
  {i=0;document.body.style.backgroundColor=colors[i];i++}
}


//BT2
/*document.getElementById('btn').style.width='96px';
document.getElementById('btn').style.height='48px';
document.getElementById('btn').style.fontSize='24px';
let i=1;
document.getElementById('btn').onclick= function increaseNum(){
    document.getElementById('btn').innerHTML=i;
    i++
}*/