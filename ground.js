class Ground
{
constructor(x,y,width,height){

    var options ={
        isStatic:true
    }

    this.body =Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);

    this.width =width;
    this.height =height;
}

   display()
   {
    var kas =this.body.position;
    rectMode(CENTER);
    fill("black");
    rect(kas.x,kas.y,this.width,this.height);

   }
   

}