import { genres, mangas } from "@/db";
import { IState } from "@/types/IState";
import { checkSubset } from "@/utils";
import { createStore } from "vuex";

export default createStore<IState>({
  state: {
    currentManga: undefined,
    mangas: mangas,
    searchValue: "",
    genres: genres,
    activeGenres: [],
    isModalActive: false,
  },
  getters: {
    getSearchSuggestions: (state: IState) => {
      return state.mangas.filter((manga) => {
        if (
          manga.name.toLowerCase().includes(state.searchValue.toLowerCase()) &&
          state.searchValue !== ""
        ) {
          return manga;
        }
      });
    },
    getSortedMangas: (state: IState) => {
      if (state.activeGenres.length > 0) {
        return state.mangas.filter((manga) => {
          if (checkSubset(manga.genres, state.activeGenres)) return manga;
        });
      }

      return state.mangas;
    },
    getGenreById: (state: IState) => (genreId: number) => {
      return state.genres.find((genre) => genre.id === genreId);
    },
  },
  mutations: {
    setSearchValue: (state, searchValue) => {
      state.searchValue = searchValue;
    },
    toggleActiveGenres: (state, genreId) => {
      if (state.activeGenres.includes(genreId)) {
        state.activeGenres = state.activeGenres.filter((id) => id !== genreId);
      } else {
        state.activeGenres.push(genreId);
      }
    },
    clearActiveGenres: (state) => {
      state.activeGenres = [];
    },
    setIsModalActive: (state, isActive) => {
      state.isModalActive = isActive;
    },
    setCurrentManga: (state, mangaId) => {
      state.currentManga = state.mangas.find((manga) => manga.id === +mangaId);
    },
  },
  actions: {},
  modules: {},
});
