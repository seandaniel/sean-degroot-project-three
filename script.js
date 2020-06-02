const app = {};

let $score = ($('.score').text()).slice(-2);
const $reset = ($('.reset'));

const getUserWord = () => {
  const userWord = ($('input').attr('placeholder'));
  return userWord;
}

const getRandomWord = () => {
  const randomWordArray = ['hippopotamus', 'arrays', 'hockey', 'loops', 'orbitz', 'grid', 'flex', 'wes bos', 'vanilla', 'elephant', 'extravagant', 'reptile', 'compelling', 'witty', 'turmoil', 'bicycle', 'rampage', 'peanuts', 'raptors', 'antidote', 'california', 'mozilla', 'snowboarding', 'golden', 'liberal', 'monotone', 'client', 'github', 'nutritional', 'puppy', 'rudolph', 'search', 'react', 'babel', 'sass', 'school', 'juno', 'friendship', 'alternate', 'withstand', 'salt', 'banana', 'montreal', 'creating', 'background', 'transition', 'special', 'country', 'holland', 'partake', 'eventually', 'fill', 'chiropractor', 'developer', 'phantom', 'switch', 'broke', 'keyboard', 'shelf', 'television', 'factory', 'volkswagen', 'multi'];
  const randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
  return randomWord;
};


let $timer = ($('.timer').text()).slice(-2);

const startTimer = () => {
  const minute = setInterval(function() {
    $timer--;
    $('.timer').text(`Timer: ${$timer}`);
    if ($timer === 0){
      clearInterval(minute);
      $('input').attr('disabled', true)
      .css('background-color', '#24292e');
      $('.reset').toggleClass('reset-hover');
    }
  }, 1000);
}

$('.reset').attr('disabled', true);

app.init = () => {

  
  randomWord = ($('input').attr('placeholder'));
  
  $('form').on('submit', (e) => {
    e.preventDefault();
    
    $('.reset').toggleClass('reset-hover');
    $('.reset').attr('disabled', false);


    if (parseInt($timer) === 30) {
      startTimer();
    } 

    userWord = ($('input').val());
    console.log(userWord);

    if (userWord === randomWord) {
      console.log('Correct');
      $score ++;
      randomWord = getRandomWord();
      $('input').attr('placeholder', randomWord);
      $('.score').text(`Score: ${$score}`);
      $('.score').css('color', '#f4f4f4');
    } else {
      console.log('Incorrect')

      $('.score').animate({
        left: '100px',
        color: '#f06464',
      }, 350, function () {
        $(this).css('left', '0');
      });

    }

    $('input').val('');

  });

  $reset.on('click', () => {
    $('.reset').toggleClass('reset-hover');
    randomWord = 'start';
    $score = 0;
    $timer = 30;

    $('input')
    .attr('disabled', false)
    .val('')
    .attr('placeholder', 'start');

    $('.score').text('Score: 0')
    .css('color', '#f4f4f4');
    $('.timer').text('Timer: 30');

  });

  // if ($timer === 30) {
  //   startTimer().bind();
  //   // reset event
  // }

};

$(function() {
   app.init();
});