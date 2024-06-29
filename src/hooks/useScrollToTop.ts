import { useCallback, useEffect, useState } from "react";

export function useScrollToTop() {
	const [showScrollButton, setShowScrollButton] = useState(false);

	const handleScroll = useCallback(() => {
		if (window.scrollY > 200) {
			setShowScrollButton(true);
		} else {
			setShowScrollButton(false);
		}
	}, []);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return {
		showScrollButton,
		handleScrollToTop,
	};
}
