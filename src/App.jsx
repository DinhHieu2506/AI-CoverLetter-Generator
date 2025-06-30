import React from 'react';
import CoverLetterForm from './components/CoverLetterForm';
import CoverLetterPreview from './components/CoverLetterPreview';

export default function App() {
  return (
    <div className="h-screen bg-gray-100 p-6 overflow-hidden">
      <div className="h-full w-full grid grid-cols-3 gap-6 overflow-hidden">
        <div className="col-span-1 p-6 border-r border-gray-200 overflow-auto h-full">
          <CoverLetterForm />
        </div>
        <div className="col-span-2 p-6 overflow-hidden flex flex-col h-full">
          <CoverLetterPreview />
        </div>
      </div>
    </div>
  );
}
