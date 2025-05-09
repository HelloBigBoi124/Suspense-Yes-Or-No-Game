var tsim5 = document.querySelector('.perguntasim5')
var tnao5 = document.querySelector('.perguntanao5')
var pergunta = document.getElementById('pergunta')
var titulo = document.getElementById('titulo')

function respostanaopergunta4() {

    titulo.innerHTML = 'Olhe para trás'

    setTimeout(function() {

        titulo.innerHTML = ''

        setTimeout (function() {
            pergunta.innerHTML = 'Você está com medo?'
        
            setTimeout(function() {
                tsim5.classList.remove('fade')
            }, 2000)

        setTimeout(function() {
            tnao5.classList.remove('fade')
        }, 3000)

        tnao5.addEventListener('click' , function() {
            tnao5.classList.add('fade')
            tsim5.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''


            setTimeout(function () {
                respostanaopergunta5(); // Chama a função do outro arquivo
        }, 5000)
    })

        tsim5.addEventListener('click' , function() {
            tnao5.classList.add('fade')
            tsim5.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''
            
            setTimeout(function () {
                respostasimpergunta5(); // Chama a função do outro arquivo
            }, 5000)
        })

        }, 3000)
    }, 7000) 
}

function respostasimpergunta4() {

    titulo.innerHTML = 'Olhe para trás'

    setTimeout(function() {
        titulo.innerHTML = ''
        
        setTimeout (function() {
        pergunta.innerHTML = 'Você está com medo?'
        
        setTimeout(function() {
            tsim5.classList.remove('fade')
        }, 2000)

        setTimeout(function() {
            tnao5.classList.remove('fade')
        }, 3000)

        tnao5.addEventListener('click' , function() {
            tnao5.classList.add('fade')
            tsim5.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''


            setTimeout(function () {
                respostanaopergunta5(); // Chama a função do outro arquivo
        }, 5000)
    })

        tsim5.addEventListener('click' , function() {
            tnao5.classList.add('fade')
            tsim5.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''
            
            setTimeout(function () {
                respostasimpergunta5(); // Chama a função do outro arquivo
            }, 5000)
        })
        }, 3000)
    }, 7000)
}