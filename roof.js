class ROOF{
    constructor(x,y,w,h){
        var ops = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,w,h,ops);
        this.width = w;
        this.hight = h;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push()
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.hight); 
        pop()
     }
} 