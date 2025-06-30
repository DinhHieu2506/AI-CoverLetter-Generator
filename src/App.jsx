import React from 'react';
import CoverLetterForm from './components/CoverLetterForm';
import CoverLetterPreview from './components/CoverLetterPreview';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200 overflow-auto">
          <CoverLetterForm />
        </div>
        <div className="md:col-span-2 p-4 overflow-auto flex flex-col h-full">
          <CoverLetterPreview />
        </div>
      </div>
    </div>
  );
}
