const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

//alice1.animate(aliceTumbling, aliceTiming);

//let first = alice1.animate(aliceTumbling, aliceTiming).finished;
// first.then(() => {
//   let second = alice2.animate(aliceTumbling, aliceTiming).finished;
//   second.then(() => {
//     alice3.animate(aliceTumbling, aliceTiming).finished;
//   })
// })

// first
//   .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
//   .then(() => alice3.animate(aliceTumbling, aliceTiming).finished);

async function changeAlice() {
  try {
    await alice1.animate(aliceTumbling, aliceTiming).finished
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    await alice3.animate(aliceTumbling, aliceTiming).finished
  }
  catch (err) {
    console.error(`Alice did not fall down the hole because: ${err}`)
  }
}

changeAlice();



