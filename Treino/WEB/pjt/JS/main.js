const botao = document.querySelector('#botao');

let lista = [3];
lista[0] = "O que sinto hoje, veio de você e será eternamente por você!"
lista[1] = "A gente briga, a gente se ama, a gente vai e a gente volta. A gente é da gente e da gente ninguém tira."
lista[2] = "O verdadeiro amor nunca se desgasta. Quanto mais se dá mais se tem."
lista[3] = "Duvida da luz dos astros,"+" De que o sol tenha calor,"+" Duvida até da verdade,"+" Mas confia em meu amor."

botao.onclick = function(){
    let ale = Math.floor(Math.random() * 4)
    document.getElementById("f-frase").innerHTML=lista[ale];
}
//const autor = document.getElementById("a-frase").innerHTML="autor";
