export async function getPokemonList(offset: number, limit: number) {
	const res = await fetch(
		`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
	);
	if (!res.ok) {
		throw new Error("Failed to fetch");
	}
	const data = await res.json();
	return data;
}

export async function getPokemonDetail(url: string) {
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error("Failed to fetch");
	}
	const data = await res.json();
	return data;
}
