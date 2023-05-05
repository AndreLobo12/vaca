let estrada;
let ator;
let carro1;
let carro2;
let carro3;

let somPonto;
let somColisao;
let trilha;


function preload(){
  estrada = loadImage("Imagens/estrada.png")
  ator = loadImage("Imagens/ator-1.png")
  carro1 = loadImage("Imagens/carro-1.png")
  carro2 = loadImage("Imagens/carro-2.png")
  carro3 = loadImage("Imagens/carro-3.png")
  somPonto = loadSound("sons/pontos.wav")
  somColisao = loadSound("sons/colidiu.mp3")
  trilha = loadSound("sons/trilha.mp3")
  imagemCarros = [carro1,carro2,carro3,carro2,carro3,carro1]
}