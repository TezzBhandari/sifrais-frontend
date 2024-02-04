import React from 'react'
import SifarisFormSubmittedUser from './components/SifarisFormSubmittedUser'

const page = ({ params }: { params: { sifarisId: string } }) => {
    return (
        <><SifarisFormSubmittedUser sifarisId={params.sifarisId} /></>
    )
}

export default page