import type { Team } from "../Team/default";

export type Match = {
	id: number;
	utcDate: string;
	matchday: number;
	homeTeam: Team;
	awayTeam: Team;
};
