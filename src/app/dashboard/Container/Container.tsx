import React from 'react';
import styles from "./Container.module.css";
import { TContainer } from '../types';
import FilterComponent from '@/app/userform/User/components/FilterComponent';
import TrackForm from '@/app/userform/components/TrackForm/TrackForm';
import Page from "../../userform/page";
import BreadCrumb from '@/app/userform/components/BreadCrumb/BreadCrumb';


const Container: React.FC<TContainer> = ( {isSidebarOpen} ) => {
  
  return (
    <div className={styles.containerBody} style={{left: `${isSidebarOpen? '6.5%': '22%'}`, width: `${isSidebarOpen? "93.5%" : "78%"}` }}>
      <div className='px-10'>
        {/* <FilterComponent /> */}
        <div className="bg-white rounded-lg p-4 mt-2">
          <h1 style={{fontWeight: "600", fontSize: "30px"}}>Family Profile Settings</h1>
        <BreadCrumb
          homeElement={"Home"}
          separator={<span>{">"}</span>}
          activeClasses="text-blue-900"
          containerClasses="flex  my-2 text-xs"
          listClasses="hover:underline mx-1"
          capitalizeLinks
        />
        <div className='my-5'>
        <Page />
        </div>
        </div>
      </div>
  
    </div>
  )
}

export default Container