import { IChapter } from "./IChapter";

export interface IManga {
  id: number;
  name: string;
  genres: number[];
  description: string;
  image: string;
  chapters: IChapter[];
  bgImage: string;
}
