class Ball {
    constructor(x, y, radius, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = "purple";
        context.fill();
        context.closePath();
    }
    update() {
        this.X += this.speedX;
        this.y += this.speedY;
    }
}

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d")

const ball = new Ball(200, 90, 10, 2, 2)
ball.draw(context);