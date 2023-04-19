const audio = document.getElementById("myAudio");
const playPauseButton = document.getElementById('play-pause');

function playChemical() {
    const modalTitle = document.getElementById('chemical-modal').querySelector('h2').textContent;
    const icon = document.getElementById('chemical-modal').querySelector('i')
    if (audio.getAttribute('src').includes(modalTitle)) {
      if (audio.paused) {
        audio.play();
        icon.classList.remove("fa-play")
        icon.classList.add("fa-pause")
      } else {
        audio.pause();
        icon.classList.remove("fa-pause")
        icon.classList.add("fa-play")
      }
    } else {
      audio.setAttribute('src', `assets/musics/${modalTitle}.mp3`);
      audio.play();
      icon.classList.remove("fa-play")
      icon.classList.add("fa-pause")
    }
  }


function playAsItWas() {
    const modalTitle = document.getElementById('itwas-modal').querySelector('h2').textContent;
    const icon = document.getElementById('itwas-modal').querySelector('i')
    if (audio.getAttribute('src').includes(modalTitle)) {
      if (audio.paused) {
        audio.play();
        icon.classList.remove("fa-play")
        icon.classList.add("fa-pause")
      } else {
        audio.pause();
        icon.classList.remove("fa-pause")
        icon.classList.add("fa-play")
      }
    } else {
      audio.setAttribute('src', `assets/musics/${modalTitle}.mp3`);
      audio.play();
      icon.classList.remove("fa-play")
      icon.classList.add("fa-pause")
    }
  }
  
  function playVampiro() {
    const modalTitle = document.getElementById('vampiro-modal').querySelector('h2').textContent;
    const icon = document.getElementById('vampiro-modal').querySelector('i')
    if (audio.getAttribute('src').includes(modalTitle)) {
      if (audio.paused) {
        audio.play();
        icon.classList.remove("fa-play")
        icon.classList.add("fa-pause")
      } else {
        audio.pause();
        icon.classList.remove("fa-pause")
        icon.classList.add("fa-play")
      }
    } else {
      audio.setAttribute('src', `assets/musics/${modalTitle}.mp3`);
      audio.play();
      icon.classList.remove("fa-play")
      icon.classList.add("fa-pause")
    }
  }

  function playKonteiner() {
    const modalTitle = document.getElementById('konteiner-modal').querySelector('h2').textContent;
    const icon = document.getElementById('konteiner-modal').querySelector('i')
    if (audio.getAttribute('src').includes(modalTitle)) {
      if (audio.paused) {
        audio.play();
        icon.classList.remove("fa-play")
        icon.classList.add("fa-pause")
      } else {
        audio.pause();
        icon.classList.remove("fa-pause")
        icon.classList.add("fa-play")
      }
    } else {
      audio.setAttribute('src', `assets/musics/${modalTitle}.mp3`);
      audio.play();
      icon.classList.remove("fa-play")
      icon.classList.add("fa-pause")
    }
  }


function abrirModal() {
    const modal = document.getElementById('chemical-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
      if(e.target.id == 'fechar' || e.target.id == 'chemical-modal') {
        modal.classList.remove('abrir')
      }
      window.addEventListener('keydown', function (event) {
        const modal = document.getElementById('chemical-modal')
      if (event.key === 'Escape') {
        modal.classList.remove('abrir')
      }
    })
    
    })
  }

  function abrirItWas() { 
    const modal = document.getElementById('itwas-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
      if(e.target.id == 'fechar' || e.target.id == 'itwas-modal') {
        modal.classList.remove('abrir')
      }
      window.addEventListener('keydown', function (event) {
        const modal = document.getElementById('itwas-modal')
      if (event.key === 'Escape') {
        modal.classList.remove('abrir')
      }
    })
    
    })
  }

  function abrirVampiro() { 
    const modal = document.getElementById('vampiro-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
      if(e.target.id == 'fechar' || e.target.id == 'vampiro-modal') {
        modal.classList.remove('abrir')
      }
      window.addEventListener('keydown', function (event) {
        const modal = document.getElementById('vampiro-modal')
      if (event.key === 'Escape') {
        modal.classList.remove('abrir')
      }
    })
    
    })
  }

  function abrirKonteiner() { 
    const modal = document.getElementById('konteiner-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
      if(e.target.id == 'fechar' || e.target.id == 'konteiner-modal') {
        modal.classList.remove('abrir')
      }
      window.addEventListener('keydown', function (event) {
        const modal = document.getElementById('konteiner-modal')
      if (event.key === 'Escape') {
        modal.classList.remove('abrir')
      }
    })
    
    })
  }

  function showMusic() {
    const musica = document.getElementById('current-song-title')
    const sourceUrl = decodeURIComponent(audio.currentSrc.split("/").pop().replace(".mp3", ""));
    musica.innerHTML = "Tocando "+ sourceUrl
  }

  setInterval(showMusic, 1000)