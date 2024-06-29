import { useChampionship } from "../../hooks/useChampionship";

export function useChampionshipSelection() {
	const { championships, isFetching } = useChampionship();

	return {
		championships,
		isFetching,
	};
}
