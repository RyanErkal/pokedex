import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "./globals.css";

export const metadata: Metadata = {
	title: "Pokédex",
	description: "A Pokédex built with Next.js and Tailwind CSS"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Theme>{children}</Theme>
			</body>
		</html>
	);
}

/*  View Pokemon as a list
    Lazy loading
    Click individual Pokemon
    Show abilities and stats
    Search and filter features */
