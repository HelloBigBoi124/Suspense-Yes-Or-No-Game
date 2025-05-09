function move1() {
    
    //Trem que faz o botÃ£o desaparecer quando clica
    
        var botao_load = document.getElementById('carregar')
        botao_load.style.display = 'none'
        
    //Trem que faz a barra de progresso iniciar e acabar
        
        var elem = document.getElementById('barra')
        var width = 0
        var id = setInterval(frame, 10)
        var presente = document.getElementById('presente')
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                
                // Adiciona a classe 'fade' quando a largura atinge 100%
                    elem.classList.add('fade');
                
                //Tempo de espera antes de mostrar o presente
                setTimeout(function() {
                    presente.classList.add('fade');
                }, 2000);

                //Redireciona
                var audio1 = document.getElementById('meuAudio')
                audio1.addEventListener('ended', function() {
                    // Redirecionando para outra página
                    window.location.href = 'https://youtu.be/qBBwXuEV4jA?si=xk0dIkdZGVJSCjwu&t=66'
                })
                    //setTimeout(function() {
                        //window.location.href = 'https://www.youtube.com';
                //}, 332000);
            //});
                
                //Música de fundo
                var audio = new Audio('audio/heart_to_heart.mp3');
                audio.addEventListener('canplaythrough', function() {
                    audio.play();audio.volume = 0.05; 
                });
                //Loopa a música
                audio.addEventListener('ended', function() {
                    audio.currentTime = 0;
                    audio.play();
                }, false);
            
    //Os trem que faz mover as imagens
    
            function mover(elem, inicio, fim, passo, callback) {
    const novoInicio = inicio - passo
    if(novoInicio >= fim) {
        elem.style.left = novoInicio + 'px'
        setTimeout(() => mover(elem, novoInicio, fim, passo, callback), 11)
    } else {
        callback()
    }
    }
    
        //const p = document.querySelector('[wm-slider] > p')
        //p.style.display = 'block'
        //mover(p, 1500, -520, 5, () => {
        //  console.log('Terminou!!!')
        //})
    
    function slider() {
        const elementos = document.querySelectorAll('[wm-slider] > p')
        const slides = Array.from(elementos)
        exibirSlide(slides, slides[0])
    }
    
    function exibirSlide(slides, slide) {
        slide.style.display = 'block'
    
        const inicio = innerWidth
        const fim = -slide.clientWidth
    
        slide.style.left = `${inicio}px`
        
        mover(slide, inicio, fim, 5, () => {
            slide.style.display = 'none'
            exibirSlide(slides, getProximo(slides, slide))
        })
    
    }
    
    function getProximo(lista, atual) {
        const i = lista.indexOf(atual) + 1
        return i < lista.length ? lista[i] : lista[0]
    }
    
    slider()
    
        } else {
                    
                    width++
                    elem.style.width = width + '%'
                    elem.innerHTML = width * 1 + '%' 
                }
            }
    }