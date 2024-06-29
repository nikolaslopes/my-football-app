import { httpClient } from "./client/httpClient";

import type { Match } from "../entities/Match/default";
import { ChampionshipMatchMapperInstance } from "./mappers/ChampionshipMatchMapper";

type ChampionshipMatchesResponse = {
	matches: Array<Match>;
	competition: {
		name: string;
	};
};

export async function getChampionshipMatches(id: string | undefined) {
	const { data } = await httpClient.get<ChampionshipMatchesResponse>(
		`/competitions/${id}/matches`,
	);

	const matches = data.matches.map((match) =>
		ChampionshipMatchMapperInstance.toDomain(match),
	);

	const competition = data.competition;

	return { matches, competition };
}
