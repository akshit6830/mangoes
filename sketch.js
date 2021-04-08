const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ; 
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var bg , tree , boy; 
var move_y = 0 ; 
var start = false ; 
var pressed = false ;
var score = 0 ;

if (localStorage.getItem('high_score') == null) {
  var high_score = 0 ;
} else {
  high_score = JSON.parse(localStorage.getItem('high_score'));
}

function preload()
{
	bg = loadImage('assets/bg.png');
  tree = loadImage('assets/tree.png');
  boy = loadImage('assets/boy.png');
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	stone = new Stone(125,560);

	fruit1 = new Mango(370,360);
	fruit2 = new Mango(495,395);
	fruit3 = new Mango(440,322);
	fruit4 = new Mango(520,300);
	fruit5 = new Mango(425,415);
	fruit6 = new Mango(615,267);
	fruit7 = new Mango(620,340);
	fruit8 = new Mango(635,415);
	fruit9 = new Mango(708,363);
	fruit10 = new Mango(752,418);


  sling = new SlingShot(stone.body , {x : 125 , y : 560});
  
  ground = new Ground(600,height,1200,20);

	Engine.run(engine);

  // localStorage.clear();
  


}

function draw() {
  rectMode(CENTER);
  background(bg);

  detectCollision(stone , fruit1);
  detectCollision(stone , fruit2);
  detectCollision(stone , fruit3);
  detectCollision(stone , fruit4);
  detectCollision(stone , fruit5);
  detectCollision(stone , fruit6);
  detectCollision(stone , fruit7);
  detectCollision(stone , fruit8);
  detectCollision(stone , fruit9);
  detectCollision(stone , fruit10);

  image(boy , 80,500 , 200 , 250);
  image(tree , 300 , 200 , 500 , 500);

  // console.log(mouseX , mouseY);

  ground.display();
  sling.display();

  fruit1.display();
  fruit2.display();
  fruit3.display();
  fruit4.display();
  fruit5.display();
  fruit6.display();
  fruit7.display();
  fruit8.display();
  fruit9.display();
  fruit10.display();

  stone.display();
  textSize(30);
  text('Score : ' + score , 10 , 30);
  text('High Score : ' + high_score , 10 , 70);
  textSize(15);
  text('**Stores the High score using local sotrage in javascript' , 10 , 100);
  if (score >= 100 && 700/2-move_y >= 30 ){
    move_y += 2 ; 
    textSize(50);
    fill('blue');
    text('You Won !' , 800/2 - 7*10, 700/3-move_y);
  }
  if (start){
    textSize(30);
    fill('black');
    text('Space to Restart !' , 10 , 150);
  }
}

function mouseReleased(){
  start = true ; 
  sling.fly();
}
function mousePressed() {
  // console.log(pressed);
}
function mouseDragged(){
  // pos = stone.body.position ; 
  Matter.Body.setPosition(stone.body , {x : mouseX , y : mouseY});
}

function detectCollision(a  ,b ){
  pos1 = a.body.position ; 
  pos2 = b.body.position ;

  var distance = dist(pos2.x , pos2.y , pos1.x , pos1.y);
  if (distance <= b.r + a.r && b.done != true){
    score += Math.floor( Math.random() * 51 );
    b.boom_score(pos2.x , pos2.y , score);
    b.done = true;
    Matter.Body.setStatic(b.body , false);
  }
}

function keyPressed(){
  if (keyCode === 32){

    if (score > high_score && score != null){
      localStorage.setItem('high_score', JSON.stringify(score));
    }
    high_score = JSON.parse(localStorage.getItem('high_score'));

    start = false ; 
    score = 0  ;
    Matter.Body.setPosition(stone.body , {x : 125 ,  y: 560});
    sling.attach(stone.body);

    fruit1.remove();
    fruit2.remove();
    fruit3.remove();
    fruit4.remove();
    fruit5.remove();
    fruit6.remove();
    fruit7.remove();
    fruit8.remove();
    fruit9.remove();
    fruit10.remove();


    fruit1 = new Mango(370,360);
    fruit2 = new Mango(495,395);
    fruit3 = new Mango(440,322);
    fruit4 = new Mango(520,300);
    fruit5 = new Mango(425,415);
    fruit6 = new Mango(615,267);
    fruit7 = new Mango(620,340);
    fruit8 = new Mango(635,415);
    fruit9 = new Mango(708,363);
    fruit10 = new Mango(752,418);
  }
}