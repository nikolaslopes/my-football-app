export interface Match {
	id: number;
	matchday: number;
	competition: {
		name: string;
	};
	homeTeam: {
		id: number;
		shortName: string;
		crest: string;
	};
	awayTeam: {
		id: number;
		shortName: string;
		crest: string;
	};
}
