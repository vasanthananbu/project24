class Stone{
	constructor(x, y, width, height){
		var options={
			restitution: 0.8,
			friction: 0.9,
			density: 1.2,
		}
		//properties of Box object
		this.body = Bodies.rectangle(x, y, width, height, options);
		this.width = width;
		this.height = height;
		World.add(world, this.body);     

	}
	//functions of Box Object

	display(){
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x,pos.y); 
		rotate(angle);
		strokeWeight(2);
		stroke("black");
		rectMode(CENTER);
		fill(0);
		rect(0, 0, this.width, this.height);
		pop();
	}
}
