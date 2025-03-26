/*=============== MENU TOGGLE ===============*/
const navMenu = document.querySelector('.nav__menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
};

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.querySelector('header');
    // When the scroll is greater than 50 viewport height, add the shadow-header class
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header');
};

window.addEventListener('scroll', shadowHeader);

/*=============== PROJECTS SLIDER ===============*/
let projectIndex = 0;
const projectsSlider = document.getElementById('projects-slider');
const projectItems = document.querySelectorAll('.projects__item');
const projectPrevBtn = document.getElementById('project-prev');
const projectNextBtn = document.getElementById('project-next');

// Set up initial positioning
if (projectItems.length > 0) {
    const itemWidth = projectItems[0].clientWidth;
    const totalProjects = projectItems.length;

    const showProjects = () => {
        projectsSlider.style.transform = `translateX(-${projectIndex * itemWidth}px)`;
    };

    const nextProject = () => {
        projectIndex = (projectIndex < totalProjects - 1) ? projectIndex + 1 : 0;
        showProjects();
    };

    const prevProject = () => {
        projectIndex = (projectIndex > 0) ? projectIndex - 1 : totalProjects - 1;
        showProjects();
    };

    // Event Listeners
    if (projectPrevBtn) projectPrevBtn.addEventListener('click', prevProject);
    if (projectNextBtn) projectNextBtn.addEventListener('click', nextProject);

    // Initialize projects positioning
    showProjects();

    // Auto slide projects every 5 seconds
    setInterval(nextProject, 5000);
}

/*=============== CERTIFICATE SLIDER ===============*/
let certificateIndex = 0;
const certificateSlider = document.getElementById('certificate-slider');
const certificateItems = document.querySelectorAll('.certificate__item');
const certificatePrevBtn = document.getElementById('certificate-prev');
const certificateNextBtn = document.getElementById('certificate-next');

// Set up initial positioning
if (certificateItems.length > 0) {
    const itemWidth = certificateItems[0].clientWidth;
    const totalCertificates = certificateItems.length;

    const showCertificates = () => {
        certificateSlider.style.transform = `translateX(-${certificateIndex * itemWidth}px)`;
    };

    const nextCertificate = () => {
        certificateIndex = (certificateIndex < totalCertificates - 1) ? certificateIndex + 1 : 0;
        showCertificates();
    };

    const prevCertificate = () => {
        certificateIndex = (certificateIndex > 0) ? certificateIndex - 1 : totalCertificates - 1;
        showCertificates();
    };

    // Event Listeners
    if (certificatePrevBtn) certificatePrevBtn.addEventListener('click', prevCertificate);
    if (certificateNextBtn) certificateNextBtn.addEventListener('click', nextCertificate);

    // Initialize certificates positioning
    showCertificates();

    // Auto slide certificates every 5 seconds
    setInterval(nextCertificate, 5000);
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const sectionLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionLink.classList.add('active');
        } else {
            sectionLink.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    // When the scroll is higher than 350 viewport height, add the show-scroll class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

/*=============== FORM SUBMISSION ===============*/
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const project = document.getElementById('project').value;

        // Basic validation
        if (!name || !email || !project) {
            alert('Please fill in all fields');
            return;
        }

        // Here you would normally send the form data to a server
        // Since this is a static clone, we'll just simulate a success message
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

/*=============== HANDLE WINDOW RESIZE ===============*/
const handleResize = () => {
    // Recalculate slider positions on window resize
    if (projectItems.length > 0) {
        const itemWidth = projectItems[0].clientWidth;
        projectsSlider.style.transform = `translateX(-${projectIndex * itemWidth}px)`;
    }

    if (certificateItems.length > 0) {
        const itemWidth = certificateItems[0].clientWidth;
        certificateSlider.style.transform = `translateX(-${certificateIndex * itemWidth}px)`;
    }
};

window.addEventListener('resize', handleResize);
