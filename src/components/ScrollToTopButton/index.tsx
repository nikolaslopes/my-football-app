import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";

interface ScrollToTopButtonProps {
	onScrollToTop: () => void;
}

export function ScrollToTopButton({ onScrollToTop }: ScrollToTopButtonProps) {
	return (
		<Box position="fixed" bottom="20px" right="20px">
			<IconButton
				aria-label="Voltar ao topo"
				icon={<ArrowUpIcon />}
				colorScheme="teal"
				onClick={onScrollToTop}
			/>
		</Box>
	);
}
