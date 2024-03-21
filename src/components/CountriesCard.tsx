import data from "../data/data.json";

const CountriesCard = () => {
  //   const { data } = useCountries();

  return (
    <ul>
      {data.map((country) => (
        <li>{country.name}</li>
      ))}
    </ul>
  );
};

export default CountriesCard;
