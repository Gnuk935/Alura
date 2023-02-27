const botao = document.querySelector('#botao');

let lista = [16];
lista[0] = "Carnaval"
lista[1] = "Troca de gênero"
lista[2] = "Festa junina"
lista[3] = "Halloween"
lista[4] = "Personagens"
lista[5] = "Algum famoso"
lista[6] = "So tem Brasil"
lista[7] = "Troca de gênero"
lista[8] = "E se nada ser certo?"
lista[9] = "Proibido mochila"
lista[10] = "Personagens famosos (cada aluno escolhe um personagem com sua inicial)"
lista[11] = "Um dia qualquer"
lista[12] = "Profissões (base de sorteio)"
lista[11] = "Cawtry"
lista[12] = "Filme"
lista[13] = "Super herói"
lista[14] = "Cabelo maluco"
lista[15] = "Profissão"
lista[16] = "Crianças"
 
botao.onclick = function(){
    let ale = Math.floor(Math.random() * lista.length)
    document.getElementById("f-frase").innerHTML=lista[ale];
}
//const autor = document.getElementById("a-frase").innerHTML="autor";
