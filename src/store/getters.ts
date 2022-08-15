import { RootState } from "./state";

// computed 속성에서 1:1 mapping 이 된다.
// 사용시기: 일반적인 state 에 접근을 할때
// state 를 가공 연산해서 컴포넌트에서 쉽게 접근 할 수 있게 해주는 게 getter 다
export const getters = {
  // fetchedNews(state: RootState) {
  //   return state.news;
  // },
  // getToken(state: RootState) {
  //   return state.token + "!";
  // }
  fetchedList(state: RootState) {
    return state.item;
  },
  fetchedUser(state: RootState) {
    return state.user;
  },
};

export type Getters = typeof getters;

// export default {
//   fetchedItem(state : any) {
//     return state.item;
//   },
//   fetchedUser(state : any) {
//     return state.user;
//   },
//   fetchedList(state : any) {
//     return state.list;
//   },
//   userName(state : any) {
//     return state.item.user;
//   },
//   userContent(state : any) {
//     return state.item.content;
//   },
//   userQuestion(state : any) {
//     return state.item.title;
//   },
//   userTimeAgo(state : any) {
//     return state.item.time_ago;
//   },
//   contentPoints(state: any) {
//     return state.item.points;
//   },
// };
