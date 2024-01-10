import React from 'react'
import DataTable from '@/components/table'

const FamilyMemberDocument = () => {
  const columns = [
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Relationship',
        accessor: 'relationship',
    },
    {
        Header: 'To',
        accessor: 'to',
    }
]

const data =  [
    {name:"Ram Bahadur",relationship:"Father", to: "Shyam Bahadur"},
    {name:"Sujan Regmi",relationship:"Brother", to: "Shyam Bahadur"},
    {name:"Sita Bahadur",relationship:"Mother", to: "Shyam Bahadur"},

]

return (

    <div>
        <DataTable columns={columns} data={data} />
    </div>
)
}

export default FamilyMemberDocument