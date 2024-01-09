import React from 'react'
import DataTable from '@/components/table'

const DummyTable = () => {
    const columns = [
        {
            Header: 'Province EN',
            accessor: 'provinceen',
        },
        {
            Header: 'Province NP',
            accessor: 'provincenp',
        },
    ]
    
    const data =  [
        {provinceen:"Lumbini",provincenp:"लुम्बिनी"},
        {provinceen:"Bagmati",provincenp:"बागमती"}
    ]

    return (

        <div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default DummyTable