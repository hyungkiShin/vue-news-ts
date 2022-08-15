import { ListItem, User } from '@/api';
import { RootState } from './state'

enum MutationTypes {
  // SET_NEWS = "SET_NEWS",
  // SET_ASK = "SET_ASK",
  SET_USER = "SET_USER",
  SET_LIST = "SET_LIST",
}

const mutations = {
  // [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
  //   state.news = news;
  // },
  // [MutationTypes.SET_ASK](state: RootState, ask: Ask[]) {
  //   state.ask = ask;
  // },
  [MutationTypes.SET_USER](state: RootState, user: User) {
    state.user = user;
  },
  [MutationTypes.SET_LIST](state: RootState, item: ListItem[]) {
    state.item = item;
  },
}

type Mutations = typeof mutations;

export { mutations, Mutations, MutationTypes };

// export default {
//   SET_NEWS(state: any, news: any) {
//     state.news = news;
//   },
//   SET_ASK(state: any, ask: any) {
//     state.ask = ask;
//   },
//   SET_JOBS(state: any, jobs: any) {
//     state.jobs = jobs;
//   },
//   SET_USER(state: any, user: any) {
//     state.user = user;
//   },
//   SET_ITEM(state: any, item: any) {
//     state.item = item;
//   },
//   SET_LIST(state: any, list: any) {
//     state.list = list;
//   },
// };
