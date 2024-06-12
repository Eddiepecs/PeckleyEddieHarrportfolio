function toggleSocialLinks() {
  var socialLinks = document.querySelector('.social-links');
  socialLinks.classList.toggle('hidden');
}

document.querySelector('.header-content').addEventListener('click', function (event) {
  // Check if the clicked element is not a link inside the header
  if (!event.target.closest('a')) {
    toggleSocialLinks();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
