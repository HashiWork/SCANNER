import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Settings } from 'lucide-react'

interface NavbarProps {
  appName: string
}

const Navbar: React.FC<NavbarProps> = ({ appName }) => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Shield className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">{appName}</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded">Dashboard</Link>
            <Link to="/assets" className="hover:bg-blue-700 px-3 py-2 rounded">Assets</Link>
            <Link to="/scans" className="hover:bg-blue-700 px-3 py-2 rounded">Scans</Link>
            <Link to="/results" className="hover:bg-blue-700 px-3 py-2 rounded">Results</Link>
            <Link to="/scheduler" className="hover:bg-blue-700 px-3 py-2 rounded">Scheduler</Link>
            <Link to="/reports" className="hover:bg-blue-700 px-3 py-2 rounded">Reports</Link>
            <Link to="/users" className="hover:bg-blue-700 px-3 py-2 rounded">Users</Link>
            <Link to="/settings" className="hover:bg-blue-700 px-3 py-2 rounded">
              <Settings className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar