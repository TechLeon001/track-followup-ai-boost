
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Filter,
  MessageSquare,
  Users,
  Clock,
  Target
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const [viewType, setViewType] = useState('detailed');

  const responseData = [
    { date: '2024-01-01', sms: 85, email: 67, whatsapp: 92, phone: 78 },
    { date: '2024-01-02', sms: 88, email: 70, whatsapp: 89, phone: 82 },
    { date: '2024-01-03', sms: 82, email: 65, whatsapp: 95, phone: 75 },
    { date: '2024-01-04', sms: 91, email: 73, whatsapp: 88, phone: 80 },
    { date: '2024-01-05', sms: 86, email: 68, whatsapp: 93, phone: 77 },
    { date: '2024-01-06', sms: 94, email: 75, whatsapp: 90, phone: 85 },
    { date: '2024-01-07', sms: 89, email: 72, whatsapp: 97, phone: 83 }
  ];

  const channelData = [
    { name: 'SMS', value: 35, color: '#10B981' },
    { name: 'Email', value: 25, color: '#3B82F6' },
    { name: 'WhatsApp', value: 30, color: '#22C55E' },
    { name: 'Phone', value: 10, color: '#F59E0B' }
  ];

  const conversionData = [
    { hour: '9 AM', conversions: 12 },
    { hour: '10 AM', conversions: 18 },
    { hour: '11 AM', conversions: 25 },
    { hour: '12 PM', conversions: 22 },
    { hour: '1 PM', conversions: 15 },
    { hour: '2 PM', conversions: 28 },
    { hour: '3 PM', conversions: 35 },
    { hour: '4 PM', conversions: 30 },
    { hour: '5 PM', conversions: 20 }
  ];

  const keyMetrics = [
    { label: 'Overall Response Rate', value: '87.4%', change: '+5.2%', trend: 'up' },
    { label: 'Average Response Time', value: '2.3h', change: '-15min', trend: 'up' },
    { label: 'Conversion Rate', value: '73.8%', change: '+8.1%', trend: 'up' },
    { label: 'Patient Satisfaction', value: '4.6/5', change: '+0.2', trend: 'up' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">Comprehensive insights into your patient engagement performance</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* A/B Test Toggle */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-purple-600" />
            <span>View Mode</span>
          </CardTitle>
          <CardDescription>
            Compare different analytics presentations (A/B Testing Feature)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Button 
              variant={viewType === 'detailed' ? 'default' : 'outline'}
              onClick={() => setViewType('detailed')}
            >
              Detailed Graphs (Version A)
            </Button>
            <Button 
              variant={viewType === 'simplified' ? 'default' : 'outline'}
              onClick={() => setViewType('simplified')}
            >
              Simplified Scores (Version B)
            </Button>
          </div>
        </CardContent>
      </Card>

      {viewType === 'detailed' ? (
        // Version A: Detailed Graphs
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="channels">Channels</TabsTrigger>
            <TabsTrigger value="timing">Timing</TabsTrigger>
            <TabsTrigger value="conversion">Conversion</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                        <p className="text-2xl font-bold">{metric.value}</p>
                      </div>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        {metric.change}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Response Rate Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Response Rate Trends</CardTitle>
                <CardDescription>7-day response rate comparison across channels</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={responseData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sms" stroke="#10B981" strokeWidth={2} />
                    <Line type="monotone" dataKey="email" stroke="#3B82F6" strokeWidth={2} />
                    <Line type="monotone" dataKey="whatsapp" stroke="#22C55E" strokeWidth={2} />
                    <Line type="monotone" dataKey="phone" stroke="#F59E0B" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="channels" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Channel Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Channel Usage Distribution</CardTitle>
                  <CardDescription>Percentage of communications by channel</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={channelData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {channelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Channel Performance */}
              <Card>
                <CardHeader>
                  <CardTitle>Channel Performance</CardTitle>
                  <CardDescription>Response rates and volume by channel</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { channel: 'WhatsApp', rate: 94, volume: 450, trend: '+12%' },
                      { channel: 'SMS', rate: 89, volume: 1240, trend: '+8%' },
                      { channel: 'Phone', rate: 81, volume: 120, trend: '+5%' },
                      { channel: 'Email', rate: 71, volume: 980, trend: '+3%' }
                    ].map((item) => (
                      <div key={item.channel} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                          <span className="font-medium">{item.channel}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-600">{item.volume} sent</span>
                          <span className="font-bold">{item.rate}%</span>
                          <Badge variant="default" className="bg-green-100 text-green-800">
                            {item.trend}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="timing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Optimal Send Times</CardTitle>
                <CardDescription>Response rates by time of day</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="conversions" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conversion" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Funnel</CardTitle>
                  <CardDescription>Patient journey from contact to action</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { stage: 'Messages Sent', count: 2790, percentage: 100 },
                      { stage: 'Messages Delivered', count: 2734, percentage: 98 },
                      { stage: 'Messages Opened', count: 2189, percentage: 80 },
                      { stage: 'Responses Received', count: 2058, percentage: 75 },
                      { stage: 'Appointments Scheduled', count: 1821, percentage: 66 }
                    ].map((stage) => (
                      <div key={stage.stage} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{stage.stage}</span>
                          <span className="text-sm text-gray-600">{stage.count} ({stage.percentage}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${stage.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Response Categories</CardTitle>
                  <CardDescription>AI categorization of patient responses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { category: 'Positive Response', count: 1245, color: 'bg-green-500' },
                      { category: 'Needs Assistance', count: 387, color: 'bg-yellow-500' },
                      { category: 'Declined/Not Interested', count: 234, color: 'bg-red-500' },
                      { category: 'Out of Office/Away', count: 192, color: 'bg-blue-500' }
                    ].map((category) => (
                      <div key={category.category} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                        <span className="flex-1 text-sm">{category.category}</span>
                        <span className="font-medium">{category.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        // Version B: Simplified Scores
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Dashboard - Simplified View</CardTitle>
              <CardDescription>
                Key metrics presented as easy-to-understand scores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Engagement Score */}
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">87</div>
                  <div className="text-sm font-medium text-blue-800">Engagement Score</div>
                  <div className="text-xs text-blue-600 mt-1">+5 points this week</div>
                </div>

                {/* Efficiency Score */}
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">92</div>
                  <div className="text-sm font-medium text-green-800">Efficiency Score</div>
                  <div className="text-xs text-green-600 mt-1">+8 points this week</div>
                </div>

                {/* Satisfaction Score */}
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <div className="text-4xl font-bold text-purple-600 mb-2">94</div>
                  <div className="text-sm font-medium text-purple-800">Satisfaction Score</div>
                  <div className="text-xs text-purple-600 mt-1">+2 points this week</div>
                </div>

                {/* Overall Health */}
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                  <div className="text-4xl font-bold text-orange-600 mb-2">91</div>
                  <div className="text-sm font-medium text-orange-800">Overall Health</div>
                  <div className="text-xs text-orange-600 mt-1">Excellent</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span>Key Improvements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">WhatsApp response rate increased by 12%</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Average response time improved by 15 minutes</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Patient satisfaction score up 0.2 points</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-orange-600" />
                  <span>Focus Areas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="text-sm">Email engagement</span>
                    <Badge variant="secondary">Needs attention</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm">Weekend coverage</span>
                    <Badge variant="secondary">Opportunity</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-sm">Late response follow-ups</span>
                    <Badge variant="destructive">Action needed</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
