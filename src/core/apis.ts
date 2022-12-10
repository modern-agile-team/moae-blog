import axios, { AxiosInstance } from "axios";

class HTTP_REQUEST {
  private _instance: AxiosInstance;

  constructor(baseURL: string) {
    this._instance = axios.create({
      baseURL,
    });
  }

  get instance() {
    return this._instance;
  }
}

/**
 * API 관련 클래스
 */
const APIS = new HTTP_REQUEST("");

export default APIS;
