import "@/assets/styles/main.scss";

import MainPage from "@/pages/main-page";

import { ResponsiveContextProvider } from "./contexts/responsive";

function App() {
	return (
		<ResponsiveContextProvider>
			<MainPage />
		</ResponsiveContextProvider>
	);
}

export default App;
