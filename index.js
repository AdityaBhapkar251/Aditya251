    function showSection(sectionId, event) {
        if (event) event.preventDefault(); // Prevent default behavior of the anchor links

        const sections = document.querySelectorAll('.content-section');
        const menuItems = document.querySelectorAll('.menu-bar ul li a');

        // Hide all sections and remove the active and animation classes
        sections.forEach(section => {
            section.style.display = 'none';
            section.classList.remove('active', 'fade-in-slide-up');
        });

        // Remove 'active' class from all menu items
        menuItems.forEach(item => item.classList.remove('active'));

        // Show the clicked section and apply animation
        const selectedSection = document.getElementById(sectionId);
        selectedSection.style.display = 'block';
        selectedSection.classList.add('active', 'fade-in-slide-up');

        // Add 'active' class to the clicked menu item
        document.getElementById(sectionId + '-menu').classList.add('active');
    }

    // By default, show the 'About Me' section and make the corresponding menu item active
    document.addEventListener('DOMContentLoaded', () => {
        showSection('about');
    });
    // Function to observe when project items come into view
function revealOnScroll() {
    const projectItems = document.querySelectorAll('.project-item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Add the 'show' class when item is in view
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    projectItems.forEach(item => {
        observer.observe(item); // Start observing each project item
    });
}

// Call the function after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
});

// Reset scroll reveal on section change
function resetProjectsScroll() {
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
    item.classList.remove('show'); // Hide all projects initially
});

// Re-initialize the observer
revealOnScroll();
}

// Trigger section switching and scroll reveal reset
document.addEventListener('DOMContentLoaded', () => {
// Initialize reveal on scroll
revealOnScroll();

// Reset project scroll reveal when switching to "Projects" section
const projectMenu = document.getElementById('projects-menu');
projectMenu.addEventListener('click', () => {
    resetProjectsScroll();
});
});

// JavaScript to trigger skills animation when in view
document.addEventListener('DOMContentLoaded', () => {
    const skillCategories = document.querySelectorAll('.skills-category');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Add active class to trigger the animation
                observer.unobserve(entry.target); // Stop observing after animation is triggered
            }
        });
    }, { threshold: 0.2 });

    skillCategories.forEach(category => {
        observer.observe(category);
    });
});

