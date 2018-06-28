var triviaQuestions = [
    {
    question: 'Before renamed San Francisco, what was the city called?',
        answers:{
            a: 'Yerba Buena',
            b: 'Frisco',
            c: 'Fog City',
        },
        correctAnswer: 'Yerba Buena',
    },
    {
        question: "What were the San Francisco Giants' original name?",
            answers:{
                a: 'New York Giants',
                b: 'New York Gothams',
                c: 'San Francisco Seals',
            },
            correctAnswer: 'New York Gothams',
    },
    {
        question: "What is the official color of the Golden Gate Bridge?",
            answers:{
                a: 'International Orange',
                b: 'Golden Gate Red',
                c: 'Sonoma Wine',
            },
            correctAnswer: 'International Orange',
    },
    {
        question: "What is the city's official instrument?",
            answers:{
                a: 'Trumpet',
                b: 'Drums',
                c: 'Accordian',
            },
            correctAnswer: 'Accordian',
    },

]

var startButton = $('<button>').text('start game').addClass('start');
$('.quiz').append(startButton);
var answerArray = [];
var choices;
var losses = 0;
$('.start').on('click',function startGame (){
    //create a timer and append to page
    startButton.remove();
    for (index in triviaQuestions){
        // console.log(triviaQuestions[index].correctAnswer);
        var questionDoc = triviaQuestions[index].question;
        var createQuestionP = $('<h4>').text(questionDoc);
        answerArray.push(triviaQuestions[index].correctAnswer);
        $('.quiz').append(createQuestionP);
            for(letter in triviaQuestions[index].answers){
                // console.log(triviaQuestions[index].answers[letter]);
                choices = triviaQuestions[index].answers[letter];
                // var createChoices = $(`<button value="${choices}">`);
                var createChoices = $(`<input type="radio" name="${choices}" value="${choices}">`);
                createChoices.text(choices);    
                $('.quiz').append(createChoices);
            }                 
    }
    // for (a in answerArray){
    //     console.log(answerArray[a]);
    // }
    var submitButton = $('<button>').text('submit').addClass('submit');
    $('#submit').append(submitButton);
});

$('.quiz').on('click','input', function(){
    var selection = $(this).val();
    for (a in answerArray){
        console.log(selection === answerArray[a]);
        // if (selection == answerArray[a]){
        //     alert('true');
        //     return;
        // }  else {
        //     var addLosses = loss
        //     console.log('false');
        // }
    }

    // debugger;
  });

$('#submit').on('click','button', function(){
var submitQuiz = $(this);
var displayResults = $('<div>').addClass('results');
var correctDoc = $('<p>').text(`Correct Guesses: `);
var incorrectDoc = $('<p>').text(`Incorrect Guesses: `);
displayResults.append(correctDoc);
displayResults.append(incorrectDoc);
$('.quiz').hide();
$('.container').append(displayResults);
$('#submit').remove();
$('.results').append(startButton);


// debugger;

});
