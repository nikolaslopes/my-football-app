import { Flex } from "@chakra-ui/react";

import type { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
}

export function Container({ children }: ContainerProps) {
	return (
		<Flex
			flexDirection={"column"}
			width={"100%"}
			maxWidth={"500px"}
			margin={"0 auto"}
			height={"100vh"}
			padding={"0 16px"}
			alignItems={"center"}
			marginBottom={{ base: "64px", sm: "0px", md: "0px" }}
		>
			{children}
		</Flex>
	);
}
