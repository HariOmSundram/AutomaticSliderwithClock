/*var arr = ["1.jpeg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
var index = 0;

function nextImg() {
    index++;
    if (index == arr.length)
        index = 0;
    document.getElementById("slide").src = arr[index];
}

function prevImg() {
    index--;
    if (index < 0)
        index = arr.length - 1;
    document.getElementById("slide").src = arr[index];
}*/
var arr = [
  "1.jpeg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
var index = 0;
var autoAdvTimeout;

function nextImg() {
  index++;
  if (index == arr.length) index = 0;
  document.getElementById("slide").src = arr[index];
  resetAutoAdv();
}

function prevImg() {
  index--;
  if (index < 0) index = arr.length - 1;
  document.getElementById("slide").src = arr[index];
  
}

function autoAdv() {
  autoAdvTimeout = setTimeout(nextImg, 5000);
}

function resetAutoAdv() {
  clearTimeout(autoAdvTimeout);
  autoAdv();
}

autoAdv();

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();
