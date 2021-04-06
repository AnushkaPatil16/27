class BOB{
    constructor(x,y){
         var ops = {
            isStatic:false
        }

        this.body = Bodies.circle(x,y,22,ops);
        this.r = 22;
        World.add(world,this.body); 
        
    }

    display(){
        var pos = this.body.position
        push() 
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r); 
        pop() 
    }
}
