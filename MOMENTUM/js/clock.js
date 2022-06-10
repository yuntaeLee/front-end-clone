const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");

  clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock(); // page refresh시 1초 동안 delay 되는 현상을 막기 위해
setInterval(getClock, 1000); // function name, ms

