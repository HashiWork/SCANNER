import React from 'react'
import { BarChart, PieChart, Calendar, AlertTriangle } from 'lucide-react'

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Assets"
          value="150"
          icon={<BarChart className="h-8 w-8 text-blue-500" />}
        />
        <DashboardCard
          title="Vulnerabilities"
          value="27"
          icon={<AlertTriangle className="h-8 w-8 text-red-500" />}
        />
        <DashboardCard
          title="Last Scan"
          value="2 hours ago"
          icon={<Calendar className="h-8 w-8 text-green-500" />}
        />
        <DashboardCard
          title="Risk Score"
          value="72/100"
          icon={<PieChart className="h-8 w-8 text-yellow-500" />}
        />
      </div>
      {/* Add more dashboard components here */}
    </div>
  )
}

const DashboardCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {icon}
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  )
}

export default Dashboard