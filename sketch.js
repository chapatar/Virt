var dog, dogImage, happyDog, database, foodS, foodStock;

function preload()
{
  dogImage = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  var foodStock = database.ref('Food')
  foodStock.on("value", readStock)
  dog = createSprite(250,300);
  dog.addImage(dogImage);
}


function draw() {  
  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog)
  }

  drawSprites();
  textSize(20)
  fill("red")
  stroke(5)
  text("Press up arrow to give food to dog")
}

function readStock(data){
  foodS = food.val()
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


