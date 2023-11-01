
let costas1;
let costas2;
let quieto;
let farra1;
let farra2;
let olhando;
let gameover;
let situacao="olhando";
let proximaALTeracao=0;
let giz;
let grito;
let estabaguncando=false


function preload(){
  costas1=loadImage("costas1.jpg");
  costas2=loadImage("costas2.jpg");
  quieto=loadImage ("quieto.jpg");
  farral=loadImage("farra1.jpg");
  farra2=loadImage("farra2.jpg")
  gameover=loadImage("olhando.jpg");
  olhando=loadImage("olhando.jpg");
  giz=loadSound("giz.mp3")
  grito=loadSound("grito.mp3")
  giz.setloop(true)
  grito=loadsound("grito.mp3");
  grito.setloop(true)
} 



function setup() {
  createCanvas(1024,576);
}
function troca(){
  proximaALTeracao=(millis)+random(2500,7000)
  if (situacao === "olhando"){
 situacao="nao olhando";
  giz.play();
  
   }
  
    else {
    situacao= "olhando"
  giz.pause()} 
} 

function draw() { 
  if(millis() > proximaALteracao){troca();}

 
  //image(costas1,0,0);
  //console.log(millis());
  if (situacao === "olhando"){
    image(olhando,0,0);}
  else { 
 let tempo = millis()%1000;
     image(costas1,0,0);
  if(tempo>500)
          {

   image(costas2,0,0);} 
 else{image (costas1,0,0) }}
  //origem 
  //image ..ondex vai colocar, onde y vai colocar;
  //tamanho x e tamanho y onde foi colocado;
  //apartir de x e apartir de y da origem;
  //yamanho x e tamanho y da origenal; 
    if(mouseIsPressed||touches.lemgth>0||keyIsPressed);{
      if(estabaguncando===false){grito.play()
      estabaguncando=true;                          
                                
    }
    
      
      
      
      if (situacao=== "olhando"){
      image(gameover,0,0);}
        
      let tempo=millis()%1200;
       if (tempo>400){image(farra1,50,420,100,160,180,100,450,720); }
       else { image(farra2,50,420,100,160,180,100,450,720); }
        
      tempo=millis()%1200;  
    if(tempo>400){image(farra1,150,420,100,160,180,100,450,720); }
    else{ image(farra2,150,420,100,160,180,100,450,720);}
        
     tempo=millis()%1200;
    if(tempo>400){image(farra1,250,420,100,160,180,100,450,720); }
    else{image(farra2,250,420,100,160,180,100,450,720); }   
    
      if(situacao==="olhando"){ 
        textSize(64);  
     text("gameover",width /2,height/2) 
        textAlign=(CENTER ,CENTER) 
        fill("red")
        giz.stop();
        grito.stop();
        
        noLoop();}
    } 
  else {
      grito.pause();
    estabaguncando=false;   
      
          
    
      
      
      
      
   image(quieto,50,420,100,160,180,100,450,720);  
   image(quieto,150,420,100,160,180,100,450,720);
   image(quieto,250,420,100,160,180,100,450,720);}
  // if(situacao === "olhando")
   
      
  
  
    
   
      
}