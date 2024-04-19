import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { apiCall } from "../../auth/apiCall";
import { pokemonTypesColors } from "../../form_question/helperObjects";
const PokeCard = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const pokemon = useSelector((state) => {
    return state.pokemon.pokemon;
  });
  console.log(pokemon);
  const getPokeData = async () => {
    const data = await apiCall("GET", pokemon.url);
    setPokemonData(data);
  };
  useEffect(() => {
    if (pokemon) {
      getPokeData();
    }
  }, [pokemon]);
  if (pokemon && pokemonData) {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={pokemonData.sprites.other.home.front_default}
          />
          <Card.Body>
            <Card.Title>
              <div className="pokemon-types">
                {pokemonData.types.map((type) => {})}
                {pokemon.name}
              </div>
            </Card.Title>
            <Card.Text>
              <div className="pokemon-types">
                {pokemonData.types.map((pok) => {
                  return (
                    <div
                      className="tpye-div"
                      style={{
                        backgroundColor: pokemonTypesColors[pok.type.name],
                      }}
                    >
                      <img
                        className="pok-icon"
                        src={`../pokemon-type-svg-icons-master/icons/${pok.type.name}.svg`}
                        alt="test"
                      />
                      {pok.type.name}
                    </div>
                  );
                })}
              </div>
              <div className="pokemon-types">
                {pokemonData.abilities.map((pok) => {
                  return <div className="ability-div">{pok.ability.name}</div>;
                })}
              </div>
              <div className="">
                {pokemonData.stats.map((pok) => {
                  return (
                    <div>
                      <span className="stat-title">{pok.stat.name}:</span>
                      <span className="stat-value">{pok.base_stat}</span>
                    </div>
                  );
                })}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
};

export default PokeCard;
