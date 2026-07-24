export const useTheme = () => {
  const themeTarget =
    document.querySelector("body[data-theme]") ||
    document.querySelector("[data-theme='light'], [data-theme='dark']");
  const themeSwitcher = document.querySelector("[data-theme-switcher]");

  if (!themeTarget || !themeSwitcher) return;

  const themeTargetDataset = themeTarget.dataset;
  const theme = localStorage.getItem("theme") || "light";
  themeTargetDataset.theme = theme;

  if (theme === "dark") {
    themeSwitcher.checked = true;
  }

  themeSwitcher.addEventListener("click", function () {
    const theme = localStorage.getItem("theme") || "light";

    if (theme === "light") {
      themeTarget.dataset.theme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      themeTarget.dataset.theme = "light";
      localStorage.setItem("theme", "light");
    }
  });
};
