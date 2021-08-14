class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.image = loadImage("snow4.webp")
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50, 50);
        noStroke();
        pop();
    }

};
