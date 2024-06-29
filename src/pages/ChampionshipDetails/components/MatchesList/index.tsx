import { CloseIcon } from "@chakra-ui/icons";

import {
	Box,
	Divider,
	Heading,
	Image,
	List,
	ListItem,
	Text,
} from "@chakra-ui/react";

import { formatDate } from "../../../../services/utils/formatDate";

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

interface MatchesListProps {
	groupedMatches: { [key: string]: Match[] };
}

export function MatchesList({ groupedMatches }: MatchesListProps) {
	return (
		<>
			{Object.entries(groupedMatches).map(([round, matches]) => (
				<Box key={round} marginBottom="48px" width={"100%"}>
					<Heading as="h4" size="sm" marginBottom="12px" color="gray.800">
						{round}ª Rodada
					</Heading>

					<List>
						{matches?.map((match: Match) => (
							<ListItem
								key={match.id}
								marginBottom="22px"
								display="flex"
								flexDirection="column"
								alignItems="center"
							>
								<Divider colorScheme="teal" borderWidth="2px" />

								<Text as="span" fontSize="12px" marginY="8px">
									em {formatDate(match.utcDate)}
								</Text>

								<Box
									width="100%"
									display="flex"
									alignItems="center"
									justifyContent="space-between"
								>
									<Box
										display="flex"
										alignItems="center"
										justifyContent="center"
										width="100px"
										gap="4px"
									>
										<Text as="span" fontWeight="bold">
											{match.homeTeam.tla}
										</Text>
										<Image
											boxSize="2rem"
											src={match.homeTeam.crest}
											alt="Simon the pensive"
										/>
									</Box>

									<CloseIcon fontSize="8px" />

									<Box
										display="flex"
										alignItems="center"
										justifyContent="center"
										width="100px"
										gap="4px"
									>
										<Image
											boxSize="2rem"
											src={match.awayTeam.crest}
											alt="Simon the pensive"
										/>
										<Text as="span" fontWeight="bold">
											{match.awayTeam.tla}
										</Text>
									</Box>
								</Box>
							</ListItem>
						))}
					</List>
				</Box>
			))}
		</>
	);
}
