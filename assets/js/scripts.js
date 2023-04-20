const audio = document.getElementById("myAudio");
const playPauseButton = document.getElementById('play-pause');


function playMusic() {
    const audio = document.getElementById("myAudio");
    const janelaAtiva = document.querySelector('.janela-modal.ativo')
    const modalTitle = janelaAtiva.querySelector('.modal').querySelector('h2').textContent;
    const icon = janelaAtiva.querySelector('.modal').querySelector('i')
    const musica = document.getElementById('current-song-title')

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
      addInfo()
    }
  }

  function addInfo() {
    const inativo = document.querySelector('.music-info.ativo')
 
    if(inativo !== null) {
      inativo.classList.remove('ativo')
      inativo.classList.add('inativo')
    } else {

    }
    

    const audio = document.getElementById("myAudio");
    const janelaAtiva = document.querySelector('.janela-modal.ativo')
    var modal = janelaAtiva.querySelector('.modal')
    var title = modal.querySelector('h2').textContent;
    var autor = modal.querySelector('p').textContent;
    var img = modal.querySelector('img').currentSrc

    var musicinfo = document.createElement("div")
    musicinfo.classList.add("music-info")
    var info = document.createElement("div")
    info.classList.add("info")

    info.innerHTML = `
    <div class="music-content">
      <img class="img-ico" src="${img}">
      <div class="text">
          <span class="music-title">${title}</span>
          <span class="music-autor">${autor}</span>
      </div>
    </div>
    <div>
        <button onclick="playpause()" class="play-button"><i class='fa-solid fa-pause fa-2x'></i></button>
        <span class="progress-bar"></span>
    </div>

    <div>
        <input type="range" class="volume-slider" min="0" max="1" step="0.01" value="1">
    </div>`

    musicinfo.appendChild(info)
    document.body.appendChild(musicinfo)

    musicinfo.classList.add('ativo')

    const a = document.querySelector('.music-info.ativo')
    var volumeSlider = a.querySelector('.volume-slider');

    volumeSlider.onchange = function() {
      updateVolume();
    };

    function updateVolume() {
      audio.volume = volumeSlider.value;
    }
  }


  function playpause() {
    const audio = document.getElementById("myAudio");
    const musicinfo = document.querySelector('.music-info.ativo')
    var icone = musicinfo.querySelector('.play-button').querySelector('i')

    if (audio.paused) {
      audio.play();
      icone.classList.remove("fa-play")
      icone.classList.add("fa-pause")
    } else {
      audio.pause();
      icone.classList.remove("fa-pause")
      icone.classList.add("fa-play")
    }
    
  }

  var musicDivs = document.querySelectorAll(".music");

  musicDivs.forEach(function(div) {
    div.addEventListener("click", function() {
      // Captura as informações da div
      var info = this.innerHTML;
      
      // Cria um elemento de modal
      var janelamodal = document.createElement("div");
      janelamodal.classList.add("janela-modal");
      var modal = document.createElement("div")
      modal.classList.add("modal")

      // Preenche o conteúdo do modal com as informações da div

      modal.innerHTML =  info + "<button class='fechar' id='fechar'>X</button>" + "<button onclick='playMusic()'class='play-pause'id='play-pause'><i class='fa-solid fa-play fa-2x'></i></button>" + "<audio id='myAudio'src= ''></audio>";
  
      // Adiciona o modal ao DOM e exibe-o na tela
      janelamodal.appendChild(modal)

      document.body.appendChild(janelamodal)

      janelamodal.classList.add("ativo")
      
      modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal') {
          janelamodal.classList.remove("ativo")
          janelamodal.classList.add("inativo")
        }
        window.addEventListener('keydown', function (event) {
          const modal = document.getElementById('janela-modal')
        if (event.key === 'Escape') {
          janelamodal.classList.remove("ativo")
          janelamodal.classList.add("inativo")
        }
      })
    })
    });
  });
