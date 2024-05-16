import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function useTheme() {
  return useContext(ThemeContext);
}
