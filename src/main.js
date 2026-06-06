import './style.css'

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// ─── Hamburger Menu ───────────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileNavOverlay = document.getElementById('mobile-nav-overlay');

function toggleMobileNav() {
  hamburger.classList.toggle('open');
  mobileNavOverlay.classList.toggle('open');
  document.body.style.overflow = mobileNavOverlay.classList.contains('open') ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMobileNav);

// Close when a link is clicked
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNavOverlay.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ─── Navbar Scroll Effect ─────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ─── Active Link Tracking ─────────────────────────────────────────────────────
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (pageYOffset >= section.offsetTop - section.clientHeight / 3) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// ─── Smooth Scroll ────────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
  });
});

// ─── Typewriter Animation ─────────────────────────────────────────────────────
const typewriterEl = document.getElementById('typewriter-text');
const phrases = [
  'Embedded Engineer',
  'Robotics Enthusiast',
  'Competitive Programmer',
  'ECE Student'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typewrite() {
  const currentPhrase = phrases[phraseIndex];
  
  if (!isDeleting) {
    typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typewrite, 1800);
      return;
    }
  } else {
    typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  
  const speed = isDeleting ? 60 : 100;
  setTimeout(typewrite, speed);
}

if (typewriterEl) {
  setTimeout(typewrite, 800);
}

// ─── Particle / Constellation Canvas ─────────────────────────────────────────
const canvas = document.getElementById('particle-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let width, height, particles;
  let mouse = { x: null, y: null };

  const PARTICLE_COUNT = 60;
  const CONNECTION_DISTANCE = 130;
  const MOUSE_REPEL_DISTANCE = 100;

  function resize() {
    const hero = document.getElementById('home');
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1;
      this.opacity = Math.random() * 0.5 + 0.2;
    }
    update() {
      // Mouse repel
      if (mouse.x !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL_DISTANCE) {
          const force = (MOUSE_REPEL_DISTANCE - dist) / MOUSE_REPEL_DISTANCE;
          this.vx += (dx / dist) * force * 0.8;
          this.vy += (dy / dist) * force * 0.8;
        }
      }
      // Dampen velocity
      this.vx *= 0.98;
      this.vy *= 0.98;

      this.x += this.vx;
      this.y += this.vy;

      // Wrap around edges
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(146, 180, 167, ${this.opacity})`;
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DISTANCE) {
          const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.3;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(146, 180, 167, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }

  resize();
  initParticles();
  animate();

  window.addEventListener('resize', () => { resize(); initParticles(); });

  const heroSection = document.getElementById('home');
  heroSection.addEventListener('mousemove', e => {
    const rect = heroSection.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  heroSection.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });
}

// ─── Reveal on Scroll Animation ───────────────────────────────────────────────
const revealElements = document.querySelectorAll('.glass-card, .section-header, .hero-content');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.style.opacity = '0';
  revealObserver.observe(el);
});

// ─── Real Contact Form (Formspree) ────────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    const originalText = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;
    formStatus.style.display = 'none';

    try {
      const data = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formStatus.textContent = '✅ Message sent! I\'ll get back to you soon.';
        formStatus.style.color = '#92b4a7';
        formStatus.style.display = 'block';
        contactForm.reset();
      } else {
        const json = await response.json();
        if (json.errors) {
          formStatus.textContent = '❌ ' + json.errors.map(e => e.message).join(', ');
        } else {
          formStatus.textContent = '❌ Something went wrong. Please try again.';
        }
        formStatus.style.color = '#e57373';
        formStatus.style.display = 'block';
      }
    } catch {
      formStatus.textContent = '❌ Network error. Please try again.';
      formStatus.style.color = '#e57373';
      formStatus.style.display = 'block';
    }

    btn.textContent = originalText;
    btn.disabled = false;
  });
}

// ─── Glass Card Spotlight Glow Effect ────────────────────────────────────────
const cards = document.querySelectorAll('.glass-card');
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });
});

// ─── Interactive Project Filtering ────────────────────────────────────────────
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.projects-grid .project-card');

if (filterButtons.length > 0 && projectCards.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95) translateY(10px)';

        setTimeout(() => {
          if (filterValue === 'all' || categories.includes(filterValue)) {
            card.style.display = 'block';
            card.offsetHeight; // force reflow
            card.style.opacity = '1';
            card.style.transform = 'scale(1) translateY(0)';
          } else {
            card.style.display = 'none';
          }
        }, 300);
      });
    });
  });
}
