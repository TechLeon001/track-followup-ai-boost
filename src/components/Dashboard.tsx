import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  MessageSquare, 
  Phone, 
  Mail,
  Clock,
  CheckCircle,
  AlertTriangle,
  Calendar,
  BarChart3
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Patients',
      value: '2,847',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Follow-up Rate',
      value: '87.4%',
      change: '+5.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      title: 'No-Show Reduction',
      value: '42%',
      change: '+8%',
      trend: 'up',
      icon: Calendar,
      color: 'text-purple-600'
    },
    {
      title: 'Response Time',
      value: '2.3h',
      change: '-15%',
      trend: 'down',
      icon: Clock,
      color: 'text-orange-600'
    }
  ];

  const recentActivities = [
    { patient: 'Patient #2847', action: 'Responded to SMS reminder', time: '5 min ago', status: 'success' },
    { patient: 'Patient #2846', action: 'Missed appointment - Auto follow-up triggered', time: '12 min ago', status: 'warning' },
    { patient: 'Patient #2845', action: 'Rescheduled via WhatsApp', time: '18 min ago', status: 'success' },
    { patient: 'Patient #2844', action: 'Email opened - No response yet', time: '1 hour ago', status: 'pending' },
  ];

  const channelStats = [
    { channel: 'SMS', sent: 1240, responded: 892, rate: 72 },
    { channel: 'Email', sent: 980, responded: 647, rate: 66 },
    { channel: 'WhatsApp', sent: 450, responded: 387, rate: 86 },
    { channel: 'Phone', sent: 120, responded: 89, rate: 74 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Real-time insights into your patient follow-up performance</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">Export Report</Button>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
            New Campaign
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg bg-gray-50 ${stat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <Badge variant={stat.trend === 'up' ? 'default' : 'secondary'} className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Channel Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <span>Channel Performance</span>
            </CardTitle>
            <CardDescription>
              Response rates across different communication channels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {channelStats.map((channel) => (
              <div key={channel.channel} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {channel.channel === 'SMS' && <MessageSquare className="h-4 w-4 text-green-600" />}
                    {channel.channel === 'Email' && <Mail className="h-4 w-4 text-blue-600" />}
                    {channel.channel === 'WhatsApp' && <MessageSquare className="h-4 w-4 text-green-500" />}
                    {channel.channel === 'Phone' && <Phone className="h-4 w-4 text-orange-600" />}
                    <span className="font-medium">{channel.channel}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold">{channel.rate}%</span>
                    <p className="text-xs text-gray-500">{channel.responded}/{channel.sent}</p>
                  </div>
                </div>
                <Progress value={channel.rate} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-purple-600" />
              <span>Recent Activities</span>
            </CardTitle>
            <CardDescription>
              Latest patient interactions and system events
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`p-1 rounded-full ${
                  activity.status === 'success' ? 'bg-green-100' :
                  activity.status === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  {activity.status === 'success' && <CheckCircle className="h-4 w-4 text-green-600" />}
                  {activity.status === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-600" />}
                  {activity.status === 'pending' && <Clock className="h-4 w-4 text-blue-600" />}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.patient}</p>
                  <p className="text-xs text-gray-600">{activity.action}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks and workflows for efficient patient management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Users className="h-6 w-6" />
              <span>Add New Patient</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <MessageSquare className="h-6 w-6" />
              <span>Send Bulk SMS</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span>Generate Report</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
