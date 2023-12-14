import { chapters, genres, mangas } from "@/db";
import { IState } from "@/types/IState";
import { checkSubset, findItemById } from "@/utils";
import { createStore } from "vuex";

export default createStore<IState>({
  state: {
    currentManga: undefined,
    currentChapter: undefined,
    totalChapters: 6,
    mangas: mangas,
    searchValue: "",
    genres: genres,
    chapters: chapters,
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
      return findItemById(state.genres, genreId);
    },
    getChapterById: (state: IState) => (chapterId: number) => {
      return findItemById(state.chapters, chapterId);
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
      state.currentManga = findItemById(state.mangas, mangaId);
    },
    setCurrentChapter: (state, chapterId) => {
      state.currentChapter = findItemById(state.chapters, chapterId);
    },
  },
  actions: {},
  modules: {},
});
