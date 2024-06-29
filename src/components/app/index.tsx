import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import { queryClient } from "../../services/client/QueryClient";

import { Router } from "../../Router";

import { Header } from "../Header";
import { Container } from "./components/Container";

import { theme } from "../../assets/styles/theme";

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<BrowserRouter>
					<Container>
						<Header />
						<Router />
					</Container>
				</BrowserRouter>
			</ChakraProvider>
		</QueryClientProvider>
	);
}
