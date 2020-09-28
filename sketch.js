var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    together= loadAnimation("images/together.png");
    jerryImg1=loadAnimation("images/jerryOne.png")
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(900, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    {
        tom.velocityX=0;
        tom.addAnimation("Together", together);
        tom.scale=0.5;
        tom.changeAnimation("Together");

        jerry.remove();
    }  

    drawSprites();
}


function keyPressed(){
    if(keyCode === 32){

        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
    }
}