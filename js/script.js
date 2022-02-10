
let days =  document.querySelector(".days > .content");
let hours = document.querySelector(".hours > .content");
let minutes = document.querySelector(".minutes > .content");
let seconds = document.querySelector(".seconds > .content");

function loadDate() {
var current_time = new Date();
days.textContent = 365 - (current_time.getMonth() * 31 + current_time.getDate());
hours.textContent = 23 - current_time.getHours();
minutes.textContent = 60 - current_time.getMinutes();
seconds.textContent = 60 -current_time.getSeconds();
};

// next_year = next_year.getFullYear() + 1;
// console.log(next_year);

setInterval(loadDate, 500)
