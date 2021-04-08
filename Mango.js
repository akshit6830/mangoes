class Mango extends BaseClass {
    constructor(x,y) {
      super(x,y,50,50,true,0,1);
      this.image = loadImage("assets/mango.png");
      this.done = false;
      this.score_x , this.score_y = -10 , -10 ; 
      this.score_y_move = 0 ; 
      this.text_size = 10; 
      this.bonus = '+ 0' ; 
    }
  
    display() {
      // this.body.position.x = mouseX;
      // this.body.position.y = mouseY;
      if (this.done && this.score_y_move >= -100 ) { 
        this.score_y_move -= 1.5 ;
        this.text_size += 0.3;
        fill(255,0,0);
        textSize(this.text_size);
        text('+ ' + this.bonus , this.score_x,this.score_y + this.score_y_move);
      }
      super.display();
    }
    boom_score(x,y,bonus){
      this.score_x = x ; 
      this.score_y = y;
      this.bonus = bonus ;
    }
    remove(){
      World.remove(world , this.body);
    }
  }
  