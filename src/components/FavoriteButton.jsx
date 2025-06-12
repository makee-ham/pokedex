import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/\bslice";

export default function FavoriteButton({ pokemonId }) {
  // 좋아요 store에 있는 앤지 없는 앤지 판단
  const isFavorite = useSelector((state) =>
    state.favorite.some((item) => item === pokemonId)
  );
  // 클릭 시 찜인지 아닌지 상태 변경을 위해 dispatch 만듦
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          isFavorite
            ? // reducer가 action.payload.pokemonId이렇게 받고 있어서 {pokemonId : pokemonId} 꼴로 payload 보내줘야 함
              favoriteSlice.actions.removeFromFavorite({ pokemonId })
            : favoriteSlice.actions.addToFavorite({ pokemonId })
        );
      }}
      className={isFavorite ? "text-[red]" : ""}
    >
      {isFavorite ? "♥" : "♡"}
    </button>
  );
}
