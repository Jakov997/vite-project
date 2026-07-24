export const usePriceSwitcher = () => {
  const switcher = document.querySelector("[data-price='switcher']");
  const starterPrice = document.querySelector("[data-price='starter']");
  const popularPrice = document.querySelector("[data-price='popular']");
  const enterPrice = document.querySelector("[data-price='enterprice']");

  const priceList = {
    starter: {
      default: 120,
      discount: 100,
    },

    popular: {
      default: 1680,
      discount: 1400,
    },

    enterprice: {
      default: 2520,
      discount: 2100,
    },
  };

  const setPriceDiscount = () => {
    starterPrice.textContent = priceList.starter.discount;
    popularPrice.textContent = priceList.popular.discount;
    enterPrice.textContent = priceList.enterprice.discount;
  };

  const setPriceDefault = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterPrice.textContent = priceList.enterprice.default;
  };

  switcher.checked = true;

  switcher.addEventListener("click", function () {
    if (switcher.checked) {
      setPriceDiscount();
    } else {
      setPriceDefault();
    }
  });
};
