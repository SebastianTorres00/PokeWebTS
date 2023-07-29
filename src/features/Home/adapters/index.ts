interface IPokemonsFirst {
  url: string;
}

interface IUrlProps {
  url: string;
}
const adapterFetchPokemon = async (responseData: []) => {
  const allUrls: IUrlProps[] = responseData.map((item: IPokemonsFirst) => ({
    url: item.url,
  }));
  const fetchPokeM = async (url: string) => {
    const infoPokemon = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    });
    const responseData = await infoPokemon.json();
    return responseData;
  };

  const callFetchPoke = async (urlProps: IUrlProps[]) => {
    const peticiones = urlProps.map(async (item: IUrlProps) => {
      const responsePoke = await fetchPokeM(item.url);

      return responsePoke;
    });

    return Promise.all(peticiones);
  };

  return callFetchPoke(allUrls).then((response) => response);
};

export default adapterFetchPokemon;
