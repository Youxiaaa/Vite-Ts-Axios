import { http } from '../utils/AxiosInstance'

export const getRoomList = () => http.httpRequestGet('/api/room/room/getRoomList?pageNo=1&pageSize=3', {})