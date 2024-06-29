import { Box, Button, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";

import { Link } from "react-router-dom";

import footballPlayerAnimation from "../../assets/Lottie/footballPlayer.json";
import { BaseLayout } from "../../components/BaseLayout";

export function Home() {
	return (
		<BaseLayout subHeader="Aqui o melhor time é o seu ⚽️">
			<Lottie animationData={footballPlayerAnimation} />

			<Box marginTop={"64px"}>
				<Link to="championship">
					<Button colorScheme="teal">Ver campeonatos</Button>
				</Link>
			</Box>
		</BaseLayout>
	);
}
