let xAtor = 50
let yAtor = 365
let comprimentoAtor = 35
let alturaAtor = 35
let colisao = false;



function atorNaTela(){
  image(ator,xAtor,yAtor,comprimentoAtor,alturaAtor)
}


function movimentoAtor(){
if (keyIsDown(UP_ARROW)) {
    yAtor -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 5;
  }
}


function retornoAtor(){
  if (yAtor < 0){
    yAtor = 365
  }
  if (yAtor > 365){
    yAtor = 365
      if (yAtor < 1){
    meusPontos += 1
  }
  }
}

  function colisaoAtorCarro() {
    for (let i = 0; i < imagemCarros.length; i++){

    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 10);
  
  if (colisao) {
    yAtor = 365
    somColisao.play();
    meusPontos -= 1
  if(meusPontos < 0) {meusPontos = 0}
  }
    
}
}

