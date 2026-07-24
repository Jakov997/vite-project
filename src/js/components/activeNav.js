export const useActiveNav = () => {
  const currentPage = document.body.dataset.page;
  const navLinks = document.querySelectorAll(".nav__link[data-page]");

  if (!currentPage || !navLinks.length) return;

  navLinks.forEach((link) => {
    const isActive = link.dataset.page === currentPage;

    link.classList.toggle("nav__link--active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};
