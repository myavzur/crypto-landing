import adalinaAvatarSrc from "@/assets/images/avatars/adalina.jpg";
import alexanderAvatarSrc from "@/assets/images/avatars/alexander.jpg";
import lorenzoAvatarSrc from "@/assets/images/avatars/lorenzo.jpg";
import rushanaAvatarSrc from "@/assets/images/avatars/rushana.jpg";

import { FeedbackCardProps } from "@/components/feedback-card";

export const feedbackMockData: FeedbackCardProps[] = [
	{
		image: {
			src: lorenzoAvatarSrc,
			alt: "Lorenzo avatar"
		},
		name: "Lorenzo",
		accountTag: "@lorenzoo",
		description: "Amazing Telegram bot! Provides real-time crypto prices and news"
	},
	{
		image: {
			src: adalinaAvatarSrc,
			alt: "Adalina avatar"
		},
		name: "Adalina",
		accountTag: "@ada",
		description: "Must-have bot for crypto traders. Accurate signals and analysis"
	},
	{
		image: {
			src: alexanderAvatarSrc,
			alt: "Alexander avatar"
		},
		name: "Alexander",
		accountTag: "@alex_x",
		description: "Superb cryptocurrency bot! Quick updates and reliable data"
	},
	{
		image: {
			src: rushanaAvatarSrc,
			alt: "Rushana avatar"
		},
		name: "Rushana",
		accountTag: "@Hana",
		description: "Efficient and user-friendly bot. Simplifies crypto trading tasks"
	}
];
