import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AlertTriangle, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

interface Vulnerability {
  id: number
  name: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  description: string
  solution: string
}

interface Asset {
  id: number
  url: string
  lastScanDate: string
  status: 'open' | 'closed'
  vulnerabilities: Vulnerability[]
}

const AssetDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [asset, setAsset] = useState<Asset | null>(null)

  useEffect(() => {
    // In a real application, you would fetch the asset details from your API
    // For this example, we'll use mock data
    const mockAsset: Asset = {
      id: Number(id),
      url: 'https://example.com',
      lastScanDate: '2023-04-15',
      status: 'open',
      vulnerabilities: [
        {
          id: 1,
          name: 'SQL Injection',
          severity: 'high',
          description: 'A SQL injection vulnerability was found in the login form.',
          solution: 'Use parameterized queries or prepared statements to prevent SQL injection attacks.'
        },
        {
          id: 2,
          name: 'Cross-Site Scripting (XSS)',
          severity: 'medium',
          description: 'A reflected XSS vulnerability was found in the search functionality.',
          solution: 'Implement proper input validation and output encoding to prevent XSS attacks.'
        },
        {
          id: 3,
          name: 'Outdated SSL/TLS Version',
          severity: 'low',
          description: 'The server is using an outdated version of SSL/TLS.',
          solution: 'Upgrade to the latest version of TLS and disable older, insecure protocols.'
        }
      ]
    }
    setAsset(mockAsset)
  }, [id])

  if (!asset) {
    return <div>Loading...</div>
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <AlertTriangle className="h-5 w-5 text-red-600" />
      case 'high':
        return <XCircle className="h-5 w-5 text-orange-600" />
      case 'medium':
        return <AlertCircle className="h-5 w-5 text-yellow-600" />
      case 'low':
        return <CheckCircle className="h-5 w-5 text-green-600" />
      default:
        return null
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Asset Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">{asset.url}</h2>
        <p><strong>Last Scan Date:</strong> {asset.lastScanDate}</p>
        <p><strong>Status:</strong> {asset.status}</p>
        <p><strong>Total Vulnerabilities:</strong> {asset.vulnerabilities.length}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Vulnerabilities</h2>
      {asset.vulnerabilities.map((vulnerability) => (
        <div key={vulnerability.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
          <div className="flex items-center mb-2">
            {getSeverityIcon(vulnerability.severity)}
            <h3 className="text-xl font-semibold ml-2">{vulnerability.name}</h3>
          </div>
          <p className="mb-2"><strong>Severity:</strong> {vulnerability.severity}</p>
          <p className="mb-2"><strong>Description:</strong> {vulnerability.description}</p>
          <p><strong>Solution:</strong> {vulnerability.solution}</p>
        </div>
      ))}
    </div>
  )
}

export default AssetDetail