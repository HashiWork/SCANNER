import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AssetManagement from './components/AssetManagement'
import AssetDetail from './components/AssetDetail'
import ScanManagement from './components/ScanManagement'
import ResultsPage from './components/ResultsPage'
import ScanScheduler from './components/ScanScheduler'
import Reports from './components/Reports'
import UserManagement from './components/UserManagement'
import Settings from './components/Settings'
import Navbar from './components/Navbar'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [appName, setAppName] = useState('SecureCMDB')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    role: 'admin' as 'viewer' | 'scanner' | 'admin',
    name: 'John Doe',
    email: 'john@example.com'
  })

  const handleLogin = (username: string, password: string) => {
    // For this example, we'll use a hardcoded default user
    if (username === 'user' && password === 'user') {
      setIsAuthenticated(true)
      setCurrentUser({
        role: 'admin',
        name: 'Default User',
        email: 'user@example.com'
      })
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {isAuthenticated && <Navbar appName={appName} />}
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/assets" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AssetManagement />
              </ProtectedRoute>
            } />
            <Route path="/assets/:id" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AssetDetail />
              </ProtectedRoute>
            } />
            <Route path="/scans" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ScanManagement />
              </ProtectedRoute>
            } />
            <Route path="/results" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ResultsPage />
              </ProtectedRoute>
            } />
            <Route path="/scheduler" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ScanScheduler />
              </ProtectedRoute>
            } />
            <Route path="/reports" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Reports />
              </ProtectedRoute>
            } />
            <Route path="/users" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <UserManagement />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Settings appName={appName} setAppName={setAppName} currentUser={currentUser} />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App