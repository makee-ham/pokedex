// 전체 state에서 부분만 select하는 함수 만들기
import { createSelector } from "@reduxjs/toolkit";

// 여기 인자로 외부의 포켓몬 id 받아올 수 있음
export const selectPokemonById = (pokemonId) =>
  createSelector(
    // 인자 유형 1: 전체 state에서 어떤 부분을 사용할지 고르는 "입력 셀렉터"
    // '어떤' 상태의 일부만 가져올 건지 그 '어떤 상태'를 지정
    // 여러 개 해도 됨
    (state) => state.pokemon.data,
    // 인자 유형 2: 위에서 가져온 데이터를 기반으로 최종 결과를 가공하는 "결과 셀렉터"
    // 인자 유형 1로 받아온 거에서 '어떻게 원하는 데이터를 갖고 올거냐'의 함수 (참고로 아래 인자 이름은 본래 코드 어떻게 작성되어 있는가와 관련 없고, 1에서 불러온 데이터를 어떤 이름(파라미터)으로 받아올거냐 이다...)
    // 즉, 앞의 입력 셀렉터들이 반환한 값들이 여기 인자로 전달되는 것
    (pokemon) => pokemon.find((el) => el.id === pokemonId)
  );

export const selectPokemonByRegExp = (reg) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.filter((el) => el.name.match(reg))
  );

// 뭘 찜하고 있는지 정보는 store에 다 있어서, 굳이 바깥 정보 인자로 받을 필요 없음
export const selectFavoritePokemons = createSelector(
  // 입력 셀렉터 두 개
  (state) => state.pokemon.data,
  (state) => state.favorite,
  // 차례대로 인자로 받아옴
  (pokemon, favorite) => {
    return pokemon.filter((el) => favorite.includes(el.id));
  }
);
