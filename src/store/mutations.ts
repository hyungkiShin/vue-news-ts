import { NewsItem } from '@/api';
import { RootState } from './state'

enum MutationTypes {
  SET_NEWS = "SET_NEWS"
}

const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
    state.news = news;
  }
}

type Mutations = typeof mutations;

export { mutations, Mutations };

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
