const clock = document.querySelector("h2#clock");

function timeRefresh() {
    const realTime = new Date();
    clock.innerText = `${realTime.getHours()}:${realTime.getMinutes()}`;
}

timeRefresh()
setInterval(timeRefresh, 1000);