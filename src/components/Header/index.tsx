import { ArrowBackIcon } from "@chakra-ui/icons";
import { Grid, GridItem, Heading, IconButton, Spacer } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Header() {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<Grid
			templateColumns={"repeat(3, 1fr)"}
			alignItems={"center"}
			marginTop={"32px"}
		>
			{location.pathname === "/" ? (
				<Spacer />
			) : (
				<GridItem width="max-width" marginRight={"8px"}>
					<IconButton
						size={{ base: "sm", md: "md" }}
						aria-label="Voltar"
						icon={
							<ArrowBackIcon
								width={{ base: "18px", md: "26px" }}
								height={{ base: "18px", md: "26px" }}
							/>
						}
						onClick={() => navigate(-1)}
					/>
				</GridItem>
			)}
			<GridItem width="max-width">
				<Link to="/">
					<Heading
						width={"max-content"}
						fontSize={{ base: "22px", sm: "30px", md: "32px" }}
					>
						My Football APP
					</Heading>
				</Link>
			</GridItem>
		</Grid>
	);
}
