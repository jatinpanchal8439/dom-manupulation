const love = document.querySelector('i');
const con = document.querySelector('.container');

con.addEventListener('dblclick', function() {

   love.style.transform = 'translate(-50%, -50%) scale(1)';
love.style.opacity = 0.8;
 

   
   setTimeout(function (){
   love.style.transform='translate(-50%, -50%) scale(0)';
   love.style.opacity=0;
   love.style.color='red';


},1000)
setTimeout(function (){
   love.style.transform='translate(-50%, -50%) scale(0)';

   love.style.color='red';

},2000)
   
});
