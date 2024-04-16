"use client";

import { use, useEffect, useState } from "react";
import PokemonCard from "@/components/PokemonCard";
import { getPokemonList } from "@/utils/api";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@radix-ui/themes";

const INITIAL_LOAD = 30;

export default function PokemonGrid({ list }: { list: any }) {
	const [filteredPokemonList, setFilteredPokemonList] = useState<any>(list);
	const [load, setLoad] = useState(INITIAL_LOAD);
	const [search, setSearch] = useState("");
	const { ref, inView } = useInView();

	useEffect(() => {
		setFilteredPokemonList(
			list.filter((pokemon: any) =>
				pokemon.name.includes(search.toLowerCase())
			)
		);
	}, [search]);

	useEffect(() => {
		if (inView) {
			loadMore();
		}
	}, [inView]);

	const loadMore = async () => {
		setLoad(load + INITIAL_LOAD);
	};

	return (
		<>
			<input
				type="text"
				placeholder="Search"
				className="py-2 px-4 rounded-lg border border-gray-300 my-6 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
				onChange={(e) => setSearch(e.target.value)}
			/>
			<section className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
				{filteredPokemonList.slice(0, load).map((pokemon: any) => (
					<PokemonCard key={pokemon.name} pokemon={pokemon} />
				))}
			</section>
			{load < filteredPokemonList.length && (
				<div ref={ref} className="my-6">
					<Spinner />
				</div>
			)}
		</>
	);
}
