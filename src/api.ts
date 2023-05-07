export const fetchSearchData = async (query: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1&include_adult=false&query=${query}`
  );
  const data = await res.json();
  return data.results;
};

export const fetchData = async (type: string) => {
  const res = await fetch(type);
  const data = await res.json();
  return data.results;
};
