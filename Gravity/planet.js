console.log("LOADING planet");
export class Planet {
    constructor(con, bcr, xPos, yPos, xVel, yVel, rad, col) {
        this.con = con;
        this.bcr = bcr;
        this.pos = {
            x: xPos,
            y: yPos
        };
        this.vel = {
            x: xVel,
            y: yVel
        };
        this.rad = rad;
        this.col = col;
    }
    draw() {
        this.con.fillStyle = this.col; 
        this.con.beginPath();
        this.con.arc(
            this.pos.x * this.bcr.width,
            this.pos.y * this.bcr.height,
            this.rad * this.bcr.height,
            0,
            2*Math.PI
        ); 
        this.con.fill();
    }
    update(timeChange) {
         
    }
}