import {
  fetchNews,
  fetchAsk,
  fetchJobs,
  fetchUser,
  fetchItem,
  fetchList,
} from "../api/index";

export default {
  FETCH_NEWS({ commit } : any) {
    return fetchNews().then((response) => commit("SET_NEWS", response.data));
  },
  FETCH_ASK({ commit } : any) {
    return fetchAsk().then((response) => commit("SET_ASK", response.data));
  },
  FETCH_JOBS({ commit } : any) {
    return fetchJobs().then((response) => commit("SET_JOBS", response.data));
  },
  FETCH_USER({ commit } : any, userId: number | string) {
    return fetchUser(userId).then((res) => commit("SET_USER", res.data));
  },
  FETCH_ITEM({ commit } : any, itemId: number | string) {
    return fetchItem(itemId).then((res) => commit("SET_ITEM", res.data));
  },
  // hoc
  FETCH_LIST({ commit }: any, listType: any) {
    return fetchList(listType).then((res) => commit("SET_LIST", res.data));
  },
};
