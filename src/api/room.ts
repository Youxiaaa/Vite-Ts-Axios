import { http } from '../utils/AxiosInstance'

const api = {
  getRoomList: () => http.httpRequestGet('/api/room/room/getRoomList?pageNo=1&pageSize=3', {})
}

export default api