// src/components/DeviceForm.js
import React, { useState } from 'react'
import './DeviceForm.css'

const DeviceForm = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('inactive')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return alert('Name is required.')

    onAdd({ name, status })
    setName('')
    setStatus('inactive')
  }

  return (
    <form className="device-form" onSubmit={handleSubmit}>
      <h3>Add New Device</h3>
      <input
        type="text"
        placeholder="Device Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button type="submit">Add Device</button>
    </form>
  )
}

export default DeviceForm
