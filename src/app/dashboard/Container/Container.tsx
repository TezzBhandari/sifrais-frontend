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
      <BreadCrumb
          homeElement={"Home"}
          separator={<span>{">"}</span>}
          activeClasses="text-amber-500"
          containerClasses="flex py-5"
          listClasses="hover:underline mx-1 font-bold"
          capitalizeLinks
        />
        <FilterComponent />
        <div className="bg-white rounded-lg p-4 mt-2">
        <Page />
        </div>
      </div>
  
    </div>
  )
}

export default Container