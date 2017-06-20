'use strict';

var score = 0;

//Question 1
function ques1() {
  var question1 = prompt('Is Cameron from the United States? Y or N').toUpperCase();
  if (question1 === 'Y') {
    alert('Yes Cameron is from Texas!');
    score++;
  } else {
    alert('Nice try, Cameron is actully from Texas.');
  };
  
  console.log('Cameron is form the United States');
}

ques1();

// Question 2
function ques2() {
  var question2 = prompt('Did Cameron really move 12 times as a child? Y or N').toUpperCase();
  if (question2 === 'Y') {
    alert('Cameron only moved 6 times, not 12.');
  } else {
    alert('Correct! Cameron moved 6 times as a child.');
    score++;
  };

  console.log('Cameron moved 6 times');
}

ques2();

// Question 3
function ques3() {
  var question3 = prompt('Is Cameron a vegan? Y or N').toUpperCase();
  if (question3 === 'Y') {
    alert('Yes Cameron is vegan, but will cheat from time to time.');
    score++;
  } else {
    alert('Cameron is vegan, but will cheat from time to time.');
  };

  console.log('Cameron is a cheating vegan');
}

ques3();

// Question 4
function ques4() {
  var question4 = prompt('Does Cameron need his coffee in the morning? Y or N').toUpperCase();
  if (question4 === 'Y') {
    alert('Unlike the rest of the Northwest, Cameron drinks green tea in the morning.');
  } else {
    alert('Right! Cameron does not drink coffee.');
    score++;
  };

  console.log('Cameron does not drink coffee.');
}

ques4();

// Question 5
function ques5() {
  var question5 = prompt('Is Bill Gates one of Camerons inspirations? Y or N').toUpperCase();
  if (question5 === 'Y') {
    alert('Cam has much respect, but Bill Gates is not his inspiration.');
  } else {
    alert('Right! Cameron is more of a Steve Jobs fan.');
    score++;
  };

  console.log('Cameron is a Steve Jobs fan');
}

ques5();

// Question 6
function ques6() {
  var favTemp = 88;
  var attempts = 4;

  while (attempts > 0) {
    var question6 = parseInt(prompt('What is my ideal temperature?'));
    if (question6 === favTemp) {
      alert('Correct, I like it toasty!');
      score++;
      attempts = 0;
    }else if (question6 < favTemp) {
      alert('Nice try, but I prefer it a bit warmer.');
      attempts--;
    }else if (question6 > favTemp) {
      alert('Nice try, but I do not like it that hot!');
      attempts--;
    }
  }
}

ques6();

// Question 7
function ques7() {
  var favCars = ['Tesla', 'Mercedes', 'Jaguar', 'BMW', 'Aston Martin', 'Ferrari'];
  var guessesLeft = 6;

  while (guessesLeft > 0) {
    for (var i = 0; i < favCars.length; i++) {
      var question7 = prompt('What is my favorite car out of Tesla, Mercedes, Jaguar, BMW, Aston Martin?');
      if (question7.toLowerCase() === favCars[0].toLowerCase()) {
        alert('Good Job, Your Right! Game Over.');
        score++;
        guessesLeft = 0;
        i = 6;
      }else if (question7.toLowerCase() === favCars[1].toLowerCase()) {
        alert('Their on my list, but not my favorite');
        guessesLeft--;
      }else if (question7.toLowerCase() === favCars[2].toLowerCase()) {
        alert('Their on my list, but not my favorite');
        guessesLeft--;
      }else if (question7.toLowerCase() === favCars[3].toLowerCase()) {
        alert('Their on my list, but not my favorite');
        guessesLeft--;
      }else if (question7.toLowerCase() === favCars[4].toLowerCase()) {
        alert('Their on my list, but not my favorite');
        guessesLeft--;
      }else if (question7.toLowerCase() === FavCars[5].toLowerCase()) {
        alert('Their on my list, but not my favorite');
        guessesLeft--;
      }else {
        alert('Item is not listed, try again.');
        guessesLeft--;
      }
    }
  }
}

ques7();
alert('Thank You for playing! You scored ' + score + ' out of 7.');
console.log('Total Score is ' + score + '.');
