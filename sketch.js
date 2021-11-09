var quadrado;



function setup() {
  createCanvas(400,400);
  quadrado = createSprite(200,200,30,30);
  quadrado.shapeColor = "red";
}

function draw() 
{
  background(30);
  drawSprites();

  if (keyDown(RIGHT_ARROW)) {
    quadrado.x += 2;
}

if (keyDown(LEFT_ARROW)) {
  quadrado.x = quadrado.x -2;
}

if (keyDown(UP_ARROW)) {
  quadrado.y = quadrado.y -2;
}

if (keyDown(DOWN_ARROW)) {
  quadrado.y = quadrado.y +2;
}

}



