
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Phone, Mail, MessageSquare, Calendar, Clock, CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const PatientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const patients = [
    {
      id: 'P2847',
      name: 'John D.',
      phone: '+1 (555) ***-4567',
      email: 'j***@email.com',
      lastContact: '2024-01-15',
      status: 'Responded',
      nextFollowup: '2024-01-20',
      channel: 'SMS',
      priority: 'High'
    },
    {
      id: 'P2846',
      name: 'Sarah M.',
      phone: '+1 (555) ***-8901',
      email: 's***@email.com',
      lastContact: '2024-01-14',
      status: 'Pending',
      nextFollowup: '2024-01-18',
      channel: 'Email',
      priority: 'Medium'
    },
    {
      id: 'P2845',
      name: 'Mike R.',
      phone: '+1 (555) ***-2345',
      email: 'm***@email.com',
      lastContact: '2024-01-13',
      status: 'Scheduled',
      nextFollowup: '2024-01-22',
      channel: 'WhatsApp',
      priority: 'Low'
    },
    {
      id: 'P2844',
      name: 'Emma L.',
      phone: '+1 (555) ***-6789',
      email: 'e***@email.com',
      lastContact: '2024-01-12',
      status: 'No Response',
      nextFollowup: '2024-01-19',
      channel: 'Phone',
      priority: 'High'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Responded': return 'bg-green-100 text-green-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'No Response': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patient Management</h1>
          <p className="text-gray-600 mt-1">Track and manage patient follow-ups across all channels</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
          <Plus className="h-4 w-4 mr-2" />
          Add Patient
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search patients by ID, name, or contact..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter by Status</Button>
            <Button variant="outline">Filter by Priority</Button>
            <Button variant="outline">Export List</Button>
          </div>
        </CardContent>
      </Card>

      {/* Patient List */}
      <Card>
        <CardHeader>
          <CardTitle>Patient Follow-up Queue</CardTitle>
          <CardDescription>
            Manage active patient communications and schedule follow-ups
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Channel</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Next Follow-up</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id} className="hover:bg-gray-50">
                  <TableCell className="font-mono">{patient.id}</TableCell>
                  <TableCell className="font-medium">{patient.name}</TableCell>
                  <TableCell>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center space-x-1">
                        <Phone className="h-3 w-3 text-gray-400" />
                        <span>{patient.phone}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Mail className="h-3 w-3 text-gray-400" />
                        <span>{patient.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{patient.lastContact}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(patient.status)}>
                      {patient.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      {patient.channel === 'SMS' && <MessageSquare className="h-4 w-4 text-green-600" />}
                      {patient.channel === 'Email' && <Mail className="h-4 w-4 text-blue-600" />}
                      {patient.channel === 'WhatsApp' && <MessageSquare className="h-4 w-4 text-green-500" />}
                      {patient.channel === 'Phone' && <Phone className="h-4 w-4 text-orange-600" />}
                      <span className="text-sm">{patient.channel}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(patient.priority)}>
                      {patient.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{patient.nextFollowup}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Calendar className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600">892</div>
            <div className="text-sm text-gray-600">Responded Today</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-yellow-600">156</div>
            <div className="text-sm text-gray-600">Pending Responses</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">234</div>
            <div className="text-sm text-gray-600">Scheduled This Week</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-red-600">67</div>
            <div className="text-sm text-gray-600">Require Attention</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientManagement;
