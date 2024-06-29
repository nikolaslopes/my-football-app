import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMatches } from "../../hooks/useMatches";
import { useScrollToTop } from "../../hooks/useScrollToTop";

interface Team {
	tla: string;
	shortName: string;
}

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

export function useChampionshipDetails() {
	const { id } = useParams();

	const { matches = [], competition, isFetching } = useMatches(id);

	const { showScrollButton, handleScrollToTop } = useScrollToTop();

	const [teams, setTeams] = useState<Team[]>([]);
	const [rounds, setRounds] = useState<number[]>([]);
	const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
	const [selectedRound, setSelectedRound] = useState<string>("");

	useEffect(() => {
		if (matches.length > 0) {
			const teamsSet = new Set<string>();
			const teamsMap = new Map<string, Team>();
			const roundsSet = new Set<number>();

			matches.forEach((match: Match) => {
				if (!teamsSet.has(match.homeTeam.tla)) {
					teamsSet.add(match.homeTeam.tla);
					teamsMap.set(match.homeTeam.tla, {
						tla: match.homeTeam.tla,
						shortName: match.homeTeam.shortName,
					});
				}
				if (!teamsSet.has(match.awayTeam.tla)) {
					teamsSet.add(match.awayTeam.tla);
					teamsMap.set(match.awayTeam.tla, {
						tla: match.awayTeam.tla,
						shortName: match.awayTeam.shortName,
					});
				}

				roundsSet.add(match.matchday);
			});

			const sortedTeams = Array.from(teamsMap.values()).sort((a, b) =>
				a.shortName.localeCompare(b.shortName),
			);

			setTeams(sortedTeams);
			setRounds(Array.from(roundsSet).sort((a, b) => a - b));
		}
	}, [matches]);

	const filteredMatches = matches.filter(
		(match: Match) =>
			(!selectedTeam ||
				match.homeTeam.tla === selectedTeam.tla ||
				match.awayTeam.tla === selectedTeam.tla) &&
			(!selectedRound || match.matchday === Number.parseInt(selectedRound)),
	);

	const groupedMatches = filteredMatches.reduce(
		(acc: { [key: number]: Match[] }, match: Match) => {
			const { matchday } = match;
			if (!acc[matchday]) {
				acc[matchday] = [];
			}
			acc[matchday].push(match);
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
