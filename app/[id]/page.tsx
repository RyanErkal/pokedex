import Image from "next/image";
import { getPokemonDetail } from "@/utils/api";
import pokemonLogo from "@/public/pokemonlogo.webp";
import PokemonTypeLabel from "@/components/PokemonTypeLabel";
import PokemonStats from "@/components/PokemonStats";
import PokemonAbilities from "@/components/PokemonAbilities";

export default async function Page({ params }: { params: { id: number } }) {
	const res = await getPokemonDetail(
		`https://pokeapi.co/api/v2/pokemon/${params.id}`
	);

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
			<div className="w-full flex flex-col items-center bg-gray-100 p-4 border border-gray-300 rounded-lg font-bold text-lg capitalize">
				<Image
					src={res.sprites.front_default}
					alt={res.name}
					width={128}
					height={128}
				/>
				<h2 className="text-2xl font-bold mb-2">{res.forms[0].name}</h2>
				<div className="flex gap-2 mb-4">
					{res.types.map((type: any) => (
						<PokemonTypeLabel
							key={type.type.name}
							type={type.type.name}
						/>
					))}
				</div>
				<div className="w-full flex justify-center gap-4 mb-4">
					<p>Height: {res.height}</p>
					<p>Weight: {res.weight}</p>
				</div>
				<PokemonStats stats={res.stats} />
				<PokemonAbilities abilities={res.abilities} />
			</div>
		</section>
	);
}
