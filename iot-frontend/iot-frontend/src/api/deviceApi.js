// src/api/deviceApi.js
import axios from 'axios'

const BASE_URL = 'http://localhost:9090/api'

// Fetch all devices
export const getDevices = () => {
  return axios.get(`${BASE_URL}/devices`)
}

// Add a new device
export const addDevice = (device) => {
  return axios.post(`${BASE_URL}/devices`, device, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

// Delete a device by ID
export const deleteDevice = (id) => {
  return axios.delete(`${BASE_URL}/devices/${id}`)
}

export const updateDevice = (id, updatedDevice) => {
  return axios.put(`${BASE_URL}/devices/${id}`, updatedDevice, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}