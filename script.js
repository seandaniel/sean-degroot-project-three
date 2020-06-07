const app = {};

// removing 'score :' and 'timer :'
let $timer = ($('.timer').text()).slice(-2);
let $score = ($('.score').text()).slice(-2);

// grabs random word
app.getRandomWord = () => {
  const randomWordArray = ['hippopotamus', 'arrays', 'hockey', 'loops', 'orbitz', 'grid', 'flex', 'wes bos', 'vanilla', 'elephant', 'extravagant', 'reptile', 'compelling', 'witty', 'turmoil', 'bicycle', 'rampage', 'peanuts', 'raptors', 'antidote', 'california', 'mozilla', 'snowboarding', 'golden', 'liberal', 'monotone', 'client', 'github', 'nutritional', 'puppy', 'rudolph', 'search', 'react', 'babel', 'sass', 'school', 'juno', 'friendship', 'alternate', 'withstand', 'salt', 'banana', 'montreal', 'creating', 'background', 'transition', 'special', 'country', 'holland', 'partake', 'eventually', 'fill', 'chiropractor', 'developer', 'phantom', 'switch', 'broke', 'keyboard', 'shelf', 'television', 'factory', 'volkswagen', 'multi', 'selfish', 'willing', 'corduroy', 'sandwich', 'sushi', 'survivor', 'calc', 'coding', 'colorado', 'friendship', 'courteous', 'patronize', 'philanthropy', 'reddit', 'netflix', 'medium', 'farewell', 'salmonella', 'spatula', 'flipping', 'candid', 'gallery', 'foot', 'amsterdam', 'salad', 'tantalizing', 'coupled', 'print', 'fringe', 'clarity', 'project', 'sean', 'apple', 'tunes', 'spotify', 'time', 'clock', 'perfect', 'wine', 'wrist', 'mango', 'dumpster', 'agonize', 'score', 'flowers', 'russia', 'archery', 'bowling', 'baseball', 'cannon', 'frozen', 'bewildered', 'black', 'twitter', 'length', 'function', 'object', 'playlist', 'follow', 'rumble', 'catalyst', 'junk', 'pillow', 'chimpanzee', 'elephant', 'clarification', 'glass', 'headphones', 'shelf', 'pins', 'plant', 'cord', 'mug', 'lamp', 'pencil', 'book', 'marley', 'mammal', 'puppy', 'ralph', 'calibrate', 'consider', 'frowned', 'photography', 'cinematography', 'beautiful', 'worship', 'punish', 'extract', 'simplify', 'conduct', 'pursue', 'depend', 'cappucino', 'tale', 'sword', 'skate', 'compass', 'ritual', 'hacker', 'neat', 'interrogate', 'purchase', 'monopoly', 'microsoft', 'linguistics', 'slam', 'quarantine', 'hospital', 'employment', 'vent', 'percolate', 'variable', 'fetch', 'plankton', 'harry', 'police', 'admin', 'continuous', 'family', 'earth', 'mars','jupiter', 'suspension', 'afraid', 'momentum', 'potential', 'dice', 'vehicle', 'shipping', 'cart', 'frantic', 'riley','north', 'tantalize', 'spa', 'landscape', 'golf', 'automobile', 'pavement', 'potato', 'rim', 'tire', 'oil', 'jug', 'wooden', 'concrete', 'laminate', 'pursuit', 'rumble', 'consequence', 'sidewalk', 'crank', 'insufferable', 'platoon', 'perplexed', 'rudimentary', 'canine', 'simpleton', 'salvage', 'ruin', 'pineapple', 'purchase', 'poison', 'dilemma'];
  const randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
  return randomWord;
};

let halfMinute;

app.startTimer = () => {
  let highScore = $score;

  halfMinute = setInterval(function() {
    $timer--;
    $('.timer').text(`Timer: ${$timer}`);
    if ($timer === 0){
      $('input').attr('disabled', true);
      clearInterval(halfMinute);
      $('.reset').toggleClass('reset-hover');
      $('.score').css('color', '#f4f4f4');
      $('.timer').addClass('game-over');
      // establishing a highscore
      if ($score > highScore) {
        highScore = $score;
        $('.highscore').text(`Highscore: ${highScore}`);
      }
    } 
  }, 1000);
}

app.submitWord = () => {
  
  let userWord = ($('input').val()).toLowerCase();

  // prevents app.StartTimer() from running more than once
  if (parseInt($timer) === 30 && userWord === 'start') {
    app.startTimer();
  }
  

  if (userWord === randomWord) {
    $score++;
    randomWord = app.getRandomWord();

    $('.correct-word').text(userWord);
    $('input').attr('placeholder', randomWord);
    $('.score').text(`Score: ${$score}`)
    .css('color', '#f4f4f4');
  } else {
    $('.score').animate({
      left: '100px',
      color: '#f06464',
    }, 350, function () {
      $(this).css('left', '0');
    });
  }

  $('input').val('');

}

$('.reset').on('click', () => {

  clearInterval(halfMinute);

  randomWord = 'start';
  $score = 0;
  $timer = 30;

  $('.timer').removeClass('game-over')
    .text('Timer: 30')

  $('input')
    .attr('disabled', false)
    .attr('placeholder', 'start')
    .val('');

  $('.score').text('Score: 0')
    .css('color', '#f4f4f4');

  $('.correct-word').text('');
});


app.init = () => {
  randomWord = 'start';

  $('form').on('submit', (e) => {
    e.preventDefault();
    app.submitWord();
  });
};

$(function() {
   app.init();
});