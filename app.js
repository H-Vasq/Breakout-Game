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

class Paddle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(context) {
        context.fillStyle = "blue";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    move(direction) {
        this.x += this.speed * direction;
    }
}


const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d")

const ball = new Ball(200, 90, 10, 2, 2)
ball.draw(context);

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.update();
    ball.draw(context);
    requestAnimationFrame(gameLoop);
}