import { Box, Flex, Spinner, Text } from "@chakra-ui/react";

import type { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
	subHeader: string;
	isFetching?: boolean;
}

export function BaseLayout({
	children,
	subHeader,
	isFetching,
}: ContainerProps) {
	return (
		<Flex
			marginTop={"32px"}
			flexDirection={"column"}
			alignItems={"center"}
			width={"100%"}
		>
			<Box marginBottom={"24px"}>
				<Text fontWeight={"bold"}>{subHeader}</Text>
			</Box>

			{isFetching ? (
				<Spinner thickness="5px" size="xl" color="teal.500" />
			) : (
				children
			)}
		</Flex>
	);
}
