import DataTable from '@/components/table';
import React, { useState } from 'react'
import getData from '../getData';

const url = "https://sifaris.ktmserver.com/backend/api/provinces";

const Province = async () => {
    const data = await getData(url);
    const columns = [
        {
            Header: 'Province Np',
            accessor: 'province_np',
        },
        {
            Header: 'Province En',
            accessor: 'province_en',
        },
    ]

    return (

        <div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default Province;