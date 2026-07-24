import intlTelInput from "intl-tel-input";
import "intl-tel-input/dist/css/intlTelInput.css";

const getCountryByIp = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    if (!response.ok) return "us";

    const data = await response.json();
    return (data.country_code || "us").toLowerCase();
  } catch {
    return "us";
  }
};

export const usePhone = () => {
  const input = document.querySelector("#phone");
  if (!input) return;

  intlTelInput(input, {
    initialCountry: "auto",
    initialCountryLookup: getCountryByIp,
    placeholderNumberPolicy: "POLITE",
    placeholderNumberType: "MOBILE",
    loadUtils: () => import("intl-tel-input/utils"),
  });
};
