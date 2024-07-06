export interface IconProps {
	name: IconName;
	width?: string;
	height?: string;
	onClick?: () => void;
}

type IconName = "apps/google-play" | "apps/app-store";
