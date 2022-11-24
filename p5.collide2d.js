//variáveis utilizadas
let xBolinha = 300
let yBolinha = 200
let dDiametro = 15
let raio = dDiametro/2;

//variáveis velocidade bolinha
let velocidadeXBolinha = 5
let velocidadeYBolinha = 5

let colidiu = false;

//Placar do jogo
let meusPontos = 0
let pontosDoOponente = 0

//variaveis da raquete
let xRaquete = 5
let yRaquete = 150

//outra raquete
let xOponente = 585
let yOponente = 150
let velocidadeYOponente; 

// Variáveis de ambas as raquetes
let raqueteComprimento = 10
let aAltura = 90
// Sons do jogo
let raquetada
//let ponto
//let trilha
function preload(){
trilha = loadSound("trilha.mp3")
 ponto = loadSound("ponto.mp3")
raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background('green');
  mostraBolinha();
  movimentaBolinha()
  verificaImpacto()
  mostraRaquete(xRaquete,yRaquete)
  movimentaMinhaRaquete()
  verificaColisao()
  colisaoMinhaRaqueteBiblioteca()
  mostraRaquete(xOponente,yOponente)
  movimentaRaqueteDoOponente()
colisaoRaqueteOponenteBiblioteca(xOponente,yOponente)
  incluiPlacar()
  marcaPonto()
  }
function mostraBolinha(){
   circle(xBolinha,yBolinha,dDiametro)
}
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificaImpacto(){
  if(xBolinha +raio >600 || xBolinha  -raio <0){
     velocidadeXBolinha *= -1
     } 
  if(yBolinha +raio>400 || yBolinha -raio <0){
       velocidadeYBolinha*= -1
     }
  
}
function mostraRaquete(x,y){
  let c = color(255,204,0)
  fill(c)
 rect(x,y,raqueteComprimento, aAltura)

  function mostraRaqueteOponente(x,y){
    
  }
  
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}
function verificaColisao(){
  if(xBolinha - raio <xRaquete+ raqueteComprimento && yBolinha - raio <yRaquete +  aAltura && yBolinha + raio > yRaquete)
    velocidadeXBolinha *= -1
 
}
function  colisaoMinhaRaqueteBiblioteca(){
  colidiu = collideRectCircle(xRaquete,yRaquete,raqueteComprimento,aAltura,xBolinha,yBolinha,raio)
  if(colidiu){
     velocidadeXBolinha *= -1
      raquetada.play()

  }
}
function  colisaoRaqueteOponenteBiblioteca(x, y){
  colidiu = collideRectCircle(x, y,raqueteComprimento,aAltura,xBolinha,yBolinha,raio)
  if(colidiu){
     velocidadeXBolinha *= -1
     raquetada.play()
  }
}
//Raquete do oponente movimentada pelo PC
/* 
function  movimentaRaqueteDoOponente(){
  velocidadeYOponente = yBolinha - yOponente - raqueteComprimento /2 - 30 
  yOponente += velocidadeYOponente
}*/
//Raquete do oponente controlada pelos botões
function  movimentaRaqueteDoOponente(){
  if (keyIsDown(87)) {
        yOponente -= 10;
    }
    if (keyIsDown(83)) {
         yOponente  += 10;
    }
}
function incluiPlacar(x,y){
  fill(255)
  text(meusPontos , 278, 26)
  text( pontosDoOponente , 321,26)
}
 function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play()
  }
   if (xBolinha <10){
     pontosDoOponente += 1
     ponto.play()
   }
}
function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(115, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}
  
