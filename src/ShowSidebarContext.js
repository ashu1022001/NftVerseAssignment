import { createContext,useContext } from "react";

export const ToggleSideBarContext = createContext();
export const ToggleConetext = createContext();
export function useToggle() {
  return useContext(ToggleConetext);
}
export function useToggleSideBar() {
  return useContext(ToggleSideBarContext);
}