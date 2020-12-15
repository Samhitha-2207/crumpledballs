class Paper {
    constructor(x, y, radius){
    var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 0.2
    }
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.body=Bodies.circle(this.x, this.y, this.radius, options)
    World.add(world, this.body);
}
    display() {
        var paperpos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(255);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}
