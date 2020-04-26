let move = 1;
const el = document.getElementById('outer-block');
el.onwheel = moveRight;

function moveRight(event){
  event.preDefault();
  move += event.deltaY * - 0.01;
  move = Math.min(Math.max(.125,move),4);
  el.style.transform = 'move(${move})'; 
}