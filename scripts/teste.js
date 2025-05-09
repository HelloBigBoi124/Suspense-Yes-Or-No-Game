var tsim1 = document.querySelector('.perguntasim1')
var tnao1 = document.querySelector('.perguntanao1')
var pergunta = document.getElementById('pergunta')
var titulo = document.getElementById('titulo')
//pergunta.innerHTML = 'Você gosta de arroz?'

function iniciar() {

    var inicio = document.getElementById('inicio')
    inicio.style.display = 'none'
    var titulo = document.getElementById('titulo')

    

        //Música de fundo
        var audioterror = new Audio('audio/salvage.mp3');
        audioterror.addEventListener('canplaythrough', function() {
            audioterror.play();
            audioterror.volume = 1; 
        });
        //Loopa a música
        audioterror.addEventListener('ended', function() {
            audioterror.currentTime = 0;
            audioterror.play();
        }, false);
        
        setTimeout(function() {
            titulo.innerHTML = 'Olá'
                
        setTimeout(function() {
                    titulo.innerHTML += '<br>Seja Bem-Vindo'
                        
        setTimeout(function() {
                    titulo.innerHTML = ''

        setTimeout(function() {

                    solicitarNome();

        function solicitarNome() {
            var nome = window.prompt('Insira seu nome antes de prosseguir: ');
            if (nome === null || nome === '') {
                window.alert('[ERRO] Insira um nome válido!');
                solicitarNome(); // Chama a função novamente para solicitar o nome
                    } else {
                
                setTimeout(function() {
                            titulo.innerHTML = 'Hm'
    
                setTimeout(function() {
                            titulo.innerHTML += '<br>Interessante'
    
                setTimeout(function() {
                            titulo.innerHTML = ''
    
                setTimeout(function() {
                            titulo.innerHTML = 'Muito bem'
    
                setTimeout(function() {
                            titulo.innerHTML = ''
                
                setTimeout(function() {
                            titulo.innerHTML = `Prazer em te conhecer`

                setTimeout(function() {
                            titulo.classList.add('alt')
                            titulo.innerHTML = `${nome}`

                setTimeout(function() {
                            titulo.innerHTML += '<br>:)'

                setTimeout(function() {
                            titulo.classList.remove('alt')
                            titulo.innerHTML = ''
                
                setTimeout(function() {
                            titulo.innerHTML = 'Certo'

                setTimeout(function() {
                            titulo.innerHTML += '<br>Vamos começar.'

                setTimeout(function() {
                            titulo.innerHTML = ''
                
                setTimeout(function() {
                            titulo.innerHTML = 'Esse questionário analisa o estado mental de todos que a respondem.'
                
                setTimeout(function() {
                            titulo.innerHTML += '<br>Seu objetivo é escolher as alternativas de acordo com sua opinião.'

                setTimeout(function() {
                            titulo.innerHTML = ''

                setTimeout(function() {
                            titulo.innerHTML = 'Responda:'

                setTimeout(function() {
                    var pergunta = document.getElementById('pergunta')
                    pergunta.innerHTML = 'Você gosta de marshmallow?'

                    setTimeout(function() {
                        tsim1.classList.remove('fade')
                    }, 2000)
                    
                    setTimeout(function() {
                        tnao1.classList.remove('fade')


                    }, 3000)

                    tnao1.addEventListener('click' , function() {
                        tnao1.classList.add('fade')
                        tsim1.classList.add('fade')
                        titulo.innerHTML = ''
                        pergunta.innerHTML = ''
                        
                        
                        setTimeout(function () {
                            naopospergunta1(); // Chama a função do outro arquivo
                        }, 5000)
                    })

                    tsim1.addEventListener('click' , function() {
                        tnao1.classList.add('fade')
                        tsim1.classList.add('fade')
                        titulo.innerHTML = ''
                        pergunta.innerHTML = ''
                        
                        setTimeout(function () {                           
                            simpospergunta1(); // Chama a função do outro arquivo
                        }, 5000)
                    })

                }, 3000)
                }, 5000)
                }, 7000)    
                }, 3000)
                }, 3000)            
                }, 3000)                
                }, 3000)    
                }, 5000)
                                                                    }, 3000)    
                                                                }, 3000)                    
                                                            }, 3000)
                                                        }, 3000)
                                                      }, 5000)
                                                    }, 3000)
                                                }, 5000)
                                            }, 3000)
                                        }, 5000)
                                    }
                                }                                       
                       }, 5000)
                }, 5000) // Timeout 3 (Mensagem: Olá)
            }, 3000) // Timeout 2 (Mensagem: Bem vindo)
        }, 3000) // Timeout 1 (Mensagem: Olá)
    }

