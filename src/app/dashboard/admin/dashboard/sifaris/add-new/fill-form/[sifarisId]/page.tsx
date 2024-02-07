import React from 'react'
import SifarisForm from './components/SifarisForm'

const page = ({ params }: { params: { sifarisId: string } }) => {
    return (
        <><SifarisForm sifarisId={params.sifarisId} /></>
    )
}

export default page