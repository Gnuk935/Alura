const botao = document.querySelector('#botao');


let lista = [3];
lista[0] = "Frase 00"
lista[1] = "Frase 01"
lista[2] = "Frase 02"
lista[3] = "Frase 03"

botao.onclick = function(){
    let ale = Math.floor(Math.random() * 4)
    document.getElementById("f-frase").innerHTML=lista[ale];
}
//const autor = document.getElementById("a-frase").innerHTML="autor";
