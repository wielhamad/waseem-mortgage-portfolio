/* ═══════════════════════════════════════════
   MAIN.JS — Waseem Elhamad Mortgage Portfolio
   GSAP animations · Parallax · Dynamic content
   ═══════════════════════════════════════════ */

import { CONFIG } from './config.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── SVG Icons ──
const ICONS = {
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    mapPin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    zillow: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    external: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
};

// ══════════════════════════════════════
// CONTENT RENDERING
// ══════════════════════════════════════

function renderContent() {
    // Hero
    document.getElementById('hero-name').textContent = CONFIG.name;
    document.getElementById('hero-headline').innerHTML = `${CONFIG.headline}<br><span class="hero-subheadline">${CONFIG.subheadline}</span>`;

    // About
    document.getElementById('about-bio').innerHTML = CONFIG.bio.replace(/\n/g, '<br><br>');

    // About background photo gallery
    const gallery = document.getElementById('about-bg-gallery');
    if (CONFIG.aboutPhotos && CONFIG.aboutPhotos.length) {
        gallery.innerHTML = CONFIG.aboutPhotos.map((src, i) =>
            `<img src="${src}" alt="About photo ${i + 1}" class="${i === 0 ? 'active' : ''}" />`
        ).join('');
    }

    // Languages
    const langContainer = document.getElementById('about-languages');
    langContainer.innerHTML = `
    <div class="lang-list">
      ${CONFIG.languages.map(l => `<span class="lang-tag">${l.name} · ${l.level}</span>`).join('')}
    </div>
  `;

    // Company info
    const companyInfo = document.getElementById('about-company-info');
    companyInfo.innerHTML = `
    <div class="company-info-title">Licensing Information</div>
    <div class="company-info-detail">
      <strong>${CONFIG.company}</strong><br>
      Company NMLS# ${CONFIG.companyNMLS}<br>
      DRE# ${CONFIG.companyDRE}<br>
      Personal NMLS# ${CONFIG.personalNMLS}
    </div>
  `;

    // Stats
    const statsGrid = document.getElementById('stats-grid');
    statsGrid.innerHTML = CONFIG.stats.map(s => `
    <div class="stat-card">
      <div class="stat-value ${s.isNMLS ? 'nmls-value' : ''}">${s.value}${s.suffix || ''}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');

    // Navigation
    const navLinks = document.getElementById('nav-links');
    navLinks.innerHTML = CONFIG.navLinks.map(link =>
        `<li><a href="${link.href}" data-section="${link.href.slice(1)}">${link.label}</a></li>`
    ).join('');

    // Services
    const servicesGrid = document.getElementById('services-grid');
    servicesGrid.innerHTML = CONFIG.services.map(s => `
    <div class="service-card">
      <span class="service-icon">${s.icon}</span>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.description}</p>
    </div>
  `).join('');

    // Reviews / Testimonials
    const reviewsGrid = document.getElementById('reviews-grid');
    reviewsGrid.innerHTML = CONFIG.testimonials.map(t => `
    <div class="review-card">
      <div class="review-stars">
        ${Array(t.rating).fill('<span class="review-star">★</span>').join('')}
      </div>
      <p class="review-text">${t.text}</p>
      <div class="review-meta">
        <div>
          <div class="review-author">${t.name}</div>
          <div class="review-location">${t.location} · ${t.date}</div>
        </div>
        <span class="review-type">${t.type}</span>
      </div>
    </div>
  `).join('');

    // Licensed States
    const statesGrid = document.getElementById('states-grid');
    statesGrid.innerHTML = CONFIG.licensedStates.map(s => `
    <div class="state-card">
      <div class="state-abbr">${s.abbr}</div>
      <div class="state-name">${s.state}</div>
      ${s.license ? `<div class="state-license">Lic# ${s.license}</div>` : ''}
    </div>
  `).join('');

    // Contact
    const contactGrid = document.getElementById('contact-grid');
    contactGrid.innerHTML = `
    <a href="tel:${CONFIG.phone.replace(/[^\d+]/g, '')}" class="contact-card" id="contact-phone">
      <div class="contact-icon">${ICONS.phone}</div>
      <div>
        <div class="contact-label">Phone</div>
        <div class="contact-value">${CONFIG.phone}</div>
      </div>
    </a>
    <a href="tel:${CONFIG.cell.replace(/[^\d+]/g, '')}" class="contact-card" id="contact-cell">
      <div class="contact-icon">${ICONS.phone}</div>
      <div>
        <div class="contact-label">Cell</div>
        <div class="contact-value">${CONFIG.cell}</div>
      </div>
    </a>
    <a href="mailto:${CONFIG.email}" class="contact-card" id="contact-email">
      <div class="contact-icon">${ICONS.mail}</div>
      <div>
        <div class="contact-label">Email</div>
        <div class="contact-value">${CONFIG.email}</div>
      </div>
    </a>
    <a href="${CONFIG.social.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-card" id="contact-linkedin">
      <div class="contact-icon">${ICONS.linkedin}</div>
      <div>
        <div class="contact-label">LinkedIn</div>
        <div class="contact-value">Waseem Elhamad</div>
      </div>
    </a>
    <a href="${CONFIG.social.zillow}" target="_blank" rel="noopener noreferrer" class="contact-card" id="contact-zillow">
      <div class="contact-icon">${ICONS.zillow}</div>
      <div>
        <div class="contact-label">Zillow Profile</div>
        <div class="contact-value">Read Reviews</div>
      </div>
    </a>
    <a href="https://maps.google.com/?q=${encodeURIComponent(CONFIG.officeAddress)}" target="_blank" rel="noopener noreferrer" class="contact-card" id="contact-address">
      <div class="contact-icon">${ICONS.mapPin}</div>
      <div>
        <div class="contact-label">Office</div>
        <div class="contact-value">${CONFIG.officeAddress}</div>
      </div>
    </a>
  `;

    // Footer
    const year = new Date().getFullYear();
    document.getElementById('footer-copy').textContent = `© ${year} ${CONFIG.name}. All rights reserved.`;

    // Footer disclaimer
    const disclaimerEl = document.getElementById('footer-disclaimer');
    disclaimerEl.innerHTML = `
    <p>${CONFIG.disclaimers.nmlsDisclosure}</p>
    <p style="margin-top: 0.8rem">${CONFIG.disclaimers.generalDisclaimer}</p>
    <p style="margin-top: 0.8rem">
      <a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2716106" target="_blank" rel="noopener noreferrer" class="nmls-footer-link">NMLS Consumer Access</a>
    </p>
  `;

    // Equal Housing
    const equalHousing = document.getElementById('footer-equal-housing');
    equalHousing.innerHTML = `
    <span class="equal-housing-icon">🏠</span>
    <span class="equal-housing-text">Equal Housing Opportunity. All loans subject to credit approval.</span>
  `;
}

// ══════════════════════════════════════
// PARTICLE CANVAS (Hero Background)
// ══════════════════════════════════════

function initParticleCanvas() {
    const canvas = document.getElementById('hero-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 148, 10, ${this.opacity})`;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(212, 148, 10, ${0.06 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawConnections();
        animId = requestAnimationFrame(animate);
    }

    resize();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
        resize();
        initParticles();
    });
}

// ══════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    // Scroll state
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Smooth scroll + close mobile menu
    navLinks.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link) {
            navToggle.classList.remove('open');
            navLinks.classList.remove('open');
        }
    });

    // Active section highlighting
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                document.querySelectorAll('.nav-links a').forEach(a => {
                    a.classList.toggle('active', a.dataset.section === id);
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
}

// ══════════════════════════════════════
// GSAP SCROLL ANIMATIONS
// ══════════════════════════════════════

function initAnimations() {
    // ── Hero entrance ──
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl
        .to('.hero-badge', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
        })
        .to('.hero-name', {
            opacity: 1,
            y: 0,
            duration: 1,
        }, '-=0.4')
        .to('.hero-headline', {
            opacity: 1,
            y: 0,
            duration: 0.8,
        }, '-=0.5')
        .to('.hero-cta', {
            opacity: 1,
            y: 0,
            duration: 0.8,
        }, '-=0.4')
        .to('.scroll-indicator', {
            opacity: 1,
            duration: 1,
        }, '-=0.2');

    // ── Parallax hero shapes ──
    gsap.utils.toArray('.shape').forEach((shape, i) => {
        const speed = (i + 1) * 50;
        gsap.to(shape, {
            y: speed,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
            },
        });
    });

    // ── Scroll indicator fade ──
    gsap.to('.scroll-indicator', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero',
            start: '80px top',
            end: '200px top',
            scrub: true,
        },
    });

    // ── About section ──
    gsap.from('.about-photo-wrapper', {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#about',
            start: 'top 75%',
            toggleActions: 'play none none none',
        },
    });

    gsap.from('.about-text', {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#about',
            start: 'top 75%',
            toggleActions: 'play none none none',
        },
    });

    // Stats counter animation
    gsap.fromTo('.stat-card',
        { y: 40, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.stats-grid',
                start: 'top 95%',
                toggleActions: 'play none none none',
            },
        });

    // ── Service cards — 3D fan reveal ──
    const serviceCards = gsap.utils.toArray('.service-card');
    serviceCards.forEach((card, i) => {
        gsap.set(card, {
            opacity: 0,
            y: 80,
            rotateX: -15,
            rotateY: i % 2 === 0 ? 8 : -8,
            scale: 0.9,
            filter: 'blur(4px)',
            transformOrigin: 'center bottom',
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none none',
            },
        });

        tl.to(card, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            delay: i * 0.12,
            ease: 'power3.out',
        })
            .to(card, {
                boxShadow: '0 0 30px rgba(212, 148, 10, 0.12), 0 0 60px rgba(212, 148, 10, 0.05)',
                duration: 0.4,
                ease: 'power2.out',
            }, '-=0.3')
            .to(card, {
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                duration: 0.6,
                ease: 'power2.inOut',
            });
    });

    // ── Review cards — staggered slide-in ──
    const reviewCards = gsap.utils.toArray('.review-card');
    reviewCards.forEach((card, i) => {
        gsap.set(card, {
            opacity: 0,
            x: i % 2 === 0 ? -60 : 60,
            y: 30,
            scale: 0.92,
            filter: 'blur(3px)',
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none none',
            },
        });

        tl.to(card, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.8,
            delay: i * 0.1,
            ease: 'back.out(1.4)',
        })
            .to(card, {
                boxShadow: '0 0 24px rgba(212, 148, 10, 0.1)',
                duration: 0.3,
            }, '-=0.2')
            .to(card, {
                boxShadow: 'none',
                duration: 0.5,
            });
    });

    // ── State cards — 3D flip reveal ──
    const stateCards = gsap.utils.toArray('.state-card');
    stateCards.forEach((card, i) => {
        gsap.set(card, {
            opacity: 0,
            y: 50,
            rotateX: -25,
            scale: 0.88,
            filter: 'blur(3px)',
            transformOrigin: 'center bottom',
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none none',
            },
        });

        tl.to(card, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out',
        })
            .to(card, {
                boxShadow: '0 0 30px rgba(212, 148, 10, 0.15)',
                duration: 0.3,
            }, '-=0.2')
            .to(card, {
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                duration: 0.5,
            });
    });

    // ── Contact cards ──
    gsap.fromTo('.contact-card',
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 98%',
                toggleActions: 'play none none none',
            },
        });

    // ── Section headers ──
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        });
    });

    // ── Parallax background effect on sections ──
    gsap.utils.toArray('.section').forEach((section) => {
        const bg = section.querySelector('.section-header');
        if (bg) {
            gsap.to(bg, {
                y: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 2,
                },
            });
        }
    });
}

// ══════════════════════════════════════
// MOUSE PARALLAX (Hero)
// ══════════════════════════════════════

function initMouseParallax() {
    const hero = document.querySelector('.hero');
    const shapes = document.querySelectorAll('.shape');

    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const deltaX = (clientX - centerX) / centerX;
        const deltaY = (clientY - centerY) / centerY;

        shapes.forEach((shape, i) => {
            const speed = (i + 1) * 8;
            gsap.to(shape, {
                x: deltaX * speed,
                y: deltaY * speed,
                duration: 1,
                ease: 'power2.out',
            });
        });
    });
}

// ══════════════════════════════════════
// TILT EFFECT ON SERVICE & REVIEW CARDS
// ══════════════════════════════════════

function initTiltEffect() {
    const cards = document.querySelectorAll('.service-card, .review-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.4,
                ease: 'power2.out',
                transformPerspective: 1000,
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.6,
                ease: 'power3.out',
            });
        });
    });
}

// ══════════════════════════════════════
// SMOOTH SCROLL PROGRESS BAR
// ══════════════════════════════════════

function initScrollProgress() {
    const progress = document.createElement('div');
    progress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #d4940a, #f0c040);
    z-index: 9999;
    transition: none;
    width: 0%;
  `;
    document.body.appendChild(progress);

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const pct = (scrolled / maxScroll) * 100;
        progress.style.width = `${pct}%`;
    });
}

// ══════════════════════════════════════
// ABOUT BACKGROUND GALLERY — Scroll Logic
// ══════════════════════════════════════

function initAboutGallery() {
    const photos = CONFIG.aboutPhotos || [];
    if (photos.length <= 1) return;

    const gallery = document.getElementById('about-bg-gallery');
    const imgs = gallery.querySelectorAll('img');
    let currentPhoto = 0;
    let intervalId = null;

    function cyclePhoto() {
        imgs[currentPhoto].classList.remove('active');
        currentPhoto = (currentPhoto + 1) % photos.length;
        imgs[currentPhoto].classList.add('active');
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!intervalId) intervalId = setInterval(cyclePhoto, 3000);
            } else {
                if (intervalId) { clearInterval(intervalId); intervalId = null; }
            }
        });
    }, { threshold: 0.1 });

    observer.observe(document.getElementById('about'));
}

// ══════════════════════════════════════
// INITIALIZATION
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    initParticleCanvas();
    initNavigation();
    initScrollProgress();

    // Small delay for DOM to settle before animations
    requestAnimationFrame(() => {
        initAnimations();
        initMouseParallax();
        initTiltEffect();
        initAboutGallery();
    });
});
