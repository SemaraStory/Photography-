// ==========================================
// MONOGA PHOTHOBOOTH - SIGNATURE EDITION
// Premium Interactions
// ==========================================

// ====== DATA ======
const contactInfo = {
    whatsappNumber: '6281927310298',
    whatsappMessage: 'Halo MonogaPhotoBooth.',
    instagramUrl: 'https://www.instagram.com/monoga.photobooth?igsh=ZXg0MTkzMnRrNjI2',
    tiktokUrl: 'https://www.tiktok.com/@monoga.photobooth'
};

const albums = [
    { name: "Wedding Reception Koming", date: "28 September", category: "Wedding", albumLink: "*", image: "Hello Monoga!!" },
    { name: "Wedding Reception Hendra", date: "28 Agustus", category: "Wedding", albumLink: "*", image: "Hello Monoga!!" },
    { name: "Wedding Reception Devi", date: "19 Agustus", category: "Wedding", albumLink: "*", image: "Hello Monoga!!" },
    { name: "SAPPUN", date: "8 Agustus", category: "Yoga Event", albumLink: "https://fotoshare.co/e/Kaah5kKG2TdjM4dIWJ8iR", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/SAPPUN%208%20AGUSTUS.webp" },
    { name: "Aplus Pilates", date: "11 Juli", category: "Pilates", albumLink: "https://fotoshare.co/e/8DqbOnnOZdwCvEPMbka7P", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Aplus%20Pilates%2011%20Juli.webp" },
    { name: "Seren Lume", date: "5 Juli", category: "Yoga", albumLink: "https://fotoshare.co/e/eKbiiIypEGEnOCS1Lnse0", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Serenlume%205%20Juli.webp" },
    { name: "Alin & Ando", date: "26 Juni", category: "Wedding", albumLink: "https://fotoshare.co/e/-5-NTl1AuZUdy6H1gKZVb", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Ando%20Alin%2026%20Juni.webp" },
    { name: "A Plus Pilates", date: "21 Juni", category: "Pilates", albumLink: "https://fotoshare.co/e/xVyBaOVt1PF8EXHlD_zBE", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/A%20Plus%20Pilates%2021%20Juni.webp" },
    { name: "Satya Space", date: "20 Juni", category: "Yoga", albumLink: "https://fotoshare.co/e/jKCRmLs6c9VlKTmlQRfPL", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Satya%20Space%2020%20Juni.webp" },
];

// ====== SMOOTH SCROLL (LENIS) ======
let lenis;
if (window.innerWidth > 768) {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

// ====== CUSTOM CURSOR ======
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

function animateCursor() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effect
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .magnetic, .link-card, .album-card')) {
        document.body.classList.add('cursor-hover');
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, .magnetic, .link-card, .album-card')) {
        document.body.classList.remove('cursor-hover');
    }
});

// ====== PRELOADER ======
const preloader = document.getElementById('preloader');
const preloaderBar = document.getElementById('preloaderBar');
const preloaderCount = document.getElementById('preloaderCount');
let progress = 0;

const preloaderInterval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
        progress = 100;
        clearInterval(preloaderInterval);
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.getElementById('mainWrapper').classList.add('loaded');
        }, 400);
    }
    preloaderBar.style.width = progress + '%';
    preloaderCount.textContent = Math.floor(progress);
}, 80);

// ====== TOAST ======
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ====== ALBUMS RENDER ======
function tampilkanAlbum() {
    const container = document.getElementById('albumsContainer');
    albums.forEach((album, index) => {
        const kartu = document.createElement('a');
        kartu.className = 'album-card';
        kartu.href = album.albumLink;
        kartu.target = '_blank';
        kartu.style.animationDelay = (index * 80) + 'ms';
        
        kartu.innerHTML = `
            <div class="album-card-bg" style="background-image: url('${album.image}');"></div>
            <div class="album-card-overlay"></div>
            <div class="album-card-content">
                <div class="album-card-date">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${album.date}</span>
                </div>
                <div class="album-card-info">
                    <span class="album-card-category">${album.category}</span>
                    <h3 class="album-card-name">${album.name}</h3>
                    <div class="album-card-action">
                        <span>
                            <i class="fas fa-images"></i>
                            Download
                        </span>
                        <div class="arrow-circle">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(kartu);
    });
    
    init3DTilt();
}

// ====== 3D TILT EFFECT ======
function init3DTilt() {
    const cards = document.querySelectorAll('.album-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// ====== MAGNETIC BUTTONS ======
document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// ====== SCROLL REVEAL ======
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .link-card, .album-card').forEach(el => {
        observer.observe(el);
    });
}

// ====== SCROLL TO TOP ======
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    if (lenis) {
        lenis.scrollTo(0);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ====== PARALLAX ======
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-inner');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ====== INIT ======
document.addEventListener('DOMContentLoaded', () => {
    tampilkanAlbum();
    setTimeout(setupScrollReveal, 100);
});

// ====== SHARE ======
if (document.getElementById('shareBtn')) {
    document.getElementById('shareBtn').addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'MonogaPhotoBooth',
                    text: 'Your Story Instantly Captured 📸✨ Part Of Semara Story And Dndbouquet',
                    url: window.location.href
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showToast('Link berhasil disalin ke clipboard!');
            }).catch(() => {
                showToast('Gagal menyalin link');
            });
        }
    });
}