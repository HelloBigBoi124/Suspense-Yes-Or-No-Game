var tsim7 = document.querySelector('.perguntasim7')
var tnao7 = document.querySelector('.perguntanao7')
var pergunta = document.getElementById('pergunta')
var titulo = document.getElementById('titulo')

function respostanaopergunta6() {

    titulo.innerHTML = 'Que chato :('

    setTimeout(function() {

        titulo.innerHTML = ''

        setTimeout (function() {
            pergunta.innerHTML = 'Você gosta de presentes?'
        
            setTimeout(function() {
                tsim7.classList.remove('fade')
            }, 2000)

        setTimeout(function() {
            tnao7.classList.remove('fade')
        }, 3000)

        tnao7.addEventListener('click' , function() {
            tnao7.classList.add('fade')
            tsim7.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''


            setTimeout(function () {
                respostanaopergunta7(); // Chama a função do outro arquivo
        }, 5000)
    })

        tsim7.addEventListener('click' , function() {
            tnao7.classList.add('fade')
            tsim7.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''
            
            setTimeout(function () {
                respostasimpergunta7(); // Chama a função do outro arquivo
            }, 5000)
        })

        }, 3000)
    }, 7000) 
}

function respostasimpergunta6() {

    titulo.innerHTML = 'Hihi :)'

    setTimeout(function() {
        titulo.innerHTML = ''
        
        setTimeout (function() {
        pergunta.innerHTML = 'Você gosta de presentes?'
        
        setTimeout(function() {
            tsim7.classList.remove('fade')
        }, 2000)

        setTimeout(function() {
            tnao7.classList.remove('fade')
        }, 3000)

        tnao7.addEventListener('click' , function() {
            tnao7.classList.add('fade')
            tsim7.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''


            setTimeout(function () {
                respostanaopergunta7(); // Chama a função do outro arquivo
        }, 5000)
    })

        tsim7.addEventListener('click' , function() {
            tnao7.classList.add('fade')
            tsim7.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''
            
            setTimeout(function () {
                respostasimpergunta7(); // Chama a função do outro arquivo
            }, 5000)
        })
        }, 3000)
    }, 7000)
}