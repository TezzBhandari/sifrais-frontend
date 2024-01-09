import DataTable from '@/components/table';
import React, { useState } from 'react'
import getData from '../getData';
import Modal from '@/components/modal';

const url = "https://sifaris.ktmserver.com/backend/api/districts";

const District = async () => {
    const data = await getData(url);
    const columns = [
        {
            Header: 'District Np',
            accessor: 'district_np',
        },
        {
            Header: 'District En',
            accessor: 'district_en',
        },
        {
            Header: 'Province Np',
            accessor: 'province.province_np'
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

export default District;