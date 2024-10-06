import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Globe, Edit, Trash2 } from 'lucide-react'
import Select from 'react-select'

interface Asset {
  id: number
  url: string
  lastScanDate: string
  status: 'open' | 'closed'
  vulnerabilities: number
  tags: string[]
  scanFrequency: 'daily' | 'weekly' | 'monthly'
}

interface Tag {
  value: string
  label: string
}

const AssetManagement: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([
    { id: 1, url: 'https://example.com', lastScanDate: '2023-04-15', status: 'open', vulnerabilities: 3, tags: ['production'], scanFrequency: 'weekly' },
    { id: 2, url: 'https://test.com', lastScanDate: '2023-04-14', status: 'closed', vulnerabilities: 0, tags: ['staging'], scanFrequency: 'monthly' },
  ])

  const [newAssetUrl, setNewAssetUrl] = useState('')
  const [newAssetTags, setNewAssetTags] = useState<Tag[]>([])
  const [newAssetScanFrequency, setNewAssetScanFrequency] = useState<'daily' | 'weekly' | 'monthly'>('weekly')

  const tagOptions: Tag[] = [
    { value: 'production', label: 'Production' },
    { value: 'staging', label: 'Staging' },
    { value: 'development', label: 'Development' },
    { value: 'critical', label: 'Critical' },
  ]

  const frequencyOptions = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
  ]

  const addAsset = () => {
    if (newAssetUrl) {
      const newAsset: Asset = {
        id: assets.length + 1,
        url: newAssetUrl,
        lastScanDate: 'Not scanned',
        status: 'open',
        vulnerabilities: 0,
        tags: newAssetTags.map(tag => tag.value),
        scanFrequency: newAssetScanFrequency,
      }
      setAssets([...assets, newAsset])
      setNewAssetUrl('')
      setNewAssetTags([])
      setNewAssetScanFrequency('weekly')
    }
  }

  const deleteAsset = (id: number) => {
    setAssets(assets.filter(asset => asset.id !== id))
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Asset Management</h1>
      <div className="mb-6 space-y-4">
        <input
          type="text"
          value={newAssetUrl}
          onChange={(e) => setNewAssetUrl(e.target.value)}
          placeholder="Enter new asset URL"
          className="border rounded px-3 py-2 w-full"
        />
        <Select
          isMulti
          options={tagOptions}
          value={newAssetTags}
          onChange={(selectedOptions) => setNewAssetTags(selectedOptions as Tag[])}
          placeholder="Select tags"
          className="w-full"
        />
        <Select
          options={frequencyOptions}
          value={frequencyOptions.find(option => option.value === newAssetScanFrequency)}
          onChange={(selectedOption) => setNewAssetScanFrequency(selectedOption?.value as 'daily' | 'weekly' | 'monthly')}
          placeholder="Select scan frequency"
          className="w-full"
        />
        <button
          onClick={addAsset}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Add Asset
        </button>
      </div>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">URL</th>
            <th className="px-4 py-2">Last Scan</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Vulnerabilities</th>
            <th className="px-4 py-2">Tags</th>
            <th className="px-4 py-2">Scan Frequency</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id} className="border-t">
              <td className="px-4 py-2">
                <Link to={`/assets/${asset.id}`} className="flex items-center text-blue-600 hover:text-blue-800">
                  <Globe className="h-4 w-4 mr-2 text-blue-500" />
                  {asset.url}
                </Link>
              </td>
              <td className="px-4 py-2">{asset.lastScanDate}</td>
              <td className="px-4 py-2">
                <span className={`px-2 py-1 rounded ${asset.status === 'open' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                  {asset.status}
                </span>
              </td>
              <td className="px-4 py-2">{asset.vulnerabilities}</td>
              <td className="px-4 py-2">
                {asset.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded mr-1 text-sm">
                    {tag}
                  </span>
                ))}
              </td>
              <td className="px-4 py-2">{asset.scanFrequency}</td>
              <td className="px-4 py-2">
                <button className="text-blue-500 hover:text-blue-700 mr-2">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="text-red-500 hover:text-red-700" onClick={() => deleteAsset(asset.id)}>
                  <Trash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AssetManagement