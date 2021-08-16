class Bob {
    constructor (x,y,r) {
        var options = {
            restitution: 0.5,
            friction: 0.2,
            density: 3,
            //isStatic: true
        }

        this.body = Bodies.circle(x,y,r,options)
        this.radius = r
        World.add(world,this.body)
       
    }

   display() {
       var pos = this.body.position

       push();
       translate(pos.x,pos.y)
       fill(225);
       ellipseMode(RADIUS)
       ellipse(0,0,this.radius,this.radius);
   pop()
    }

}