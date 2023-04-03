const quizzData=[
    {
        question:"Markup Language?",
        a:"Html",
        b:"Css",
        c:"Js",
        d:"Python",
        correct:"a"
    },
    {
        question:"Style sheet?",
        a:"Html",
        b:"Css",
        c:"Js",
        d:"Python",
        correct:"b"
    },
    {
        question:"Simple Syntax?",
        a:"C++",
        b:"Java",
        c:"Js",
        d:"Python",

        correct:"d"
    },
    {
        question:"Backend Language?",
        a:"Html",
        b:"Css",
        c:"Js",
        d:"Python",
        correct:"d"
    },
];
const quizz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const  b_text = document.getElementById('b_text');
const  c_text = document.getElementById('c_text');
const  d_text = document.getElementById('d_text');
const answerEls=document.querySelectorAll(".answer");
const questionEl=document.getElementById("question");
const submitBtn=document.getElementById("submit");


let currentQuiz = 0
let score = 0
loadQuiz()

function loadQuiz() {
    deselectAnswer()
    const currentQuizData=quizzData[currentQuiz]
    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d


}
function deselectAnswer(){
    answerEls.forEach(answerEl=>answerEl.checked = false)
}
function getSelected(){
    let answer

    answerEls.forEach(answerEl=> {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener("click",()=>{
    const answer = getSelected()
    if(answer) {
        if(answer === quizzData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizzData.length) {
            loadQuiz()   
        } else {
            quizz.innerHTML = `
            <h2>You answered correctly at  ${score}/${quizzData.length} question correctly</h2>

             <button onclick="location.reload()">Reload</button>`         
            
        }
         
    

        }
    })
    
    

