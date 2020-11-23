class Ground{
    constructor(x,y,width,height){

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true
        }

        this.ground = Bodies.rectangle(x, y, width, height, options);
        this.x=x;
		this.y=y;
        this.width = width;
        this.height = height;

        World.add(world, this.ground);
     }

    display(){
        var pos=this.ground.position;		
       push();
       translate(pos.x,pos.y);
       rectMode(CENTER);
       //strokeWeight(4);
       fill("black");
       rect( 0, 0, this.width, this.height);
       pop()


     }

}
