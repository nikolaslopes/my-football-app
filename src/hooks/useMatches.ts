import { useQuery } from "@tanstack/react-query";

import { httpClient } from "../services/client/httpClient";

interface Match {
	id: number;
	matchday: number;
	homeTeam: { shortName: string; crest: string; tla: string };
	awayTeam: { shortName: string; crest: string; tla: string };
	utcDate: string;
	competition: {
		name: string;
	};
}

interface matchesprops {
	matches: Array<Match>;
	competition: {
		name: string;
	};
}

const fetchChampionshipDetails = async (id: string | undefined) => {
	const { data } = await httpClient.get<matchesprops>(
		`/competitions/${id}/matches`,
	);

	return data;
};

export function useMatches(id: string | undefined) {
	const { data, isFetching } = useQuery({
		queryKey: ["championship", "matches", id],
		queryFn: () => fetchChampionshipDetails(id),
		enabled: !!id,
	});

	return {
		matches: data?.matches ?? [],
		competition: data?.competition,
		isFetching,
	};
}
