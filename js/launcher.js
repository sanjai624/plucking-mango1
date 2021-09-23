class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.launcherObject = Constraint.create(options);
        World.add(world, this.launcherObject);
    }

    display(){
        if(this.launcherObject.bodyA){
            var pointA = this.launcherObject.bodyA.position;
            var pointB = this.launcherObject.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
       
    }
  
    fly(){
      this.launcherObject.bodyA=null;
    }
    attach(stonebody){
      this.launcherObject.bodyA=stonebody;
    }
}
