// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react'
import { getDevices, addDevice, deleteDevice, updateDevice } from '../api/deviceApi'
import DeviceTable from '../components/DeviceTable'

const Dashboard = () => {
  const [devices, setDevices] = useState([])
  const [deviceName, setDeviceName] = useState('')
  const [deviceStatus, setDeviceStatus] = useState('inactive')
  const [deviceType, setDeviceType] = useState('sensor')

  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)

  // 🔍 NEW: For search bar
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    loadDevices()
  }, [])

  const loadDevices = () => {
    getDevices()
      .then((res) => setDevices(res.data))
      .catch((err) => console.error(err))
  }

  const handleAddDevice = () => {
    if (!deviceName) return

    const newDevice = {
      name: deviceName,
      type: deviceType,
      status: deviceStatus,
    }

    addDevice(newDevice)
      .then(() => {
        resetForm()
        loadDevices()
      })
      .catch((err) => console.error(err))
  }

  const handleDeleteDevice = (id) => {
    if (window.confirm('Are you sure you want to delete this device?')) {
      deleteDevice(id)
        .then(() => loadDevices())
        .catch((err) => console.error(err))
    }
  }

  const handleToggleStatus = (device) => {
    const updatedDevice = {
      ...device,
      status: device.status === 'active' ? 'inactive' : 'active',
    }

    updateDevice(device.id, updatedDevice)
      .then(() => loadDevices())
      .catch((err) => console.error(err))
  }

  const handleEditDevice = (device) => {
    setDeviceName(device.name)
    setDeviceType(device.type)
    setDeviceStatus(device.status)
    setEditId(device.id)
    setIsEditing(true)
  }

  const handleSaveEdit = () => {
    const updatedDevice = {
      name: deviceName,
      type: deviceType,
      status: deviceStatus,
    }

    updateDevice(editId, updatedDevice)
      .then(() => {
        resetForm()
        loadDevices()
      })
      .catch((err) => console.error(err))
  }

  const resetForm = () => {
    setDeviceName('')
    setDeviceType('sensor')
    setDeviceStatus('inactive')
    setEditId(null)
    setIsEditing(false)
  }

  // 🔍 Filter devices by search term
  const filteredDevices = devices.filter((device) =>
    device.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="dashboard">
      <h2>IoT Devices</h2>

      {/* 🔍 Search and Filter Row */}
      <div className="filter-row">
        <input
          type="text"
          placeholder="Search by Device Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* ➕ Add/Edit Device Form */}
      <div className="form-row">
        <input
          type="text"
          placeholder="Device Name"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
        />
        <select
          value={deviceType}
          onChange={(e) => setDeviceType(e.target.value)}
        >
          <option value="sensor">Sensor</option>
          <option value="camera">Camera</option>
          <option value="actuator">Actuator</option>
          <option value="gateway">Gateway</option>
        </select>
        <select
          value={deviceStatus}
          onChange={(e) => setDeviceStatus(e.target.value)}
        >
          <option value="inactive">Inactive</option>
          <option value="active">Active</option>
        </select>

        {isEditing ? (
          <>
            <button onClick={handleSaveEdit} className="action-btn">Update Device</button>
            <button onClick={resetForm} className="cancel-btn">Cancel</button>
          </>
        ) : (
          <button onClick={handleAddDevice}>Add Device</button>
        )}
      </div>

      {/* 📋 Device Table */}
      <DeviceTable
        devices={filteredDevices}
        onDelete={handleDeleteDevice}
        onToggleStatus={handleToggleStatus}
        onEdit={handleEditDevice}
      />
    </div>
  )
}

export default Dashboard
