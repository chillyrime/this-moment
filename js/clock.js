const clock = document.querySelector("h2#clock");

function getClock() {
  /* 이미 Javascript에 구현된 함수 Date를 사용해서 손쉽게 시간 데이터를 사용할 수 있다.
  숫자 타입이기 때문에 시계처럼 구현하려면 포맷을 지정해줘야하는데 padStart 함수를 사용해서 포맷을 지정했다. */
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
