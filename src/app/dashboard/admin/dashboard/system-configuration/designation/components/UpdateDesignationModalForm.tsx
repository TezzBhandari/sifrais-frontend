
'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { InputLabel } from "@/components/InputLabel";
import { Modal } from "@/components/Modal";
import { Designation, DesignationFormSchema, DesignationFormType } from "../types";
import { InputField } from "@/components/InputField";
import useUpdateDesignation from "../utils/api/useUpdateDesignation";


// COMPONENT
const UpdateDesignationModalForm = ({
	isOpen,
	onClose,
	designation
}: {
	isOpen: boolean;
	onClose: () => void;
	designation: Designation
}) => {


	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<DesignationFormType>({
		defaultValues: {
			designation: designation.designation
		},
		resolver: zodResolver(DesignationFormSchema),
	});

	const updateDesignation = useUpdateDesignation({ onClose: onClose, designation: designation, reset: reset })

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} className="rounded-2xl px-6 overflow-x-hidden ">

				<form
					onSubmit={handleSubmit((data) => {
						// TODO: IMPLEMENT POST FUNCTION
						updateDesignation.mutate({ id: designation.id, designation: designation.designation })

					})}
					className="form"
				>
					{/* FORM HEADING  */}
					<div className="">
						<h1 className="not-italic text-2xl font-bold leading-6 mb-4 mt-1">
							Update Designation
						</h1>
					</div>


					{/* FORM input and button section  */}
					<div className="flex flex-col gap-6">

						{/* FORM INPUTS  */}
						<div className="flex flex-col gap-2">
							<InputLabel
								className="font-normal text-sm not-italic leading-normal"
								labelName={"designation name"}
								fieldRequired={true}
							/>

							{/* input field + error message */}
							<div className="">
								<InputField
									placeholder="Enter designation"
									className="h-11  rounded-lg text-base font-normal"
									{...register("designation")}
								/>
								<span className="text-red-500 text-xs tracking-wide">
									{errors.designation !== undefined
										? errors.designation.message
										: null}
								</span>
							</div>
						</div>

						{/* FORM SUBMIT OR CANCEL BUTTONS  */}
						<div className="flex gap-5">
							<button
								disabled={updateDesignation.isPending ? true : false}
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
								disabled={updateDesignation.isPending ? true : false}
								type="submit"
								className="flex-1 bg-[#002147] py-3 px-4 capitalize font-medium text-sm gap-2 rounded-lg text-white"
							>
								{updateDesignation.isPending ? "updating..." : "update"}
							</button>
						</div>
					</div>
				</form>
			</Modal >
		</>
	);
};

export default UpdateDesignationModalForm;
