class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
       pointB:{x:this.offsetX,y:this.offsetY}
       
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        }
        display(){
            var pointA= this.rope.bodyA.position;
            var pointB= this.rope.bodyB.position;

            stroke(0);
            strokeWeight(1)
            var off1X = pointA.x
            var off1Y = pointA.y
            
            var off2X = pointB.x+this.offsetX
            var off2Y = pointB.y+this.offsetY
            line (off1X, off1Y, off2X, off2Y);
        }
        
}