class Rubber{
    constructor(x, y){
        var options={
            restitution: 0.3,
            friction: 5.0,
            density: 1.0
        }
        //properties of Box object
        this.body = Bodies.circle(x, y, 20, options);
        this.radius = 20;
        World.add(world, this.body);     
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        strokeWeight(2);
        stroke(0);
        ellipseMode(RADIUS);
        fill("darkBlue");
        ellipse(0, 0, this.radius);
        pop();
    }
}