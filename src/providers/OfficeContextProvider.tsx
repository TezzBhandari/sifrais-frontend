'use client'
import { District } from '@/app/dashboard/admin/dashboard/it-nagar/create-user/utils/api/QueryDistricts';
import { LocalLevel } from '@/app/dashboard/admin/dashboard/it-nagar/create-user/utils/api/QueryLocalLevels';
import { Province } from '@/app/dashboard/admin/dashboard/it-nagar/create-user/utils/api/QueryProvinces';
import React, { createContext, useContext, useState } from 'react';


export interface OfficeProviderData {
    provinces: Array<Province>,
    districts: Array<District>,
    localLevels: Array<LocalLevel>

}

const OfficeContext = createContext<OfficeProviderData>({
    districts: [], provinces: [], localLevels: []
});

const OfficeContextProvider = ({ provinces, districts, localLevels, children }: OfficeProviderData & { children: React.ReactNode }) => {

    return (
        <OfficeContext.Provider value={{ provinces, districts, localLevels }}>
            {children}
        </OfficeContext.Provider>
    );
}


const useOfficeContext = () => {
    return useContext(OfficeContext)
}


export { useOfficeContext, OfficeContextProvider }
