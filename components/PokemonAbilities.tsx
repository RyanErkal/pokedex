export default function PokemonAbilities({ abilities }: { abilities: any }) {
	return (
		<>
			<h2 className="text-2xl font-bold mb-2">Abilities</h2>
			<div className="w-full flex flex-wrap items-center justify-center gap-2">
				{abilities.map((ability: any) => (
					<div key={ability.ability.name}>
						<p>{ability.ability.name}</p>
					</div>
				))}
			</div>
		</>
	);
}
