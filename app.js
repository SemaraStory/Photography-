// ##########################################################
// #                                                        #
// #          MONOGA PHOTOBOOTH — APP.JS (ULTIMATE)         #
// #                                                        #
// #   ✏️  ZONA EDIT   : bagian CONFIG di bawah ini         #
// #   ⛔  ZONA MESIN  : paling bawah, JANGAN diubah        #
// #                                                        #
// ##########################################################


const CONFIG = {

    // ==================================================
    // 📸 DAFTAR ALBUM
    // --------------------------------------------------
    // Mau tambah album? Copy satu blok { ... },
    // paste di paling atas daftar biar muncul pertama.
    // Filter kategori dibuat OTOMATIS dari "kategori".
    // ==================================================
    albums: [
        { nama: "Wedding Reception Koming",  tanggal: "28 September", kategori: "Wedding",      link: "*", gambar: "Hello Monoga!!" },
        { nama: "Wedding Reception Hendra",  tanggal: "28 Agustus",   kategori: "Wedding",      link: "*", gambar: "Hello Monoga!!" },
        { nama: "Wedding Reception Devi",    tanggal: "19 Agustus",   kategori: "Wedding",      link: "*", gambar: "Hello Monoga!!" },
        { nama: "SAPPUN",                    tanggal: "8 Agustus",    kategori: "Yoga Event",   link: "https://fotoshare.co/e/Kaah5kKG2TdjM4dIWJ8iR", gambar: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/SAPPUN%208%20AGUSTUS.webp" },
        { nama: "Aplus Pilates",             tanggal: "11 Juli",      kategori: "Pilates",      link: "https://fotoshare.co/e/8DqbOnnOZdwCvEPMbka7P", gambar: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Aplus%20Pilates%2011%20Juli.webp" },
        { nama: "Seren Lume",                tanggal: "5 Juli",       kategori: "Yoga",         link: "https://fotoshare.co/e/eKbiiIypEGEnOCS1Lnse0", gambar: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Serenlume%205%20Juli.webp" },
        { nama: "Alin & Ando",               tanggal: "26 Juni",      kategori: "Wedding",      link: "https://fotoshare.co/e/-5-NTl1AuZUdy6H1gKZVb", gambar: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Ando%20Alin%2026%20Juni.webp" },
        { nama: "A Plus Pilates",            tanggal: "21 Juni",      kategori: "Pilates",      link: "https://fotoshare.co/e/xVyBaOVt1PF8EXHlD_zBE", gambar: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/A%20Plus%20Pilates%2021%20Juni.webp" },
        { nama: "Satya Space",               tanggal: "20 Juni",      kategori: "Yoga",         link: "https://fotoshare.co/e/jKCRmLs6c9VlKTmlQRfPL", gambar: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Satya%20Space%2020%20Juni.webp" },
    ],

    // ==================================================
    // 🔗 LINK SOSIAL MEDIA
    // --------------------------------------------------
    // Pilihan "warna": whatsapp | instagram | tiktok | camera | gift
    // Link whatsapp di sini JUGA dipakai tombol WA melayang.
    // ==================================================
    socialLinks: [
        { ikon: "fab fa-whatsapp",  warna: "whatsapp",  kategori: "BOOKING",      judul: "WhatsApp Monoga",  deskripsi: "Pricelist & Booking",       link: "https://wa.me/6287750700748" },
        { ikon: "fab fa-instagram", warna: "instagram", kategori: "SOCIAL",       judul: "Instagram Monoga", deskripsi: "Follow our journey",        link: "https://www.instagram.com/monoga.photobooth?igsh=ZXg0MTkzMnRrNjI2" },
        { ikon: "fab fa-tiktok",    warna: "tiktok",    kategori: "VIDEO",        judul: "TikTok Monoga",    deskripsi: "Behind the scenes",         link: "https://www.tiktok.com/@monoga.photobooth?_r=1&_t=ZS-97TgrUj5lLQ" },
        { ikon: "fas fa-camera",    warna: "camera",    kategori: "SISTER BRAND", judul: "Semara Story",     deskripsi: "Photography & Videography", link: "https://www.instagram.com/semara.story?igsh=MTNmbXlvOXUzeHBvdw==" },
        { ikon: "fas fa-gift",      warna: "gift",      kategori: "SISTER BRAND", judul: "Dndbouquet",       deskripsi: "Decoration & Seserahan",    link: "https://www.instagram.com/dndbouquet.mu?igsh=MW1jcmE2NXhxYnljeQ==" },
    ],

    // ==================================================
    // 📊 STATISTIK
    // ==================================================
    stats: [
        { angka: 9,   akhiran: "+", label: "Album Events" },
        { angka: 3,   akhiran: "",  label: "Sister Brands" },
        { angka: 100, akhiran: "%", label: "Momen Terabadikan" },
    ],

    // ==================================================
    // 📋 LANGKAH BOOKING (seksi "Cara Booking")
    // ==================================================
    langkah: [
        { ikon: "fab fa-whatsapp",    judul: "Booking",     teks: "Hubungi kami via WhatsApp untuk cek tanggal tersedia & pricelist." },
        { ikon: "fas fa-camera-retro", judul: "Hari Acara",  teks: "Tim Monoga hadir, setup photobooth, dan abadikan semua momenmu." },
        { ikon: "fas fa-images",      judul: "Download",    teks: "Album digital siap diunduh di website ini, semua momen tersimpan rapi." },
    ],

    // ==================================================
    // 💬 QUOTE
    // ==================================================
    kutipan: "Setiap momen adalah cerita yang layak diabadikan.",

    // ==================================================
    // 👤 PROFIL (tombol share)
    // ==================================================
    profil: {
        nama: "MonogaPhotoBooth",
        teksShare: "Your Story Instantly Captured 📸✨ Part Of Semara Story And Dndbouquet",
    },

    // ==================================================
    // 💬 PESAN NOTIFIKASI
    // ==================================================
    pesan: {
        linkTersalin: "Link berhasil disalin ke clipboard!",
        gagalSalin: "Gagal menyalin link",
    },

    // ==================================================
    // ✨ PENGATURAN EFEK
    // ==================================================
    efek: {
        kekuatanTilt: 8,          // kemiringan kartu album (0 = mati)
        kekuatanMagnetic: 0.1,    // tarikan tombol ke kursor
        kecepatanPreloader: 70,   // makin kecil makin cepat
    },
};


// ##########################################################
// #                    ⛔ ZONA MESIN ⛔                     #
// ##########################################################

const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
let activeFilter = 'Semua';

// ====== PRELOADER ======
const preloader = document.getElementById('preloader');
const preloaderBar = document.getElementById('preloaderBar');
const preloaderCount = document.getElementById('preloaderCount');
let progress = 0;

const preloaderInterval = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) {
        progress = 100;
        clearInterval(preloaderInterval);
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.getElementById('mainWrapper').classList.add('loaded');
        }, 300);
    }
    preloaderBar.style.width = progress + '%';
    preloaderCount.textContent = Math.floor(progress);
}, CONFIG.efek.kecepatanPreloader);

// ====== TOAST ======
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ====== RENDER ALBUM (+ FILTER) ======
function buatKartuAlbum(album) {
    const kartu = document.createElement('a');
    kartu.className = 'album-card';
    kartu.href = album.link;
    kartu.target = '_blank';

    kartu.innerHTML = `
        <div class="album-card-bg" style="background-image: url('${album.gambar}');"></div>
        <div class="album-card-overlay"></div>
        <div class="album-card-content">
            <div class="album-card-date">
                <i class="fas fa-calendar-alt"></i>
                <span>${album.tanggal}</span>
            </div>
            <div class="album-card-info">
                <span class="album-card-category">${album.kategori}</span>
                <h3 class="album-card-name">${album.nama}</h3>
                <div class="album-card-action">
                    <span><i class="fas fa-images"></i> Download</span>
                    <div class="arrow-circle"><i class="fas fa-arrow-right"></i></div>
                </div>
            </div>
        </div>
    `;
    return kartu;
}

function renderAlbums(animateNow) {
    const container = document.getElementById('albumsContainer');
    if (!container) return;

    container.innerHTML = '';

    const daftar = activeFilter === 'Semua'
        ? CONFIG.albums
        : CONFIG.albums.filter((a) => a.kategori === activeFilter);

    if (!daftar.length) {
        container.innerHTML = '<p class="empty-note">Belum ada album di kategori ini.</p>';
        return;
    }

    daftar.forEach((album, i) => {
        const kartu = buatKartuAlbum(album);
        if (animateNow) {
            kartu.classList.add('revealed');
            kartu.style.animationDelay = (i * 70) + 'ms';
        }
        container.appendChild(kartu);
    });

    init3DTilt();
}

function renderFilters() {
    const bar = document.getElementById('filterBar');
    if (!bar) return;

    const kategori = ['Semua', ...new Set(CONFIG.albums.map((a) => a.kategori))];

    kategori.forEach((cat) => {
        const btn = document.createElement('button');
        btn.className = 'filter-chip' + (cat === activeFilter ? ' active' : '');
        btn.textContent = cat;

        btn.addEventListener('click', () => {
            if (activeFilter === cat) return;
            activeFilter = cat;
            bar.querySelectorAll('.filter-chip').forEach((b) => b.classList.toggle('active', b === btn));
            renderAlbums(true);
        });

        bar.appendChild(btn);
    });
}

// ====== RENDER LINK SOSIAL ======
function renderSocialLinks() {
    const container = document.getElementById('linksContainer');
    if (!container) return;

    CONFIG.socialLinks.forEach((s) => {
        const kartu = document.createElement('a');
        kartu.className = 'link-card magnetic';
        kartu.href = s.link;
        kartu.target = '_blank';
        kartu.setAttribute('data-color', s.warna);

        kartu.innerHTML = `
            <div class="link-card-inner">
                <div class="link-icon"><i class="${s.ikon}"></i></div>
                <div class="link-content">
                    <span class="link-category">${s.kategori}</span>
                    <h3>${s.judul}</h3>
                    <p>${s.deskripsi}</p>
                </div>
                <div class="link-arrow"><i class="fas fa-arrow-right"></i></div>
            </div>
        `;
        container.appendChild(kartu);
    });

    // Sinkronkan tombol WA melayang dengan link whatsapp di CONFIG
    const wa = CONFIG.socialLinks.find((s) => s.warna === 'whatsapp');
    const waFloat = document.getElementById('waFloat');
    if (wa && waFloat) waFloat.href = wa.link;
}

// ====== RENDER STATS + COUNTER ======
function renderStats() {
    const container = document.getElementById('statsContainer');
    if (!container) return;

    CONFIG.stats.forEach((s) => {
        const item = document.createElement('div');
        item.className = 'stat-item reveal';
        item.innerHTML = `
            <span class="stat-number" data-target="${s.angka}" data-suffix="${s.akhiran}">0${s.akhiran}</span>
            <span class="stat-label">${s.label}</span>
        `;
        container.appendChild(item);
    });

    initCounters();
}

function initCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            observer.unobserve(el);

            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix || '';
            const durasi = 1200;
            const mulai = performance.now();

            function tick(now) {
                const p = Math.min((now - mulai) / durasi, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(target * eased) + suffix;
                if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach((n) => observer.observe(n));
}

// ====== RENDER FILMSTRIP GALERI ======
function renderFilmstrip() {
    const strip = document.getElementById('filmstrip');
    if (!strip) return;

    const foto = CONFIG.albums.filter((a) => /^https?:/.test(a.gambar));
    if (!foto.length) return;

    const html = foto.map((a) => `
        <figure class="polaroid">
            <img src="${a.gambar}" alt="${a.nama}" loading="lazy">
            <figcaption>${a.nama}</figcaption>
        </figure>
    `).join('');

    // Dua salinan supaya loop mulus tanpa patah
    strip.innerHTML = `<div class="strip-half">${html}</div><div class="strip-half">${html}</div>`;
}

// ====== RENDER LANGKAH BOOKING ======
function renderSteps() {
    const container = document.getElementById('stepsContainer');
    if (!container) return;

    CONFIG.langkah.forEach((l, i) => {
        const card = document.createElement('div');
        card.className = 'step-card reveal';
        card.innerHTML = `
            <span class="step-number">0${i + 1}</span>
            <div class="step-icon"><i class="${l.ikon}"></i></div>
            <h3>${l.judul}</h3>
            <p>${l.teks}</p>
        `;
        container.appendChild(card);
    });
}

// ====== ISI QUOTE ======
function renderQuote() {
    const el = document.getElementById('quoteText');
    if (el) el.textContent = '"' + CONFIG.kutipan + '"';
}

// ====== 3D TILT ======
function init3DTilt() {
    if (!canHover) return;
    const kekuatan = CONFIG.efek.kekuatanTilt;

    document.querySelectorAll('.album-card').forEach((card) => {
        let raf = null, rx = 0, ry = 0;

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            ry = ((e.clientX - rect.left) / rect.width - 0.5) * kekuatan;
            rx = -((e.clientY - rect.top) / rect.height - 0.5) * kekuatan;

            if (!raf) {
                raf = requestAnimationFrame(() => {
                    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
                    raf = null;
                });
            }
        });

        card.addEventListener('mouseleave', () => {
            if (raf) { cancelAnimationFrame(raf); raf = null; }
            card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
        });
    });
}

// ====== MAGNETIC ======
function initMagnetic() {
    if (!canHover) return;
    const kekuatan = CONFIG.efek.kekuatanMagnetic;

    document.querySelectorAll('.magnetic').forEach((el) => {
        el.addEventListener('mousemove', (e) => {
            const r = el.getBoundingClientRect();
            el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * kekuatan}px, ${(e.clientY - r.top - r.height / 2) * kekuatan}px)`;
        });
        el.addEventListener('mouseleave', () => { el.style.transform = 'translate(0, 0)'; });
    });
}

// ====== SCROLL REVEAL CASCADE ======
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        let i = 0;
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = (i * 90) + 'ms';
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
                i++;
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .link-card, .album-card').forEach((el) => observer.observe(el));
}

// ====== SCROLL TOP + PROGRESS RING ======
const scrollTopBtn = document.getElementById('scrollTop');
const progressRing = document.getElementById('progressRing');
const RING_CIRCUMFERENCE = 138.23;
let scrollRaf = null;

window.addEventListener('scroll', () => {
    if (scrollRaf) return;
    scrollRaf = requestAnimationFrame(() => {
        const y = window.pageYOffset;
        scrollTopBtn.classList.toggle('visible', y > 300);

        if (progressRing) {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const p = max > 0 ? Math.min(y / max, 1) : 0;
            progressRing.style.strokeDashoffset = RING_CIRCUMFERENCE * (1 - p);
        }
        scrollRaf = null;
    });
}, { passive: true });

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ====== SHARE ======
document.getElementById('shareBtn').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: CONFIG.profil.nama,
                text: CONFIG.profil.teksShare,
                url: window.location.href
            });
        } catch (error) {
            console.log('Share dibatalkan');
        }
    } else {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showToast(CONFIG.pesan.linkTersalin);
        }).catch(() => {
            showToast(CONFIG.pesan.gagalSalin);
        });
    }
});

// ====== MULAI ======
document.addEventListener('DOMContentLoaded', () => {
    renderAlbums(false);
    renderFilters();
    renderSocialLinks();
    renderStats();
    renderFilmstrip();
    renderSteps();
    renderQuote();
    initMagnetic();
    setupScrollReveal();
});