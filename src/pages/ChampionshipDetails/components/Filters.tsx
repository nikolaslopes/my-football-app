import { Select } from "@chakra-ui/react";
import type { ChangeEvent } from "react";

import type { TeamDomain } from "../../../entities/Team/TeamDomain";

interface FiltersProps {
	teams: TeamDomain[];
	rounds: number[];
	selectedTeam: TeamDomain | null;
	selectedRound: string;
	setSelectedTeam: (team: TeamDomain | null) => void;
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
			<Select
				marginBottom="8px"
				value={selectedTeam?.tla || ""}
				onChange={handleTeamChange}
				colorScheme="teal"
			>
				<option value="">Todas as Equipes</option>
				{teams.map((team) => {
					return (
						<option key={team.tla} value={team.tla}>
							{team.name}
						</option>
					);
				})}
			</Select>

			<Select value={selectedRound} onChange={handleRoundChange}>
				<option value="">Todas as Rodadas</option>
				{rounds.map((round) =>
					round !== null ? (
						<option key={round} value={round?.toString()}>
							{round}ª Rodada
						</option>
					) : null,
				)}
			</Select>
		</>
	);
}
