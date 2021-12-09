var space,spaceImg;
var ship, shipImg;
var obstacle;
var meteor, meteorImg;
var meteorsGroup;
var gameState = "play";
var gameState = "end";

function preload(){

    spaceImg = loadImage("co341S.webp");
    shipImg = loadImage("ship.jpeg");
    meteorImg = loadImage("blackmeteorite.jpeg");
}

function setup(){
    createCanvas(600,600);

    space = createSprite(300,300,40,40);
    space.addImage("space",spaceImg);
    space.velocityY = 2;

    ship = createSprite(300,300);
    ship.addImage("ship",shipImg);
    ship.scale = 0.2;

    meteorsGroup = createGroup();

    ship.setCollider("circle",0,0,300);
}

function draw(){
    background("black");
    
    if(space.y>350){
        space.y = 300;
    }
    
    if(keyDown("right")){
        ship.x = ship.x+4;
    }

    if(keyDown("left")){
        ship.x = ship.x-4;
    }

    spawnMeteors();

    if(ship.isTouching(meteorsGroup)){
        ship.destroy();
        spawnMeteors = 0;
        textSize = 300;
        textSize = 30;
        fill("red");
        text("Game Over", 270, 300);
        gameState = end;
    }

    drawSprites();
}

function spawnMeteors(){
    if(frameCount % 40 === 0){
        meteor = createSprite(400,0);
        meteor.x = Math.round(random(50,600));
        meteor.addImage("obstacle",meteorImg);
        meteor.scale = 0.2;
        meteor.velocityY = 8;
        meteor.lifetime = 800;

        meteorsGroup.add(meteor);
        
        meteor.setCollider("circle",0,0,250);
    }
}