document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");
  const menuIcon = document.getElementById("menu-icon");
  const navList = document.getElementById("nav-list");

  function changeActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  function revealSections() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = 150;

      if (sectionTop < window.innerHeight - sectionVisible) {
        section.classList.add("show");
      } else {
        section.classList.remove("show");
      }
    });
  }

  function toggleMenu() {
    navList.classList.toggle("show");
  }

  changeActiveLink();
  revealSections();
  window.addEventListener("scroll", () => {
    changeActiveLink();
    revealSections();
  });

  menuIcon.addEventListener("click", toggleMenu);
});
