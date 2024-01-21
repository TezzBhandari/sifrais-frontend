"use client";

import Form from "./Form";
import { FormProps } from "./types";

const FormGenerator = () => {
  //   const fields: FormProps["fields"] = {
  //     email: { label: "email", type: "text", id: "email", required: true },
  //     fullname: {
  //       label: "fullname",
  //       type: "number",
  //       id: "fullname",
  //       required: false,
  //     },
  //   };
  const fields: FormProps["fields"] = [
    {
      name: "fullname",
      label: "Full Name",
      type: "text",
      id: "fullname",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      id: "email",
      required: true,
    },
  ];
  return (
    <>
      <Form
        // isSubmittable={false}
        fields={fields}
        previewForm={{
          preview: "false",
          onSubmit: (data) => alert(JSON.stringify(data))
        }}
      />
    </>
  );
};

export default FormGenerator;
