const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach( e =>{
    e.onclick = function (){
        let idAudio = `#som_${this.classList[1]}`;
        let element = document.querySelector(idAudio);
        element == null ? console.log("Not found!!"): element.localName === "audio" ? element.play(): console.log("Not Audio")
    }
    e.onkeydown = function (event){
        if(event.code === 'Enter' || event.code === 'Space'){
            e.classList.add('ativa');
        }
    }
    e.onkeyup = function (){
        e.classList.remove('ativa');
    }
})
