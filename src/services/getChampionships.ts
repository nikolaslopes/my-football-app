import type { Championship } from "../entities/Championship/default";

import { httpClient } from "./client/httpClient";

import { ChampionshipMapperInstance } from "./mappers/ChampionshipMapper";

type ChampionshipsResponse = {
	competitions: Array<Championship>;
};

export async function getChampionships() {
	const { data } = await httpClient.get<ChampionshipsResponse>("/competitions");

	return data.competitions.map((competition) =>
		ChampionshipMapperInstance.toDomain(competition),
	);
}
