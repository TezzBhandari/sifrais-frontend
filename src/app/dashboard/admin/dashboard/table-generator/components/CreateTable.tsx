"use client";
import { useState } from "react";
import TableGeneratorModalForm from "./TableGeneratorModalForm";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { TableCreatorFieldType } from "../types";
import TableGenerator from "./TableGenerator";
import { IoSettingsOutline } from "react-icons/io5";

const CreateTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // opens the modal
  const onOpen = () => {
    setIsModalOpen(true);
  };

  // close the modal
  const onClose = () => {
    setIsModalOpen(false);
    // resets edit form
  };

  // react hook form for creating table
  const tableCreator = useForm<TableCreatorFieldType>({
    defaultValues: {
      tableName: "Table Name",
      tableFields: [],
    },
  });

  // this one watches the changes on tableField and return the latest value which trigger rerender and new data is passed to tableGenerator which inturn give updated table
  const watchTableFields = tableCreator.watch("tableFields", []);
  console.log(JSON.stringify(watchTableFields));

  // allow us to delete and edit generated headers while creating
  const { remove: tableHeadRemove } = useFieldArray<TableCreatorFieldType>({
    control: tableCreator.control, // control props comes from useForm (optional: if you are using FormContext)
    name: "tableFields", // unique name for your Field Array
  });

  return (
    <FormProvider {...tableCreator}>
      <form
        onSubmit={tableCreator.handleSubmit((data) => {
          alert(JSON.stringify(data));
        })}
        className="border rounded-xl bg-white  p-8"
      >
        <div className="form-name-input-container flex items-center justify-between">
          <input
            className="font-bold max-w-lg border-none bg-transparent placeholder: text-3xl outline-none focus:border-none focus:outline-none "
            {...tableCreator.register("tableName", { required: true })}
          />
          <div className="settings cursor-pointer">
            <IoSettingsOutline className="w-6 h-6" />
          </div>
        </div>

        {/* TABLE GENERATOR  */}
        <TableGenerator
          tableColumns={watchTableFields}
          tablePreview={{
            preview: "true",
            remove: tableHeadRemove
          }}
        />

        {/* TABLE SUBMISSION  */}
        {/* ADD FIELD BUTTON  */}
        <div
          onClick={() => {
            console.log("opening a modal to create a table input");
            onOpen();
          }}
          className="p-8 border-2 hover:cursor-pointer hover:bg-gray-300 border-dashed m-1 rounded-xl border-red-400"
        >
          <p className="flex items-center justify-center gap-4">
            <span>Add icon</span>
            <span>Add Table Field</span>
          </p>
        </div>
        {/* FORM SUBMIT BUTTON  */}
        <button>Generate Table</button>
      </form>

      <TableGeneratorModalForm
        isOpen={isModalOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </FormProvider>
  );
};

export default CreateTable;
