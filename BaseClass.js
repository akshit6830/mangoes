class BaseClass{
    constructor(x, y, width, height, isStatic,res=0.8 , density,angle) {
        var options = {
            'restitution':res,
            'friction':1.0,
            'density':density,
            'isStatic' : isStatic
        }
        // this.body = Bodies.rectangle(x, y, width, height, options);
        this.body = Matter.Bodies.circle(x, y, width/2, options);
        this.r = width/2 ; 
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        // image(this.image, 0, 0, this.width, this.height);
        image(this.image, 0, 0, this.width, this.width);
        pop();
      }
}