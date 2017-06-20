'use strict';

var testProducts = [];
var testPath = [];


function Product(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.productViewd = 0;
  this.totalClicks = 0;
  this.randomProducts = [];
  testProducts.push(this);
  testPath.push(this);
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

function randomProductA() {
  var random = Math.floor(Math.random() * testProducts.length + 1);
  var randProduct = document.getElementById('randomA');
  randProduct.src = testProducts[random].filePath;
}
// randomProductA();

function randomProductB() {
  var random = Math.floor(Math.random() * testProducts.length + 1);
  var randProduct = document.getElementById('randomB');
  randProduct.src = testProducts[random].filePath;
}
// randomProductB();

function randomProductC() {
  var random = Math.floor(Math.random() * testProducts.length + 1);
  var randProduct = document.getElementById('randomC');
  randProduct.src = testProducts[random].filePath;
}
// randomProductC();

function randomPicks() {
  randomProductA();
  randomProductB();
  randomProductC();
}
randomPicks();
