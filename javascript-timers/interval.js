var timer = setInterval(countdown, 1000);

var counter = 3;
function countdown(number) {
  var head = document.querySelector('h1');

  if (counter !== 0) {
    head.textContent = counter.toString();
    counter--;
  }
  else {
    head.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timer);
  }
}
