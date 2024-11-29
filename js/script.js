document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav > ul > li');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  });