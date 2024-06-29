import type { ChampionshipDomain } from "../../entities/Championship/ChampionshipDomain";
import type { Championship } from "../../entities/Championship/default";

class ChampionshipMapper {
	toDomain(persistenceChampionship: Championship): ChampionshipDomain {
		return {
			id: String(persistenceChampionship.id),
			name: persistenceChampionship.name,
			code: persistenceChampionship.code,
			logo: persistenceChampionship.emblem,
		};
	}
}

export const ChampionshipMapperInstance = new ChampionshipMapper();
