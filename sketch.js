let x = 0;
let xSpeed = 6;
let textColor;
let img;
let myFont;
function preload() {
  img = loadImage('assets/NoPlan.png');
  myFont = loadFont('assets/Dude-Regular.otf');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  textFont(myFont);
  textColor = color(255, 20, 170);
}

function draw() {
  background(220);
  image(img, 0, 0, windowWidth, windowHeight);
  x += xSpeed;
  
  if (x > width || x < 0) {
    xSpeed *= -1;
    changeTextColor(); // Cambia el color del texto
  }
  
  textSize(65);
  fill(textColor);
  //frameRate(120);
  text('No tengo un plan de vida', x, height / 2);
  textSize(45);
  fill(21, 32, 1);
  text('No tengo un plan de vida', x, height / 3);
  textSize(35);
  fill(21, 32, 1);
  text('No tengo un plan de vida', x, height / 1.9);
  textSize(89);
  fill(random(233,100));
  text('No tengo un plan de vida', x, height / 1);
}

function changeTextColor() {
  // Genera valores aleatorios para los componentes de color RGB
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  
  textColor = color(r, g, b);
}



