"use client";

// LIBRARY IMPORTS
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";

// INTERNAL API IMPORTS
import FieldGeneratorModal from "./FieldGeneratorModal";
import Form from "./Form";
import { FormProps } from "./types";

// FORM FIELDS TYPE
export interface CreateForm {
  formName: string;
  formFields: Array<{
    type: string;
    name: string;
    label: string;
    id: string;
    placeholder: string;
    required: boolean;
  }>;
}

const CreateFrom = () => {
  // KEEPS TRACK OF OPEN/CLOSE STATE OF  INPUT FORM MODAL
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // REACT HOOK FORM CONFIGURATION
  const formCreator = useForm<CreateForm>({
    defaultValues: {
      formName: "Form Name",
      // formFields: [
      //   {
      //     type: "",
      //     id: "",
      //     name: "",
      //     label: "",
      //     required: false,
      //     placeholder: "",
      //   },
      // ],
    },
  });

  // two rerender on initial render is beacuse of watch. expected render
  // BASED ON THIS NEW FIELD IS PREVIEWED
  const watchFormFields = formCreator.watch("formFields", []);

  return (
    <FormProvider {...formCreator}>
      {/* FORM TO CREATE FIELD/FORM  */}
      <form
        onSubmit={formCreator.handleSubmit((data) => {
          alert(JSON.stringify(data));
        })}
        className="border rounded-xl bg-white  p-8"
      >
        {/* FORM NAME INPUT FIELD  */}
        <div className="form-name-input-container flex items-center justify-between">
          <input
            className="font-bold max-w-lg border-none bg-transparent placeholder: text-3xl outline-none focus:border-none focus:outline-none "
            {...formCreator.register("formName", { required: true })}
          />
          <div className="settings cursor-pointer">
            <IoSettingsOutline className="w-6 h-6" />
          </div>
        </div>

        {/* FORM PREVIEW  */}
        <Form
          fields={watchFormFields as FormProps["fields"]}
          previewForm={{
            preview: "true",
          }}
        />

        {/* ADD FIELD BUTTON  */}
        <div
          onClick={onOpen}
          className="p-8 border-2 hover:cursor-pointer hover:bg-gray-300 border-dashed m-1 rounded-xl border-red-400"
        >
          <p className="flex items-center justify-center gap-4">
            <span>Add icon</span>
            <span>Add Field</span>
          </p>
        </div>
        {/* FORM SUBMIT BUTTON  */}
        <button>Generate form</button>
      </form>
      {/* TO FIX HYDRATION ERROR WE PLACED FIELD FORM MODAL OUTSIDE THE FORM TAG  */}
      <FieldGeneratorModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </FormProvider>
  );
};

export default CreateFrom;
