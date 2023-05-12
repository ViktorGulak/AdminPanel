import axios from "axios";

export const $basePath = axios.create({
  baseURL: "/adminpanel",
});
