var player, playerImage, banana, bananaImage, bananaGroup, obstacle, obstacleImage, obstacleGroup, ground, scene, sceneImage

var score


function preload() {
  playerImage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  sceneImage = loadImage("jungle.jpg")

}

function setup() {

  createCanvas(400, 400);
  scene = createSprite(200, 200, 400, 400);
  scene.addImage("scene", sceneImage);
scene.velocityX=-4;
  scene.x = scene.width / 2;
  player = createSprite(100, 370, 10, 10);
  player.addAnimation("running", playerImage);
  player.scale = 0.1;
  ground = createSprite(200, 385, 400, 10);
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  score = 0;
  
  


}

function draw() {

  if(scene.x<0)

  {
    scene.x=scene.width/2;
  }
  
  ground.visible = false;

  if (player.isTouching(bananaGroup)) {
    score = score + 2;
    bananaGroup.destroyEach();
  }
  if (player.isTouching(obstacleGroup)) {
    player.scale = 0.1;
    obstacleGroup.destroyEach();
    score = 0;
  }
  if (keyDown("space") && player.y >= 349.3) {
    player.velocityY = -15;
  }
  player.velocityY = player.velocityY + 0.8;
  player.collide(ground);




  console.log(player.y);
  switch (score) {
    case 10:
      player.scale = 0.12;
      break;
    case 20:
      player.scale = 0.14;
      break;
    case 30:
      player.scale = 0.16;
      break;
    case 40:
      player.scale = 0.18;
      break;
    case 50:
      player.scale = 0.2;
      break;
    default:
      break;
  }

  spawnBanana();
  spawnStone();
  drawSprites();
  
    fill("white");
  text("score: " + score, 325, 37.5)
}

function spawnBanana() {
  if (frameCount % 80 == 0) {
    banana = createSprite(410, random(200, 325), 5, 5)
    banana.addImage("bananie", bananaImage);
    banana.velocityX = -5;
    banana.scale = 0.05
    bananaGroup.add(banana);
  }

}

function spawnStone() {
  if (frameCount % 100 == 0) {
    obstacle = createSprite(410, 370, 5, 5);
    obstacle.addImage("stone", obstacleImage);
    obstacle.velocityX = -5;
    obstacle.scale = 0.1;
    obstacleGroup.add(obstacle);
  }
}