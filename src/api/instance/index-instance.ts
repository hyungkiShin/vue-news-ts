import axios from "axios";
import { setRequestOptions, setResponseOptions } from "./intercepter";

const APP_BASE_URI = "https://api.hnpwa.com/v0/";
const options = {};

function create(url: string, options = {}) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  return instance;
}

function createWithAuth(url: string, options = {}) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  setRequestOptions(instance);
  setResponseOptions(instance);
  return instance;
}

const news = create(`${APP_BASE_URI}news/`);
const user = createWithAuth(`${APP_BASE_URI}user/`, options);

export { news, user };
