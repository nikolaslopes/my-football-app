import { useQuery } from "@tanstack/react-query";

import { getChampionshipMatches } from "../services/getChampionshipMatches";

export function useChampionshipMatches(id: string | undefined) {
	const { data, isFetching } = useQuery({
		queryKey: ["championship", "matches", id],
		queryFn: () => getChampionshipMatches(id),
		enabled: Boolean(id),
	});

	return {
		matches: data?.matches ?? [],
		competition: data?.competition,
		isFetching,
	};
}
