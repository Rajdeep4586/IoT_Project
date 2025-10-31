import React, { useEffect, useState } from 'react'
import { fetchDevices } from '../api/deviceApi'
import DeviceTable from '../components/DeviceTable'

const Dashboard = () => {
  const [devices, setDevices] = useState([])

  useEffect(() => {
    fetchDevices()
      .then((res) => setDevices(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="dashboard">
      <h2>IoT Devices</h2>
      <DeviceTable devices={devices} />
    </div>
  )
}

export default Dashboard
