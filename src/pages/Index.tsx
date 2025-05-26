
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import PatientManagement from '../components/PatientManagement';
import WorkflowBuilder from '../components/WorkflowBuilder';
import Analytics from '../components/Analytics';
import Compliance from '../components/Compliance';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<PatientManagement />} />
          <Route path="/workflows" element={<WorkflowBuilder />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/compliance" element={<Compliance />} />
        </Routes>
      </main>
    </div>
  );
};

export default Index;
