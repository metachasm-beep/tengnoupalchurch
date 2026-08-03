import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TimelinePage from './pages/TimelinePage';
import CommitteePage from './pages/CommitteePage';
import ServicesPage from './pages/ServicesPage';
import DonorsPage from './pages/DonorsPage';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import ClickSpark from './components/ui/ClickSpark';

function App() {
  return (
    <TooltipProvider>
      <ClickSpark sparkColor="#f59e0b" sparkSize={12} sparkRadius={20} sparkCount={8} duration={500}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-timeline" element={<TimelinePage />} />
          <Route path="/project-committee" element={<CommitteePage />} />
          <Route path="/project-services" element={<ServicesPage />} />
          <Route path="/project-donors" element={<DonorsPage />} />
        </Routes>
      </ClickSpark>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
