// Dashboard.tsx
"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Container from '../Container/Container';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  console.log(isSidebarOpen)



  const userURL = 'https://sifaris.ktmserver.com/backend/api/users/1'

  useEffect(()=> {

    const access_token = localStorage.getItem("access_token");

      const fetchData = async () => {
        const resp = await fetch(userURL, {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        })
        const data = await resp.json();
        console.log(data)
      }

      fetchData();
  },[])


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
