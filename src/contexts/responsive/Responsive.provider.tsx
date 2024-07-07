import { FC, PropsWithChildren, useState } from "react";

import { useWindowEvent } from "@/hooks";

import { ResponsiveContext } from "./Responsive.context";

const widthBreakpoints = {
	mobile: 320
};

export const ResponsiveContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isMobile, setIsMobile] = useState(false);

	useWindowEvent("resize", () => {
		if (window.innerWidth <= widthBreakpoints.mobile) {
			return setIsMobile(true);
		}

		setIsMobile(false);
	});

	return (
		<ResponsiveContext.Provider value={{ isMobile }}>
			{children}
		</ResponsiveContext.Provider>
	);
};
