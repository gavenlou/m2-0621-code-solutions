let count = 3;
let timer = setInterval(() => {
  if (count !== 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!')
    clearInterval(timer);
  }
}, 1000);
