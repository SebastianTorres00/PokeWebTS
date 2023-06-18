interface IPokemonsFirst {
  url: string;
}

interface IUrlProps {
  url: IPokemonsFirst;
}
const adapterFetchPokemon = async (responseData: []) => {
  const allUrls: IUrlProps[] = [];
  responseData.map((item: IPokemonsFirst) => allUrls.push(item.url));

  const fetchPokeM = async (url: IPokemonsFirst) => {
    const infoPokemon = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    });
    const responseData = await infoPokemon.json();
    return responseData;
  };

  const callFetchPoke = async (urlProps: IUrlProps) => {
    const peticiones = urlProps.map(async (item: IPokemonsFirst) => {
      const url = item;
      const responsePoke = await fetchPokeM(url);

      return responsePoke;
    });

    return Promise.all(peticiones);
  };

  return callFetchPoke(allUrls).then((response) => response);
};

export default adapterFetchPokemon;
