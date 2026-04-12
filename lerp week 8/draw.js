const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Make canvas full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let currentX = canvas.width / 2;
let currentY = canvas.height / 2;
let targetX = canvas.width / 2;
let targetY = canvas.height / 2;

// 1. Capture the "Target" (Mouse Position)
window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. The LERP Math (Precision = 0.08)
    // This is the "Process" part of the I/O model
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    // 3. Render the smooth object (The "Output")
    ctx.beginPath();
    ctx.arc(currentX, currentY, 20, 0, Math.PI * 2);
    ctx.fillStyle = "#007bff";
    ctx.fill();

    // Loop the animation
    requestAnimationFrame(draw);
}

// Start the loop
draw();