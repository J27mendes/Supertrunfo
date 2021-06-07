var cartaPaulo = {
    nome: "Chun Li",
    imagem:"http://gamehall.com.br/wp-content/uploads/2010/07/tpb_chun_li_legends_cover_by_omar_dogan-1-e1279925940855.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}
var cartaRafa = {
    nome: "Mai Shiranui",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QiIFJcPZID5-Zg6fb1rFqvd5v1MnhdCLyZ8eG9kv7Q9edRORJuXK4wt5a73POfK6tas&usqp=CAU",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}
var cartaGui = {
    nome: "Morrigan Aensland",
    imagem: "http://2.bp.blogspot.com/_2SfYuQFlY_g/SlZ-A-4u8AI/AAAAAAAAACg/oeMHGViRxq0/s320/Morrigan.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}
var cartaLol = {
    nome: "Caitlyn",
    imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}
var cartaNaruto = {
    nome: "Naruto",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}
var cartaHarry = {
    nome: "Harry Potter",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}
var cartaBatman = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}
var cartaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}
var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaLol, cartaNaruto, cartaHarry, cartaBatman, cartaMarvel]
//            0           1           2          3         4            5            6           7     
var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade  de cartas do jogo: " + cartas.length

divQuantidadeCartas.innerHTML = html
}
//Atualiza a quantidade de cartas no jogo

function atualizaPlacar(){
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"    
    divPlacar.innerHTML = html
  } 

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)
  

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}


function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<div id="resultado">Venceu</div>' 
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<div id="resultado">Perdeu</div>'
        pontosMaquina++
    } else {
        htmlResultado = '<div id="resultado">Empatou</div>'
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
    document.getElementById('rec').disabled = false
    
  resultadoFinal()
  
  
    function resultadoFinal() {
      var fim = document.getElementById('resultadoFinal')
      if (cartas.length == 0 && pontosJogador > pontosMaquina){
      fim.innerHTML = '<div id="resultadoFinal">Vitória</div>'
    } else if  (cartas.length == 0 && pontosJogador < pontosMaquina){
      fim.innerHTML = '<div id="resultadoFinal">Derrota</div>'
    } else if (cartas.length == 0 && pontosJogador == pontosMaquina){
      fim.innerHTML = '<div id="resultadoFinal">Empate</div>'
    } else {
    document.getElementById('btnProximaRodada').disabled = false
        }
  }
        
    atualizaQuantidadeDeCartas()
    atualizaPlacar()
    exibeCartaMaquina()
    
  
  } 

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
var divCartas = document.getElementById('cartas')
divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
document.getElementById('btnSortear').disabled  = false
document.getElementById('btnJogar').disabled = true
document.getElementById('btnProximaRodada').disabled = true

var divResultado = document.getElementById('resultado')
divResultado.innerHTML =  ""
}

recomeco()

function recomeco() {
  pontosJogador = 0
  pontosMaquina = 0
  atualizaPlacar()
  atualizaQuantidadeDeCartas(cartas.length)
      
   
 }

    



/*Crie uma carta super trunfo invencível;
Altere as rodadas para a máquina jogar escolhendo um atributo;
Altere para que o vencedor da rodada, ganhe a carta do perdedor.*/