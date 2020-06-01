const app = {};

let $score = ($('.score').text()).slice(-2);
const $reset = ($('button'));

const getUserWord = () => {
  const userWord = ($('input').attr('placeholder'));
  return userWord;
}

const getRandomWord = () => {
  const randomWordArray = ['hippopotamus', 'arrays', 'hockey', 'loops', 'orbitz', 'grid'];
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
    }
  }, 1000);
}

app.init = () => {
   

  randomWord = ($('input').attr('placeholder'));


  $('form').on('submit', (e) => {
    e.preventDefault();

    if (parseInt($timer) === 10) {
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
      $('.score').removeClass('incorrect-styles');
    } else {
      console.log('Incorrect')
      $('.score').toggleClass('incorrect-styles');
    }

    $('input').val('');

  });

  $reset.on('click', () => {
    $('input').attr('disabled', false);
    $('.score').text('Score: 0');
    $('.timer').text('Timer: 30');
  });

};

$(function() {
   app.init();
});