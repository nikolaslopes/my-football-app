import { Box, Image, List, ListItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import type { ChampionshipDomain } from "../../../entities/Championship/ChampionshipDomain";

interface ChampionshipsListProps {
	championships: Array<ChampionshipDomain>;
}

export function ChampionshipsList({ championships }: ChampionshipsListProps) {
	if (!championships) {
		return null;
	}

	return (
		<Box>
			<List>
				{championships.map((championship) => (
					<ListItem
						key={championship.id}
						marginBottom={"12px"}
						width={{ base: "320px", sm: "380px", md: "420px" }}
					>
						<Link to={`/championships/${championship.id}`}>
							<Box
								display={"flex"}
								alignItems={"center"}
								width={"100%"}
								whiteSpace={"nowrap"}
							>
								<Image
									boxSize="2rem"
									borderRadius="full"
									src={championship.logo}
									alt={championship.name}
									mr="12px"
								/>
								<Text as={"p"} marginRight={"4px"}>
									{championship.code} -
								</Text>
								<Text as="p" overflow={"hidden"} textOverflow={"ellipsis"}>
									{championship.name}
								</Text>
							</Box>
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	);
}
