var data = document.getElementById("data");
var custom = document.getElementById("custom");
var sun=document.getElementById("sun");
const phone=document.querySelector('.phone');
var img = new Image();  
img.src = 'sun.png';
var picHeight = 50 ;
var picWidth = 50;
let isDrawing = false;
let x = 0; 
let y = 0;
const context = custom.getContext('2d');
const drawsun = sun.getContext('2d'); 
custom.addEventListener('mousedown', e => {
  isDrawing = true;
});

custom.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    x = e.offsetX;
    y = e.offsetY;
    context.clearRect(0, 0, custom.width, custom.height);  
    context.fillRect(0, y, 100, 400);
      if((300-y) % 3 ==0){
        data.innerHTML = (300-y)/3 ;
        phone.style.filter=`brightness(${((300-y)/3)+50}%)`;
        sun.style.filter=`brightness(${((300-y)/3)+50}%)`;
        for(i=0;i<=20;i++)
        {
          if(i==(10-(((300-y)/15)-10)))
          {
          drawsun.clearRect(0, 0, sun.width, sun.height); 
          drawsun.drawImage(img,i,i,50-(i+i),50-(i+i));
          }
        }
      }
    }
    
});

window.addEventListener('mouseup', e => {
    isDrawing = false;
});