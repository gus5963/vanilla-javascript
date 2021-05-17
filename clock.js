const clockContainer = document.querySelector(".js-clock"),
    clockTitle =clockContainer.querySelector(".js-title");
const date = new Date();
const months = date.getMonth();
const dates = date.getDate();
const days = date.getDay();
const minutes = date.getMinutes();
const hours = date.getHours();
const seconds = date.getSeconds();


function getTime(){
    clockTitle.innerText = `${months+1}.${dates}.${days} ${hours}:${minutes}:${seconds}`;
}

function init(){
getTime();
};
init();