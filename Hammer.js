class Hammer{
    constructor(x, y){
        var options={
            restitution: 0.5,
            friction: 1.0,
            density: 2.0
        }
        //properties of Box object
        this.body = Bodies.rectangle(x, y, 70, 30, options);
        this.width = 80;
        this.height = 30;
        World.add(world, this.body);     

    }
    //functions of Box Object

    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        strokeWeight(3);
        stroke("white");
        rectMode(CENTER);
        fill("gold");
        rect(0, 0, this.width, this.height);
        pop();
    }
}