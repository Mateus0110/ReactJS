function randomNumber(min, max) {
  min > max ? [min, max] = [max, min] : null;

  return (Math.floor(Math.random() * (max - min) + min)) * 1000;
}

// Code without using a promise
function waitASecond(message, time, callback) {
  setTimeout(() => {
    console.log(message)
    if (callback) callback();
  }, time);
};

// waitASecond('Frase 1', randomNumber(10, 3), function () {
//   waitASecond('Frase 2', randomNumber(4, 5), function () {
//     waitASecond('Frase 3', randomNumber(5, 8));
//   });
// });


// Using a promise
function waitASecondUsingPromises(message, time) {
  return new Promise((resolve, reject) => {
    if (typeof message !== 'string') reject(new Error('Error: Message must be a string'));

    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

waitASecondUsingPromises('Conexão com o DB', randomNumber(10, 3))
  .then(response => {
    console.log(response);
    return waitASecondUsingPromises(222, randomNumber(5, 21));
  })
  .then(response => {
    console.log(response);
    return waitASecondUsingPromises('Tratando os dados da BASE', randomNumber(5, 8));
  })
  .then(response => {
    console.log(response);
  })
  .then(() => {
    console.log('Exibe dados na tela');
  })
  .catch(e => {
    console.log(e);
  });

  console.log('Isso aqui será exibido antes de qualquer promisse.')