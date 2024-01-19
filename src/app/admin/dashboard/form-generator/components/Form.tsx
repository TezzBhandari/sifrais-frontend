"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Field, FormProps } from "./types";

import TextField from "./InputFields/TextField";
import NumberField from "./InputFields/NumberField";
import EmailField from "./InputFields/EmailField";
import DateField from "./InputFields/DateField";

function renderField([name, fieldAttribute]: [string, Field]) {
  if (fieldAttribute.type === "text") {
    return (
      <React.Fragment key={fieldAttribute.id}>
        <TextField fieldAttribute={fieldAttribute} name={name} />
      </React.Fragment>
    );
  }

  if (fieldAttribute.type === "number") {
    return (
      <React.Fragment key={fieldAttribute.id}>
        <NumberField fieldAttribute={fieldAttribute} name={name} />
      </React.Fragment>
    );
  }

  if (fieldAttribute.type === "email") {
    return (
      <React.Fragment key={fieldAttribute.id}>
        <EmailField fieldAttribute={fieldAttribute} name={name} />
      </React.Fragment>
    );
  }

  if (fieldAttribute.type === "date") {
    return (
      <React.Fragment key={fieldAttribute.id}>
        <DateField fieldAttribute={fieldAttribute} name={name} />
      </React.Fragment>
    );
  }
  return <div>Unknown Type</div>;
}

const Form = ({ fields, previewForm }: FormProps) => {
  const form = useForm();

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
                .map(renderField)
            : Object.entries(fields).map(renderField)}
        </div>
      )}
    </FormProvider>
  );
};

export default Form;
