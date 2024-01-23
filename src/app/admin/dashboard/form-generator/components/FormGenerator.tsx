"use client";

import { string } from "zod";
import Form from "./Form";
import { FormProps, InputGroup } from "./types";
import FormGen from "./FormGen";

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
  // const fields: FormProps["fields"] = [
  //   {
  //     name: "fullname",
  //     label: "Full Name",
  //     type: "text",
  //     id: "fullname",
  //     required: true,
  //   },
  //   {
  //     name: "email",
  //     label: "Email",
  //     type: "email",
  //     id: "email",
  //     required: true,
  //   },
  // ];

  const fields: Array<InputGroup> = [
    {
      groupName: "group-1",
      inputRows: [
        {
          inputFields: [
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
            {
              name: "email",
              label: "Email",
              type: "email",
              id: "email",
              required: true,
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <FormGen
        fields={fields}
        previewForm={{
          preview: "false",
          onSubmit: (data) => alert(JSON.stringify(data)),
        }}
      />
    </>
  );
};

export default FormGenerator;
