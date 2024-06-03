import { useState, useMemo } from "react";
import { Card } from "../components/Card/Card";
import { useGetCountriesQuery } from "../components/api/restCountriesApi";
import classes from "./AllCountries.module.css";
import SearchIcon from "../../public/search.png";
import Loader from "../UI/Loader";

const AllCountries = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e);
  };

  const { data, error, isLoading } = useGetCountriesQuery("");

  const result = useMemo(
    () =>
      data &&
      data.filter((item) => {
        if (
          item.name.common
            .toLocaleUpperCase()
            .indexOf(search.toLocaleUpperCase()) !== -1
        ) {
          return item;
        }
      }),
    [data, search]
  );

  return (
    <main className={classes}>
      <div className={classes.search}>
        <img src={SearchIcon} width={30} />
        <input
          type="text"
          placeholder="Search for a counrty..."
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      {isLoading && <Loader />}
      {error && <p style={{ fontSize: "1rem" }}>Something went wrong!</p>}
      <div className={classes.countries}>
        {result &&
          result.map((item) => {
            return (
              <Card
                key={item.name.common}
                name={item.name.common}
                flag={item.flags.png}
                population={item.population}
                region={item.region}
                capital={item.capital}
              />
            );
          })}
      </div>
    </main>
  );
};

export default AllCountries;
