import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonById } from "./thunk";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: true,
  },
  reducers: {}, // reducers는 동기적으로 상태 변경할 때에만 사용 가능
  extraReducers: (builder) => {
    // Promise 상태에 따라 state 업데이트
    builder
      .addCase(fetchMultiplePokemonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMultiplePokemonById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // thunk 성공 시 반환되는 객체배열이 payload로
      });
  },
});

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    // state 복사 안 하고 직접 push해도 되는 이유:
    // RTK는 immer라는 도구를 내장 -> 참조 자료형 건드려도 불변성 유지
    // -> 새 참조값의 참조 자료형으로 업데이트 한 것처럼 알아서 처리해줌
    // (리턴하지 않고 상태를 직접 변화시키기만 하면 됨!)
    addToFavorite(state, action) {
      state.push(action.payload.pokemonId);
    },
    removeFromFavorite(state, action) {
      const index = state.indexOf(action.payload.pokemonId);
      if (index !== -1) state.splice(index, 1); // 비순수함수 splice로도 먹힘
    },
  },
});
