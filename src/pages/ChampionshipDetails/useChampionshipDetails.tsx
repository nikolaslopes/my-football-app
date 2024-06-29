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
			const teamsSet = new Set<string>();
			const teamsMap = new Map<string, TeamDomain>();
			const roundsSet = new Set<number>();

			matches.forEach((match: MatchDomain) => {
				if (!teamsSet.has(match.homeTeam.tla)) {
					teamsSet.add(match.homeTeam.tla);
					teamsMap.set(match.homeTeam.tla, {
						tla: match.homeTeam.tla,
						name: match.homeTeam.name,
					});
				}
				if (!teamsSet.has(match.awayTeam.tla)) {
					teamsSet.add(match.awayTeam.tla);
					teamsMap.set(match.awayTeam.tla, {
						tla: match.awayTeam.tla,
						name: match.awayTeam.name,
					});
				}

				roundsSet.add(match.matchDay);
			});

			const sortedTeams = Array.from(teamsMap.values()).sort((a, b) =>
				a.name.localeCompare(b.name),
			);

			setTeams(sortedTeams);
			setRounds(Array.from(roundsSet).sort((a, b) => a - b));
		}
	}, [matches]);

	const filteredMatches = matches.filter(
		(match: MatchDomain) =>
			(!selectedTeam ||
				match.homeTeam.tla === selectedTeam.tla ||
				match.awayTeam.tla === selectedTeam.tla) &&
			(!selectedRound || match.matchDay === Number.parseInt(selectedRound)),
	);

	const groupedMatches = filteredMatches.reduce(
		(acc: { [key: number]: MatchDomain[] }, match: MatchDomain) => {
			const { matchDay } = match;
			if (!acc[matchDay]) {
				acc[matchDay] = [];
			}
			acc[matchDay].push(match);
			return acc;
		},
		{},
	);

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
