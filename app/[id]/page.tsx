import Image from "next/image";

const pokemonTypes = {
	normal: "bg-gray-300",
	fire: "bg-red-300",
	water: "bg-blue-300",
	electric: "bg-yellow-300",
	grass: "bg-green-300",
	ice: "bg-blue-100",
	fighting: "bg-red-500",
	poison: "bg-purple-300",
	ground: "bg-yellow-500",
	flying: "bg-blue-500",
	psychic: "bg-purple-500",
	bug: "bg-green-500",
	rock: "bg-yellow-700",
	ghost: "bg-purple-700",
	dragon: "bg-blue-700",
	dark: "bg-gray-700",
	steel: "bg-gray-500",
	fairy: "bg-pink-300"
};

export default async function Page({ params }: { params: { id: number } }) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
	const data = await res.json();

	return (
		<section className="w-full max-w-4xl mx-auto flex flex-col items-center">
			<h1 className="text-4xl font-bold text-center my-8">Pokédex</h1>
			<div className="w-full flex flex-col items-center bg-gray-100 p-4 border border-gray-300 rounded-lg font-bold text-lg capitalize">
				<Image
					src={data.sprites.front_default}
					alt={data.name}
					width={128}
					height={128}
				/>
				<h2 className="text-2xl font-bold mb-2">
					{data.forms[0].name}
				</h2>
				<div className="flex gap-2 mb-4">
					{data.types.map((type: any) => (
						<p
							key={type.type.name}
							className={`capitalize px-3 py-1 text-white rounded-full ${
								pokemonTypes[
									type.type.name as keyof typeof pokemonTypes
								]
							}`}>
							{type.type.name}
						</p>
					))}
				</div>
				<div className="w-full flex justify-center gap-4 mb-4">
					<p>Height: {data.height}</p>
					<p>Weight: {data.weight}</p>
				</div>
				<h2 className="text-2xl font-bold mb-2">Stats</h2>
				<div className="w-full grid grid-cols-3 gap-2 mb-4">
					{data.stats.map((stat: any) => (
						<div
							key={stat.stat.name}
							className="flex justify-center">
							<p>
								{stat.stat.name}: {stat.base_stat}
							</p>
						</div>
					))}
				</div>
				<h2 className="text-2xl font-bold mb-2">Abilities</h2>
				<div className="w-full flex flex-wrap items-center justify-center gap-2">
					{data.abilities.map((ability: any) => (
						<div key={ability.ability.name}>
							<p>{ability.ability.name}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
