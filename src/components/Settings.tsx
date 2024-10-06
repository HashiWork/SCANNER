import React, { useState } from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import GeneralSettings from './settings/GeneralSettings'
import ProfileSettings from './settings/ProfileSettings'
import SecuritySettings from './settings/SecuritySettings'
import UserManagementSettings from './settings/UserManagementSettings'
import ConnectionSettings from './settings/ConnectionSettings'

interface SettingsProps {
  appName: string
  setAppName: (name: string) => void
  currentUser: {
    role: 'viewer' | 'scanner' | 'admin'
    name: string
    email: string
  }
}

const Settings: React.FC<SettingsProps> = ({ appName, setAppName, currentUser }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
        <TabList>
          <Tab>General</Tab>
          <Tab>Profile</Tab>
          <Tab>Security</Tab>
          <Tab>Connections</Tab>
          {currentUser.role === 'admin' && <Tab>User Management</Tab>}
        </TabList>

        <TabPanel>
          <GeneralSettings appName={appName} setAppName={setAppName} />
        </TabPanel>
        <TabPanel>
          <ProfileSettings currentUser={currentUser} />
        </TabPanel>
        <TabPanel>
          <SecuritySettings />
        </TabPanel>
        <TabPanel>
          <ConnectionSettings />
        </TabPanel>
        {currentUser.role === 'admin' && (
          <TabPanel>
            <UserManagementSettings />
          </TabPanel>
        )}
      </Tabs>
    </div>
  )
}

export default Settings