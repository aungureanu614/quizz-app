var points = 0;
var selectedText;
var selected;
var num = 0;

var questions = [{

        question: "How old is the universe?",
        choices: ["14 billion years", "4.5 billion years", "300 million years", "12 billion years"],
        correct: "14 billion years"

    }, {

        question: "How much of the universe is made up of dark energy?",
        choices: ["23%", "50%", "68%", "94.5%"],
        correct: "68%"

    }, {

        question: "What is one of the most important contributions that Richard Feynman made to science?",
        choices: ["Discovering that our universe is expanding", "Discovering the existance of dark matter", "Space that lacks particles and radiation still weighs something", "Spacetime diagrams of fundamental particle interactions"],
        correct: "Spacetime diagrams of fundamental particle interactions"
    }, {

        question: "Which one of the following is true about Erwin Schrodinger?",
        choices: ["He was first to calculate the distance from Earth to Venus", "He wrote an equation that describes how the quantum state of a system changes with time", "He was first to propose that venus has a 900 degree temperature", "His cat was secretly behind all his success"],
        correct: "He wrote an equation that describes how the quantum state of a system changes with time"
    }, {

        question: "Which is true when we observe galaxies?",
        choices: ["They look very dim", "They are moving toward us", "They are moving rapidly away from us and each other", "They spin very fast"],
        correct: "They are moving rapidly away from us and each other"
    }

];

$(document).ready(function() {
   
	//Add section elements
    $('#question-answer').append('<p class="question box-style"></p><ul id="answers"></ul><p class="submit box-style"><span class="check">&#9989;</span> Submit!</p><p id="display-answer"></p>');
    playGame(num);

});

function playGame(num) {

	//populate the form with questions as multiple choice answers
    $('.question').text(questions[num].question);
    for (i = 0; i < questions[num].choices.length; i++) {

        $('#answers').append('<li>' + questions[num].choices[i] + '</li>');
    }

    //change border color upon user selection
    $('li').click(function() {
        $('li').css('border-color', '#2299E8');
        selected = $(this).css('border-color', 'red');
        selectedText = selected.text();

    });

	//validates if user has made a selection and passes info to submit function
    $('.submit').click(function() {
        if (selectedText) {
            submit(selectedText, num);
        } else {
            alert("Please select an answer");
        }
    });
}

function submit(str, number) {
	//displays a response with the correct answer and gives correct answer
    if (str === questions[number].correct) {
        $('#display-answer').empty();
        $('#display-answer').append("That's right! " + str);
        points += 1; //keeps track of number of questions user got correct
    } else {
        $('#display-answer').empty();
        $('#display-answer').append("No, the correct answer is: " + questions[number].correct);
    }
    $('#answers').empty();
    //displays next question
    if (number < questions.length - 1) {
        number += 1;
        playGame(number);
    } else {
    	//handles what to do after last question has been answered
        $('#question-answer').empty();
        $('#question-answer').append('<p>You got ' + points + ' out of ' + questions.length + '. Want to play again?</p>').css('font-size', '3rem');
        $('#question-answer').append('<p class="submit box-style" id="playAgain">Play Again!</p>');
        $('#playAgain').click(function() {
            window.location.reload();
        })

    }
};
