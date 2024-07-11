
document.getElementById('startButton').onclick = () => {
    document.getElementById('home').classList.replace('visible', 'hidden');
    document.getElementById('home').classList.replace('center', 'hidden');
    document.getElementById('question-container').classList.replace('hidden', 'visible');
    document.getElementById('question-container').classList.add('center-answers');
    loadQuestion(currentQuestionIndex);
};

const questions = [
    {
        question: "are you extroverted or introverted?",
        answers: [
            { text: "extroverted", value: 1 },
            { text: "introverted", value: -1 }
        ]
    },
    {
        question: "sensing or intuition",
        answers: [
            { text: "sensing", value: 1 },
            { text: "intuition", value: -1 }
        ]
    },
    {
        question: "thinking or feeling",
        answers: [
            { text: "thinking", value: 1 },
            { text: "feeling", value: -1 }
        ]
    },
    {
        question: "judge or percieve",
        answers: [
            { text: "judge", value: 1 },
            { text: "percieve", value: -1 }
        ]
    }
];

let currentQuestionIndex = 0;
let selectedAnswers = []
//let mbti = "aaaa"
let mbti_numbers = [0,0,0,0]

function loadQuestion(index) {
    const questionContainer = document.getElementById('question');
    const answersContainer = document.getElementById('answers');
    const resultsConatiner = document.getElementById('result')

    // Clear previous question and answers
    questionContainer.innerHTML = '';
    answersContainer.innerHTML = '';

    // Load new question
    const question = questions[index];
    questionContainer.innerText = question.question;

    // Load new answers
    question.answers.forEach((answer, i) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.innerText = answer.text;
        button.onclick = () => {

            selectedAnswers[index] = answer.value
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                loadQuestion(currentQuestionIndex);
            } else {

                selectedAnswers.forEach((value,i) => {
                    if(i == 0){
                        if(value > 0){
                            mbti_numbers[0]++;
                            //mbti = replaceChar(mbti, i, 'E');
                        }
                        else if(value < 0){
                            mbti_numbers[0]--;
                            //mbti = replaceChar(mbti, i, 'I');
                        }
                    }
                    else if(i == 1){
                        if(value > 0){
                            mbti_numbers[1]++;
                            //mbti = replaceChar(mbti, i, 'S');
                        }
                        else if(value < 0){
                            mbti_numbers[1]--;
                            //mbti = replaceChar(mbti, i, 'N');
                        }
                    }
                    else if(i == 2){
                        if(value > 0){
                            mbti_numbers[2]++;
                            //mbti = replaceChar(mbti, i, 'T');
                        }
                        else if(value < 0){
                            mbti_numbers[2]--;
                            //mbti = replaceChar(mbti, i, 'F');
                        }
                    }
                    else if(i == 3){
                        if(value > 0){
                            mbti_numbers[3]++;
                            //mbti = replaceChar(mbti, i, 'J');
                        }
                        else if(value < 0){
                            mbti_numbers[3]--;
                            //mbti = replaceChar(mbti, i, 'P');
                        }
                    }
                })
                console.log(mbti_numbers);
                //let mbti = mbti_calculate(mbti_numbers);
                document.getElementById('question-container').classList.replace('visible', 'hidden');
                document.getElementById('question-container').classList.remove('center-answers');
                document.getElementById('result').classList.replace('hidden', 'visible');
                //questionContainer.innerText = mbti;
                //console.log(mbti);

                answersContainer.innerHTML = '';
                mbti_numbers = [0,0,0,0]
                const button_result = document.getElementById('restart-button');
                //button_result.className = 'answer-button';
                //button_result.innerText = "Restarttttt";
                button_result.onclick = () => {
                    currentQuestionIndex = 0;
                    document.getElementById('result').classList.replace('visible', 'hidden');
                    document.getElementById('home').classList.replace('hidden', 'visible');
                    document.getElementById('home').classList.add('center');
                    loadQuestion(currentQuestionIndex);
                }
                //resultsConatiner.appendChild(button_result);
            }
        };
        answersContainer.appendChild(button);
    });
}
function mbti_calculate(array)
{
    let mbti;
    array.forEach((value,i) =>
    {
        if(i == 0)
        {
            if(value > 0){
                mbti.append("E")
            }
        }
    })
}
function replaceChar(str, index, char) {
    let strArray = str.split('');
    strArray[index] = char;
    return strArray.join('');
}
function hoverImg(element, imgSrc) {
    element.querySelector('img').src = imgSrc;
}
function shakePeriodically() {
    const egg = document.querySelector('.egg-button img');
    if(!egg.matches(':hover')){
        egg.style.animationPlayState = 'running';
    }
    setTimeout(() => {
        if(!egg.matches(':hover')){
            egg.style.animationPlayState = 'paused';
        }
    }, 1000); // Duration of the shake
}

// Shake the egg every 5 seconds
const egg = document.querySelector('.egg-button img');
egg.addEventListener('mouseenter', () => {
    egg.style.animationPlayState = 'paused';
});
egg.addEventListener('mouseleave', () => {
    shakePeriodically(); // Resume shaking immediately after hover ends
});

setInterval(shakePeriodically, 1500);
// Load the first question initially
loadQuestion(currentQuestionIndex);