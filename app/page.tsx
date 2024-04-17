import Image from "next/image";
import PokemonGrid from "@/components/PokemonGrid";
import { getPokemonList } from "@/utils/api";
import pokemonLogo from "@/public/pokemon-logo.webp";

export default async function Page() {
	const res = await getPokemonList(0, 1302);

	if (!res) {
		return <p>Error Loading Pokémon</p>;
	}

	return (
		<section className="w-full max-w-4xl mx-auto flex flex-col items-center">
			<Image
				src={pokemonLogo}
				alt="Pokémon"
				width={200}
				height={200}
				priority
				className="my-4"
			/>
			{res.results ? (
				<PokemonGrid list={res.results} />
			) : (
				<p>Loading...</p>
			)}
		</section>
	);
}
