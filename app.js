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
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

class Paddle {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }
    draw(context) {
        context.fillStyle = "blue";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    move(direction) {
        this.x += this.speed * direction;
    }
}

class Brick {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(context) {
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}   



const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d")

const ball = new Ball(200, 200, 10, -2, -2)
const paddle = new Paddle(175, canvas.height-20, 70, 10, 9)


document.addEventListener("keydown", (event) => {
    if(event.key === "ArrowLeft") {
        paddle.move(-1);
    }   else if(event.key === "ArrowRight") {
        paddle.move(1);
    }   
});

document.addEventListener("keyup", (event) => {
    if(event.key === "ArrowLeft" || event.key === "ArrowRight") {
        paddle.move(0); // Stop moving when key is released
    }
});


function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.update();
    ball.draw(context);

    if(ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.speedX *= -1;
    }

    // Bounce off top wall
    if(ball.y - ball.radius < 0) {
        ball.y = ball.radius; // Prevent sticking
        ball.speedY *= -1;
    }

    if (
        ball.x + ball.radius > paddle.x && 
        ball.x - ball.radius < paddle.x + paddle.width &&
        ball.y + ball.radius > paddle.y
    ) {
        ball.speedY *= -1; // Bounce off paddle
    }   

    paddle.draw(context);

    requestAnimationFrame(gameLoop);
}

gameLoop();