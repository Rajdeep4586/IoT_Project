import React from 'react'

const DeviceTable = ({ devices }) => {
  return (
    <table className="device-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {devices.map((device) => (
          <tr key={device.id}>
            <td>{device.id}</td>
            <td>{device.name}</td>
            <td>{device.type || 'N/A'}</td>
            <td>{device.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DeviceTable
