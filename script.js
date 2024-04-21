const questions = document.querySelectorAll('.questionContainer')
questions.forEach(question => {
    question.children[0].addEventListener('click', () =>{
        const image = question.children[0].children[1];
        const answer = question.children[1];
        if (answer.classList.contains('hidden')){
            image.setAttribute('src', './assets/images/icon-minus.svg')
            answer.classList.remove('hidden')
            answer.classList.remove('hide')
            answer.classList.add('show')
            answer.setAttribute('style', 'margin-bottom: 1rem')
        } else {
            image.setAttribute('src', './assets/images/icon-plus.svg')
            answer.classList.remove('show')
            answer.classList.add('hide')
            setTimeout(()=>{
                answer.classList.add('hidden')
                answer.setAttribute('style', 'margin-bottom: 0')
            }, 200)
        }
    })
})