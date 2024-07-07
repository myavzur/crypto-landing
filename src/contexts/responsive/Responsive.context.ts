import { createContext } from "react";

export interface ResponsiveContextState {
	isMobile: boolean;
}

export const ResponsiveContext = createContext<ResponsiveContextState>({
	isMobile: false
});
