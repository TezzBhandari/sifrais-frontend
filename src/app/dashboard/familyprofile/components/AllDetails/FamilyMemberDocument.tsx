import FilterInputField from '@/components/MainTable/FilterInputField'
import React from 'react'
import MainTable from '@/components/MainTable/MainTable'
import { columnFamilyMemberDocument } from './TableProperties/FamilyProfileColumn'
 

const FamilyMemberDocument = () => {


    interface IFamilyMemberDocument {
        sn: number,
        fullname: string,
        documentname: string

    }

    const data = [
        {
            sn: 1,
            fullname: "John Cena",
            documentname: "Passport"
        },
        {
            sn: 2,
            fullname: "Batista Cena",
            documentname: "Citizenship"
        },
        {
            sn: 3,
            fullname: "Rey Cena",
            documentname: "Birth Certificate"
        },
        {
            sn: 4,
            fullname: "Shawn Cena",
            documentname: "Passport"
        },
    ]
return (

    <div>
    <div className='my-5'>
        <FilterInputField title="Family Member Document" buttonName='ADD DOCUMENT'/>      
    </div>
    <div>
        <MainTable<IFamilyMemberDocument> tableColumns={columnFamilyMemberDocument} tableData={data} />
    </div>
    </div>
)
}

export default FamilyMemberDocument