import { createContext, useContext } from "react";

export const ToggleSideBarContext = createContext();
export const ToggleConetext = createContext();
export function useSideBar() {
  return {
    toggleButton: useContext(ToggleConetext),
    toggleSideBar: useContext(ToggleSideBarContext),
  };
}
