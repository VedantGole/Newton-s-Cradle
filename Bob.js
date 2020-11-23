class Bob {
    constructor(x, y, radius){
        var options = {restitution: 0.8, friction:0.5, density:0.2, isStatic : false}
        
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        
	    World.add(world, this.body);
       
        
   }
   display(){
   var pos = this.body.position;
    
    push();
    translate(pos.x, pos.y);
    fill("red");
    ellipseMode(RADIUS);
    ellipse(0, 0, this.radius, this.radius);
    pop();
   }
}