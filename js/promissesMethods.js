function randomNumber(min, max) {
  min > max ? [min, max] = [max, min] : null;

  return (Math.floor(Math.random() * (max - min) + min)) * 1000;
}

function waitASecondUsingPromises(message, time) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (typeof message !== 'string') {
        reject(new Error('Error: Message must be a string'));
        return;
      }

      resolve(message.toUpperCase() + ' - Passei na Promise.');
    }, time);
  });
}

// Promise.all Promise race Promise.resolve Promise.reject
const promises = [
  // 'Primeiro valor',
  waitASecondUsingPromises('Promise 1', randomNumber(1, 5)),
  waitASecondUsingPromises('Promise 2', randomNumber(1, 5)),
  waitASecondUsingPromises('Promise 3 ', randomNumber(1, 5)),
  waitASecondUsingPromises(1000, randomNumber(1, 5)),
  // 'Outro valor'
];

Promise.race(promises)
  .then((currentValue) => {
    console.log(currentValue);
  })
  .catch(error => console.log(error));