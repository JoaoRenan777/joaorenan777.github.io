function Feedback(){
    var Nome= document.getElementById('Nome').value;
    var Feed= document.getElementById('Feed').value;
    if(Nome && Feed){
        localStorage.setItem(Nome, Feed)
        alert('Seu feedback foi salvo');
        window.location.pathname = '/index.html'
    }
    else if(Nome){
        alert('Por favor de seu feedback')
    }
    else if(Feed){
        alert('Por favor coloque seu nome')
    }
    else{
        alert('Por favor preencha os dois espaços')
    }
}
