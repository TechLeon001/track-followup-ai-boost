
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Play, 
  Pause, 
  Plus, 
  MessageSquare, 
  Mail, 
  Phone, 
  Clock, 
  Users,
  ArrowRight,
  Settings,
  Zap
} from 'lucide-react';

const WorkflowBuilder = () => {
  const [workflows, setWorkflows] = useState([
    {
      id: 1,
      name: 'Missed Appointment Follow-up',
      description: 'Automated sequence for patients who miss their appointments',
      status: 'Active',
      trigger: 'Missed Appointment',
      steps: ['SMS (Immediate)', 'Email (2 hours)', 'WhatsApp (24 hours)', 'Phone Call (48 hours)'],
      patients: 45,
      responseRate: 73
    },
    {
      id: 2,
      name: 'Pre-Appointment Reminder',
      description: 'Gentle reminders sent before scheduled appointments',
      status: 'Active',
      trigger: '24 hours before appointment',
      steps: ['SMS (24h before)', 'Email (2h before)'],
      patients: 128,
      responseRate: 89
    },
    {
      id: 3,
      name: 'Post-Treatment Check-in',
      description: 'Follow-up sequence after completed treatments',
      status: 'Draft',
      trigger: 'Treatment Complete',
      steps: ['Email (1 day)', 'SMS (3 days)', 'Phone (7 days)'],
      patients: 0,
      responseRate: 0
    }
  ]);

  const toggleWorkflow = (id: number) => {
    setWorkflows(workflows.map(workflow => 
      workflow.id === id 
        ? { ...workflow, status: workflow.status === 'Active' ? 'Paused' : 'Active' }
        : workflow
    ));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Workflow Builder</h1>
          <p className="text-gray-600 mt-1">Create and manage automated patient follow-up sequences</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
          <Plus className="h-4 w-4 mr-2" />
          Create Workflow
        </Button>
      </div>

      {/* Workflow Templates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-yellow-600" />
            <span>Quick Start Templates</span>
          </CardTitle>
          <CardDescription>
            Pre-built workflows optimized for healthcare practices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold mb-2">No-Show Recovery</h3>
              <p className="text-sm text-gray-600 mb-3">Multi-channel sequence to re-engage missed appointments</p>
              <Button size="sm" variant="outline">Use Template</Button>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold mb-2">Appointment Reminders</h3>
              <p className="text-sm text-gray-600 mb-3">Reduce no-shows with timely appointment reminders</p>
              <Button size="sm" variant="outline">Use Template</Button>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold mb-2">Treatment Follow-up</h3>
              <p className="text-sm text-gray-600 mb-3">Post-treatment care and satisfaction surveys</p>
              <Button size="sm" variant="outline">Use Template</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Workflows */}
      <div className="space-y-6">
        {workflows.map((workflow) => (
          <Card key={workflow.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    workflow.status === 'Active' ? 'bg-green-100' : 
                    workflow.status === 'Paused' ? 'bg-yellow-100' : 'bg-gray-100'
                  }`}>
                    {workflow.status === 'Active' ? (
                      <Play className="h-5 w-5 text-green-600" />
                    ) : workflow.status === 'Paused' ? (
                      <Pause className="h-5 w-5 text-yellow-600" />
                    ) : (
                      <Settings className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{workflow.name}</CardTitle>
                    <CardDescription>{workflow.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant={
                    workflow.status === 'Active' ? 'default' : 
                    workflow.status === 'Paused' ? 'secondary' : 'outline'
                  }>
                    {workflow.status}
                  </Badge>
                  <Switch 
                    checked={workflow.status === 'Active'} 
                    onCheckedChange={() => toggleWorkflow(workflow.id)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Trigger Info */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center space-x-2">
                    <Zap className="h-4 w-4" />
                    <span>Trigger</span>
                  </h4>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-blue-900">{workflow.trigger}</p>
                  </div>
                </div>

                {/* Steps */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4" />
                    <span>Steps</span>
                  </h4>
                  <div className="space-y-2">
                    {workflow.steps.map((step, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        {step.includes('SMS') && <MessageSquare className="h-3 w-3 text-green-600" />}
                        {step.includes('Email') && <Mail className="h-3 w-3 text-blue-600" />}
                        {step.includes('WhatsApp') && <MessageSquare className="h-3 w-3 text-green-500" />}
                        {step.includes('Phone') && <Phone className="h-3 w-3 text-orange-600" />}
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div>
                  <h4 className="font-semibold mb-2">Performance</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Active Patients</span>
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3 text-gray-400" />
                        <span className="font-medium">{workflow.patients}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Response Rate</span>
                      <span className="font-medium text-green-600">{workflow.responseRate}%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-2 mt-4 pt-4 border-t">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  View Analytics
                </Button>
                <Button variant="outline" size="sm">
                  Duplicate
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkflowBuilder;
