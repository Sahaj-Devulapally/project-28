class Circle{
constructor(x,y,radius) {
var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}

this.body=Bodies.circle(x,y,radius,options)
World.add(world,this.body);

this.image=loadImage("paper.png")


}

display(){
ellipseMode()
ellipse(this.body.position.x,this.body.position.y,40)



}









}