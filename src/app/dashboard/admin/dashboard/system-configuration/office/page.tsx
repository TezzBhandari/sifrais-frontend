import React from 'react'
import OfficeTable from './components/OfficeTable'
import FetchLocalLevel from '../../it-nagar/create-user/utils/api/QueryLocalLevels';
import { HttpMethod } from '@/lib/utils/requestHandler';
import FetchProvince from '../../it-nagar/create-user/utils/api/QueryProvinces';
import FetchDistrict from '../../it-nagar/create-user/utils/api/QueryDistricts';
import { OfficeContextProvider } from '@/providers/OfficeContextProvider';

const office = async () => {
    const [
        districtsResponse,
        provincesResponse,
        localLevelResponse,
    ] = await Promise.all([

        FetchDistrict({
            url: "/api/districts",
            httpMethod: HttpMethod.GET,
        }),
        FetchProvince({
            httpMethod: HttpMethod.GET,
            url: "/api/provinces",
        }),
        FetchLocalLevel({
            httpMethod: HttpMethod.GET,
            url: "/api/llevels",
        }),
    ]);

    if (districtsResponse.code === "error") {
        return (
            <div>failed to fetch genders: {districtsResponse.error?.message}</div>
        );
    }
    if (provincesResponse.code === "error") {
        return (
            <div>failed to fetch genders: {provincesResponse.error?.message}</div>
        );
    }
    if (localLevelResponse.code === "error") {
        return (
            <div>failed to fetch genders: {localLevelResponse.error?.message}</div>
        );
    }
    return (
        <OfficeContextProvider provinces={provincesResponse.data.data} districts={districtsResponse.data.data} localLevels={localLevelResponse.data.data}><OfficeTable /></OfficeContextProvider>
    )
}

export default office