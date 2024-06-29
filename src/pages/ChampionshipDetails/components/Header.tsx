import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface HeaderProps {
	title: string | undefined;
}

export function Header({ title }: HeaderProps) {
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			marginTop="22px"
			marginBottom="30px"
			gap="8px"
		>
			<Text as="p" fontSize={{ sm: "18px", md: "20px" }} color="gray.800">
				{title}
			</Text>

			<Link to="/championship">
				<Button colorScheme="teal" size="xs" variant="outline">
					Selecionar outro campeonato
				</Button>
			</Link>
		</Box>
	);
}
