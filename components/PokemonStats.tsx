export default function PokemonStats({ stats }: { stats: any }) {
	return (
		<>
			<h2 className="text-2xl font-bold mb-2">Stats</h2>
			<div className="w-full grid grid-cols-3 gap-2 mb-4">
				{stats.map((stat: any) => (
					<div key={stat.stat.name} className="flex justify-center">
						<p>
							{stat.stat.name}: {stat.base_stat}
						</p>
					</div>
				))}
			</div>
		</>
	);
}
