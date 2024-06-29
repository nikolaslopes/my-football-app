import { useQuery } from "@tanstack/react-query";

import { getChampionships } from "../services/getChampionships";

export function useChampionship() {
	const { data, isFetching } = useQuery({
		queryKey: ["championships"],
		queryFn: getChampionships,
	});

	return {
		championships: data ?? [],
		isFetching,
	};
}
