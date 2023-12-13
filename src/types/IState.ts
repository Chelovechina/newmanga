import { IGenre } from "./IGenre";
import { IManga } from "./IManga";

export interface IState {
  mangas: IManga[];
  searchValue: string;
  genres: IGenre[];
  activeGenres: number[];
  isModalActive: boolean;
}
