var count = 0;
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

    

    playGame(num);

    function playGame(num) {
        $('.question').text(questions[num].question);
        for (i = 0; i < questions[num].choices.length; i++) {

            $('#answers').append('<li>' + questions[num].choices[i] + '</li>');
        };


        $('li').click(function() {
            $('li').css('border-color', '#2299E8');
            selected = $(this).css('border-color', 'red');
            selectedText = selected.text();

        });

        $('.submit').click(function() {
            if (selectedText) {
                submit(selectedText, num);
            } else {
                alert("Please select an answer");
            }
        })
    }

    function submit(str, number) {
        if (str === questions[number].correct) {
            $('#display-answer').empty();
            $('#display-answer').append("That's right! " + str);
        } else {
            $('#display-answer').empty();
            $('#display-answer').append("No, the correct answer is: " + questions[number].correct);
        }
        $('#answers').empty();

        if (number < 4) {
            number += 1;
            playGame(number);
        } else {
            alert('Game over!');
        }
    }

});
