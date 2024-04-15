
let stars = document.getElementById('stars')
let main = document.querySelector('.main')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let rivers = document.getElementById('rivers')
let boat = document.getElementById('boat')
let nouvil = document.querySelector('.nouvil')
window.onscroll = function (){
    let value = scrollY; 
    stars.style.left = value +'px';
    moon.style.top = value * 3 +'px';
    mountains3.style.top = value * 2 +'px';
    mountains4.style.top = value * 1.5 +'px';
    rivers.style.top = value +'px';
    boat.style.top = value +'px';
    boat.style.left = value * 3 +'px';
    nouvil.style.fontSize = value +'px';
    if(scrollY >= 130 ){
        nouvil.style.fontSize = 130 +'px';
        nouvil.style.position ='fixed';
    }
    if(scrollY >= 530){
        nouvil.style.display ='none';
        
    }else{
        nouvil.style.display ='block';
    }
    if(scrollY >= 206){
        document.querySelector('.main').style.background = 'linear-gradient(#0b6e9b, #7d00f1)'
    }else {
        document.querySelector('.main').style.background = 'linear-gradient(#200016, #7d00f1)'
    }
}