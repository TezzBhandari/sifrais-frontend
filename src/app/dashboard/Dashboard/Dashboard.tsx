// Dashboard.tsx
"use client";
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Container from '../Container/Container';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  console.log(isSidebarOpen)


  return (
        <>
        <Navbar />
        <div className='flex flex-row'>
        <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Container isSidebarOpen={isSidebarOpen} />
        </div>

        </>
  );
};

export default Dashboard;
