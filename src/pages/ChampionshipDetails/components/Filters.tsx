import { Select } from "@chakra-ui/react";

import type { ChangeEvent } from "react";

interface Team {
	tla: string;
	shortName: string;
}

interface FiltersProps {
	teams: Team[];
	rounds: number[];
	selectedTeam: Team | null;
	selectedRound: string;
	setSelectedTeam: (team: Team | null) => void;
	setSelectedRound: (round: string) => void;
}

export function Filters({
	teams,
	rounds,
	selectedTeam,
	selectedRound,
	setSelectedTeam,
	setSelectedRound,
}: FiltersProps) {
	function handleTeamChange(event: ChangeEvent<HTMLSelectElement>) {
		const selectedTla = event.target.value;
		const selected = teams.find((team) => team.tla === selectedTla) || null;
		setSelectedTeam(selected);
	}

	function handleRoundChange(event: ChangeEvent<HTMLSelectElement>) {
		setSelectedRound(event.target.value);
	}

	return (
		<>
			<Select value={selectedTeam?.tla || ""} onChange={handleTeamChange}>
				<option value="">Todas as Equipes</option>
				{teams.map((team) => {
					return (
						<option key={team.tla} value={team.tla}>
							{team.shortName}
						</option>
					);
				})}
			</Select>

			<Select value={selectedRound} onChange={handleRoundChange}>
				<option value="">Todas as Rodadas</option>
				{rounds.map((round) => (
					<option key={round} value={round.toString()}>
						{round}ª Rodada
					</option>
				))}
			</Select>
		</>
	);
}
