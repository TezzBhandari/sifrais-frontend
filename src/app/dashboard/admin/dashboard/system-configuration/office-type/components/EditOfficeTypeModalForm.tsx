
'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { InputLabel } from "@/components/InputLabel";
import { Modal } from "@/components/Modal";
import { OfficeType, OfficeTypeForm, OfficeTypeFormSchema } from "../types";
import { InputField } from "@/components/InputField";
import useEditOfficeType from "../utils/api/useEditOfficeType";


// COMPONENT
const EditOfficeTypeModalForm = ({
	isOpen,
	onClose, officeType
}: {
	isOpen: boolean;
	onClose: () => void;
	officeType: OfficeType;
}) => {

	// hook form initialization
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<OfficeTypeForm>({
		defaultValues: {
			office_type: officeType.office_type
		},
		resolver: zodResolver(OfficeTypeFormSchema),
	});




	// use mutation
	const editOfficeType = useEditOfficeType({ onClose: onClose, reset: reset })

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} className="rounded-2xl px-6 overflow-hidden">
				<form
					onSubmit={handleSubmit((data) => {
						// TODO: IMPLEMENT POST FUNCTION
						// editOfficeType.mutate(data);
						editOfficeType.mutate({ id: officeType.id, office_type: data.office_type })
					})}
					className="form"
				>
					{/* FORM HEADING  */}
					<div className="">
						<h1 className="not-italic text-2xl font-bold capitalize leading-6 mb-4 mt-1">
							Edit office type
						</h1>
					</div>


					{/* FORM input and button section  */}
					<div className="flex flex-col gap-6">

						{/* FORM INPUTS  */}
						<div className="flex flex-col gap-2">
							<InputLabel
								className="font-normal text-sm not-italic leading-normal"
								labelName={"office type"}
								fieldRequired={true}
							/>

							{/* input field + error message */}
							<div className="">
								<InputField
									placeholder="Enter an office type"
									className="h-11  rounded-lg text-base font-normal"
									{...register("office_type")}
								/>
								<span className="text-red-500 text-xs tracking-wide">
									{errors.office_type !== undefined
										? errors.office_type.message
										: null}
								</span>
							</div>
						</div>

						{/* FORM SUBMIT OR CANCEL BUTTONS  */}
						<div className="flex gap-5">
							<button
								disabled={editOfficeType.isPending ? true : false}
								className=" flex-1 bg-transparent border-solid border border-[#002147] text-[#002147] py-3 px-4 capitalize font-medium text-sm gap-2 rounded-lg "
								onClick={(e) => {
									e.preventDefault();
									onClose();
									reset();
								}}
							>
								cancel
							</button>
							<button
								disabled={editOfficeType.isPending ? true : false}
								type="submit"
								className="flex-1 bg-[#002147] py-3 px-4 capitalize font-medium text-sm gap-2 rounded-lg text-white"
							>
								{editOfficeType.isPending ? "updating..." : "update"}
							</button>
						</div>
					</div>
				</form>
			</Modal >
		</>
	);
};

export default EditOfficeTypeModalForm;

