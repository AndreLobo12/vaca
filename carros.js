let xCarros = [450,450,450,450,450,450]
let yCarros = [45,100,150,215,265,315]
let comprimentoCarros = 35
let alturaCarros = 35
let velocidadeCarros = [2,7,4,3,6,5]


function movimentoCarros(){
  for (let i = 0; i < imagemCarros.length; i++){
xCarros[i] -= velocidadeCarros[i]
  }
}
function carrosNaTela(){
  for (let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarros,alturaCarros)

}}
function retorno(){
  for (let i =0; i < imagemCarros.length; i++){
  if (xCarros[i] < -50){
    xCarros[i] = xCenario
  }
  }
  }