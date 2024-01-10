import DataTable from '@/components/table';
import React, { useState } from 'react'
import getData from '../getData';

const url = "https://sifaris.ktmserver.com/backend/api/llevels";

const LocalLevel = async () => {
    const data = await getData(url);
    const columns = [
        {
            Header: 'Local Level Np',
            accessor: 'lgname_np',
        },
        {
            Header: 'Local Level En',
            accessor: 'lgname_en',
        },
        {
            Header: 'District Np',
            accessor: 'district.district_np'
        },
        {
            Header: 'District En',
            accessor: 'district.district_en'
        },
        {
            Header: 'Province Np',
            acessor: 'province.province_np'
        },
        {
            Header: 'Province En',
            accessor: 'province.province_en'
        }
    ]

    return (

        <div>
            <DataTable columns={columns} data={data} />
        </div>

    )
}

export default LocalLevel;