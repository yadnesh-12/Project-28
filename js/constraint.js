class Const{
    constructor(body1, point){
        var options = {
            bodyA: body1,
            pointB : point,
            stiffness: 0.04,
            length: 20
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB = point;
    }


    fly()
    {
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        //strokeWeight(4);
        //line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}