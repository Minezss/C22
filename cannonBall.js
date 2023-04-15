class CannonBall{
    constructor(x,y){
        var option = {
            isStatic: true
        }
        this.r = 30,
        this.body = Bodies.circle(x,y,this.r,option);
        World.add(world,this.body);
        this.image = loadImage("assets/cannonball.png");
    }
    display(){
        var pus = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pus.x,pus.y,this.r,this.r)
        pop();
    }
    shoot(){
        var newAngle = cannon.angle - 28
        newAngle = newAngle*(3.14/180);
        var velocity = p5.Vector.fromAngle(newAngle);
        //velocity.mult(0.5);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14)},{y:velocity.y*(180/3.14)});
    }
}