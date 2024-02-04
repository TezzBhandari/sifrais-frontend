import { InputLabel } from '@/components/InputLabel'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { AdminUserMutationType } from '../types';
import useQueryDesignations from '@/app/dashboard/admin/dashboard/system-configuration/designation/utils/api/useQueryDesignations';
import type { Designation } from '../../../system-configuration/designation/types';
import ListBox from '@/components/ListBox';
import { Skeleton } from '@/components/Skeleton';

const DesignationInput = () => {
	const { control } = useFormContext<AdminUserMutationType>();
	const { data: designations, error, isError, isLoading } = useQueryDesignations();
	if (isLoading) {
		return <div >
			<Skeleton className="h-3 mb-1 rounded-[0.25rem] w-16 bg-gray-400" />
			<Skeleton className="h-11 bg-gray-400" />
		</div>;;
	}

	if (isError) {
		return <div>failed to fetch offices {error.message}</div>;
	}
	return (
		<>

			<div>
				<InputLabel htmlFor="" labelName="designation" />
				<Controller
					control={control}
					render={({ field: { name, onChange, value } }) => (
						<ListBox<Designation>
							className="shadow-none h-11"
							labelExtractor={(item) => item.designation}
							valueExtractor={(item) => item.id.toString()}
							labelExtractorByValue={(value, options) =>
								options.find((option) => option.id.toString() === value)
									?.designation || "select  a designation"
							}
							options={designations !== undefined ? designations : []}
							value={value}
							onChange={onChange}
							name={name}
						/>
					)}
					name={"officeDetails.designation"}
				/>
			</div>
		</>
	)
}

export default DesignationInput