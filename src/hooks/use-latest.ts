import { useLayoutEffect, useRef } from "react";

export const useLatest = <T>(value: T) => {
	const latestRef = useRef(value);

	useLayoutEffect(() => {
		latestRef.current = value;
	});

	return latestRef;
};
