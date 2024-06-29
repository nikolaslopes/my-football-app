import type { TeamDomain } from "../Team/TeamDomain";

export type MatchDomain = {
	id: string;
	date: string;
	matchDay: number;
	homeTeam: TeamDomain;
	awayTeam: TeamDomain;
};
