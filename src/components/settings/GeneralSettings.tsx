import React, { useState } from 'react'
import { Sun, Moon, Zap } from 'lucide-react'

interface GeneralSettingsProps {
  appName: string
  setAppName: (name: string) => void
}

const GeneralSettings: React.FC<GeneralSettingsProps> = ({ appName, setAppName }) => {
  const [newAppName, setNewAppName] = useState(appName)
  const [theme, setTheme] = useState('light')
  const [scanDepth, setScanDepth] = useState('medium')
  const [scanInterval, setScanInterval] = useState('weekly')
  const [notifications, setNotifications] = useState({
    email: true,
    inApp: true,
    frequency: 'immediate'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAppName(newAppName)
    // Here you would typically save all settings to the backend
    alert('Settings updated successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Application Settings</h2>
        <label className="block">
          <span className="text-gray-700">Application Name</span>
          <input
            type="text"
            value={newAppName}
            onChange={(e) => setNewAppName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Theme Preferences</h2>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setTheme('light')}
            className={`p-2 rounded-md ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            <Sun size={24} />
          </button>
          <button
            type="button"
            onClick={() => setTheme('dark')}
            className={`p-2 rounded-md ${theme === 'dark' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            <Moon size={24} />
          </button>
          <button
            type="button"
            onClick={() => setTheme('auto')}
            className={`p-2 rounded-md ${theme === 'auto' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            <Zap size={24} />
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Default Scan Settings</h2>
        <label className="block mb-2">
          <span className="text-gray-700">Scan Depth</span>
          <select
            value={scanDepth}
            onChange={(e) => setScanDepth(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="basic">Basic</option>
            <option value="medium">Medium</option>
            <option value="advanced">Advanced</option>
          </select>
        </label>
        <label className="block">
          <span className="text-gray-700">Default Scan Interval</span>
          <select
            value={scanInterval}
            onChange={(e) => setScanInterval(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </label>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={notifications.email}
            onChange={(e) => setNotifications({...notifications, email: e.target.checked})}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <span className="ml-2">Email Notifications</span>
        </label>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={notifications.inApp}
            onChange={(e) => setNotifications({...notifications, inApp: e.target.checked})}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <span className="ml-2">In-App Notifications</span>
        </label>
        <label className="block">
          <span className="text-gray-700">Notification Frequency</span>
          <select
            value={notifications.frequency}
            onChange={(e) => setNotifications({...notifications, frequency: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="immediate">Immediate</option>
            <option value="daily">Daily Summary</option>
            <option value="weekly">Weekly Summary</option>
          </select>
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Save Settings
      </button>
    </form>
  )
}

export default GeneralSettings