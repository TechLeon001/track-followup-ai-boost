
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Users, Workflow, BarChart3, Shield, Settings } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: Activity },
    { path: '/patients', label: 'Patients', icon: Users },
    { path: '/workflows', label: 'Workflows', icon: Workflow },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/compliance', label: 'Compliance', icon: Shield },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 rounded-lg">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">247 TRACK</h1>
              <p className="text-xs text-gray-500">Healthcare Follow-up Platform</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
              HIPAA Compliant
            </div>
            <Settings className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
