// JavaScript to add 'animate-fade' class when DOM is ready (for better performance)
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.animate-fade');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
});
