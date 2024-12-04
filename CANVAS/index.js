let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

// // //rectangles
// // c.fillStyle = "orange";
// // c.fillRect(100, 100, 100, 100);
// // c.fillStyle = "red";
// // c.fillRect(250, 100, 100, 100)
// // c.fillStyle = "pink"
// // c.fillRect(400, 100, 100, 100)
// // c.fillStyle = "black"
// // c.fillRect(650, 100, 100, 100)

// // //Lines
// // c.beginPath();
// // c.moveTo(50, 300);
// // c.lineTo(300, 100)
// // c.lineTo(400, 300);
// // c.strokeStyle = "red"
// // c.stroke();


// // //Arc or Circle
// // // c.beginPath();
// // // c.arc(300, 300, 30, 0, Math.PI * 2, false);
// // // c.strokeStyle = "blue"
// // // c.stroke();

// for(let i = 0; i < 30; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;

//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = "blue"
//     c.stroke();
// }

// // //randomize colors of each circle


// CIRCLE MOVING

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
    
function Circle(x, y , dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = getRandomColor();
        c.stroke();  
        c.fillStyle 
        c.fill();
    }
    this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
            } 
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
        } 
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

const circleArray = [];

for(let i = 0; i < 100; i++) {
    const radius = 30;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dy = (Math.random() - 0.5 * 2);
    let dx = (Math.random() - 0.5) * 2;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0 , 0 , innerWidth, innerHeight)   
    for(let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }  
};
animate();