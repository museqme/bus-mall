'use strict';
//****************************
//GLOBAL VARIABLES
//****************************
var allClicks = 0;
var products = [];
var newChoice = [];
var prevChoice = [];
var all = [];
var picPool = document.getElementById('randomA');

function image() {
  newChoice = [];
  while (newChoice.length < 3) {
    var select = Math.floor(Math.random() * (all.length));
    if (checkValue(newChoice, all[select]) && checkValue(prevChoice, all[select])) {
      newChoice.push(all[select]);
      // console.log('reRolling!');
      all[select].productViewed++;
    }
  }
  prevChoice = newChoice;
}

function Product(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.productViewed = 0;
  this.clicks = 0;
  this.conversion = 0;
  all.push(this);
}


function handleClick(event) {
  for (var i = 0; i < newChoice.length; i++) {
    if (event.target.id === newChoice[i].name) {
      newChoice[i].clicks++;
      allClicks++;
      clear();
    }
    if (allClicks === 25) {
      picPool.removeEventListener('click', handleClick);
      clear();
      doneButton();
    } else {
      clear();
      image();
      render();
    }
  }
  calcConversion();
  picPool.removeEventListner('click', handleClick);
}

function clear() {
  while (picPool.firstChild) {
    picPool.removeChild(picPool.firstChild);
  }
}

function calcConversion() {
  for (var i = 0; i < products.length; i++) {
    if (products[i].productViewed === 0) {
      products[i].conversion = 'NA';
    } else {
      products[i].conversion = products[i].clicks / products [i].productViewed;
    }
  }
}


new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

image();

function checkValue(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return false;
    }
  }
  return true;
}


function render() {
  for(var i = 0; i < newChoice.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = newChoice[i].filePath;
    console.log(imgEl);
    imgEl.id = newChoice[i].name;
    picPool.appendChild(imgEl);
    newChoice[i].productViewed++;
  }
}

function doneButton() {
  var butEl = document.createElement('button');
  var labEl = document.createElement('labEl');
  labEl.textContent = 'View Results';
  butEl.appendChild(labEl);
  picPool.appendChild(butEl);
}

function renderTable() {
  var ctx = document.getElementById('finalChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

   // The data for our dataset
    data: {
      labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors','shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
      datasets: [{
        label: 'Results Chart',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    },

   // Configuration options go here
    options: {}
  });
}

render();

// renderTable();

picPool.addEventListener('click', handleClick);
