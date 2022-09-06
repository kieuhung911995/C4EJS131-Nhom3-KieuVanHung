//delete function
const ul=document.querySelector('ul');
    ul.addEventListener('click',function(event){
        if(event.target.className==='delete'){
        const li=event.target.parentElement;
        ul.removeChild(li)
        /*li.remove();*/ };
    });
//add function (goi theo phan tu parent form giong tren)
const form=document.querySelector('.add-book');
    form.addEventListener('click',function(event){
        if(event.target.className==='add'){
            const liAdd=document.createElement('li');
            const pAdd= document.createElement('p');
            const inputValue=document.getElementById('addInput').value;
                if (inputValue === '') {
                alert("You must write something!")
                }
                else {ul.appendChild(liAdd)};
            const pText= document.createTextNode(inputValue);
            pAdd.appendChild(pText);
            const spanAdd= document.createElement('span');
            const spanText= document.createTextNode('delete');
            spanAdd.appendChild(spanText);
            liAdd.appendChild(pAdd);
            liAdd.appendChild(spanAdd);
            spanAdd.className='delete';
            liAdd.className='list';
        }
    });

// goi theo phan tu con input:
/*const form=document.querySelector('.add');
    form.addEventListener('click',addabc);
    function addabc(){
            const liAdd= document.createElement('li');
            const liText= document.createTextNode('abc');
            liAdd.appendChild(liText);
            ul.appendChild(liAdd);
        }*/

//search function
const search=document.querySelector('#searchInput');
search.addEventListener('input',searchFunc);
function searchFunc(){
  inputSearch = document.getElementById("searchInput");
  filter = inputSearch.value.toUpperCase();  //ky tu dau vào va co san o the p viet hoa len de so sanh voi nhau
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("p")[0];
    if (p) {
      txtValue = p.textContent || p.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {   //neu co dau vao filter giong voi p
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
}