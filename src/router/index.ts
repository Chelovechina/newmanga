import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MangaView from "../views/MangaView.vue";
import ChapterView from "../views/ChapterView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:id",
    name: "manga",
    component: MangaView,
  },
  {
    path: "/read/:chapterId",
    name: "chapter",
    component: ChapterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
