import { useSelector } from "react-redux";
import { selectFavoritePokemons } from "../RTK/selector";
import { Card } from "../components/Card";

export default function Favorite() {
  const pokemon = useSelector(selectFavoritePokemons); //인자 안 받으니 그냥 씀
  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
