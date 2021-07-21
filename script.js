// variáveis que selecionam os elementos do relógio digital e os ponteiros do analógico
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
  let now = new Date(); //atribui a função js Date() à variavel now

  //as funções abaixo recebem, respectivamente, as horas, minutos e segundos atual
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  // relógio digital
  digitalElement.innerHTML = `${fixZero(hour)}  :  ${fixZero(minute)}  :  ${fixZero(second)}`;
  digitalElement.style.background = `rgba(20, 20, 20, .3)`;
  digitalElement.style.padding = `2rem`
  digitalElement.style.borderRadius = `0.3125rem`
  digitalElement.style.boxShadow = `2px 2px 8px rgba(0, 0, 0, .6)`
  

  // relógio analógico
  let sDeg =  ((360 / 60) * second) - 90;
  let mDeg = ((360 / 60) * minute) - 90; 
  let hDeg = ((360 / 12) * hour) - 90;

  sElement.style.transform = `rotate(${sDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`;
  hElement.style.transform = `rotate(${hDeg}deg)`;

}

function fixZero(time){
  return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock(); //faz com que a página não tenha um delay ao ser recarregada