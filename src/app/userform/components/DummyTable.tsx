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
        {
            Header: 'Family',
            accessor: 'family',
        }
    ]
    
    const data =  [
        {provinceen:"Lumbini",provincenp:"लुम्बिनी", famiy: "family"},

    ]

    return (

        <div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default DummyTable