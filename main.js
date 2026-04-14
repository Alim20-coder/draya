document.addEventListener("DOMContentLoaded", function() {
    // 1. ظهور العناصر بتتابع (Staggered Reveal)
    const items = document.querySelectorAll('.reveal-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.transition = "all 1s cubic-bezier(0.215, 0.61, 0.355, 1)";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, 200 * (index + 1));
    });

    window.addEventListener('scroll', function() {
        const scroll = window.pageYOffset;
        const bg = document.querySelector('.hero-bg');
        const overlay = document.querySelector('.hero-overlay');
        
        bg.style.transform = `translateY(${scroll * 0.3}px)`;
        overlay.style.opacity = 1 + (scroll * 0.001);
    });
});
// Hero Section Logic /////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-item').forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = "all 0.8s ease-out";
        observer.observe(item);
    });
});

// Services Section Logic /////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
            const track = document.querySelector('.testimonial-track');
            
            const originalContent = track.innerHTML;
            track.innerHTML += originalContent; // نضاعف المحتوى مرة واحدة كافية

            let scrollAmount = 0;
            let isHovered = false;

            const speed = 1; 

            function scrollTestimonials() {
                if (!isHovered) {
                    scrollAmount += speed; 

                    if (scrollAmount >= track.scrollWidth / 2) {
                        scrollAmount = 0;
                    }

                    track.style.transform = `translateX(${scrollAmount}px)`;
                }
                requestAnimationFrame(scrollTestimonials);
            }

            track.addEventListener('mouseenter', () => isHovered = true);
            track.addEventListener('mouseleave', () => isHovered = false);

            // بدء التشغيل
            scrollTestimonials();
        });
        // nav scrool logic//////////
        const nav = document.querySelector('.custom-nav');
nav.style.position = 'fixed';
nav.style.width = '80%';
nav.style.top = '0';
nav.style.zIndex = '1000';
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('.custom-nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            // إضافة خلفية داكنة وظل عند النزول
            nav.style.backgroundColor = "rgba(10, 10, 10, 0.95)"; 
            nav.style.backdropFilter = "blur(10px)";
            nav.style.transition = "0.4s all ease";
        } else {
            // العودة للحالة الشفافة عند الصعود للأعلى
            nav.style.backgroundColor = "transparent";
            nav.style.backdropFilter = "none";
        }
    });
});