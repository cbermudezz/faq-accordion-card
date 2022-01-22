/*this.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".question-title")
    questions.forEach((question) => question.addEventListener("click", () =>{
  
        if(question.parentNode.classList.contains("show-text")){
            question.parentNode.classList.toggle("show-text")
        }
    else{
    questions.forEach(question => question.parentNode.classList.remove("show-text"))
    question.parentNode.classList.add("show-text")
        }

    }))
})*/

const questions = document.querySelectorAll('.question')

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text')
    })
})