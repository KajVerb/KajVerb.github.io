const progress = document.querySelector('.progress-done');
let input = 60
const percentage = Math.floor(input/60*100)

const dataDone = progress.getAttribute('data-done');
progress.setAttribute('data-done', percentage);
console.log(dataDone)

progress.style.width = progress.getAttribute('data-done') + '%';
progress.style.opacity = 1;

document.getElementById("text").innerHTML = percentage + "%";

if (input >= 45) {
  document.getElementById("progress-done").style.background = "linear-gradient(to left, #21f336, #3bf49b)";
  document.getElementById("progress-done").style.boxShadow = "0 3px 3px -5px #98f160, 0 2px 5px #8cf270";
}
