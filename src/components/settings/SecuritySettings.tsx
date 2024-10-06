import React, { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

const SecuritySettings: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [showQRCode, setShowQRCode] = useState(false)
  const [secretKey, setSecretKey] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically update the password in the backend
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!')
      return
    }
    alert('Password updated successfully!')
  }

  const handleEnable2FA = () => {
    // In a real application, you would generate this on the server
    const newSecretKey = 'JBSWY3DPEHPK3PXP' // Example secret key
    setSecretKey(newSecretKey)
    setShowQRCode(true)
  }

  const handleConfirm2FA = () => {
    // Here you would verify the entered code against the secret key
    // If successful, enable 2FA for the user
    setTwoFactorEnabled(true)
    setShowQRCode(false)
    alert('Two-factor authentication enabled successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <label className="block mb-2">
          <span className="text-gray-700">Current Password</span>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">New Password</span>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Confirm New Password</span>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Two-Factor Authentication</h2>
        {!twoFactorEnabled ? (
          <button
            type="button"
            onClick={handleEnable2FA}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enable Two-Factor Authentication
          </button>
        ) : (
          <p className="text-green-600">Two-factor authentication is enabled.</p>
        )}
        {showQRCode && (
          <div className="mt-4">
            <p className="mb-2">Scan this QR code with your authenticator app:</p>
            <QRCodeSVG value={`otpauth://totp/SecureCMDB:user@example.com?secret=${secretKey}&issuer=SecureCMDB`} />
            <button
              type="button"
              onClick={handleConfirm2FA}
              className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Confirm and Enable 2FA
            </button>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Update Security Settings
      </button>
    </form>
  )
}

export default SecuritySettings