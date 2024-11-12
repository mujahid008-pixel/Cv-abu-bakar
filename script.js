// Animasi tambahan saat tombol ditekan
document.querySelector('.explore-btn').addEventListener('click', () => {
    alert('Selamat datang di blog kami! Mulailah menjelajahi artikel kami.');
});

// Scroll event untuk mengubah efek pada header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.style.backgroundPositionY = $ <window.scrollY * 0.5> px;
});

// Animasi untuk memperlihatkan artikel saat di-scroll
const blogPosts = document.querySelectorAll('.blog-post');
window.addEventListener('scroll', () => {
    blogPosts.forEach((post) => {
        const rect = post.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            post.style.opacity = 1;
            post.style.transform = 'translateY(0)';
        }
    });
});

// Memilih elemen modal
const modalOverlay = document.getElementById('modalOverlay');
const exploreBtn = document.querySelector('.explore-btn');
const closeBtn = document.getElementById('closeBtn');
const exploreBtnModal = document.getElementById('exploreBtnModal');

// Membuka modal saat tombol "Explore Now" diklik
exploreBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

// Menutup modal saat tombol "X" diklik
closeBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

// Menutup modal saat tombol "Explore Now" di dalam modal diklik
exploreBtnModal.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    alert("Mulailah menjelajahi blog kami!");
});

// Menutup modal saat overlay di luar modal diklik
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});

// Munculkan section saat di-scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

sections.forEach((section) => {
    observer.observe(section);
});

