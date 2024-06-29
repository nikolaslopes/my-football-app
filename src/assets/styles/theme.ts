import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	fonts: {
		heading: `'Sora', sans-serif`,
		body: `'Sora', sans-serif`,
	},
	styles: {
		global: {
			"*": {
				margin: 0,
				padding: 0,
				boxSizing: "border-box",
			},
			body: {
				background: "gray.100",
				color: "gray.700",
			},
		},
	},
});
