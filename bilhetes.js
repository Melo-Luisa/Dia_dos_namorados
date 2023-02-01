var bilhetes = ['Te Amo <3', 'Meu Amor Todo <3', 'Te Adoro <3', 'Meu Nerd <3', 'Você é o dono dos meu sorrisos diários <3',
'Você é o meu amor pá toda vida', 'CUPOM: Estou te devendo um beijo', 'Feliz dia dos namorados!', 'Meu engenheiro Favorito <3', 'DESAFIO: Tá me devendo um beijo',
'Meu dia melhora quando estou com você <3'];

var button = document.querySelector('#button'); 
var mostra = document.querySelector('#mostra');

function BilheteSorteado(){
    var sortear = bilhetes[Math.floor(Math.random()*bilhetes.length)];
    BilheteSorteado = sortear;
 
    //document.write(BilheteSorteado) //abre numa nova page
    //return sortear - retorna a função e n mostra na saida
    mostra.value = sortear //o valor é mostrado na saida
}
button.onclick = BilheteSorteado;
