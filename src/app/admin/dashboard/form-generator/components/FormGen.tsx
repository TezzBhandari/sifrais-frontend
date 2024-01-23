"use client";

// LIBARY IMPORTS
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";

// INTERNAL API AND RESOURCE IMPORTS
import { Field, FormGenprops, FormProps, InputFormFieldType } from "./types";
import TextField from "./InputFields/TextField";
import NumberField from "./InputFields/NumberField";
import EmailField from "./InputFields/EmailField";
import DateField from "./InputFields/DateField";
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

const FormGen = ({ fields, previewForm }: FormGenprops) => {
  // hook form configuration. this one is for dynamic form
  const generatedForm = useForm();

  // this one is to add delete and move field functionality
  // we had to pass this one from form creator beacause if we use say component for generation use can't access these hooks coz there is no provider during generation

  // const { control: formCreatorControl } = useFormContext<FormCreatorFieldType>();
  // const { append, prepend, remove, swap, move, insert, update, replace } =
  //   useFieldArray<FormCreatorFieldType>({
  //     control: formCreatorControl, // control props comes from useForm (optional: if you are using FormContext)
  //     name: "formFields", // unique name for your Field Array
  //   });

  return (
    <FormProvider {...generatedForm}>
      {previewForm.preview === "false" ? (
        <form onSubmit={generatedForm.handleSubmit(previewForm.onSubmit)}>
          {fields.map((fieldGroup, fieldGroupIndex) => (
            // GROUPING
            <div>
              {fieldGroup.groupName !== "" ? (
                <h2>{fieldGroup.groupName}</h2>
              ) : null}
              {fieldGroup.inputRows.map((inputRow, inputRowIndex) => {
                return (
                  // ROW OF INPUT FIELD
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: `repeat(${inputRow.inputFields.length}, 1fr)`,
                      gap: "1.5rem",
                    }}
                    className={`  `}
                  >
                    {Array.isArray(inputRow.inputFields)
                      ? inputRow.inputFields
                          .map((field) => {
                            return [field.name, field] as [string, Field];
                          })
                          .map(renderField)
                      : Object.entries(inputRow.inputFields).map(renderField)}
                  </div>
                );
              })}
            </div>
          ))}
          <button type="submit">submit</button>
        </form>
      ) : (
        <div>
          {fields.map((fieldGroup, fieldGroupIndex) => (
            // GROUPING
            <div>
              {fieldGroup.groupName !== "" ? (
                <h2>{fieldGroup.groupName}</h2>
              ) : null}
              {fieldGroup.inputRows.map((inputRow, inputRowIndex) => {
                return (
                  // ROW OF INPUT FIELD
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: `repeat(${inputRow.inputFields.length}, 1fr)`,
                      gap: "1.5rem",
                    }}
                  >
                    {Array.isArray(inputRow.inputFields)
                      ? inputRow.inputFields
                          .map((field) => {
                            return [field.name, field] as [string, Field];
                          })
                          .map(renderField)
                      : Object.entries(inputRow.inputFields).map(renderField)}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {/* {previewForm.preview === "false" ? (
        <form onSubmit={generatedForm.handleSubmit(previewForm.onSubmit)}>
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
                            inputFieldEditData:
                              fieldAttribute as InputFormFieldType,
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
                        onClick={() => previewForm.remove(fieldIndex)}
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
      )} */}
    </FormProvider>
  );
};

export default FormGen;
