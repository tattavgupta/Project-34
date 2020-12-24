
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

function preload(){

}

function setup(){
    canvas = createCanvas(windowWidth/2,windowHeight/1.5)
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt)
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse:canvasmouse
    };
    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);

    pendulum1=new Pendulum(500,450,35)
    pendulum2=new Pendulum(430,450,35)
    pendulum3=new Pendulum(360,450,35)
    pendulum4=new Pendulum(290,450,35)
    pendulum5=new Pendulum(220,450,35)
    sling1=new Sling(pendulum1.body,{x:500,y:100})
    sling2=new Sling(pendulum2.body,{x:430,y:100})
    sling3=new Sling(pendulum3.body,{x:360,y:100})
    sling4=new Sling(pendulum4.body,{x:290,y:100})
    sling5=new Sling(pendulum5.body,{x:220,y:100})
}

function draw(){
    rectMode(CENTER);
    background("blue");
    Engine.update(engine)
    sling1.display()
    sling2.display()
    sling3.display()
    sling4.display()
    sling5.display()
    pendulum1.display()
    pendulum2.display()
    pendulum3.display()
    pendulum4.display()
    pendulum5.display()
}

function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY})
}

function keyPressed(){
	if (keyCode===UP_ARROW){
	  Matter.Body.applyForce(pendulum1.body,pendulum1.body.position,{x:90,y:0})
	}
  }