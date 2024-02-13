const subhanAllahDisplay = document.getElementById('Subhan-Allah-display');
const subhanAllahincBtn = document.getElementById('SubhanAllah-incBtn');
const subhanAllahDecBtn = document.getElementById('SubhanAllah-decBtn');

const alhamdulillahDisplay = document.getElementById('Alhamdulillah-display');
const alhamdulillahIncBtn = document.getElementById('Alhamdulillah-incBtn');
const alhamdulillahDecBtn = document.getElementById('Alhamdulillah-decBtn');

const AllahuAkbarDisplay = document.getElementById('Allahu-Akbar-display');
const AllahuakbarIncBtn = document.getElementById('Allahuakbar-incBtn');
const AllahuAkbarDecBtn = document.getElementById('AllahuAkbar-decBtn');

const laIlahaDisplay = document.getElementById('La-ilaha-display');
const laIlahaIncBtn = document.getElementById('laIlaha-incBtn');
const laIlahaDecBtn = document.getElementById('laIlaha-decBtn');

const resetBtn = document.getElementById('reset-Btn');

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuAkbarInitialValue = 0;
let laIlahaInitialValue = 0;

// subhanallah=====================>>>>>>>>>>>>>>>>>>>>>>>>>

subhanAllahincBtn.addEventListener('click', function () {
  if (subhanAllahInitialValue === 33) {
    return alert('Fill up the another Tazbih');
  }
  subhanAllahInitialValue += 1;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
});
subhanAllahDecBtn.addEventListener('click', function () {
  if (subhanAllahInitialValue === 0) {
    return alert('Please start count again');
  }
  subhanAllahInitialValue -= 1;
  subhanAllahDisplay.innerText = subhanAllahInitialValue;
});

// Alhamdulillah=====================>>>>>>>>>>>>>>>>>>>>>>>>>

alhamdulillahIncBtn.addEventListener('click', function () {
  if (alhamdulillahInitialValue === 33) {
    return alert('Fill up the another Tazbih');
  }
  alhamdulillahInitialValue += 1;
  alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});
alhamdulillahDecBtn.addEventListener('click', function () {
  if (alhamdulillahInitialValue === 0) {
    return alert('Please start count again');
  }
  alhamdulillahInitialValue -= 1;
  alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});

// AllahuAkbar========================>>>>>>>>>>>>>>>>>>>>>>>>>>>>

AllahuakbarIncBtn.addEventListener('click', function () {
  if (allahuAkbarInitialValue === 34) {
    return alert('Fill up the another Tazbih');
  }
  allahuAkbarInitialValue += 1;
  AllahuAkbarDisplay.innerText = allahuAkbarInitialValue;
});
AllahuAkbarDecBtn.addEventListener('click', function () {
  if (allahuAkbarInitialValue === 0) {
    return alert('Please start count again');
  }
  allahuAkbarInitialValue -= 1;
  AllahuAkbarDisplay.innerText = allahuAkbarInitialValue;
});

// La Ilaha Illallah=====================================>>>>>>>>>>>>>>>>>>>>

laIlahaIncBtn.addEventListener('click', function () {
  if (laIlahaInitialValue === 100) {
    return alert('Fill Up The Anothere Tazbih');
  }
  laIlahaInitialValue += 1;
  laIlahaDisplay.innerText = laIlahaInitialValue;
});
laIlahaDecBtn.addEventListener('click', function () {
  if (laIlahaInitialValue === 0) {
    return alert('Please start count again');
  }
  laIlahaInitialValue -= 1;
  laIlahaDisplay.innerText = laIlahaInitialValue;
});

// Reset btn =====>>>>>>>>>>>>>>>>>>>>>>>

resetBtn.addEventListener('click', function () {
  subhanAllahInitialValue = 0;
  alhamdulillahInitialValue = 0;
  allahuAkbarInitialValue = 0;
  laIlahaInitialValue = 0;

  subhanAllahDisplay.innerText = subhanAllahInitialValue;
  AllahuAkbarDisplay.innerText = allahuAkbarInitialValue;
  alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
  laIlahaDisplay.innerText = laIlahaInitialValue;
});
