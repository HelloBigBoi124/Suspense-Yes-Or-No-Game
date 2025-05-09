var tsim4 = document.querySelector('.perguntasim4')
var tnao4 = document.querySelector('.perguntanao4')
var pergunta = document.getElementById('pergunta')
var titulo = document.getElementById('titulo')

function respostanaopergunta3() {
    setTimeout (function() {
        pergunta.innerHTML = 'Você está sozinho?'
        
        setTimeout(function() {
            tsim4.classList.remove('fade')
        }, 2000)

        setTimeout(function() {
            tnao4.classList.remove('fade')
        }, 3000)

        tnao4.addEventListener('click' , function() {
            tnao4.classList.add('fade')
            tsim4.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''


            setTimeout(function () {
                respostanaopergunta4(); // Chama a função do outro arquivo
        }, 5000)
    })

        tsim4.addEventListener('click' , function() {
            tnao4.classList.add('fade')
            tsim4.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''
            
            setTimeout(function () {
                respostasimpergunta4(); // Chama a função do outro arquivo
            }, 5000)
        })

    }, 3000)
    
}

function respostasimpergunta3() {

    setTimeout (function() {
        pergunta.innerHTML = 'Você está sozinho?'
        
        setTimeout(function() {
            tsim4.classList.remove('fade')
        }, 2000)

        setTimeout(function() {
            tnao4.classList.remove('fade')
        }, 3000)

        tnao4.addEventListener('click' , function() {
            tnao4.classList.add('fade')
            tsim4.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''


            setTimeout(function () {
                respostanaopergunta4(); // Chama a função do outro arquivo
        }, 5000)
    })

        tsim4.addEventListener('click' , function() {
            tnao4.classList.add('fade')
            tsim4.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''
            
            setTimeout(function () {
                respostasimpergunta4(); // Chama a função do outro arquivo
            }, 5000)
        })

    }, 3000)

}