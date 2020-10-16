class Paper{
constructor(x,y,radius)
{
var options ={
    density:215.5,
    mass:5,
    restitution:0.3,
    friction:0.5,
    isStatic:false,
}
this.body =Matter.Bodies.circle(x,y,(radius-20)/2,options);
this.radius =radius;
this.image =loadImage("paper.png")
World.add(world, this.body);
}

display()
{
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);

      imageMode(CENTER);
     image(this.image, 0, 0, this.radius, this.radius);
      pop();
      
}
};