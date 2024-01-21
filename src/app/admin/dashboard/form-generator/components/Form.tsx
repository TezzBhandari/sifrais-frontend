"use client";

// LIBARY IMPORTS
import React from "react";
import Image from "next/image";
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";

// INTERNAL API AND RESOURCE IMPORTS
import { Field, FormProps, InputFormFieldType } from "./types";
import TextField from "./InputFields/TextField";
import NumberField from "./InputFields/NumberField";
import EmailField from "./InputFields/EmailField";
import DateField from "./InputFields/DateField";
import { FormCreatorFieldType } from "./types";
import DeleteIcon from "@/../public/assets/logo/DeleteIcon.svg";
import EditIcon from "@/../public/assets/logo/EditIcon.svg";

// import { type CreateForm } from "./CreateFrom";

function renderField([name, fieldAttribute]: [string, Field]) {
  if (fieldAttribute.type === "text") {
    return <TextField fieldAttribute={fieldAttribute} name={name} />;
  }

  if (fieldAttribute.type === "number") {
    return <NumberField fieldAttribute={fieldAttribute} name={name} />;
  }

  if (fieldAttribute.type === "email") {
    return <EmailField fieldAttribute={fieldAttribute} name={name} />;
  }

  if (fieldAttribute.type === "date") {
    return <DateField fieldAttribute={fieldAttribute} name={name} />;
  }
  return <div>Unknown Type</div>;
}

const Form = ({ fields, previewForm }: FormProps) => {
  // hook form configuration. this one is for dynamic form
  const form = useForm();

  // this one is to add delete and move field functionality
  const { control: formCreatorControl } = useFormContext<FormCreatorFieldType>();
  const { append, prepend, remove, swap, move, insert, update, replace } =
    useFieldArray<FormCreatorFieldType>({
      control: formCreatorControl, // control props comes from useForm (optional: if you are using FormContext)
      name: "formFields", // unique name for your Field Array
    });

  return (
    <FormProvider {...form}>
      {previewForm.preview === "false" ? (
        <form onSubmit={form.handleSubmit(previewForm.onSubmit)}>
          {Array.isArray(fields)
            ? fields
              .map((field) => {
                return [field.name as string, field] as [string, Field];
              })
              .map(renderField)
            : Object.entries(fields).map(renderField)}
          <button type="submit">submit</button>
        </form>
      ) : (
        <div>
          {Array.isArray(fields)
            ? fields
              .map((field) => {
                return [field.name as string, field] as [string, Field];
              })
              .map(([name, fieldAttribute], fieldIndex) => {
                return (
                  <div
                    key={fieldAttribute.id}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-1">
                      {renderField([name, fieldAttribute])}
                    </div>
                    <span
                      className="p-1 border cursor-pointer"
                      onClick={() => {
                        previewForm.openEditModal({
                          inputFieldIndex: fieldIndex,
                          inputFieldEditData: fieldAttribute as InputFormFieldType,
                        });
                      }}
                    >
                      <Image
                        src={EditIcon}
                        alt={"Edit Icon for editing field"}
                      />
                    </span>
                    <span
                      className="p-1 border cursor-pointer"
                      onClick={() => remove(fieldIndex)}
                    >
                      <Image
                        src={DeleteIcon}
                        alt={"Delete Icon for deleting field"}
                      />
                    </span>
                  </div>
                );
              })
            : Object.entries(fields).map(renderField)}
        </div>
      )}
    </FormProvider>
  );
};

export default Form;
