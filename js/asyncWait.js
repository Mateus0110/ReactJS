function randomNumber(min = 0, max = 1) {
  min > max ? [min, max] = [max, min] : null;

  return (Math.floor(Math.random() * (max - min) + min)) * 1000;
};

function waitASecondUsingPromises(message, time) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (typeof message !== 'string') {
        reject(new Error('Message must be a string'));
        return
      }

      resolve(message.toUpperCase());
    }, time);
  });
};

// waitASecondUsingPromises('Fase 1', randomNumber(0, 3))
//   .then(phase => {
//     console.log(phase);
//     return waitASecondUsingPromises('Fase 2', randomNumber())
//   })
//   .then(phase => {
//     console.log(phase);
//     return waitASecondUsingPromises('Fase 3', randomNumber())
//   })
//   .then(phase => {
//     console.log(phase)
//     return phase;
//   })
//   .then(phase => {
//     console.log('Terminamos na fase: ', phase);
//   })
//   .catch(e => console.log(e));

async function toExecute() {
  // To add the catch to this process, we can add the Try/Catch
  try {
    // First state: Pending
    const phaseOne = waitASecondUsingPromises('Fase 1', randomNumber());
    console.log(phaseOne);

    setTimeout(() => {
      console.log('Essa promise estava pendente: ', phaseOne);
    }, 1500);

    //
    const phaseTwo = await waitASecondUsingPromises('Fase 2', randomNumber(1, 10));
    console.log(phaseTwo);
    const phaseThree= await waitASecondUsingPromises('Fase 3', randomNumber(1, 10));
    console.log(phaseThree);

    console.log('Terminamos na fase: ', phaseThree);
  } catch(e) {
    console.log(e);
  };
};

toExecute();

const test = waitASecondUsingPromises('qlq', 5000);
console.log(test);

// As we can see in the code block above, we have 3 states in our promises.
// Are they:
// ---> 1. Pending
// ---> 2. Fullfilled
// ---> 3. Rejected