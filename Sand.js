class Sand{
    constructor(x, y){
        var options={
            restitution: 1.3,
            friction: 5.0,
            density: 1.0
        }
        //properties of Box object
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        World.add(world, this.body);     
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        strokeWeight(1);
        stroke(0);
        ellipseMode(RADIUS);
        fill("red");
        ellipse(0, 0, this.radius);
        pop();
    }
}