'use client'
import DataTableSkeleton from '@/components/Table/DataTableSkeleton';
import React from 'react'
import useQuerySifarisForm from '../utils/api/useQuerySifarisForm';
import { CreateSifarisForm, Field } from '@/app/dashboard/admin/dashboard/system-configuration/sifaris/add/types';
import RenderFormSubmission from './RenderFormSubmission';
import { json } from 'stream/consumers';

const SifarisForm = ({ sifarisId }: { sifarisId: string }) => {

	const sifarisTypesWithFormRes = useQuerySifarisForm({ sifarisId });

	if (sifarisTypesWithFormRes.isPending) {
		return <DataTableSkeleton />;
	}

	if (sifarisTypesWithFormRes.isError) {
		const error = sifarisTypesWithFormRes.error;
		if (error.response) {
			return (
				<div>error message from the server: {error.response.data.message}</div>
			);
		} else if (error.request) {
			return <div>something went wrong try again</div>;
		} else {
			return <div>something went wrong try again</div>;
		}
	}


	if (!sifarisTypesWithFormRes.data.sifarisforms.sifaris_form_template) {
		return <h1>form desnot exitst</h1>
	}

	console.log(sifarisTypesWithFormRes.data)

	const formData = sifarisTypesWithFormRes.data.sifarisforms.sifaris_form_template
	// console.log('formdata')
	console.log('fromdata', formData)

	return (
		<>
			{/* <RenderFormSubmission formData={formData} /> */}
			nothing
		</>
	)
}

export default SifarisForm