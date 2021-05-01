var skaterImg, skater, backgroundImg

function preload() {
skaterImg = loadAnimation("Images/skaterImg1.jpg","Images/skaterImg2.png", "Images/skaterImg3.png", "Images/skaterImg4.png","Images/skaterImg1.jpg","Images/skaterImg2.png", "Images/skaterImg3.png", "Images/skaterImg4.png" )
backgroundImg = loadImage("Images/background.jpg")
}

function setup(){
createCanvas(1200, 700)
background = createSprite(600,300,500,500 )
background.addImage(backgroundImg)
background.scale = 1.5
skater = createSprite(100, 450)
skater.addAnimation("skater", skaterImg)

}

function draw(){
background.velocityX= -3
if(background.x < 200 ){
background.x = 600

}







drawSprites()
}