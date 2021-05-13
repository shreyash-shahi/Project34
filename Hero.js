class Hero {
    constructor(x, y,radius) {
        var options = {
            restitution: 2,
            friction: 0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        this.image = loadImage("Hero.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius);
        pop();
    }

};