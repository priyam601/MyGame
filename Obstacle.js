class Obstacle{
    constructor(x,y,width,height){

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:false
        }

        this.obstacle = Bodies.rectangle(x, y, width, height, options);
        this.x=x;
		this.y=y;
        this.width = width;
        this.height = height;

        World.add(world, this.obstacle);
     }

    display(){
        var pos=this.obstacle.position;		
       push();
       translate(pos.x,pos.y);
       rectMode(CENTER);
       //strokeWeight(4);
       fill("black");
       rect( 0, 0, this.width, this.height);
       pop()


     }

     move(){
        Matter.Body.setVelocity(this.obstacle, {x: 2, y: 0});
    
    }

}
