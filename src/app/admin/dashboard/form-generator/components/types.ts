import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFieldArrayRemove,
} from "react-hook-form";
import { string } from "zod";

//schema indicates what type the field is
export interface FieldSchema {
  type: "text" | "number" | "email" | "date";
}

// default props which is label and input attribute type
interface DefaultAttributes extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  required: boolean;
  name: string;
}

// textfieldprops fixs the type text may be we can give validation props
export interface TextFieldProps extends FieldSchema, DefaultAttributes {
  type: "text";
}

export interface NumberFieldProps extends FieldSchema, DefaultAttributes {
  type: "number";
}

export interface EmailFieldProps extends FieldSchema, DefaultAttributes {
  type: "email";
}

export interface DateFieldProps extends FieldSchema, DefaultAttributes {
  type: "date";
}
// all the field type like textfield number field
export type Field =
  | TextFieldProps
  | NumberFieldProps
  | EmailFieldProps
  | DateFieldProps;

// this type is used for generating input field
export type Fields = Record<string, Field>;

// this one is for edit modal form; just to clear we are using the same form for updation and creation
export interface EditModalData {
  inputFieldEditData: InputFormFieldType;
  inputFieldIndex: number;
}

// we need this type coz we're using the same generator for previewing as well as submitting
export type FormPreview =
  | {
      preview: "true";
      openEditModal: (editData: EditModalData) => void;
      remove: UseFieldArrayRemove;
    }
  | { preview: "false"; onSubmit: SubmitHandler<FieldValues> };

// generator form props: it generates input field based on the data provided;
export interface FormProps {
  fields: Fields | Array<Field>;
  previewForm: FormPreview;
}

// this one is for the input field form
// beacuse we can't use generator fields type: "Field" cuz it has default property which we might not need in the form
export interface InputFormFieldType {
  type: FieldSchema["type"];
  id: string;
  name: string;
  label: string;
  required: boolean;
  placeholder: string;
}

// grouping fields
export interface InputGroup {
  groupName: string;
  inputRows: [
    {
      inputFields: Array<Field> | Fields;
    }
  ];
}

export interface FormGenProps {
  fields: Array<InputGroup>;
  previewForm: FormPreview;
}

// this type is form creator form input fields type
export interface FormCreatorFieldType {
  formName: string;
  formFields: Array<InputFormFieldType>;
}

export interface CreateFieldType {
  formName: string;
  formFields: Array<InputGroup>;
}
