import { useState } from 'react'
import CoverLetterForm from './components/CoverLetterForm';
import './App.css'

function App() {
 

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <CoverLetterForm/>
    </div>
    
  );
}

export default App
