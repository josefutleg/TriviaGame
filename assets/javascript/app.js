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
                a: 'Troy Trojans',
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
                b: '1971',
                c: '1987',
                d: '1993',
            },
            correctAnswer: 'a',
    },
    {
        question: "Which company was not founded in San Francisco?",
            answers:{
                a: "Levi's",
                b: 'Gap',
                c: 'Uniqlo',
            },
            correctAnswer: 'c',
    },
    {
        question: "What year was the big earthquake?",
            answers:{
                a: '1850',
                b: '1906',
                c: '1989',
                d: '2005',
            },
            correctAnswer: 'b',
    },
    {
        question: "San Francisco’s cable cars are the only National Historical Monument that can move.",
            answers:{
                a: 'True',
                b: 'False',
            },
            correctAnswer: 'a',
    },
    {
        question: "The Chinese fortune cookie was invented by a Japanese resident of San Francisco.",
            answers:{
                a: 'True',
                b: 'False',
            },
            correctAnswer: 'a',
    },
    {
        question: "Which American gangster was held at Alcatraz?",
            answers:{
                a: 'John Dillinger',
                b: 'Bugsy Siegel',
                c: 'Al Capone'
            },
            correctAnswer: 'c',
    },
]

var startButton = $('<button>').text('start game').addClass('start');
var directionsDoc = $('<h4>').text('Test your knowledge of the greatest city in the galaxy in 60 seconds!');
$('.quiz').append(directionsDoc);
$('.quiz').append(startButton);

var correctAnswerArray = [];
var choices;
var seconds = 61;
var timer;
var incorrect = 0;
var correct = 0;
var unanswered = 0;

function setTimer(){
    seconds = seconds - 1;
    var makeTimer = $('<p>').text(`Time Remaining: ${seconds}`);
    $('.timer').html(makeTimer);

    if (seconds === -1){
        clearInterval(timer);
        showResults();
        makeTimer.remove()
    }
}

function buildQuiz(){
    startButton.remove();
    directionsDoc.remove();
    $('.quiz').css('display', 'block');
    for (index in triviaQuestions){
        var questionDiv = $('<div>').addClass(`questionContainer${index}`);
        var questionDoc = triviaQuestions[index].question;
        var createQuestionP = $('<h4>').text(questionDoc);
            questionDiv.append(createQuestionP);
        $('.quiz').append(questionDiv);
            for(letter in triviaQuestions[index].answers){
                choices = triviaQuestions[index].answers[letter];
                var createChoices = $(`<input type="radio" name="${index}" value="${letter}">`);
                var createLabel = $('<label>');
                createLabel.text(choices);
                $(questionDiv).append(createChoices);
                $(questionDiv).append(createLabel);
            } 
            correctAnswerArray.push(triviaQuestions[index].correctAnswer);             
    }

    var submitButton = $('<button>').text('submit').addClass('submit');
    $('#submit').append(submitButton);    
}

$('.start').on('click',function (){
    timer = setInterval(setTimer, 1000);
    buildQuiz();
});

function showResults(){
for (i in triviaQuestions){
    var q = $(`input:radio[name=${i}]:checked`).val();
    console.log(q);
    if (q === triviaQuestions[i].correctAnswer){
        correct++;
    }
    else if (q === undefined){
        unanswered++;
    }
    else if (q !== triviaQuestions[i].correctAnswer){
        incorrect++;    
    }
}

if (correct == correctAnswerArray.length){
    $('h1').html('Perfect Score! Great job, native!');
}
else if (correct >= correctAnswerArray.length/2){
    $('h1').html('Not Bad!');
}
else if (correct !== correctAnswerArray.length){
    $('h1').html('Yikes!');
}

    var displayResults = $('<div>').addClass('results');
    var correctDoc = $('<h4>').text(`Correct: ${correct} `);
    var incorrectDoc = $('<h4>').text(`Incorrect: ${incorrect}`);
    var unansweredDoc = $('<h4>').text(`Unanswered: ${unanswered}`);

    displayResults.append(correctDoc);
    displayResults.append(incorrectDoc);
    displayResults.append(unansweredDoc);

    $('.quiz').hide();
    $('.container').append(displayResults);
    $('#submit').remove();
}

$('#submit').on('click','button', function(){
    showResults();
    clearInterval(timer);
    $('.timer').hide();
});
