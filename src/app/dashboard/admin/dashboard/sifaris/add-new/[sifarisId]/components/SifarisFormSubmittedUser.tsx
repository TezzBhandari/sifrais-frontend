import Link from 'next/link'
import React from 'react'

const SifarisFormSubmittedUser = ({ sifarisId }: { sifarisId: string }) => {
    return (
        <div className='flex justify-end'>
            <Link href={`/dashboard/admin/dashboard/sifaris/add-new/fill-form/${sifarisId}`} className='px-8 py-3 text-white bg-blue-950 rounded-md'>fill form</Link>
        </div>
    )
}

export default SifarisFormSubmittedUser