// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.nav-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const mobileClose = document.querySelector('.mobile-nav-close');
const mobileBackdrop = document.querySelector('.mobile-nav-backdrop');

window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 50);
});

function openMobileNav() {
  mobileNav?.classList.add('open');
  mobileBackdrop?.classList.add('open');
  document.body.classList.add('nav-open');
}
function closeMobileNav() {
  mobileNav?.classList.remove('open');
  mobileBackdrop?.classList.remove('open');
  document.body.classList.remove('nav-open');
}

menuBtn?.addEventListener('click', openMobileNav);
mobileClose?.addEventListener('click', closeMobileNav);
mobileBackdrop?.addEventListener('click', closeMobileNav);

// Active link detection
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
mobileNav?.querySelectorAll('.mobile-nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Scroll to top on page load
window.scrollTo(0, 0);

// ===== FADE IN ON SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ===== COUNTER ANIMATION =====
function animateCount(el) {
  const target = parseInt(el.dataset.count);
  const duration = 1800;
  const start = performance.now();
  const update = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target).toLocaleString('pt-BR') + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

// ===== ACTIVE NAV LINK (desktop) =====
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('.form-submit');
  const originalText = btn.textContent;
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '✓ Mensagem Enviada!';
    btn.style.background = '#25D366';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  }, 1500);
});

// ===== PORTFOLIO FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    portfolioItems.forEach(item => {
      if (filter === 'all' || item.dataset.cat === filter) {
        item.style.display = '';
        setTimeout(() => item.style.opacity = '1', 10);
      } else {
        item.style.opacity = '0';
        setTimeout(() => item.style.display = 'none', 300);
      }
    });
  });
});

// ===== SEAMLESS MARQUEE =====
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
  Array.from(marqueeTrack.children).forEach(item => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    marqueeTrack.appendChild(clone);
  });
}
