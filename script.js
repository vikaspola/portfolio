// Fade-in animation on scroll
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
// Scroll-to-top button behavior
window.onscroll = function() {
  const btn = document.getElementById("scrollTopBtn");
  btn.style.display = window.scrollY > 200 ? "block" : "none";
};

document.getElementById("scrollTopBtn").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

