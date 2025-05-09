// No arquivo seuarquivo.js
var tsim2 = document.querySelector('.perguntasim2')
var tnao2 = document.querySelector('.perguntanao2')
var pergunta = document.getElementById('pergunta')
var titulo = document.getElementById('titulo')


//Escolhida a opção 'Não'.
function naopospergunta1() {
    titulo.innerHTML = '';
    setTimeout(function() {
        titulo.innerHTML = 'Entendo'
            
            setTimeout(function() {
                titulo.innerHTML += '<br>Talvez não goste muito de doces.'

                setTimeout(function() {
                    titulo.innerHTML = ''

                    setTimeout(function() {
                        titulo.innerHTML = 'Que pena :/'

                        setTimeout(function() {
                            titulo.innerHTML = ''
                                    
                                setTimeout(function() {
                                        titulo.innerHTML += '<br>Prosseguindo'
                                        
                                        setTimeout(function() {
                                            titulo.innerHTML = 'Responda:'
                                            
                                            setTimeout(function() {

                                                var pergunta = document.getElementById('pergunta')
                                                pergunta.innerHTML = 'Você tem irmãos ou irmãs?'

                                                setTimeout(function() {
                                                    tsim2.classList.remove('fade')
                                                }, 2000)
            
                                                setTimeout(function() {
                                                    tnao2.classList.remove('fade')
                                                }, 3000)

                                                tnao2.addEventListener('click' , function() {
                                                    tnao2.classList.add('fade')
                                                    tsim2.classList.add('fade')
                                                    titulo.innerHTML = ''
                                                    pergunta.innerHTML = ''
                
                
                                                    setTimeout(function () {
                                                        respostanaopergunta2(); // Chama a função do outro arquivo
                                                }, 5000)
                                            })

                                                tsim2.addEventListener('click' , function() {
                                                    tnao2.classList.add('fade')
                                                    tsim2.classList.add('fade')
                                                    titulo.innerHTML = ''
                                                    pergunta.innerHTML = ''
                                                    
                                                    setTimeout(function () {
                                                        respostasimpergunta2(); // Chama a função do outro arquivo
                                                    }, 5000)
                                                })
                                                
                                        }, 3000)
                                    }, 3000)
                                }, 3000)                            
                    }, 3000)
                }, 3000)
        }, 3000)
    }, 4000)
}, 3000);
}

//Escolhida a opção 'Sim'.
function simpospergunta1() {
    titulo.innerHTML = '';
    setTimeout(function() {
        titulo.innerHTML = 'Entendo'
            
            setTimeout(function() {
                titulo.innerHTML += '<br>São realmente doces e fofos.'

                setTimeout(function() {
                    titulo.innerHTML = ''

                        setTimeout(function() {
                            titulo.innerHTML = 'Gostei de você :)'

                            setTimeout(function() {
                                titulo.innerHTML = ''                                 
                                            
                                        setTimeout(function() {
                                                titulo.innerHTML += '<br>Prosseguindo'
                                                
                                                setTimeout(function() {
                                                    titulo.innerHTML = 'Responda:'
                                                    
                                                    setTimeout(function() {

                                                        var pergunta = document.getElementById('pergunta')
                                                        pergunta.innerHTML = 'Você tem irmãos ou irmãs?'

                                                        setTimeout(function() {
                                                            tsim2.classList.remove('fade')
                                                        }, 2000)
                    
                                                        setTimeout(function() {
                                                            tnao2.classList.remove('fade')
                                                        }, 3000)

                                                        tnao2.addEventListener('click' , function() {
                                                            tnao2.classList.add('fade')
                                                            tsim2.classList.add('fade')
                                                            titulo.innerHTML = ''
                                                            pergunta.innerHTML = ''
                        
                        
                                                            setTimeout(function () {
                                                                respostanaopergunta2(); // Chama a função do outro arquivo
                                                        }, 5000)
                                                    })

                                                        tsim2.addEventListener('click' , function() {
                                                            tnao2.classList.add('fade')
                                                            tsim2.classList.add('fade')
                                                            titulo.innerHTML = ''
                                                            pergunta.innerHTML = ''
                                                            
                                                            setTimeout(function () {
                                                                respostasimpergunta2(); // Chama a função do outro arquivo
                                                            }, 5000)
                                                        })
                                                        
                                                }, 3000)
                                            }, 3000)
                                        }, 3000)
                                    
                            }, 3000)
                        }, 3000)
                }, 3000)
            }, 4000)
    }, 3000);
}
