var triviaQuestions = [
    {
    question: 'Before renamed San Francisco, what was the city called?',
        answers:{
            a: 'Yerba Buena',
            b: 'Frisco',
            c: 'Fog City',
        },
        correctAnswer: 'a',
    },
    {
        question: "What were the San Francisco Giants' original name?",
            answers:{
                a: 'New York Giants',
                b: 'New York Gothams',
                c: 'San Francisco Seals',
            },
            correctAnswer: 'b',
    },
    {
        question: "What is the official color of the Golden Gate Bridge?",
            answers:{
                a: 'International Orange',
                b: 'Golden Gate Red',
                c: 'Sonoma Wine',
            },
            correctAnswer: 'a',
    },
    {
        question: "What is the city's official instrument?",
            answers:{
                a: 'Trumpet',
                b: 'Drums',
                c: 'Accordian',
            },
            correctAnswer: 'c',
    },
    {
        question: "What year did the Philadelphia (now Golden State) Warriors move to San Francisco?",
            answers:{
                a: '1962',
                b: '1993',
                c: '1987',
            },
            correctAnswer: 'a',
    },

]

var startButton = $('<button>').text('start game').addClass('start');
$('.quiz').append(startButton);
var answerArray = [];
// var userGuesses = [];
var choices;

function buildQuiz(){
    startButton.remove();
    $('.quiz').css('display', 'block');
    for (index in triviaQuestions){
        var questionDoc = triviaQuestions[index].question;
        var createQuestionP = $('<h4>').text(questionDoc);
        $('.quiz').append(createQuestionP);
            for(letter in triviaQuestions[index].answers){
                choices = triviaQuestions[index].answers[letter];
                answerArray.push(choices);
                var createChoices = $(`<input type="radio" name="${index}" value="${letter}"><label>`);
                createChoices.text(choices);    
                $('.quiz').append(createChoices);
            }                 
    }
    var submitButton = $('<button>').text('submit').addClass('submit');
    $('#submit').append(submitButton);    
}

$('.start').on('click',function (){
    //create a timer and append to page
    buildQuiz();

});



// $('.quiz').on('click','input', function(){
//     var selection = $('input').
//     // userGuesses.push(selection);

//     debugger;
//   });

$('#submit').on('click','button', function(){
var submitQuiz = $(this);
var displayResults = $('<div>').addClass('results');
var correctDoc = $('<p>').text(`Correct Guesses: `);
var incorrectDoc = $('<p>').text(`Incorrect Guesses: `);
var unansweredDoc = $('<p>').text(`Unanswered: `);
var userGuesses;
var correctGuesses = 0;
// for (i in answerArray){
//     console.log(i);
// }
displayResults.append(correctDoc);
displayResults.append(incorrectDoc);
displayResults.append(unansweredDoc);
$('.quiz').hide();
$('.container').append(displayResults);
$('#submit').remove();
// $('.results').append(startButton);


// debugger;

});
