let xCenario = 500
let yCenario = 400
let xPontos = 250
let yPontos = 22
let meusPontos = 0


function setup() {
  createCanvas(xCenario, yCenario);
  trilha.loop();
}

function draw() {
  background(estrada);
  atorNaTela()
  colisaoAtorCarro()
  movimentoAtor()
  carrosNaTela()
  movimentoCarros()
  retorno()
  retornoAtor()
  pontosNaTela()
}

function pontosNaTela(){
  fill(color(255,69,0))
  rect(xPontos - 12, yPontos - 15, 30, 20, 20);
  fill(0)
  text(meusPontos, xPontos, yPontos)
 if (yAtor < 1){
    meusPontos += 1
    somPonto.play();
  }
}




