const startBtn = document.getElementById('startBtn');
const title = document.getElementById('title');
const messageDiv = document.getElementById('message');
const letterText = document.getElementById('letterText');
const buttonsDiv = document.getElementById('buttonsDiv');
const loveBtn = document.getElementById('loveBtn');
const moreBtn = document.getElementById('moreBtn');
const bgMusic = document.getElementById('bgMusic');

const message = `
Desde el primer día que llegaste a mi vida, todo comenzó a brillar.
Tus ojos, tu sonrisa, todo en ti tiene una magia única que hace que mi corazón lata con fuerza.
Eres mi amor, mi compañera, mi todo. Cada momento contigo es un regalo que atesoro profundamente.
Quiero pasar el resto de mi vida a tu lado, amándote cada día más.

Te amo con todo mi corazón. 💖
`;

const extraMessage = `
Te amo tanto, que cada día contigo es una nueva aventura de amor y felicidad. Eres mi razón de ser y la luz que ilumina mi camino. 
Gracias por ser tú, por estar a mi lado, y por darme tanto amor.
`;

startBtn.addEventListener('click', () => {
  bgMusic.play().catch(error => {
    console.log('Error al reproducir música:', error);
  });
  startBtn.classList.add('hidden');
  title.classList.add('hidden');
  messageDiv.classList.remove('hidden');
  typeMessage(message);
  buttonsDiv.classList.remove('hidden');
});

loveBtn.addEventListener('click', () => {
  alert('Te amo muchísimo, más de lo que las palabras pueden expresar 😘❤️');
});

moreBtn.addEventListener('click', () => {
  typeMessage(extraMessage);
});

function typeMessage(text) {
  let index = 0;
  letterText.textContent = '';
  const typingInterval = setInterval(() => {
    if (index < text.length) {
      letterText.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, 50);
}

// Partículas flotando
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particlesArray;

function initParticles() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    particlesArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5
    });
  }
}

function handleParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    let p = particlesArray[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 192, 203, 0.8)';
    ctx.fill();
    
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.size > 0.2) p.size -= 0.02;
    if (p.size <= 0.2) {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
      p.size = Math.random() * 4 + 1;
    }
  }
}

function animateParticles() {
  handleParticles();
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', () => {
  initParticles();
});
