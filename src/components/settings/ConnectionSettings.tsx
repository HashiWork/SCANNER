import React, { useState } from 'react'

const ConnectionSettings: React.FC = () => {
  const [dbSettings, setDbSettings] = useState({
    user: '',
    password: '',
    ip: '',
    dbName: '',
  })

  const [owaspSettings, setOwaspSettings] = useState({
    ip: '',
    port: '',
    apiKey: '',
  })

  const handleDbSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDbSettings(prev => ({ ...prev, [name]: value }))
  }

  const handleOwaspSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setOwaspSettings(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save these settings to your backend
    console.log('Database settings:', dbSettings)
    console.log('OWASP settings:', owaspSettings)
    alert('Connection settings saved successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Database Connection</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="user"
            value={dbSettings.user}
            onChange={handleDbSettingsChange}
            placeholder="Database User"
            className="border rounded px-3 py-2"
          />
          <input
            type="password"
            name="password"
            value={dbSettings.password}
            onChange={handleDbSettingsChange}
            placeholder="Database Password"
            className="border rounded px-3 py-2"
          />
          <input
            type="text"
            name="ip"
            value={dbSettings.ip}
            onChange={handleDbSettingsChange}
            placeholder="Database IP"
            className="border rounded px-3 py-2"
          />
          <input
            type="text"
            name="dbName"
            value={dbSettings.dbName}
            onChange={handleDbSettingsChange}
            placeholder="Database Name"
            className="border rounded px-3 py-2"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">OWASP Module Connection</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="ip"
            value={owaspSettings.ip}
            onChange={handleOwaspSettingsChange}
            placeholder="OWASP IP"
            className="border rounded px-3 py-2"
          />
          <input
            type="text"
            name="port"
            value={owaspSettings.port}
            onChange={handleOwaspSettingsChange}
            placeholder="OWASP Port"
            className="border rounded px-3 py-2"
          />
          <input
            type="text"
            name="apiKey"
            value={owaspSettings.apiKey}
            onChange={handleOwaspSettingsChange}
            placeholder="OWASP API Key"
            className="border rounded px-3 py-2"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Save Connection Settings
      </button>
    </form>
  )
}

export default ConnectionSettings