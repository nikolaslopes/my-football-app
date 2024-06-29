import { CloseIcon } from "@chakra-ui/icons";
import { Box, Divider, Image, ListItem, Text } from "@chakra-ui/react";

import type { MatchDomain } from "../../../entities/Match/MatchDomain";
import { formatDate } from "../../../services/utils/formatDate";

interface MatchItemProps {
	match: MatchDomain;
}

export function MatchItem({ match }: MatchItemProps) {
	if (!match) {
		return null;
	}

	return (
		<ListItem
			marginBottom="22px"
			display="flex"
			flexDirection="column"
			alignItems="center"
		>
			<Divider colorScheme="teal" borderWidth="2px" />

			<Text as="span" fontSize="12px" marginY="8px">
				em {formatDate(match.date)}
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
						src={match.homeTeam.logo}
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
						src={match.awayTeam.logo}
						alt="Simon the pensive"
					/>
					<Text as="span" fontWeight="bold">
						{match.awayTeam.tla}
					</Text>
				</Box>
			</Box>
		</ListItem>
	);
}
