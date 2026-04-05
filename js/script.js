document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       Theme Toggle (Dark / Light Mode)
    ========================================= */
    const themeBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    const themeIcon = themeBtn.querySelector('i');

    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if(theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    /* =========================================
       Mobile Navigation Toggle
    ========================================= */
    const mobileToggle = document.getElementById('mobile-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    /* =========================================
       Enrollment Form Submission
    ========================================= */
    const enrollForm = document.getElementById('enrollForm');
    const formStatus = document.getElementById('formStatus');

    if(enrollForm) {
        enrollForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = enrollForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            btn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                formStatus.style.display = 'block';
                formStatus.className = 'form-status status-success';
                formStatus.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your application has been received. We will contact you shortly.';
                
                enrollForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;

                // Hide status message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }

    /* =========================================
       Navbar Scroll Effect
    ========================================= */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = 'var(--shadow)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = 'none';
        }
    });

});
