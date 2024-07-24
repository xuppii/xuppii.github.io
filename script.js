
document.getElementById('startButton').onclick = () => {
    document.getElementById('home').classList.replace('visible', 'hidden');
    document.getElementById('home').classList.replace('center', 'hidden');
    document.getElementById('question-container').classList.replace('hidden', 'visible');
    document.getElementById('question-container').classList.add('center-answers');
    loadQuestion(currentQuestionIndex);
};

const questions = [
    {
        question: "you are a new driver going on a scenic drive. all of a sudden you see a chicken crossing the road struggling to walk with a gigantic egg in its arms. what do u do?",
        answers: [
            { text: "Observe the chicken first. I wonder where it got such a big egg from? ", value: 1 },
            { text: "It looks like it needs help! I should get closer.", value: -1 }
        ]
    },
    {
        question: "You stop your car in front of the chicken and start walking towards it. What do you say?",
        answers: [
            { text: "ask the chicken why its crossing the road", value: 1 },
            { text: "tell the chicken its dangerous and to take a safer path", value: -1 }
        ]
    },
    {
        question: "the chicken asks you why you are being so kind because of the constant honking it has encountered thus far.",
        answers: [
            { text: "you can tell the chicken is just trying its best to keep the egg safe.", value: 1 },
            { text: "you were just curious, you didn’t think you were being kind.", value: -1 }
        ]
    },
    {
        question: "the chicken tells you that it found this egg on the side of the road and its going to hatch soon, but it needs a safe place to put it down. how do you respond?",
        answers: [
            { text: "“dont worry! my backyard is spacious!”", value: 1 },
            { text: "“oh i really hope you find somewhere! theres this park pretty close by.”", value: -1 }
        ]
    },
    {
        question: "“thank you for your help! do you think you could take me by car? i’m exhausted carrying this egg”",
        answers: [
            { text: "You’re hesitant to agree. What if this is a trap? ", value: 1 },
            { text: "“Of course!” You are excited to see a new life be born into this world.", value: -1 }
        ]
    },
    {
        question: "You take the egg from the chicken to place it into the car before helping the chicken into the car.",
        answers: [
            { text: "I want to get this over with so I can continue on with my day.", value: 1 },
            { text: "This is such a fun detour! I wonder how it will turn out.", value: -1 }
        ]
    },
    {
        question: "the egg starts to shake visibly in the chickens arms. oh no! i think itll hatch at any moment!! how do you respond?",
        answers: [
            { text: "you start getting really anxious, not knowing if you can make it to a safe spot in time", value: 1 },
            { text: "you dont think twice and immediately speed off to the meadow.", value: -1 }
        ]
    },
    {
        question: "we reach the meadows and you hear the egg crack. how do you feel?!",
        answers: [
            { text: "excited! this is my first time witnessing an animal birth!", value: 1 },
            { text: "scared. i hope it comes out healthy…", value: -1 }
        ]
    },
    {
        question: "the baby chick pops its head out. but instead of imprinting onto the chicken who saved it.. it seems to think youre its mom! you exchange glances with the chicken.",
        answers: [
            { text: "its okay. i can take it home and raise it. this will be super fun!", value: 1 },
            { text: "youre a chicken. i think you should take it. i dont have experience taking care of an animal!", value: -1 }
        ]
    },
    {
        question: "The chicken believes you deserve the right to name the baby chick. ",
        answers: [
            { text: "“It’s okay! I am just glad I was able to help.”", value: 1 },
            { text: "“I’d love to!”", value: -1 }
        ]
    },
    {
        question: "The chicken thanks you. Before it goes off on its way, it tells you it actually has a family on its own and would love to stop by someday with them.",
        answers: [
            { text: "I would love to meet them! This was such a fun experience.", value: 1 },
            { text: "I’m okay! I think this experience was surreal enough..", value: -1 }
        ]
    },
    {
        question: "You drive back home after an eventful day feeling a rush of emotions.",
        answers: [
            { text: "“I can’t wait to tell my friends and family about what happened today!”", value: 1 },
            { text: "“I can’t wait to get home and relax.”", value: -1 }
        ]
    },
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
    questionContainer.innerText = (currentQuestionIndex + 1) + ". " + question.question;

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