const quizData = [
  {
    question: "What does HTML stands for",
    option: ["Hypertext markup language", "sdfasdfa", "werth", "None of these"],
    correct: 0,
  },
  {
    question: "What does css  stands for",
    option: ["cascading style sheet", "sdffa", "abc", " both of these"],
    correct: 0,
  },
  {
    question: "What does javascript stands for",
    option: ["java", "sdfasdfsdfasa", "werth", "all  of these"],
    correct: 2,
  },
  {
    question: "What does bootstrap stands for",
    option: [
      "it is a hard disk",
      "sdfassdffa",
      "werfdsdfh",
      "bootstrap is a framework",
    ],
    correct: 3,
  },
  {
    question: "What does react stands for",
    option: [
      "it is a javascript library",
      "sdfasdffasdf",
      "it is a backend",
      "it is a forntent",
    ],
    correct: 0,
  },
];
let quiz=document.querySelector(".quiz");
const answerElm = document.querySelectorAll(".answer");
let [questions, option1, option2, option3, option4] = document.querySelectorAll(
  ".question",
  "#option1",
  "#option2",
  "#option3",
  "#option4"
);
let submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;
function loadQuiz() {
  let { question, option } = quizData[currentQuiz];
  questions.innerHTML = question;
  option.forEach((e, i) => {
    window[`option${i + 1}`].innerHTML = e;
  });

}
loadQuiz();

function optinIndex() {
  let rigthInd;
  answerElm.forEach((e, i) => {
    if (e.checked) {
      rigthInd = i;
    }
  });
  return rigthInd;
}
function disSelect(){
answerElm.forEach((e)=>{
  return e.checked=false;
})
}

submitBtn.addEventListener("click", () => {
  index = optinIndex();
   console.log(index);
  if(index===quizData[currentQuiz].correct){
    score++;


  }
  currentQuiz++;

  if(currentQuiz < quizData.length){
    disSelect();
    loadQuiz();

  }else{
    quiz.innerHTML=` <h2>congratulation your score </h2>
    <h3>
       ${score}/${quizData.length}
    </h3>
    <button id="submi" onclick="location.reload()">back</button>
    `
  }

});
console.log(score);