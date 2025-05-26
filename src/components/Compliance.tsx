
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  CheckCircle, 
  AlertTriangle,
  Clock,
  Users,
  Download,
  Settings
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Compliance = () => {
  const complianceChecks = [
    {
      category: 'Data Encryption',
      status: 'Compliant',
      score: 100,
      checks: [
        { item: 'Data at Rest Encryption', status: 'Pass', description: 'AES-256 encryption active' },
        { item: 'Data in Transit Encryption', status: 'Pass', description: 'TLS 1.3 enforced' },
        { item: 'Database Encryption', status: 'Pass', description: 'MySQL Workbench compatible encryption' },
        { item: 'Backup Encryption', status: 'Pass', description: 'Encrypted automated backups' }
      ]
    },
    {
      category: 'Audit Trails',
      status: 'Compliant',
      score: 95,
      checks: [
        { item: 'Communication Logs', status: 'Pass', description: 'All messages logged with timestamps' },
        { item: 'User Access Logs', status: 'Pass', description: 'Login/logout events tracked' },
        { item: 'Data Modification Logs', status: 'Pass', description: 'All changes audited' },
        { item: 'System Event Logs', status: 'Warning', description: 'Log retention at 89% capacity' }
      ]
    },
    {
      category: 'Consent Management',
      status: 'Compliant',
      score: 92,
      checks: [
        { item: 'Opt-in Consent', status: 'Pass', description: 'Explicit consent required' },
        { item: 'Opt-out Mechanism', status: 'Pass', description: 'Easy unsubscribe available' },
        { item: 'Consent Documentation', status: 'Pass', description: 'All consents timestamped' },
        { item: 'Consent Renewal', status: 'Warning', description: '15 consents expiring this month' }
      ]
    },
    {
      category: 'Data Anonymization',
      status: 'Compliant',
      score: 88,
      checks: [
        { item: 'Analytics Anonymization', status: 'Pass', description: 'PII removed from reports' },
        { item: 'Data Masking', status: 'Pass', description: 'Patient data masked in UI' },
        { item: 'IP Address Hashing', status: 'Pass', description: 'IP addresses anonymized' },
        { item: 'Export Sanitization', status: 'Warning', description: 'Manual review required for exports' }
      ]
    }
  ];

  const auditLog = [
    {
      timestamp: '2024-01-15 14:30:22',
      user: 'Dr. Smith',
      action: 'Sent SMS reminder to Patient #2847',
      status: 'Success',
      ipHash: 'a1b2c3d4...'
    },
    {
      timestamp: '2024-01-15 14:25:15',
      user: 'Nurse Johnson',
      action: 'Viewed patient list',
      status: 'Success',
      ipHash: 'e5f6g7h8...'
    },
    {
      timestamp: '2024-01-15 14:20:08',
      user: 'System',
      action: 'Automated workflow triggered',
      status: 'Success',
      ipHash: 'system'
    },
    {
      timestamp: '2024-01-15 14:15:33',
      user: 'Admin',
      action: 'Updated consent settings',
      status: 'Success',
      ipHash: 'i9j0k1l2...'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pass':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'Fail':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant':
        return 'bg-green-100 text-green-800';
      case 'Warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'Non-Compliant':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Compliance Dashboard</h1>
          <p className="text-gray-600 mt-1">HIPAA/GDPR compliance monitoring and audit trails</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Audit Log
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Compliance Settings
          </Button>
        </div>
      </div>

      {/* Overall Compliance Score */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-green-600" />
            <span>Overall Compliance Status</span>
          </CardTitle>
          <CardDescription>
            Comprehensive assessment of HIPAA and GDPR compliance requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
              <div className="text-sm text-gray-600">Overall Score</div>
              <Badge className="mt-2 bg-green-100 text-green-800">Compliant</Badge>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Encryption</div>
              <Badge className="mt-2 bg-green-100 text-green-800">Excellent</Badge>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Audit Coverage</div>
              <Badge className="mt-2 bg-yellow-100 text-yellow-800">Good</Badge>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
              <div className="text-sm text-gray-600">Data Privacy</div>
              <Badge className="mt-2 bg-green-100 text-green-800">Good</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {complianceChecks.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-blue-600" />
                  <span>{category.category}</span>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">{category.score}%</span>
                  <Badge className={getStatusColor(category.status)}>
                    {category.status}
                  </Badge>
                </div>
              </div>
              <Progress value={category.score} className="mt-2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.checks.map((check, checkIndex) => (
                  <div key={checkIndex} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    {getStatusIcon(check.status)}
                    <div className="flex-1">
                      <div className="font-medium text-sm">{check.item}</div>
                      <div className="text-xs text-gray-600 mt-1">{check.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Audit Trail */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-purple-600" />
            <span>Recent Audit Trail</span>
          </CardTitle>
          <CardDescription>
            Detailed log of all system activities and data access events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {auditLog.map((log, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-gray-50">
                <div className="text-xs text-gray-500 font-mono">{log.timestamp}</div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-sm font-medium">{log.user}</span>
                </div>
                <div className="flex-1 text-sm">{log.action}</div>
                <Badge className="bg-green-100 text-green-800">{log.status}</Badge>
                <div className="text-xs text-gray-400 font-mono">{log.ipHash}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline">View Full Audit Log</Button>
          </div>
        </CardContent>
      </Card>

      {/* Data Protection Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="mb-3">
              <div className="bg-blue-100 p-3 rounded-full inline-block">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Data Encryption</h3>
            <p className="text-sm text-gray-600">All patient data encrypted using industry-standard AES-256 encryption</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="mb-3">
              <div className="bg-green-100 p-3 rounded-full inline-block">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Access Control</h3>
            <p className="text-sm text-gray-600">Role-based access controls ensure data is only accessible to authorized personnel</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="mb-3">
              <div className="bg-purple-100 p-3 rounded-full inline-block">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Audit Trail</h3>
            <p className="text-sm text-gray-600">Complete audit trail of all data access and communication events</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Compliance;
