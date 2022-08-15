
enum ActionTypes {
  FETCH_LIST = 'FETCH_LIST',
  FETCH_NEWS = 'FETCH_NEWS',
  FETCH_ASK = 'FETCH_ASK',
  FETCH_USER = 'FETCH_USER',
}
import { fetchAsk, fetchNews, fetchUser } from "@/api"
import { ActionContext } from "vuex";
import { Mutations, MutationTypes } from "./mutations";
import { RootState } from "./state";

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, "commit">;

const actions = {
  async [ActionTypes.FETCH_LIST](context: MyActionContext) {
    const { data } = await fetchNews();
    context.commit(MutationTypes.SET_NEWS, data)
    return data
  },
  async [ActionTypes.FETCH_ASK](context: MyActionContext) {
    const { data } = await fetchAsk();
    console.log("ask", data)
    context.commit(MutationTypes.SET_ASK, data)
    return data
  },
  async [ActionTypes.FETCH_NEWS](context: MyActionContext) {
    const { data } = await fetchNews();
    context.commit(MutationTypes.SET_NEWS, data)
    return data
  },
  async [ActionTypes.FETCH_USER](context: MyActionContext, payload: string) {
    const { data } = await fetchUser(payload);
    context.commit(MutationTypes.SET_USER, data)
    return data
  }
}

type Actions = typeof actions;

export { ActionTypes, actions, Actions }

// import {
//   fetchNews,
//   fetchAsk,
//   fetchJobs,
//   fetchUser,
//   fetchItem,
//   fetchList,
// } from "../api/index";

// export default {
//   FETCH_NEWS({ commit } : any) {
//     return fetchNews().then((response) => commit("SET_NEWS", response.data));
//   },
//   FETCH_ASK({ commit } : any) {
//     return fetchAsk().then((response) => commit("SET_ASK", response.data));
//   },
//   FETCH_JOBS({ commit } : any) {
//     return fetchJobs().then((response) => commit("SET_JOBS", response.data));
//   },
//   FETCH_USER({ commit } : any, userId: number | string) {
//     return fetchUser(userId).then((res) => commit("SET_USER", res.data));
//   },
//   FETCH_ITEM({ commit } : any, itemId: number | string) {
//     return fetchItem(itemId).then((res) => commit("SET_ITEM", res.data));
//   },
//   // hoc
//   FETCH_LIST({ commit }: any, listType: any) {
//     return fetchList(listType).then((res) => commit("SET_LIST", res.data));
//   },
// };
