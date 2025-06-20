const h3 = document.querySelector('h3');
const h1 = document.querySelector('h1');
const btn =document.querySelector('#add')

h3.textContent=''

  let sig=0;

btn.addEventListener('click',function (){
   if(sig === 0){
      h3.innerHTML = 'Added';
      h3.style.color = 'green';
      h3.style.fontSize = '30px';
       document.querySelector('#add').innerHTML='remove'

   }
   else {
      h3.innerHTML = 'remove';
      h3.style.color = 'red';
      h3.style.fontSize = '30px';
      document.querySelector('#add').innerHTML='add'
   }
   sig = 1 - sig;


   })
   // rem.addEventListener('click',function (){
   //    h1.innerHTML = 'Unselected';
   // })

   