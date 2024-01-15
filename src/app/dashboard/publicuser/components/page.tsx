"use client";
import React from 'react';
import { columnDashboardUser } from './components/UserTableColumn';
import { IUser } from './types';
import MainTable from '@/components/MainTable/MainTable';
import FilterComponent from '../userform/User/components/FilterComponent';
import FilterInputField from '@/components/MainTable/FilterInputField';
import User from './components/User';
import PublicUser from './components/PublicUser';
import BreadCrumb from '@/components/BreadCrumb';
import DynamicRouteHeader from '@/components/DynamicRouteHeader';



const page = () => {
  return (
      <>
      <User />
      </>
  )
}

export default page