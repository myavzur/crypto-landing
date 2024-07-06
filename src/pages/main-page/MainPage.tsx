import cn from "classnames";
import { FC } from "react";

import adalinaAvatarSrc from "@/assets/images/avatars/adalina.jpg";
import alexanderAvatarSrc from "@/assets/images/avatars/alexander.jpg";
import lorenzoAvatarSrc from "@/assets/images/avatars/lorenzo.jpg";
import rushanaAvatarSrc from "@/assets/images/avatars/rushana.jpg";
import BitcoinSvg from "@/assets/vectors/currencies/bitcoin.svg?react";
import EthereumSvg from "@/assets/vectors/currencies/ethereum.svg?react";
import LitecoinSvg from "@/assets/vectors/currencies/litecoin.svg?react";

import { Button } from "@/components/button";
import { Counter } from "@/components/counter";
import { FeedbackCard } from "@/components/feedback-card";
import { Icon } from "@/components/icon";
import { StoreCard } from "@/components/store-card";

import styles from "./MainPage.module.scss";

const MainPage: FC = () => {
	return (
		<main className={styles.page}>
			<div
				className={cn(
					styles.container,
					styles.container_absolute,
					styles["container_role-feedback"]
				)}
			>
				<BitcoinSvg className={cn(styles.currency, styles.currency_bitcoin)} />
				<LitecoinSvg className={cn(styles.currency, styles.currency_litecoin)} />
				<EthereumSvg className={cn(styles.currency, styles.currency_ethereum)} />
			</div>

			<div
				className={cn(
					styles.container,
					styles.container_absolute,
					styles["container_role-feedback"]
				)}
			>
				<div className={styles.feedback}>
					<FeedbackCard
						image={{
							src: lorenzoAvatarSrc,
							alt: "Lorenzo avatar"
						}}
						name="Lorenzo"
						accountTag="@lorenzoo"
						description="Amazing Telegram bot! Provides real-time crypto prices and news"
					/>

					<FeedbackCard
						image={{
							src: adalinaAvatarSrc,
							alt: "Adalina avatar"
						}}
						name="Adalina"
						accountTag="@ada"
						description="Must-have bot for crypto traders. Accurate signals and analysis"
					/>

					<FeedbackCard
						image={{
							src: alexanderAvatarSrc,
							alt: "Alexander avatar"
						}}
						name="Alexander"
						accountTag="@alex_x"
						description="Superb cryptocurrency bot! Quick updates and reliable data"
					/>

					<FeedbackCard
						image={{
							src: rushanaAvatarSrc,
							alt: "Rushana avatar"
						}}
						name="Rushana"
						accountTag="@Hana"
						description="Efficient and user-friendly bot. Simplifies crypto trading tasks"
					/>
				</div>
			</div>

			<div className={cn(styles.container, styles["container_role-content"])}>
				<h1 className={styles.page__title}>
					Do you want to Learn more About cryptocurrencies{" "}
					<span className={styles["gradient-text"]}>quickly and easily ?</span>
				</h1>

				<p className={styles.page__verbose}>
					Subscribe to our channel to learn more
				</p>

				<section className={styles.page__counters}>
					<Counter
						name="subscribers"
						value="20k+"
					/>

					<Counter
						name="successful cases"
						value="19,5K"
					/>

					<Counter
						name="rating"
						value="4.8/5"
					/>
				</section>

				<section className={styles.page__button}>
					<Button>Join Whatsapp</Button>
				</section>

				<section className={styles.page__stores}>
					<StoreCard
						iconElement={<Icon name="apps/google-play" />}
						catchPhrase="get it on"
						storeName="Google play"
					/>

					<StoreCard
						iconElement={<Icon name="apps/app-store" />}
						catchPhrase="Available on the"
						storeName="App Store"
					/>
				</section>
			</div>
		</main>
	);
};

export default MainPage;
