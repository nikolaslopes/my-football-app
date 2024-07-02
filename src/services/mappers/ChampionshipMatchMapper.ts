import type { MatchDomain } from "../../entities/Match/MatchDomain";
import type { Match } from "../../entities/Match/default";

class ChampionshipMatchMapper {
	toDomain(persistenceChampionshipMatch: Match): MatchDomain {
		return {
			id: String(persistenceChampionshipMatch.id),
			date: persistenceChampionshipMatch.utcDate,
			matchDay: persistenceChampionshipMatch.matchday,
			homeTeam: {
				name: persistenceChampionshipMatch.homeTeam.shortName,
				logo: persistenceChampionshipMatch.homeTeam.crest,
				tla: persistenceChampionshipMatch.homeTeam.tla,
			},
			awayTeam: {
				name: persistenceChampionshipMatch.awayTeam.shortName,
				logo: persistenceChampionshipMatch.awayTeam.crest,
				tla: persistenceChampionshipMatch.awayTeam.tla,
			},
		};
	}
}

export const ChampionshipMatchMapperInstance = new ChampionshipMatchMapper();
