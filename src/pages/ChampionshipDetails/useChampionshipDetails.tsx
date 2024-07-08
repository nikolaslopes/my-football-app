import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { MatchDomain } from "../../entities/Match/MatchDomain";
import type { TeamDomain } from "../../entities/Team/TeamDomain";
import { useChampionshipMatches } from "../../hooks/useChampionshipMatches";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export function useChampionshipDetails() {
	const { id } = useParams();
	const { matches = [], competition, isFetching } = useChampionshipMatches(id);
	const { showScrollButton, handleScrollToTop } = useScrollToTop();

	const [teams, setTeams] = useState<TeamDomain[]>([]);
	const [rounds, setRounds] = useState<number[]>([]);
	const [selectedTeam, setSelectedTeam] = useState<TeamDomain | null>(null);
	const [selectedRound, setSelectedRound] = useState<string>("");

	useEffect(() => {
		if (matches.length > 0) {
			const teamsList: TeamDomain[] = [];
			const roundsList: number[] = [];

			matches.forEach(({ homeTeam, awayTeam, matchDay }: MatchDomain) => {
				if (!teamsList.find((team) => team.tla === homeTeam.tla)) {
					teamsList.push(homeTeam);
				}

				if (!teamsList.find((team) => team.tla === awayTeam.tla)) {
					teamsList.push(awayTeam);
				}

				if (!roundsList.includes(matchDay)) {
					roundsList.push(matchDay);
				}
			});

			setTeams(teamsList.sort((a, b) => a.name.localeCompare(b.name)));
			setRounds(roundsList.sort((a, b) => a - b));
		}
	}, [matches]);

	const filteredMatches = matches.filter(
		({ homeTeam, awayTeam, matchDay }: MatchDomain) =>
			(!selectedTeam ||
				homeTeam.tla === selectedTeam?.tla ||
				awayTeam.tla === selectedTeam?.tla) &&
			(!selectedRound || matchDay === Number.parseInt(selectedRound)),
	);

	const groupedMatches = filteredMatches.reduce<{
		[key: number]: MatchDomain[];
	}>((acc, match) => {
		const { matchDay } = match;
		if (!acc[matchDay]) {
			acc[matchDay] = [];
		}
		acc[matchDay].push(match);
		return acc;
	}, {});

	return {
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
	};
}
