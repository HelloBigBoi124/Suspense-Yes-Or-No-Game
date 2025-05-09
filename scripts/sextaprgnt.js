var tsim6 = document.querySelector('.perguntasim6')
var tnao6 = document.querySelector('.perguntanao6')
var pergunta = document.getElementById('pergunta')
var titulo = document.getElementById('titulo')

function respostanaopergunta5() {
    var audioscary = new Audio('audio/scary.mp3');
        audioscary.addEventListener('canplaythrough', function() {
            audioscary.play();
            audioscary.volume = 1; 
            setTimeout(function() {
                pergunta.innerHTML = 'E agora?'
        
        setTimeout(function() {
            tsim6.classList.remove('fade')
        }, 2000)

        setTimeout(function() {
            tnao6.classList.remove('fade')
        }, 3000)

        tnao6.addEventListener('click' , function() {
            tnao6.classList.add('fade')
            tsim6.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''


            setTimeout(function () {
                respostanaopergunta6(); // Chama a função do outro arquivo
        }, 5000)
    })

        tsim6.addEventListener('click' , function() {
            tnao6.classList.add('fade')
            tsim6.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''
            
            setTimeout(function () {
                respostasimpergunta6(); // Chama a função do outro arquivo
            }, 5000)
        })

            }, 3000)

        });
}

function respostasimpergunta5() {
    var audioscary = new Audio('audio/scary.mp3');
    audioscary.addEventListener('canplaythrough', function() {
        audioscary.play();
        audioscary.volume = 1; 

        setTimeout(function() {
            pergunta.innerHTML = 'E agora?'
        
        setTimeout(function() {
            tsim6.classList.remove('fade')
        }, 2000)

        setTimeout(function() {
            tnao6.classList.remove('fade')
        }, 3000)

        tnao6.addEventListener('click' , function() {
            tnao6.classList.add('fade')
            tsim6.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''


            setTimeout(function () {
                respostanaopergunta6(); // Chama a função do outro arquivo
        }, 5000)
    })

        tsim6.addEventListener('click' , function() {
            tnao6.classList.add('fade')
            tsim6.classList.add('fade')
            titulo.innerHTML = ''
            pergunta.innerHTML = ''
            
            setTimeout(function () {
                respostasimpergunta6(); // Chama a função do outro arquivo
            }, 5000)
        })

        }, 3000)

    });

}