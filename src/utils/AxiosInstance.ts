import axios, { AxiosRequestConfig } from 'axios'

const defaultConfig = {
  timeOut: 50000,
  baseURL: 'http://110.42.184.111'
}

class Http {
  // 建構子 // 建構私有成員方法
  constructor() {
    this.httpInterceptorRequest()
    this.httpInterceptorResponse()
  }

  // 私有成員，不公開暴露
  // Axios實例
  private static axiosInstance = axios.create(defaultConfig)

  // 請求攔截
  private httpInterceptorRequest() {
    Http.axiosInstance.interceptors.request.use((config) => {
      return config
    }, err => {
      return Promise.reject(err)
    })
  }
  // 回應攔截
  private httpInterceptorResponse() {
    Http.axiosInstance.interceptors.response.use((res) => {
      return res
    }, err => {
      return Promise.reject(err)
    })
  }

  // 公有成員
  // 封裝請求 // 回傳資料為 Promise 使用泛型
  public httpRequestGet <T>(url : string, params : AxiosRequestConfig) : Promise<T> {
    return Http.axiosInstance.get(url, params).then((res) => res.data).catch()
  }

  public httpRequestPost <T>(url : string, params : AxiosRequestConfig) : Promise<T> {
    return Http.axiosInstance.post(url, params).then((res) => res.data).catch()
  }

}

// 暴露實例出去
export const http = new Http()