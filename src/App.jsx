import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";

function App() {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return <></>;
}

export default App;
