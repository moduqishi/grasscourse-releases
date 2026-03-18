// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('bg-white/90', 'dark:bg-slate-900/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
        navbar.classList.remove('bg-transparent', 'py-5');
    } else {
        navbar.classList.remove('bg-white/90', 'dark:bg-slate-900/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
        navbar.classList.add('bg-transparent', 'py-5');
    }
});

// Theme Logic (Auto-detection only)
const htmlElement = document.documentElement;

// Check for saved theme preference or system preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
    const icon = menuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.setAttribute('data-lucide', 'menu');
    } else {
        icon.setAttribute('data-lucide', 'x');
    }
    lucide.createIcons();
}

menuBtn.addEventListener('click', toggleMenu);

// Close menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = menuBtn.querySelector('i');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// FAQ Accordion Logic
document.addEventListener('click', (e) => {
    const faqHeader = e.target.closest('.faq-header');
    if (faqHeader) {
        const faqItem = faqHeader.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');
        const faqIcon = faqHeader.querySelector('.faq-icon');
        
        // Toggle current
        const isOpen = !faqAnswer.classList.contains('hidden');
        
        // Close all others
        document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.add('hidden'));
        document.querySelectorAll('.faq-icon').forEach(icon => icon.style.transform = 'rotate(0deg)');
        
        if (!isOpen) {
            faqAnswer.classList.remove('hidden');
            faqIcon.style.transform = 'rotate(180deg)';
        }
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
