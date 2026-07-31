import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TimelinePage from './pages/TimelinePage';
import CommitteePage from './pages/CommitteePage';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <TooltipProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-timeline" element={<TimelinePage />} />
        <Route path="/project-committee" element={<CommitteePage />} />
      </Routes>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
