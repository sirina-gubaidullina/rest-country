import { Link } from "react-router-dom";
import classes from "./Card.module.css";

export const Card = ({ name, flag, population, region, capital }) => {
  return (
    <div className={classes.card}>
      <Link to={`${name}`}>
        <div>
          <img src={flag} alt={name} className={classes["card-img"]} />
        </div>
        <div className={classes["info-card"]}>
          <div>
            <h3>{name}</h3>
          </div>
          <div className={classes.info}>
            <h4>Population:</h4>
            <p>{new Intl.NumberFormat("en-US").format(population)}</p>
          </div>
          <div className={classes.info}>
            <h4>Region: </h4>
            <p>{region}</p>
          </div>
          {capital && (
            <div className={classes.info}>
              <h4>Capital: </h4>
              {capital.map((item) => {
                return <p key={item}>{item}</p>;
              })}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
