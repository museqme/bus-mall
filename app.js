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
      localStorage.setItem('cam', JSON.stringify(all));
      // clear();

    }
    if (allClicks === 25) {
      picPool.removeEventListener('click', handleClick);
      clear();
      doneButton();
      calcConversion();

    } else {
      clear();
      image();
      render();
    }

  }
  // picPool.removeEventListner('click', handleClick);
}

function clear() {
  while (picPool.firstChild) {
    picPool.removeChild(picPool.firstChild);
  }
}

function calcConversion() {
  for (var i = 0; i < all.length; i++) {
    if (all[i].productViewed === 0) {
      all[i].productViewed = 0;
    } else {
      all[i].conversion = all[i].clicks / all[i].productViewed;
    }
  }
}

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
if (localStorage.cam) {
  all = JSON.parse(localStorage.cam);
} else {
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
}
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
  for (var i = 0; i < newChoice.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = newChoice[i].filePath;
    // console.log(imgEl);
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
  clear();
  chartz();
}

function chartz() {
  var chartData = [];
  var chartLabel = [];
  for (var i = 0; i < all.length; i++) {
    chartData.push(all[i].clicks);
    chartLabel.push(all[i].name);
  }


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: chartLabel,
    datasets: [{
      label: '# of Votes',
      data: chartData,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
}

render();

// renderTable();

picPool.addEventListener('click', handleClick);
