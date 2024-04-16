import PokemonGrid from "@/components/PokemonGrid";
import { getPokemonList } from "@/utils/api";

export default async function Page() {
	const res = await getPokemonList(0, 1302);

	return (
		<section className="w-full max-w-4xl mx-auto flex flex-col items-center">
			<h1 className="text-4xl font-bold text-center my-8">Pokédex</h1>
			<PokemonGrid list={res.results} />
		</section>
	);
}
