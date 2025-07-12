// Counter logic will be implemented here
let count = 0;
const countdisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const restBtn = document.getElementById('rest');

increaseBtn.addEventListener('click', () => {
  count++;
  countdisplay.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  count--;
  countDisplay.textContent = count;
});
