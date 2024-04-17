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

export default function PokemonTypeLabel({ type }: { type: string }) {
	return (
		<p
			className={`capitalize px-3 py-1 text-white rounded-full ${
				pokemonTypes[type as keyof typeof pokemonTypes]
			}`}>
			{type}
		</p>
	);
}
