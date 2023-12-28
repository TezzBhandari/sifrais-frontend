// Dashboard.tsx

import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Container from '../Container/Container';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
        <>
        <Navbar />
        <div className='flex flex-row'>
        <Sidebar />
        <Container />
        </div>

        </>
  );
};

export default Dashboard;
