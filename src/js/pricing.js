import "../css/pricing.scss";
import "../css/style.css";
import { useActiveNav } from "./components/activeNav";
import { useTheme } from "./components/theme";
import { useBurger } from "./components/burger";
import { usePriceSwitcher } from "./components/plans";

useActiveNav();
useTheme();
useBurger();
usePriceSwitcher();
