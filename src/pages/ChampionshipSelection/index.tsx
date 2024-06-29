import { BaseLayout } from "../../components/BaseLayout";

import { ChampionshipsList } from "./components/ChampionshipsList";
import { useChampionshipSelection } from "./useChampionshipSelection";

export function ChampionshipSelection() {
	const { championships, isFetching } = useChampionshipSelection();

	return (
		<BaseLayout subHeader="Selecione o campeonato" isFetching={isFetching}>
			<ChampionshipsList championships={championships} />
		</BaseLayout>
	);
}
