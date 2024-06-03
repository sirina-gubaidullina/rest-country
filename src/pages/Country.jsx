import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetCountryByNameQuery,
  useGetCountriesByCodeQuery,
} from "../components/api/restCountriesApi";

import classes from "./Country.module.css";
import LeftArrow from "../../public/left-arrow.png";
import Loader from "../UI/Loader";

const Country = () => {
  const navigate = useNavigate();
  const { countryName } = useParams();
  const { data, error, isLoading } = useGetCountryByNameQuery(countryName);
  const country = data && data[0];
  const { data: countryCode } = useGetCountriesByCodeQuery(country?.borders);

  const languages = country?.languages && Object.values(country.languages);

  return (
    <div className={classes.country}>
      <div>
        <button
          className={classes["country-button"]}
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={LeftArrow} width={30} />
          Back
        </button>
      </div>
      {isLoading && <Loader />}
      {error && <p style={{ fontSize: "1rem" }}>Something went wrong!</p>}
      {country && (
        <div className={classes["country-card"]}>
          <div>
            <img
              src={country.flags.svg}
              alt="Flag"
              className={classes["country-img"]}
            />
          </div>
          <div>
            <div>
              <h1>{country.name.common}</h1>
            </div>
            <div className={classes["card-info"]}>
              <div className={classes.info}>
                <h4>Native Name: </h4>
                <p>
                  {country.name.nativeName &&
                    Object.values(country.name.nativeName)[0].official}
                </p>
              </div>
              <div className={classes.info}>
                <h4>Population: </h4>
                <p>
                  {new Intl.NumberFormat("en-US").format(country.population)}
                </p>
              </div>
              <div className={classes.info}>
                <h4>Region:</h4>
                <p>{country.region}</p>
              </div>
              <div className={classes.info}>
                <h4>Sub Region: </h4>
                <p>{country.subregion}</p>
              </div>
              <div className={classes.info}>
                <h4>Capital: </h4>
                <p>{country.capital}</p>
              </div>
              <div className={classes.info}>
                <h4>Top Level Domain: </h4>
                <p>{country.tld[0]}</p>
              </div>
              <div className={classes.info}>
                <h4>Currencies:</h4>
                <p>
                  {country.currencies &&
                    Object.values(country.currencies)[0].name}
                </p>
              </div>
              <div className={classes.info}>
                <h4>Langueges:</h4>
                {languages.map((item) => {
                  return <p>{item}</p>;
                })}
              </div>
            </div>
            {countryCode && (
              <div className={classes["border-country"]}>
                <h4>Border Countries:</h4>
                {countryCode.map((item) => {
                  return (
                    <Link to={`/${item.name.common}`}>
                      <button>{item.name.common}</button>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
