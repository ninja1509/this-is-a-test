class Rope{
    constructor(ba,pb) {
        var options = {
            bodyA: ba,
            pointB: pb,
            stiffness: 0.4,
            length: 30
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
        this.pointB = pb
    }

    display() {
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB

        push()
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);

        pop()
    }
}