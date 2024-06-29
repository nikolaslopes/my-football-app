import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";

interface ScrollToTopButtonProps {
	onScrollToTop: () => void;
}

export function ScrollToTopButton({ onScrollToTop }: ScrollToTopButtonProps) {
	return (
		<Box position="fixed" bottom="20px" right="20px">
			<Button
				onClick={onScrollToTop}
				leftIcon={<ArrowUpIcon />}
				colorScheme="teal"
			>
				Voltar ao topo
			</Button>
		</Box>
	);
}
