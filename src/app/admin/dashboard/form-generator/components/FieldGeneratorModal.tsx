"use client";
import * as crypto from "crypto";

import React, { useState } from "react";
import {
  Controller,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { useEffect } from "react";

// INTERNAL API OR RESOURCE IMPORT
import { EditModalData, FieldSchema, FormCreatorFieldType, InputFormFieldType } from "./types";
import ListBox from "@/components/ListBox";
import { Modal } from "@/components/Modal";
import Button from "@/components/Button";
import { InputField } from "@/components/InputField";
import { InputLabel } from "@/components/InputLabel";

// interfaces type
export interface FieldGeneratorModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  editData: EditModalData | null;
}

// random id generator
function generateRandomUuid(): string {
  // built-in Node.js crypto module to generate a random UUID
  return crypto.randomBytes(16).toString("hex");
}


// COMPONENT
const FieldGeneratorModal = ({
  isOpen,
  onClose,
  editData,
}: FieldGeneratorModalProps) => {
  // only on debug mode
  console.log("editData: ", editData);

  // const [randomId, setRandomId] = useState(generateRandomUuid());

  // this use effect should run everytime we open modal for creating new form 
  // it creates unique id for input field
  // useEffect(() => {
  //   setRandomId(generateRandomUuid())
  // }, [])

  // form create form context accessor
  const formCreator = useFormContext<FormCreatorFieldType>();
  // dynmic input field
  const { append, prepend, remove, swap, move, insert } =
    useFieldArray<FormCreatorFieldType>({
      control: formCreator.control, // control props comes from useForm (optional: if you are using FormContext)
      name: "formFields", // unique name for your Field Array
    });

  // react-hook form configuaration for the input modal
  const { register,setValue, reset, control, handleSubmit } = useForm<InputFormFieldType>({
    defaultValues: {
      type: "text",
      name:  "",
      label: "",
      id: generateRandomUuid(),
      required: false,
      placeholder:  ""
    },
  });
  
  if (editData !== null ) {
    setValue("id", editData.inputFieldEditData.id)
    setValue("name", editData.inputFieldEditData.name)
    setValue("label", editData.inputFieldEditData.label)
    setValue("placeholder", editData.inputFieldEditData.placeholder)
    setValue("required", editData.inputFieldEditData.required)
    setValue("type", editData.inputFieldEditData.type)

  } else {
    console.log('we are creating not editing')
  }

  

  // data to show in type dropdown list
  const InputTypeList: FieldSchema["type"][] = [
    "text",
    "date",
    "email",
    "number",
  ];

  const InputTypeRegister = register("type");
  // console.log(InputTypeRegister)

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <form
          onSubmit={handleSubmit((data) => {
            if (editData === null) {
            append({
              id: data.id,
              label: data.label,
              name: data.name,
              required: data.required,
              placeholder: data.placeholder as string,
              type: data.type,
            });
          } else {
            console.log('about to edit form', editData)
            formCreator.setValue( `formFields.${editData.inputFieldIndex}.id`, editData.inputFieldEditData.id)
            formCreator.setValue( `formFields.${editData.inputFieldIndex}.name`,  data.name)
            formCreator.setValue( `formFields.${editData.inputFieldIndex}.label`,  data.label)
            formCreator.setValue( `formFields.${editData.inputFieldIndex}.placeholder`,  data.placeholder)
            formCreator.setValue( `formFields.${editData.inputFieldIndex}.required`,  data.required)
            formCreator.setValue( `formFields.${editData.inputFieldIndex}.type`,  data.type)
          }
            reset();
            onClose();
          })}
          className="flex flex-col gap-5 py-6"
        >
          <div className="form-container flex flex-col gap-3">
            {/* TYPE OF THE INPUT FIELD */}
            <div>
              <InputLabel htmlFor="" labelName={"Input Type"} />
              <Controller
                control={control}
                render={({ field: { value, onChange } }) => {
                  return (
                    <>
                      <ListBox<FieldSchema["type"]>
                        options={InputTypeList}
                        className="h-11 shadow-none"
                        valueExtractor={(item) => item}
                        labelExtractor={(item) => item}
                        value={value}
                        labelExtractorByValue={(value, options) =>
                          options.find((option) => option === value) ||
                          "select a type"
                        }
                        onChange={onChange}
                      />
                    </>
                  );
                }}
                name={"type"}
              />
            </div>
            {/* NAME OF THE INPUT FIELD */}
            <div>
              <InputLabel labelName={"Input Name"} />
              <InputField {...register("name", { required: true })} />
              <p className="text-xs">Note: This will map as a input field in the form submission</p>
            </div>

            {/* LABEL OF THE INPUT FIELD  */}
            <div>
              <InputLabel labelName={"Input Label"} />
              <InputField {...register("label", { required: true })} />
            </div>
            {/* ID OF THE INPUT FIELD  */}
            {/* <div>
              <InputLabel labelName={"Input Id"} />
              <InputField />
            </div> */}
            {/* VALIDATION: IS INPUT FIELD REQURIED */}
            <div className="flex flex-col">
              <InputLabel labelName={"required"} />
              <input
                className="w-4 h-4 "
                type="checkbox"
                {...register("required")}
              />
            </div>
            {/* PLACEHOLDER OF THE INPUT  */}
            <div>
              <InputLabel labelName={"Input placeholder"} />
              <InputField {...register("placeholder")} />
            </div>
          </div>
          {/* BUTTON CONTAINER  */}
          <div className="flex items-center gap-32 justify-center ">
            {/* CANCEL BUTTON  */}
            <Button
              type="button"
              onClick={() => {
                onClose()
                reset()
              }}
              className=" rounded-md text-[#002147] text-[14px] font-medium border border-[#002147]"
            >
              Cancel
            </Button>

            {/* SUBMIT BUTTON  */}
            <Button className="rounded-md bg-[#002147] text-[14px] font-medium border border-[#002147] text-white ">
              Save Field
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default FieldGeneratorModal;
