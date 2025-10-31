import axios from 'axios'

const BASE_URL = 'http://iot-backend:9090/api'

export const fetchDevices = () => {
  return axios.get(`${BASE_URL}/devices`)
}
