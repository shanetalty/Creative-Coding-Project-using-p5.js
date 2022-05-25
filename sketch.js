let bg;
let car1;
let car2;
let yL = 0;
let yR = 0;
let leftRoad = 241.75;
let rightRoad = 757.5
let carX1 = 300;
let carY1 = 450;
let carX2 = 815.75;
let carY2 = 450;
let obstacleX1 =  615;
let obstacleY1 = 0;
let obstacleX2 = 650;
let obstacleY2 = 0;
let obstacleX3 = 700;
let obstacleY3 = 0;
let obstacleX4 = 750;
let obstacleY4 = 0;
let obstacleX5 = 255;
let obstacleY5 = 0;


function setup(){
  bg = loadImage('background.png');
  car1 = loadImage('car1.png');
  car2 = loadImage('car2.png');
  obstacle1 = loadImage('america.png');
  obstacle2 = loadImage('money.png');
  obstacle3 = loadImage('paperwork.png');
  obstacle4 = loadImage('storage.png');
  createCanvas(1000, 500);
  textSize(9);
}

function draw(){{}
  imageMode(CORNER);
  background(bg);

  //road left
  fill(80);
  noStroke();
  rectMode(CENTER);
  rect(leftRoad, windowHeight/2, 300, windowHeight);

  //road right
  fill(80);
  noStroke();
  rectMode(CENTER);
  rect(rightRoad, windowHeight/2, 300, windowHeight);

  //left road markings
  fill(230);
  rect(leftRoad, yL, 10, 40);
  rect(leftRoad, yL + 100, 10, 40);
  rect(leftRoad, yL + 200, 10, 40);
  rect(leftRoad, yL + 300, 10, 40);
  rect(leftRoad, yL + 400, 10, 40);
  rect(leftRoad, yL + 500, 10, 40);

  yL = yL + 2;

  if (yL + 500 > 600){
    yL = 0;
    rect(leftRoad, yL, 10, 40);
    rect(leftRoad, yL + 100, 10, 40);
    rect(leftRoad, yL + 200, 10, 40);
    rect(leftRoad, yL + 300, 10, 40);
    rect(leftRoad, yL + 400, 10, 40);
    rect(leftRoad, yL + 500, 10, 40);
  }

  //right road markings
  fill(230);
  rect(rightRoad, yR, 10, 40);
  rect(rightRoad, yR + 100, 10, 40);
  rect(rightRoad, yR + 200, 10, 40);
  rect(rightRoad, yR + 300, 10, 40);
  rect(rightRoad, yR + 400, 10, 40);
  rect(rightRoad, yR + 500, 10, 40);

  yR = yR + 1;

  if (yR + 500 > 600){
    yR = 0;
    rect(241.75, yR, 10, 40);
    rect(241.75, yR + 100, 10, 40);
    rect(241.75, yR + 200, 10, 40);
    rect(241.75, yR + 300, 10, 40);
    rect(241.75, yR + 400, 10, 40);
    rect(241.75, yR + 500, 10, 40);
  }

  //car1
  imageMode(CENTER);
  image(car1, carX1, carY1, 150, 75); //original dimensions = 1000x500

  //car2
  image(car2, carX2, carY2, 150, 75);

  //obstacles

  //obstacle 1
  image(obstacle1, obstacleX1, obstacleY1, 60, 40);

  obstacleY1 = obstacleY1 + 3.9;

  if (obstacleY1 > 500){
    obstacleY1 = 0;
    image(obstacle1, obstacleX1, obstacleY1, 60, 40);
    obstacleX1 = random(607, 907.5);
  }

  //obstacle 2
  image(obstacle2, obstacleX2, obstacleY2, 40, 40);

  obstacleY2 = obstacleY2 + 3.8;

  if (obstacleY2 > 500){
    obstacleY2 = 0;
    image(obstacle2, obstacleX2, obstacleY2, 40, 40);
    obstacleX2 = random(607, 907.5);
  }

  //obstacle3
  image(obstacle3, obstacleX3, obstacleY3, 40, 40);

  obstacleY3 = obstacleY3 + 3.6;

  if (obstacleY3 > 500){
    obstacleY3 = 0;
    image(obstacle3, obstacleX3, obstacleY3, 40, 40);
    obstacleX3 = random(607, 907.5);
  }

  //obstacle4
  image(obstacle4, obstacleX4, obstacleY4, 80, 40);

  obstacleY4 = obstacleY4 + 4;

  if (obstacleY4 > 500){
    obstacleY4 = 0;
    image(obstacle4, obstacleX4, obstacleY4, 80, 40);
    obstacleX4 = random(607, 907.5);
  }

  //obstacle5 (storage2)
  image(obstacle4, obstacleX5, obstacleY5, 80, 40);

  obstacleY5 = obstacleY5+ 4;

  if (obstacleY5 > 500){
    obstacleY5 = 0;
    image(obstacle4, obstacleX5, obstacleY5, 80, 40);
    obstacleX5 = random(91.75, 391.75);
  }


  //car1 movement
   carX1 = constrain(carX1, 91.75, 391.75);
   carY1 = constrain(carY1, 20, 480);
  //W
  if (keyIsDown (87)) {
    carY1 = carY1 - 5;
  }

  //S
  if (keyIsDown (83)) {
    carY1 = carY1 + 5;
  }

  //A
  if (keyIsDown (65)) {
    carX1 = carX1 - 5;
  }

  //D
  if (keyIsDown (68)) {
    carX1 = carX1 + 5;
  }

  if (carX1 < 91.75 && carX1 > 391.75) {
    carX1 = carX1 + 0;
  }

  //car 2 movement
  carX2 = constrain(carX2, 607.5, 907.5);
  carY2 = constrain(carY2, 350, 480);


  if (keyIsDown (UP_ARROW)) {
    carY2 = carY2 - 1;
  }

  if (keyIsDown (DOWN_ARROW)) {
    carY2 = carY2 + 1;
  }

  if (keyIsDown (LEFT_ARROW)) {
    carX2 = carX2 - 1;
  }

  //D
  if (keyIsDown (RIGHT_ARROW)) {
    carX2 = carX2 + 1;
  }

  if (carX1 < 91.75 && carX1 > 391.75) {
    carX2 = carX2 + 1;
  }

//collision with obstacles

  if (carX2 > obstacleX1 - 30 && carX2 < obstacleX1 + 30 && carY2 > obstacleY1 - 20 && carY2 < obstacleY1 + 20){
    carX2 = 815.75;
    carY2 = 450;
  }

  if (carX2 > obstacleX2 - 20 && carX2 < obstacleX2 + 20 && carY2 > obstacleY2 - 20 && carY2 < obstacleY2 +20){
    carX2 = 815.75;
    carY2 = 450;
  }
  if (carX2 > obstacleX3 - 20 && carX2 < obstacleX3 + 20 && carY2 > obstacleY3 - 20 && carY2 < obstacleY3 + 20){
    carX2 = 815.75;
    carY2 = 450;
  }
  if (carX2 > obstacleX4 - 40 && carX2 < obstacleX4 + 40 && carY2 > obstacleY4 - 20 && carY2 < obstacleY4 + 20){
    carX2 = 815.75;
    carY2 = 450;
  }
  if (carX1 > obstacleX5 - 40 && carX1 < obstacleX5 +40 && carY1 > obstacleY5 - 20 && carY1 < obstacleY5 + 20){
    carX1 = 300;
    carY1 = 450;
  }
    text('Win the Race to End the Pandemic!', 427, 250);
}
