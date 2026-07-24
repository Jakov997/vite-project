export const useBurger = () => {
  const burgerBtn = document.querySelector("[data-theme='btn']");
  const burgerMenu = document.querySelector("[data-theme='menu']");
  const burgerOverlay = document.querySelector("[data-burger='overlay']");
  const body = document.body;

  burgerBtn.addEventListener("click", function () {
    burgerBtn.classList.toggle("burger--active");
    burgerOverlay.classList.toggle("overlay--active");
    burgerMenu.classList.toggle("header__right--active");
    body.classList.toggle("body--fixed");
  });

  burgerOverlay.addEventListener("click", function () {
    burgerBtn.classList.remove("burger--active");
    burgerOverlay.classList.remove("overlay--active");
    burgerMenu.classList.remove("header__right--active");
    body.classList.remove("body--fixed");
  });
};
