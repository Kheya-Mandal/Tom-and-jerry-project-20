var garden,gardenImg;
var tom,tomImg,tomRun,tomStop;
var jerry,jerryImg,jerryTease,jerryStop;

function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    tomImg=loadImage("images/tomOne.png");
    jerryImg=loadImage("images/jerryOne.png");
    tomRun=loadAnimation("images/tomTwo.png","images/tomThree.png");
    jerryTease=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    tomStop=loadAnimation("images/tomFour.png");
    jerryStop=loadAnimation("images/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   garden=createSprite(500,400,1000,800);
   garden.addImage(gardenImg);

   tom=createSprite(750,600,20,20);
   tom.addImage(tomImg);
   tom.scale=0.1;

   jerry=createSprite(350,600,20,20);
   jerry.addImage(jerryImg);
   jerry.scale=0.1;



}

function draw() {

    background(255);
    
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocity.x=0;
        tom.addAnimation("Stand",tomStop);
        tom.changeAnimation("Stand");
        tom.x=390;
        jerry.addAnimation("Stand",jerryStop);
        jerry.changeAnimation("Stand");
        
     
        }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
tom.velocity.x=-5;
tom.addAnimation("tomRunning",tomRun);
tom.changeAnimation("tomRunning");

jerry.addAnimation("jerryTeasing",jerryTease);
jerry.changeAnimation("jerryTeasing");
}

}
