"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getPokemonDetail } from "@/utils/api";
import { Skeleton } from "@radix-ui/themes";

export default function PokemonCard({ pokemon }: { pokemon: any }) {
	const [data, setData] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			const res = await getPokemonDetail(pokemon.url);
			setData(res);
		};
		fetchData();
	}, []);

	return (
		<>
			{data ? (
				<Link
					href={`/${data?.id}`}
					className="flex flex-col items-center justify-center bg-gray-100 px-4 py-2 border border-gray-300 hover:border-green-300 hover:bg-green-100 transition-all ease-in-out duration-200 rounded-lg">
					<Image
						src={data?.sprites.front_default}
						alt={pokemon.name}
						width={128}
						height={128}
					/>
					<h2 className="capitalize font-bold text-xl">
						{data?.name}
					</h2>
				</Link>
			) : (
				<Skeleton width="100%" height="128px" className="rounded-lg" />
			)}
		</>
	);
}
