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
// // c.beginPath();
// // c.arc(300, 300, 30, 0, Math.PI * 2, false);
// // c.strokeStyle = "blue"
// // c.stroke();

// // for(let i = 0; i < 30; i++) {
// //     let x = Math.random() * window.innerWidth;
// //     let y = Math.random() * window.innerHeight;

// //     c.beginPath();
// //     c.arc(x, y, 30, 0, Math.PI * 2, false);
// //     c.strokeStyle = "blue"
// //     c.stroke();
// // }

// // //randomize colors of each circle


// //CIRCLE MOVING

 function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "blue"
        c.stroke();
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

 

    let circleArray = []
    for(let i = 0; i < 100; i++) {
        let x = Math.random() * innerWidth;
        let y = Math.random() * innerHeight;
        let dx = (Math.random() - .5) * 8;
        let dy = (Math.random() - .5) * 8;
        let radius = 30;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }


  

    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0,0, innerWidth, innerHeight);

        for(let i = 0; 1 < circleArray.length; i++) {
            circleArray[i].update();
        }
    }

    animate();