class ball {
  
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:1.2
  
      }
this.x=x;
this.y=y;
this.r=r;
      
      this.body = Bodies.circle(this.x,this.y,(this.r-20/2),options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var ballpos =this.body.position;

      push();
      translate(ballpos.x,ballpos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      fill(255,0,255);
      
      pop();
    }
  }
  