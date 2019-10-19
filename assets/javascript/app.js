$(document).ready(function(){
  
  $("#remaining-time").hide();
  $("#start").on('click', trivia.startGame);
  $(document).on('click' , '.option', trivia.guessInquiry);
  
})

var trivia = {
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  currentSet: 0,
  timer: 20,
  timerOn: false,
  timerId : '',

  gameQuestions: {
    q1: 'How old was Peter Parker when he got his powers?',
    q2: 'What Super-Villain kidnapped and murdered Peters Girlfriend, Gwen Stacy?',
    q3: 'What was the name of Peter Parkers Uncle?',
    q4: 'Who was J Jonah Jamesons secretary when Peter started working for him?',
    q5: "What other superhero helped Spider-Man fight the Ringmaster for the first time?",
    q6: 'In The Superior Spider-Man story, which super-villain took over as Spider-Man?',
    q7: "Finish this phrase: 'With Great Power, Comes Great _______'"
  },
  choices: {
    q1: ['15', '18', '16', '21'],
    q2: ['Doc-Ock', 'Green Goblin', 'Venom', 'Electro'],
    q3: ['Ben', 'Bruce', 'Thomas', 'Edward'],
    q4: ['Felicia Hardy', 'Mary Jane Watson', 'Betty Brant', 'Mysterio'],
    q5: ['Iron Man','Hawkeye','Daredevil','Human Torch'],
    q6: ['Doc-Ock','Kraven The Hunter','Mysterio','Big Wheel'],
    q7: ['Responsibility', 'Productivity', 'Animosity','Destruction']
  },
  answers: {
    q1: '15',
    q2: 'Green Goblin',
    q3: 'Ben',
    q4: 'Betty Brant',
    q5: 'Daredevil',
    q6: 'Doc-Ock',
    q7: 'Responsibility'
  },
 

  startGame: function(){

    trivia.currentSet = 0;
    trivia.correct = 0;
    trivia.incorrect = 0;
    trivia.unanswered = 0;
    clearInterval(trivia.timerId);
    

    $('#game').show();
    

    $('#results').html('');
    
    $('#timer').text(trivia.timer);
    
    $('#start').hide();

    $('#remaining-time').show();
    

    trivia.nextQuestion();
    
  },

  nextQuestion : function(){
    
    trivia.timer = 10;
     $('#timer').removeClass('last-seconds');
    $('#timer').text(trivia.timer);
    
    if(!trivia.timerOn){
      trivia.timerId = setInterval(trivia.timerRunning, 1000);
    }
    
    var questionContent = Object.values(trivia.gameQuestions)[trivia.currentSet];
    $('#question').text(questionContent);
    
    var questionOptions = Object.values(trivia.choices)[trivia.currentSet];
    
    $.each(questionOptions, function(index, key){
      $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
    })
    
  },

