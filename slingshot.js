class SLINGSHIT{
    constructor(a,b){

        var ops = {
            bodyA:a,
            bodyB:b,
            stiffness:0.3,
            length:35
        }

        this.sling = Constraint.create(ops);
        World.add(world,this.sling);
    }

    display(){
        var posA = this.sling.bodyA.position;
        var posB = this.sling.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y);
        
    }
}