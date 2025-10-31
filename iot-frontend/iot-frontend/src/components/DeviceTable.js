// src/components/DeviceTable.js
import React from 'react'
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'

const DeviceTable = ({ devices, onDelete, onEdit, onSort, sortBy, sortOrder }) => {
  const renderSortIcon = (column) => {
    if (sortBy !== column) return <FaSort className="sort-icon" />
    return sortOrder === 'asc' ? <FaSortUp className="sort-icon" /> : <FaSortDown className="sort-icon" />
  }

  return (
    <div className="table-container">
      <table className="device-table">
        <thead>
          <tr>
            <th>ID</th>
            <th onClick={() => onSort('name')} style={{ cursor: 'pointer' }}>
              Name {renderSortIcon('name')}
            </th>
            <th onClick={() => onSort('type')} style={{ cursor: 'pointer' }}>
              Type {renderSortIcon('type')}
            </th>
            <th onClick={() => onSort('status')} style={{ cursor: 'pointer' }}>
              Status {renderSortIcon('status')}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {devices.length > 0 ? (
            devices.map((device) => (
              <tr key={device.id}>
                <td>{device.id}</td>
                <td>{device.name}</td>
                <td>{device.type || 'N/A'}</td>
                <td className={device.status === 'active' ? 'status-active' : 'status-inactive'}>
                  {device.status}
                </td>
                <td>
                  <button className="edit-btn" onClick={() => onEdit(device)} style={{ marginRight: '8px' }}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => onDelete(device.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>
                No Devices Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default DeviceTable





