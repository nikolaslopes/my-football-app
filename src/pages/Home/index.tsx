import { Box, Button } from "@chakra-ui/react";
import { usePrefetchQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

import { getChampionships } from "../../services/getChampionships";

import footballPlayerAnimation from "../../assets/Lottie/footballPlayer.json";
import { BaseLayout } from "../../components/BaseLayout";

export function Home() {
	usePrefetchQuery({
		queryKey: ["championships"],
		queryFn: getChampionships,
	});

	return (
		<BaseLayout subHeader="Aqui o melhor time é o seu ⚽️">
			<Lottie animationData={footballPlayerAnimation} />

			<Box marginTop={"64px"}>
				<Link to="championship">
					<Button colorScheme="teal" size="md">
						Ver campeonatos
					</Button>
				</Link>
			</Box>
		</BaseLayout>
	);
}
