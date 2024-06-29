import { Box, Heading, List } from "@chakra-ui/react";

import type { MatchDomain } from "../../../entities/Match/MatchDomain";

import { MatchItem } from "./MatchItem";

interface MatchListProps {
	groupedMatches: { [key: string]: MatchDomain[] };
}

export function MatchesList({ groupedMatches }: MatchListProps) {
	return (
		<>
			{Object.entries(groupedMatches).map(([round, matches]) => (
				<Box key={round} marginBottom="48px" width={"100%"}>
					<Heading as="h4" size="sm" marginBottom="12px" color="gray.800">
						{round}ª Rodada
					</Heading>

					<List>
						{matches.map((match: MatchDomain) => (
							<MatchItem key={match.id} match={match} />
						))}
					</List>
				</Box>
			))}
		</>
	);
}
