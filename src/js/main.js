import "../css/main.scss";
import "../css/style.css";
import { useActiveNav } from "./components/activeNav";
import { useTheme } from "./components/theme";
import { useBurger } from "./components/burger";
import { useInsightSlider, useTestimonialSlider } from "./components/slider";

useActiveNav();
useTheme();
useBurger();
useInsightSlider();
useTestimonialSlider();
