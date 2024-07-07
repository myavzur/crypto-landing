import { useContext } from "react";

import { ResponsiveContext, ResponsiveContextState } from "@/contexts/responsive";

export const useResponsiveContext = () => {
	const context = useContext(ResponsiveContext) as ResponsiveContextState;
	if (!context) {
		throw new Error("Use Responsive Context within Responsive Context Provider!");
	}
	return context;
};
