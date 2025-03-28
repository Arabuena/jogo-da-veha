import React from 'react';
import AdminSupportChat from '../components/AdminSupportChat';

export default function AdminSupportPage() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Central de Atendimento
        </h1>
        <AdminSupportChat />
      </div>
    </div>
  );
} 