const questions = document.querySelectorAll("h3");

function showAnswers(event){
    const question = event.target.parentNode.parentNode;
    question.classList.toggle("display-answers");

    hideAnswers(question);
}

function hideAnswers(currentQuestion){
    const question = document.querySelectorAll(".question");
    
    for(let q of question){
        if(q !== currentQuestion){
            q.classList.remove("display-answers");
        }
    }
}

questions.forEach((item) => {
    item.addEventListener("click", showAnswers);
})
