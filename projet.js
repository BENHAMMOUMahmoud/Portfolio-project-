document.getElementById("hamburger-btn").addEventListener("click", function() {
    const nav = document.querySelector("header nav ul");
    nav.classList.toggle("active");  
});
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Affiche après 300px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});