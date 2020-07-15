class Dustbin {
  
    constructor(x, y)
     {
       this.x=x;
       this.y=y;
       this.dustbinWidth=200;
       this.dustbinHeight=213;
       this.wallThickness=20;
       this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.dustbinHeight,{isStatic:true})
       this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,{isStatic:true})
       this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
       World.add(world, this.bottomBody);
       World.add(world, this.leftWallBody);
       World.add(world, this.rightWallBody);
    }
    display(){
      var posBottom =this.bottombody.position;
     
      var posLeft =this.leftWallbody.position;
      
      var posRight =this.rightWallbody.position;
      push();
      translate(posLeft.x,posLeft.y);
      angleMode(RADIANS)
      rotate(this.angle);
      rectMode(CENTER);
      fill(255);
    //  rect(0, 0, this.width, this.height);
      pop();

      push();
      translate(posRight.x,posRight.y);
      angleMode(RADIANS)
      rotate(-1*this.angle);
      rectMode(CENTER);
      fill(255);
    //  rect(0, 0, this.width, this.height);
      pop();

      push();
      translate(posBottom.x,posBottom.y);
      angleMode(RADIANS)
      
      rectMode(CENTER);
      fill(255);
    //  rect(0, 0, this.width, this.height);
      pop();
    }
  }
  



































