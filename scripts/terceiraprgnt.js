var tsim3 = document.querySelector('.perguntasim3')
var tnao3 = document.querySelector('.perguntanao3')
var pergunta = document.getElementById('pergunta')
var titulo = document.getElementById('titulo')

function respostanaopergunta2() {
    titulo.innerHTML = 'Bom'
        
    setTimeout(function() {
        titulo.innerHTML = ''

            setTimeout(function() {
                titulo.innerHTML = 'Provavelmente você se sentiu solitário em sua juventude.'
                    
                setTimeout(function() {
                        titulo.innerHTML = ''

                        setTimeout(function() {
                            pergunta.innerHTML = 'Você está tendo um bom dia?'

                            setTimeout(function() {
                                tsim3.classList.remove('fade')
                            }, 2000)

                            setTimeout(function() {
                                tnao3.classList.remove('fade')
                            }, 3000)

                            tnao3.addEventListener('click' , function() {
                                tnao3.classList.add('fade')
                                tsim3.classList.add('fade')
                                titulo.innerHTML = ''
                                pergunta.innerHTML = ''


                                setTimeout(function () {
                                    respostanaopergunta3(); // Chama a função do outro arquivo
                            }, 5000)
                        })

                            tsim3.addEventListener('click' , function() {
                                tnao3.classList.add('fade')
                                tsim3.classList.add('fade')
                                titulo.innerHTML = ''
                                pergunta.innerHTML = ''
                                
                                setTimeout(function () {
                                    respostasimpergunta3(); // Chama a função do outro arquivo
                                }, 5000)
                            })
                    }, 3000)

                }, 5000)

            }, 3000)

    }, 3000)

}

function respostasimpergunta2() {
    titulo.innerHTML = 'Bom'

    setTimeout(function() {
        titulo.innerHTML = ''

        setTimeout(function() {
            titulo.innerHTML = 'Espero que vocês ainda se deem bem.'
                
            setTimeout(function() {
                    titulo.innerHTML = ''

                    setTimeout(function() {
                        pergunta.innerHTML = 'Você está tendo um bom dia?'

                        setTimeout(function() {
                            tsim3.classList.remove('fade')
                        }, 2000)

                        setTimeout(function() {
                            tnao3.classList.remove('fade')
                        }, 3000)

                        tnao3.addEventListener('click' , function() {
                            tnao3.classList.add('fade')
                            tsim3.classList.add('fade')
                            titulo.innerHTML = ''
                            pergunta.innerHTML = ''


                            setTimeout(function () {
                                respostanaopergunta3(); // Chama a função do outro arquivo
                        }, 5000)
                    })

                        tsim3.addEventListener('click' , function() {
                            tnao3.classList.add('fade')
                            tsim3.classList.add('fade')
                            titulo.innerHTML = ''
                            pergunta.innerHTML = ''
                            
                            setTimeout(function () {
                                respostasimpergunta3(); // Chama a função do outro arquivo
                            }, 5000)
                        })
                }, 3000)

            }, 5000)

        }, 3000)
    }, 3000)

 
}