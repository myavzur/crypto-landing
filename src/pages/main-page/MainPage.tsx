import cn from "classnames";
import { FC } from "react";

import BitcoinSvg from "@/assets/vectors/currencies/bitcoin.svg?react";
import EthereumSvg from "@/assets/vectors/currencies/ethereum.svg?react";
import LitecoinSvg from "@/assets/vectors/currencies/litecoin.svg?react";

import { useResponsiveContext } from "@/hooks";

import { Button } from "@/components/button";
import { Counter } from "@/components/counter";
import { FeedbackCard } from "@/components/feedback-card";
import { GradientText } from "@/components/gradient-text";
import { Icon } from "@/components/icon";
import { StoreCard } from "@/components/store-card";

import styles from "./MainPage.module.scss";
import { countersMockData, feedbackMockData } from "./mock";

const MainPage: FC = () => {
	const { isMobile } = useResponsiveContext();

	return (
		<main className={styles.page}>
			{!isMobile && (
				<div
					className={cn(
						styles.container,
						styles.container_absolute,
						styles["container_role-currencies"]
					)}
				>
					<BitcoinSvg className={cn(styles.currency, styles.currency_bitcoin)} />
					<LitecoinSvg className={cn(styles.currency, styles.currency_litecoin)} />
					<EthereumSvg className={cn(styles.currency, styles.currency_ethereum)} />
				</div>
			)}

			<div
				className={cn(
					styles.container,
					styles.container_absolute,
					styles["container_role-feedback"]
				)}
			>
				<div className={styles.feedback}>
					{feedbackMockData.map((feedback) => (
						<FeedbackCard
							key={feedback.accountTag}
							{...feedback}
						/>
					))}
				</div>
			</div>

			<div className={cn(styles.container, styles["container_role-content"])}>
				<h1 className={styles.page__title}>
					Do you want to Learn more About cryptocurrencies{" "}
					<GradientText>quickly and easily ?</GradientText>
				</h1>

				<p className={styles.page__verbose}>
					Subscribe to our channel to learn more
				</p>

				<section className={styles.page__counters}>
					{countersMockData.map((counter) => (
						<Counter
							key={counter.name}
							{...counter}
							size={isMobile ? "sm" : undefined}
						/>
					))}
				</section>

				<section className={styles.page__button}>
					<Button size={isMobile ? "sm" : undefined}>Join Whatsapp</Button>
				</section>

				<section className={styles.page__stores}>
					<StoreCard
						iconElement={<Icon name="apps/google-play" />}
						catchPhrase="get it on"
						storeName="Google play"
						size={isMobile ? "sm" : undefined}
					/>

					<StoreCard
						iconElement={<Icon name="apps/app-store" />}
						catchPhrase="Available on the"
						storeName="App Store"
						size={isMobile ? "sm" : undefined}
					/>
				</section>
			</div>
		</main>
	);
};

export default MainPage;
