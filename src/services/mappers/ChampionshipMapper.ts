import type { ChampionshipDomain } from "../../entities/Championship/ChampionshipDomain";
import type { Championship } from "../../entities/Championship/default";

class ChampionshipMapper {
	toDomain(domainChampionship: Championship): ChampionshipDomain {
		return {
			id: String(domainChampionship.id),
			name: domainChampionship.name,
			code: domainChampionship.code,
			logo: domainChampionship.emblem,
		};
	}
}

export const ChampionshipMapperInstance = new ChampionshipMapper();
