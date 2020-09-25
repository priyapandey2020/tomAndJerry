var canvas;
var tom, tomImg1,tomImg2;
var jerry, jerryImg;

function preload() {
    
    tomImg1=loadAnimation("tom.png");
    tomImg2= loadAnimation("tomsleep.png");

    jerryImg1= loadAnimation("jerry jerry.png");

}

function setup(){
    canvas = createCanvas(1200,500);

    tom = createSprite(1000, 350);
    tom.addAnimation("tomRunning", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(150, 400);
    jerry.addAnimation("jerryTeasing", jerryImg1);
    jerry.scale = 0.4;

}

function draw() {

    background("purple");

    if(tom.x + jerry.x < (tom.width - jerry.width)/2)
    {
        tom.velocityX=0;
        tom.addAnimation("tomslept", tomImg2);
        tom.scale= 1;
        tom.changeAnimation("tomslept");

        textSize(25);
        fill(255);
        text("Tom and Jerry Collided", 100,260);
    }  

    drawSprites();
}


function keyPressed(){
    if(keyCode === 32){
        tom.velocityX = -5; 
    }
}