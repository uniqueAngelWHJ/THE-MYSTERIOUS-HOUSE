var canvasTop, canvasRight, canvasBottom, canvasLeft;
var pathWay, closePathDoor;;

var room1WallLeft,  room1WallTop, room1WallRight1, room1WallRight2 ;
var room2WallTop, room2WallRight;
var room3WallTop, room3WallRight;

var door1, closeDoor1;
var door2, closeDorr2;
var door3, closeDoor3;

var spy, spyImage;

var monsterForRoom1;
var monster1ForRoom2,monster2ForRoom2;
var monster1ForRoom3, moster2ForRoom3, monster3ForRoom3;
var monsterImg;

var playerLife = 3;
var playerScore = 0;

var monsterTouchSound;
var doorOpenSound;

function preload()
{
  spyImage = loadImage("images/spy1.jpg");
  monsterImg = loadImage("images/monster1.jpg");
  monsterTouchSound = loadSound("sounds/spytouchingmonsterSound.wav");
  doorOpenSound = loadSound("sounds/dooropenSound.wav");
}

function setup()
{
  createCanvas(1500,700);

  canvasTop = createSprite(750,5,1500,10);
  canvasTop.shapeColor = "red";

  canvasRight = createSprite(1495,350,10,700);
  canvasRight.shapeColor = "red";

  canvasBottom = createSprite(750,695,1500,10);
  canvasBottom.shapeColor = "red";

  canvasLeft = createSprite(5,350,10,700);
  canvasLeft.shapeColor = "red";

  spy = createSprite(50, 650, 30, 70);
  spy.addImage(spyImage);
  spy.scale = 0.02;

  pathWay = createSprite(80,600,140,5);
  pathWay.shapeColor = "green";

  room1WallLeft = createSprite(150,450,5,300);
  room1WallLeft.shapeColor = "green";

  room1WallTop = createSprite(300,300,300,5);
  room1WallTop.shapeColor = "green";
  
  room1WallRight1 = createSprite(450,360,5,120);
  room1WallRight1.shapeColor = "green";

  room1WallRight2 = createSprite(450,605,5,170);
  room1WallRight2.shapeColor = "green";
  
  door1 = createSprite(450,470,10,100);
  door1.shapeColor = "yellow";

  monsterForRoom1 = createSprite(190, 330, 20, 20);
  monsterForRoom1.addImage(monsterImg);
  monsterForRoom1.scale = 0.2;
  monsterForRoom1.velocityX = 2;
  monsterForRoom1.velocityY = 2;

  room2WallTop = createSprite(600,300,300,5);
  room2WallTop.shapeColor = "green";

  room2WallRight = createSprite(750,445,5,290);
  room2WallRight.shapeColor = "green";

  door2 = createSprite(750,640,10,100);
  door2.shapeColor = "yellow";

  monster1ForRoom2 = createSprite(500, 400, 20, 20);
  monster1ForRoom2.addImage(monsterImg);
  monster1ForRoom2.scale = 0.2;
  monster1ForRoom2.velocityX = 3;
  monster1ForRoom2.velocityY = -2;

  monster2ForRoom2 = createSprite(600, 550, 20, 20);
  monster2ForRoom2.addImage(monsterImg);
  monster2ForRoom2.scale = 0.2;
  monster2ForRoom2.velocityX = -2;
  monster2ForRoom2.velocityY = 2;

  room3WallTop = createSprite(900,300,300,5);
  room3WallTop.shapeColor = "green";

  room3WallRight = createSprite(1050,545,5,290);
  room3WallRight.shapeColor = "green";

  door3 = createSprite(1050,350,10,100);
  door3.shapeColor = "yellow";

  monster1ForRoom3 = createSprite(900, 400, 20, 20);
  monster1ForRoom3.addImage(monsterImg);
  monster1ForRoom3.scale = 0.2;
  monster1ForRoom3.velocityX = 3;
  monster1ForRoom3.velocityY = -2;

  monster2ForRoom3 = createSprite(900, 500, 20, 20);
  monster2ForRoom3.addImage(monsterImg);
  monster2ForRoom3.scale = 0.2;
  monster2ForRoom3.velocityX = -3;
  monster2ForRoom3.velocityY = -2;

  monster3ForRoom3 = createSprite(1000, 400, 20, 20);
  monster3ForRoom3.addImage(monsterImg);
  monster3ForRoom3.scale = 0.2;
  monster3ForRoom3.velocityX = 3;
  monster3ForRoom3.velocityY = 2;
}

function draw()
{
  background("WHITE");

  textSize(25);
  fill("red");
  text("Player Life: " + playerLife, 100, 70);
  text("Score: " + playerScore, 100, 100);

  if(playerLife !== 0)
  {
    if(keyDown("up"))
    {
      spy.y = spy.y - 3;
    }
  
    if(keyDown("down"))
    {
      spy.y = spy.y + 3;
    }
    if(keyDown("left"))
    {
      spy.x = spy.x - 3;
    }
  
    if(keyDown("right"))
    {
      spy.x = spy.x + 3;
    }
  }

  spy.bounceOff(canvasTop);
  spy.bounceOff(canvasRight);
  spy.bounceOff(canvasBottom);
  spy.bounceOff(canvasLeft);

  spy.bounceOff(pathWay);
  spy.bounceOff(room1WallLeft);
  spy.bounceOff(room1WallTop);
  spy.bounceOff(room1WallRight1);
  spy.bounceOff(room1WallRight2);
  spy.bounceOff(room2WallTop);
  spy.bounceOff(room2WallRight);
  spy.bounceOff(room3WallTop);
  spy.bounceOff(room3WallRight);

  monsterForRoom1.bounceOff(room1WallLeft);
  monsterForRoom1.bounceOff(room1WallTop);
  monsterForRoom1.bounceOff(room1WallRight1);
  monsterForRoom1.bounceOff(room1WallRight2);
  monsterForRoom1.bounceOff(canvasBottom);
  monsterForRoom1.bounceOff(door1);

  monster1ForRoom2.bounceOff(room2WallTop);
  monster1ForRoom2.bounceOff(room2WallRight);
  monster1ForRoom2.bounceOff(room1WallRight1);
  monster1ForRoom2.bounceOff(room1WallRight2);
  monster1ForRoom2.bounceOff(canvasBottom);
  monster1ForRoom2.bounceOff(door1);
  monster1ForRoom2.bounceOff(door2);

  monster2ForRoom2.bounceOff(room2WallTop);
  monster2ForRoom2.bounceOff(room2WallRight);
  monster2ForRoom2.bounceOff(room1WallRight1);
  monster2ForRoom2.bounceOff(room1WallRight2);
  monster2ForRoom2.bounceOff(canvasBottom);
  monster2ForRoom2.bounceOff(door1);
  monster2ForRoom2.bounceOff(door2);

  monster1ForRoom3.bounceOff(room3WallTop);
  monster1ForRoom3.bounceOff(room3WallRight);
  monster1ForRoom3.bounceOff(room2WallRight);
  monster1ForRoom3.bounceOff(canvasBottom);
  monster1ForRoom3.bounceOff(door2);
  monster1ForRoom3.bounceOff(door3);

  monster2ForRoom3.bounceOff(room3WallTop);
  monster2ForRoom3.bounceOff(room3WallRight);
  monster2ForRoom3.bounceOff(room2WallRight);
  monster2ForRoom3.bounceOff(canvasBottom);
  monster2ForRoom3.bounceOff(door2);
  monster2ForRoom3.bounceOff(door3);

  monster3ForRoom3.bounceOff(room3WallTop);
  monster3ForRoom3.bounceOff(room3WallRight);
  monster3ForRoom3.bounceOff(room2WallRight);
  monster3ForRoom3.bounceOff(canvasBottom);
  monster3ForRoom3.bounceOff(door2);
  monster3ForRoom3.bounceOff(door3);

  if(spy.x > 150) //Spy is inside room1 now
  {
    closePathDoor = createSprite(150, 645, 5, 95);
    closePathDoor.shapeColor = "brown";
    spy.bounceOff(closePathDoor);
    monsterForRoom1.bounceOff(closePathDoor);

    if(spy.isTouching(monsterForRoom1))
    {
      monsterTouchSound.play();
      playerLife = playerLife - 1;
      spy.x = 200;
      spy.y = 350;
    }
  }

  if(spy.isTouching(door1))
  {
    doorOpenSound.play();
    door1.destroy();
    playerScore = playerScore + 50;
  }

  if(spy.x > 450) //Spy is inside Room2 now
  {
    closeDoor1 = createSprite(450,470,10,100);
    closeDoor1.shapeColor = "yellow";
    spy.bounceOff(closeDoor1);
    monsterForRoom1.bounceOff(closeDoor1);
    monster1ForRoom2.bounceOff(closeDoor1);
    monster2ForRoom2.bounceOff(closeDoor1);

    if(spy.isTouching(monster1ForRoom2) || spy.isTouching(monster2ForRoom2))
    {
      monsterTouchSound.play();
      playerLife = playerLife - 1;
      spy.x = 500;
      spy.y = 350;
    }
  }

  if(spy.isTouching(door2))
  {
    doorOpenSound.play();
    door2.destroy();
    playerScore = playerScore + 100;
  }

  if(spy.x > 750)
  {
    closeDoor2 = createSprite(750,640,10,100);
    closeDoor2.shapeColor = "yellow";
    spy.bounceOff(closeDoor2);
    monster1ForRoom2.bounceOff(closeDoor2);
    monster2ForRoom2.bounceOff(closeDoor2);

    if(spy.isTouching(monster1ForRoom3) || spy.isTouching(monster2ForRoom3) || spy.isTouching(monster3ForRoom3))
    {
      monsterTouchSound.play();
      playerLife = playerLife - 1;
      spy.x = 800;
      spy.y = 350;
    }
  }

  if(spy.isTouching(door3))
  {
    doorOpenSound.play();
    door3.destroy();
    playerScore = playerScore + 150;
  }

  if(spy.x > 1050) //Spy is inside Room2 now
  {
    closeDoor3 = createSprite(1050,350,10,100);
    closeDoor3.shapeColor = "yellow";
    spy.bounceOff(closeDoor3);
    monster1ForRoom3.bounceOff(closeDoor3);
    monster2ForRoom3.bounceOff(closeDoor3);
    monster3ForRoom3.bounceOff(closeDoor3);
  }

  if(playerLife === 0)
  {
    textSize(80);
    fill("black");
    text("GAME OVER", 550, 200);
    monsterForRoom1.destroy();
    monster1ForRoom2.destroy();
    monster2ForRoom2.destroy();
    monster1ForRoom3.destroy();
    monster2ForRoom3.destroy();
    monster3ForRoom3.destroy();
  }

  if(spy.x > 1050)
  {
    textSize(70);
    fill("black");
    text("Well Done!!!", 550, 180);
    text("You Escaped", 530, 250);
    monsterForRoom1.destroy();
    monster1ForRoom2.destroy();
    monster2ForRoom2.destroy();
    monster1ForRoom3.destroy();
    monster2ForRoom3.destroy();
    monster3ForRoom3.destroy();
  }

  drawSprites();

}