var titulo = document.getElementById('titulo')
var presente = document.getElementById('presente')
var presentefundo = document.getElementById('fundo')
var clickpresente = document.getElementById('presente1')

function respostanaopergunta7() {
    titulo.innerHTML = 'Foda-se'
    setTimeout(function() {
        titulo.innerHTML = ''
        
        var audioclick = new Audio('audio/noise.wav');
        audioclick.addEventListener('canplaythrough', function() {
        audioclick.play();
        audioclick.volume = 1; 
    });
        presente.classList.remove('fade')
        presentefundo.classList.add('fundopresente')

        clickpresente.addEventListener('click', function() {
            window.location.href = 'https://github.com/HelloBigBoi124/Suspense-Yes-Or-No-Game'
        });

        if (window.audioterror) {
            window.audioterror.pause();
        }

        setTimeout(function() {
            var audiomusic = new Audio('audio/mtgameshow.ogg');
            audiomusic.addEventListener('canplaythrough', function() {
            audiomusic.play();
            audiomusic.volume = 1; 
        });

        audiomusic.addEventListener('ended', function() {
            audiomusic.currentTime = 0;
            audiomusic.play();
        }, false);

        }, 1000)
    }, 3000)
}

function respostasimpergunta7() {
    titulo.innerHTML = 'Ótimo...'
    setTimeout(function() {
        titulo.innerHTML = ''
        
        var audioclick = new Audio('audio/noise.wav');
        audioclick.addEventListener('canplaythrough', function() {
        audioclick.play();
        audioclick.volume = 1; 
    });
        presente.classList.remove('fade')
        presentefundo.classList.add('fundopresente')

        clickpresente.addEventListener('click', function() {
            window.location.href = 'https://github.com/HelloBigBoi124/Suspense-Yes-Or-No-Game'
        });

        if (window.audioterror) {
            window.audioterror.pause();
        }

        setTimeout(function() {
            var audiomusic = new Audio('audio/mtgameshow.ogg');
            audiomusic.addEventListener('canplaythrough', function() {
            audiomusic.play();
            audiomusic.volume = 1; 
        });

        audiomusic.addEventListener('ended', function() {
            audiomusic.currentTime = 0;
            audiomusic.play();
        }, false);

        }, 1000)

    }, 3000)
}
