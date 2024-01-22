"use client";

// LIBRARY IMPORTS
import { FormProvider, set, useFieldArray, useForm } from "react-hook-form";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";

// INTERNAL API IMPORTS
import FieldGeneratorModal from "./FieldGeneratorModal";
import Form from "./Form";
import { EditModalData, FieldSchema, FormCreatorFieldType, FormProps } from "./types";



const CreateFrom = () => {
  // KEEPS TRACK OF OPEN/CLOSE STATE OF  INPUT FORM MODAL
  const [isOpen, setOpen] = useState(false);

  // if the state has data that means we are editing existing input filed otherwise we are creating new one
  const [editData, setEditData] = useState<EditModalData | null>(null);

  // opens the modal
  const onOpen = () => {
    setOpen(true);
  };

  // close the modal
  const onClose = () => {
    setOpen(false);
    // resets edit form
    setEditData(null);

  };

 

  // for using same model as edit form
  const openEditFieldModal = (editData: EditModalData) => {
    setEditData(editData);
    onOpen();
  };

  // REACT HOOK FORM CONFIGURATION
  const formCreator = useForm<FormCreatorFieldType>({
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

  // to rerender on initial render is beacuse of watch. expected render
  // BASED ON THIS NEW FIELD IS PREVIEWED
  const watchFormFields = formCreator.watch("formFields", []);

  // this one is to for deleting the generated input field
  const {  remove } =
    useFieldArray<FormCreatorFieldType>({
      control: formCreator.control, // control props comes from useForm (optional: if you are using FormContext)
      name: "formFields", // unique name for your Field Array
    });

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
        // this type casting is necessary because the type for creating field is subset of type of generating field(it contains a lot of default value which we don't need during input field creation)
          fields={watchFormFields as FormProps["fields"]}
          previewForm={{
            remove: remove,
            preview: "true",
            openEditModal: openEditFieldModal,
          }}
        />

        {/* ADD FIELD BUTTON  */}
        <div
          onClick={() => {
            console.log("opening a modal to create a form");
            onOpen()
          }}
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
      <FieldGeneratorModal
        editData={editData}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
    </FormProvider>
  );
};

export default CreateFrom;
