import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function useUser() {
  return useContext(UserContext);
}
