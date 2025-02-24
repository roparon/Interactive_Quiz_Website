document.addEventListener('DOMContentLoaded', () => {
    const startQuizBtn = document.getElementById('startQuizBtn');
    const quizContainer = document.getElementById('quizContainer');
    const resultContainer = document.getElementById('resultContainer');
    const submitBtn = document.getElementById('submitBtn');
    const restartQuizBtn = document.getElementById('restartQuizBtn');
    const questionText = document.getElementById('questionText');
    const answerBtns = document.querySelectorAll('.answerBtn');
    const currentQuestionIndex = document.getElementById('currentQuestionIndex');
    const progressBar = document.getElementById('progressBar');
    const finalScore = document.getElementById('finalScore');
    const resultMessage = document.getElementById('resultMessage');

    const quizData = [
        {
            question: "What is the capital of France?",
            answers: ["Paris", "London", "Rome", "Berlin"],
            correct: "Paris"
        },
        {
            question: "What is the largest planet in our solar system?",
            answers: ["Earth", "Jupiter", "Mars", "Saturn"],
            correct: "Jupiter"
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            answers: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
            correct: "Oxygen"
        },
        {
            question: "What is the smallest country in the world?",
            answers: ["Monaco", "Vatican City", "Liechtenstein", "San Marino"],
            correct: "Vatican City"
        },
        {
            question: "Who painted the Mona Lisa?",
            answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            correct: "Leonardo da Vinci"
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: ["Mars", "Venus", "Earth", "Jupiter"],
            correct: "Mars"
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
            correct: "Pacific Ocean"
        },
        {
            question: "What is the hardest natural substance on Earth?",
            answers: ["Gold", "Diamond", "Iron", "Platinum"],
            correct: "Diamond"
        },
        {
            question: "Which animal is known as the King of the Jungle?",
            answers: ["Lion", "Tiger", "Elephant", "Bear"],
            correct: "Lion"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            answers: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
            correct: "William Shakespeare"
        },
        {
            question: "What is the longest river in the world?",
            answers: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            correct: "Amazon River"
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            answers: ["China", "South Korea", "Japan", "Thailand"],
            correct: "Japan"
        },
        {
            question: "What is the capital of Canada?",
            answers: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
            correct: "Ottawa"
        },
        {
            question: "What is the chemical symbol for gold?",
            answers: ["Au", "Ag", "Pb", "Fe"],
            correct: "Au"
        },
        {
            question: "What is the largest desert in the world?",
            answers: ["Sahara", "Arabian", "Gobi", "Antarctic Desert"],
            correct: "Antarctic Desert"
        },
        {
            question: "Who was the first man to step on the moon?",
            answers: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
            correct: "Neil Armstrong"
        },
        {
            question: "What is the smallest continent by land area?",
            answers: ["Europe", "Australia", "Africa", "Antarctica"],
            correct: "Australia"
        },
        {
            question: "What is the tallest mountain in the world?",
            answers: ["Mount Everest", "K2", "Mount Kilimanjaro", "Mount Fuji"],
            correct: "Mount Everest"
        },
        {
            question: "Which country is famous for the Eiffel Tower?",
            answers: ["Germany", "Italy", "France", "Spain"],
            correct: "France"
        },
        {
            question: "What is the main ingredient in guacamole?",
            answers: ["Tomato", "Avocado", "Onion", "Garlic"],
            correct: "Avocado"
        },
        {
            question: "What is the currency used in Japan?",
            answers: ["Yuan", "Yen", "Won", "Ringgit"],
            correct: "Yen"
        },
        {
            question: "What is the tallest building in the world?",
            answers: ["Shanghai Tower", "Burj Khalifa", "Empire State Building", "Eiffel Tower"],
            correct: "Burj Khalifa"
        },
        {
            question: "Which country is home to the Great Barrier Reef?",
            answers: ["New Zealand", "South Africa", "Australia", "Philippines"],
            correct: "Australia"
        },
        {
            question: "Which fruit is known for having its seeds on the outside?",
            answers: ["Strawberry", "Kiwi", "Mango", "Apple"],
            correct: "Strawberry"
        },
        {
            question: "What does the acronym 'NASA' stand for?",
            answers: ["National Air and Space Administration", "National Aeronautics and Space Agency", "National Aeronautics and Scientific Administration", "None of the above"],
            correct: "National Aeronautics and Space Administration"
        },
        {
            question: "Who is the founder of Microsoft?",
            answers: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Elon Musk"],
            correct: "Bill Gates"
        },
        {
            question: "What is the capital of Australia?",
            answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            correct: "Canberra"
        },
        {
            question: "What is the largest animal on Earth?",
            answers: ["African Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
            correct: "Blue Whale"
        },
        {
            question: "Which city is known as the Big Apple?",
            answers: ["Los Angeles", "New York City", "Chicago", "San Francisco"],
            correct: "New York City"
        },
        {
            question: "Who is known as the 'Father of Computers'?",
            answers: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
            correct: "Charles Babbage"
        },
        {
            question: "What is the longest running animated TV series?",
            answers: ["The Simpsons", "Family Guy", "South Park", "The Flintstones"],
            correct: "The Simpsons"
        },
        {
            question: "Which planet is closest to the Sun?",
            answers: ["Venus", "Earth", "Mercury", "Mars"],
            correct: "Mercury"
        },
        {
            question: "What is the main ingredient in sushi?",
            answers: ["Rice", "Seaweed", "Fish", "Soy Sauce"],
            correct: "Rice"
        },
        {
            question: "Who was the 16th President of the United States?",
            answers: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Andrew Johnson"],
            correct: "Abraham Lincoln"
        },
        {
            question: "Which ocean is the largest in the world?",
            answers: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
            correct: "Pacific Ocean"
        },
        {
            question: "What is the tallest waterfall in the world?",
            answers: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Iguazu Falls"],
            correct: "Angel Falls"
        },
        {
            question: "Which country is known as the Land of the Midnight Sun?",
            answers: ["Finland", "Iceland", "Norway", "Sweden"],
            correct: "Norway"
        },
        {
            question: "What is the capital city of Spain?",
            answers: ["Barcelona", "Madrid", "Valencia", "Sevilla"],
            correct: "Madrid"
        },
        {
            question: "Which of the following is not a primary color?",
            answers: ["Red", "Green", "Blue", "Yellow"],
            correct: "Green"
        },
        {
            question: "Which fruit is known for having its seeds on the outside?",
            answers: ["Strawberry", "Mango", "Apple", "Pineapple"],
            correct: "Strawberry"
        },
        {
            question: "What is the capital of Italy?",
            answers: ["Rome", "Florence", "Venice", "Milan"],
            correct: "Rome"
        },
        {
            question: "What is the chemical symbol for water?",
            answers: ["O2", "CO2", "H2O", "NaCl"],
            correct: "H2O"
        },
        {
            question: "What is the largest bird in the world?",
            answers: ["Eagle", "Ostrich", "Penguin", "Peacock"],
            correct: "Ostrich"
        },
        {
            question: "Which of these countries is in Africa?",
            answers: ["Brazil", "Egypt", "Thailand", "Australia"],
            correct: "Egypt"
        },
        {
            question: "What does DNA stand for?",
            answers: ["Deoxyribonucleic Acid", "Deoxyribose Nucleic Acid", "Dihydroxy Nucleic Acid", "Diphosphate Nucleic Acid"],
            correct: "Deoxyribonucleic Acid"
        },
        {
            question: "Who was the first woman to fly solo across the Atlantic Ocean?",
            answers: ["Amelia Earhart", "Harriet Quimby", "Bessie Coleman", "Jacqueline Cochran"],
            correct: "Amelia Earhart"
        },
        {
            question: "What is the capital of Germany?",
            answers: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
            correct: "Berlin"
        },
        {
            question: "What is the largest country in the world by land area?",
            answers: ["China", "Canada", "USA", "Russia"],
            correct: "Russia"
        },
        {
            question: "What is the chemical symbol for iron?",
            answers: ["Fe", "Ir", "I", "In"],
            correct: "Fe"
        },
        {
            question: "Who is the Greek god of the sea?",
            answers: ["Poseidon", "Zeus", "Apollo", "Ares"],
            correct: "Poseidon"
        },
        {
            question: "Which organ is vital for pumping blood throughout the human body?",
            answers: ["Liver", "Lungs", "Heart", "Kidneys"],
            correct: "Heart"
        },
        {
            question: "What is the largest land animal?",
            answers: ["Elephant", "Giraffe", "Rhino", "Hippopotamus"],
            correct: "Elephant"
        },
        {
            question: "Which movie won the Academy Award for Best Picture in 1994?",
            answers: ["Forrest Gump", "Pulp Fiction", "Shawshank Redemption", "Titanic"],
            correct: "Forrest Gump"
        },
        {
            question: "Who invented the telephone?",
            answers: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
            correct: "Alexander Graham Bell"
        },
        {
            question: "What is the capital of Japan?",
            answers: ["Osaka", "Kyoto", "Hiroshima", "Tokyo"],
            correct: "Tokyo"
        },
        {
            question: "What is the national flower of Japan?",
            answers: ["Cherry Blossom", "Rose", "Lotus", "Tulip"],
            correct: "Cherry Blossom"
        }
    ];
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
            shuffleArray(quizData);
        quizData.forEach(question => shuffleArray(question.answers));

    let score = 0;
    let currentQuestion = 0;
    let canProceed = false;

    startQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        startQuizBtn.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        showQuestion();
    }

    function showQuestion() {
        const question = quizData[currentQuestion];
        questionText.textContent = question.question;
        answerBtns.forEach((btn, index) => {
            btn.textContent = question.answers[index];
            btn.onclick = () => checkAnswer(btn);
            btn.disabled = false; 
        });
        currentQuestionIndex.textContent = currentQuestion + 1;
        progressBar.value = currentQuestion + 1;
    }

    function checkAnswer(btn) {
        const question = quizData[currentQuestion];
        // Disable all answer buttons
        answerBtns.forEach((btn) => {
            btn.disabled = true;
        });

        if (btn.textContent === question.correct) {
            score++;
            canProceed = true;
            showCorrectAnswerMessage();
        } else {
            canProceed = false;
            showWrongAnswerMessage();
        }

        if (canProceed) {
            setTimeout(() => {
                if (currentQuestion < quizData.length - 1) {
                    currentQuestion++;
                    showQuestion();
                } else {
                    showResults();
                }
            }, 500);
        }
    }

    function showCorrectAnswerMessage() {
        alert("Correct answer! Moving to next question.");
    }

    function showWrongAnswerMessage() {
        alert("Wrong answer! Please try again.");
        answerBtns.forEach((btn) => {
            if (btn.textContent === quizData[currentQuestion].correct) {
                btn.disabled = false;
            }
        });
    }

    function showResults() {
        quizContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        finalScore.textContent = score;
        resultMessage.textContent = score === quizData.length ? "Perfect Score!" : "Well Done!";
    }

    restartQuizBtn.addEventListener('click', () => {
        score = 0;
        currentQuestion = 0;
        resultContainer.classList.add('hidden');
        startQuizBtn.classList.remove('hidden');
        canProceed = false;
    });
});
