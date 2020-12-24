class Pendulum{
    constructor(x,y,radius){
        var options={
          isStatic:false,
          restitution:1,
          friction:0.0,
          density:3,
          inertia:Infinity,
          slop:1,
          frictionAir:0
        };
        this.radius=radius
        this.body=Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
    }
    display(){
       var pos=this.body.position
       push()
       ellipseMode(RADIUS);
       fill("purple");
       ellipse(pos.x,pos.y,this.radius,this.radius);
       pop();
    }
}