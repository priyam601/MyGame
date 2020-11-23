class Player{
    constructor(x,y,width,height){

        var options = {
            'restitution':1.0,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
        }

        this.player = Bodies.rectangle(x, y, width, height,options);
        this.x=x;
		this.y=y;
        this.width = width;
        this.height = height;
      

        

        World.add(world, this.player);
     
     
    }
 jump(){
    Matter.Body.setVelocity(this.player, {x: 2, y: -7});
    

}
 walk(){
    Matter.Body.setVelocity(this.player, {x: 5, y: 0});
    


}

    display(){
        var pos=this.player.position;		
       push();
       translate(pos.x,pos.y);
       rectMode(CENTER);
       fill("white");
       rect( 0, 0, this.width, this.height);
       pop()
     }

}
