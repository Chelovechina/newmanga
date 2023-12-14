import { IChapter } from "./types/IChapter";
import { IGenre } from "./types/IGenre";
import { IManga } from "./types/IManga";

export const genres: IGenre[] = [
  {
    id: 1,
    name: "Психология",
  },
  {
    id: 2,
    name: "Драма",
  },
  {
    id: 3,
    name: "Мистика",
  },
  {
    id: 4,
    name: "Комедия",
  },
  {
    id: 5,
    name: "Трагедия",
  },
  {
    id: 6,
    name: "Исекай",
  },
  {
    id: 7,
    name: "Ужасы",
  },
  {
    id: 8,
    name: "Романтика",
  },
];

export const chapters: IChapter[] = [
  { id: 6, name: "Глава 6" },
  { id: 5, name: "Глава 5" },
  { id: 4, name: "Глава 4" },
  { id: 3, name: "Глава 3" },
  { id: 2, name: "Глава 2" },
  { id: 1, name: "Глава 1" },
];

export const mangas: IManga[] = [
  {
    id: 1,
    name: "Смерть - единственный конец для злодейки",
    description:
      "Я перевоплотилась в злодейку, единственную дочь семьи Эккарт. Но самое ужасное то, чтобы я не делала, ведет меня только к смерти! Я должна сблизиться с кем-то из мужчин гарема героини, прежде чем появится «настоящая дочь» семьи Эккарт! Два старших брата, которые всегда ссорятся со мной по любому пустяку. Безумный наследный принц, благодаря которому моя жизнь заканчивается смертью.",
    genres: [1, 2],
    chapters: [6, 5, 4, 3, 2, 1],
    image:
      "https://img.newmanga.org/Large/webp//images/foreign/re/664/10F7E0DD28EA8880658A41A4B3461CE5.jpg",
    bgImage:
      "https://img.newmanga.org/BackgroundLayer/webp//images/foreign/re/664/10F7E0DD28EA8880658A41A4B3461CE5.jpg",
  },
  {
    id: 2,
    name: "Элисед",
    description:
      "Кайден - загадочный человек, который словно комета спустился с неба. Весь израненный, почти потерявший последние силы, он решает скрыть свое присутствие - ведь по-другому от погони не уйти. По дороге Кайден встречает обычную дворовую кошку и, почти не думая, решает вселиться в ее тело. Со Джи У - энергичный и общительный молодой человек из средней школы, который очень любит кошек. Один раз по пути домой он встречает до боли потрепанного кота и берет его к себе домой. Наш У не только добрый, но еще и обладает одной скрытой способностью. Какой же?",
    genres: [3, 4],
    chapters: [6, 5, 4, 3, 2, 1],
    image:
      "https://img.newmanga.org/Large/webp/images/projects/7/large_358f4f43-c117-4305-bf62-d359fea5872e.jpeg",
    bgImage:
      "https://img.newmanga.org/BackgroundLayer/webp/images/projects/7/large_358f4f43-c117-4305-bf62-d359fea5872e.jpeg",
  },
  {
    id: 3,
    name: "Поднятие уровня в одиночку",
    description:
      "10 лет назад, после того как распахнулись Врата, связавшие наш мир с миром монстров, некоторые люди приобрели способности, позволяющие им охотиться на монстров внутри Врат. Их стали именовать Охотниками. Однако не все Охотники были сильны. Моё имя — Сун Джин-У, я охотник ранга Е. Мне приходится рисковать своей жизнью в самых низкоуровневых подземельях. Не имея необходимых навыков, я едва мог зарабатывать деньги, сражаясь со слабейшими монстрами... По крайней мере это длилось до того, пока я не нашёл скрытое подземелье, сложнейшее из всех подземелий ранга D! Находясь на грани жизни и смерти, я внезапно получил странную силу — «Систему», содержащую секреты и особенности поднятия уровня, о которых я даже и не догадывался! Если я хочу, чтобы мой уровень постоянно рос, я должен начать тренировки в соответствии со списком квестов. От самого слабого Охотника E-ранга к сильнейшему Охотнику S-ранга!",
    genres: [3, 5],
    chapters: [6, 5, 4, 3, 2, 1],
    image:
      "https://img.newmanga.org/Large/webp/images/projects/2/large_6c0c5458-449c-436b-bb52-2a3cb2e64745.jpeg",
    bgImage:
      "https://img.newmanga.org/BackgroundLayer/webp/images/projects/2/large_6c0c5458-449c-436b-bb52-2a3cb2e64745.jpeg",
  },
  {
    id: 4,
    name: "Я стал графским ублюдком",
    description:
      "Я очнулся в романе, в теле молодого наследника графства, прославленного не без помощи его жестоких выродков. Но я не собираюсь быть таким же ублюдком.",
    genres: [5, 6],
    chapters: [6, 5, 4, 3, 2, 1],
    image:
      "https://img.newmanga.org/Large/webp/images/projects/1246/6cae957a-e45b-4ef1-9cab-5344aa37b8a9.webp",
    bgImage:
      "https://img.newmanga.org/BackgroundLayer/webp/images/projects/1246/6cae957a-e45b-4ef1-9cab-5344aa37b8a9.webp",
  },
  {
    id: 5,
    name: "Как защитить старшего брата главной героини",
    description:
      "Я переродилась в новелле 19+ с реверс-гаремом. Проблема в том, что я стала старшей сестрой второго, злого главного героя... Мой чертов отец в конце концов похитил старшего брата главной героини. Теперь осталось только дожидаться мести от главной героини и разрушения рода? Ах, избежать смертельной концовки и правда тяжело. 'Я тоже заинтересована в этой игрушке'. Раз уж так вышло, то я тебя защищу. Поэтому обязательно отплати мне той же монетой, понял?",
    genres: [7, 8],
    chapters: [6, 5, 4, 3, 2, 1],
    image:
      "https://img.newmanga.org/Large/webp/images/projects/1162/5b22fe38-3e2d-43f3-a373-8cea4e1ddfec.jpeg",
    bgImage:
      "https://img.newmanga.org/BackgroundLayer/webp/images/projects/1162/5b22fe38-3e2d-43f3-a373-8cea4e1ddfec.jpeg",
  },
  {
    id: 6,
    name: "Брачный бизнес",
    description:
      "Бьянка де Бланшфор. Жена Закари де Арно, выброшенная из семьи Арно после его смерти из-за ее снисходительного, легкомысленного и аморального поведения. Ей некуда было идти, семья Бланшфор уже разорилась и была более или менее изгнана в монастырь на границе. Женщина, которая в конце концов встретила свой конец на холодном каменном полу. Злодейка без чести: такой была жизнь Бьянки до того, как она вернулась в прошлое.",
    genres: [1, 8],
    chapters: [6, 5, 4, 3, 2, 1],
    image:
      "https://img.newmanga.org/Large/webp/images/projects/3648/7ce9c2bd-387b-4375-a288-1bfb723c298f.webp",
    bgImage:
      "https://img.newmanga.org/BackgroundLayer/webp/images/projects/3648/7ce9c2bd-387b-4375-a288-1bfb723c298f.webp",
  },
  {
    id: 7,
    name: "Брачный бизнес",
    description:
      "Бьянка де Бланшфор. Жена Закари де Арно, выброшенная из семьи Арно после его смерти из-за ее снисходительного, легкомысленного и аморального поведения. Ей некуда было идти, семья Бланшфор уже разорилась и была более или менее изгнана в монастырь на границе. Женщина, которая в конце концов встретила свой конец на холодном каменном полу. Злодейка без чести: такой была жизнь Бьянки до того, как она вернулась в прошлое.",
    genres: [1, 8],
    chapters: [6, 5, 4, 3, 2, 1],
    image:
      "https://img.newmanga.org/Large/webp/images/projects/3648/7ce9c2bd-387b-4375-a288-1bfb723c298f.webp",
    bgImage:
      "https://img.newmanga.org/BackgroundLayer/webp/images/projects/3648/7ce9c2bd-387b-4375-a288-1bfb723c298f.webp",
  },
  {
    id: 8,
    name: "Симбиоз между кроликом и чёрной пантерой",
    description:
      "Я кролик-оборотень, не сумевшая превратиться в человека к церемонии своего совершеннолетия. Моя семья сказала, что я лишь слабая полукровка, и бросили меня, оставив в корзинке…",
    genres: [4, 8],
    chapters: [6, 5, 4, 3, 2, 1],
    image:
      "https://img.newmanga.org/Large/webp/images/projects/1156/f9b374a8-21c9-417d-bd92-6f5817f991bc.jpeg",
    bgImage:
      "https://img.newmanga.org/BackgroundLayer/webp/images/projects/1156/f9b374a8-21c9-417d-bd92-6f5817f991bc.jpeg",
  },
  {
    id: 9,
    name: "Симбиоз между кроликом и чёрной пантерой",
    description:
      "Я кролик-оборотень, не сумевшая превратиться в человека к церемонии своего совершеннолетия. Моя семья сказала, что я лишь слабая полукровка, и бросили меня, оставив в корзинке…",
    genres: [4, 8],
    chapters: [6, 5, 4, 3, 2, 1],
    image:
      "https://img.newmanga.org/Large/webp/images/projects/1156/f9b374a8-21c9-417d-bd92-6f5817f991bc.jpeg",
    bgImage:
      "https://img.newmanga.org/BackgroundLayer/webp/images/projects/1156/f9b374a8-21c9-417d-bd92-6f5817f991bc.jpeg",
  },
  {
    id: 10,
    name: "Смерть - единственный конец для злодейки",
    description:
      "Я перевоплотилась в злодейку, единственную дочь семьи Эккарт. Но самое ужасное то, чтобы я не делала, ведет меня только к смерти! Я должна сблизиться с кем-то из мужчин гарема героини, прежде чем появится «настоящая дочь» семьи Эккарт! Два старших брата, которые всегда ссорятся со мной по любому пустяку. Безумный наследный принц, благодаря которому моя жизнь заканчивается смертью.",
    genres: [1, 2],
    chapters: [6, 5, 4, 3, 2, 1],
    image:
      "https://img.newmanga.org/Large/webp//images/foreign/re/664/10F7E0DD28EA8880658A41A4B3461CE5.jpg",
    bgImage:
      "https://img.newmanga.org/BackgroundLayer/webp//images/foreign/re/664/10F7E0DD28EA8880658A41A4B3461CE5.jpg",
  },
  {
    id: 11,
    name: "Элисед",
    description:
      "Кайден - загадочный человек, который словно комета спустился с неба. Весь израненный, почти потерявший последние силы, он решает скрыть свое присутствие - ведь по-другому от погони не уйти. По дороге Кайден встречает обычную дворовую кошку и, почти не думая, решает вселиться в ее тело. Со Джи У - энергичный и общительный молодой человек из средней школы, который очень любит кошек. Один раз по пути домой он встречает до боли потрепанного кота и берет его к себе домой. Наш У не только добрый, но еще и обладает одной скрытой способностью. Какой же?",
    genres: [3, 4],
    chapters: [6, 5, 4, 3, 2, 1],
    image:
      "https://img.newmanga.org/Large/webp/images/projects/7/large_358f4f43-c117-4305-bf62-d359fea5872e.jpeg",
    bgImage:
      "https://img.newmanga.org/BackgroundLayer/webp/images/projects/7/large_358f4f43-c117-4305-bf62-d359fea5872e.jpeg",
  },
];
