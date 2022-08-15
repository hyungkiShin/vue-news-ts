import axios, { AxiosPromise, AxiosResponse } from "axios";

const api = {
  // news: "https://api.hnpwa.com/v0/news/1.json",
  // ask: "https://api.hnpwa.com/v0/ask/1.json",
  // jobs: "https://api.hnpwa.com/v0/jobs/1.json",
  user: "https://api.hnpwa.com/v0/user/",
  item: "https://api.hnpwa.com/v0/item/",
  list: "https://api.hnpwa.com/v0/"
};

export interface ListItem {
  comments_count: number;
  domain: string;
  id: number;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
}

export interface User {
  about: string,
  created_time: number,
  created: string,
  id: string,
  karma: number
}

/**
 * NOTE.
 * @deprecate
 * `https://api.hnpwa.com/v0/${type}`의 
 * ["ask, news, jobs"] type 에 따라 call 하는 hook 이 있기때문에 불필요하다고 판단.
 * 
 * function fetchNews(): AxiosPromise<ListItem[]> {
 *   return axios.get(api.news);
 * }

 * function fetchAsk(): AxiosPromise<ListItem[]> {
 *   return axios.get(api.ask);
 * }

 * function fetchJobs(): AxiosPromise<ListItem[]> {
 *   return axios.get(api.jobs);
 * }
 */


function fetchUser(id: string) {
  const url = `${api.user}${id}.json`;
  return axios.get(url);
}

function fetchItem(id: string) {
  const url = `${api.item}${id}.json`;
  return axios.get(url);
}

function fetchList(type: string | null | undefined): AxiosPromise<ListItem[]> {
  const url = `${api.list}${type}/1.json`;
  return axios.get(url);
}

export { fetchUser, fetchItem, fetchList };
