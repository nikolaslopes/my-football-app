import { Box } from "@chakra-ui/react";
import { BaseLayout } from "../../components/BaseLayout";

import { ScrollToTopButton } from "../../components/ScrollToTopButton";
import { Filters } from "./components/Filters";
import { Header } from "./components/Header";
import { MatchesList } from "./components/MatchesList";

import { useChampionshipDetails } from "./useChampionshipDetails";

export function ChampionshipDetails() {
	const {
		isFetching,
		competition,
		teams,
		rounds,
		selectedTeam,
		selectedRound,
		setSelectedTeam,
		setSelectedRound,
		groupedMatches,
		showScrollButton,
		handleScrollToTop,
	} = useChampionshipDetails();

	return (
		<BaseLayout subHeader="Detalhes do campeonato" isFetching={isFetching}>
			<Box width={"100%"}>
				<Filters
					teams={teams}
					rounds={rounds}
					selectedTeam={selectedTeam}
					selectedRound={selectedRound}
					setSelectedTeam={setSelectedTeam}
					setSelectedRound={setSelectedRound}
				/>

				<Header title={competition?.name} />

				<MatchesList groupedMatches={groupedMatches} />

				{showScrollButton && (
					<ScrollToTopButton onScrollToTop={handleScrollToTop} />
				)}
			</Box>
		</BaseLayout>
	);
}
