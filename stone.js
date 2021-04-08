class Stone extends BaseClass {
    constructor(x,y){
      super(x,y,50,50,false,0.0,1.2);
      this.image = loadImage("assets/stone.png");
    }
  
    display() {
      // this.body.position.x = mouseX;
      // this.body.position.y = mouseY;
      super.display();
    }
  }
  