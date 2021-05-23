class Rain {
    constructor(x,y){
        var options = {
            friction:0.001,
            restituition:0.1,

        }
        //this.image = loadImage("Walking Frame/walking_1.png");
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rain)
        //load Image for BestMan
        
    }

    updateY(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
    display(){
        var pos = this.rain.position;
        fill ("blue");
        ellipseMode(RADIUS);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}
