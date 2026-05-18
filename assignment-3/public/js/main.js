document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggles = document.querySelectorAll('.dropdown > a');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', (event) => {
      event.preventDefault();
      const menu = toggle.nextElementSibling;

      dropdownMenus.forEach((item) => {
        if (item !== menu) {
          item.classList.remove('open');
        }
      });

      if (menu && menu.classList.contains('dropdown-menu')) {
        menu.classList.toggle('open');
      }
    });
  });

  window.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
      dropdownMenus.forEach((menu) => {
        menu.classList.remove('open');
      });
    }
  });

  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
});
