import { Route, Routes } from "react-router-dom";

import { ChampionshipDetails } from "./pages/ChampionshipDetails";
import { ChampionshipSelection } from "./pages/ChampionshipSelection";
import { Home } from "./pages/Home";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/championship" element={<ChampionshipSelection />} />
			<Route path="/championships/:id" element={<ChampionshipDetails />} />
		</Routes>
	);
}
