import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

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

export type Fields = Record<string, Field>;

export interface EditModalData {
  inputFieldEditData: Field;
  inputFieldIndex: number;
}

export type FormPreview =
  | {
    preview: "true";
    openEditModal: (editData: EditModalData) => void;
  }
  | { preview: "false"; onSubmit: SubmitHandler<FieldValues> };

export interface FormProps {
  fields: Fields | Array<Field>;
  previewForm: FormPreview;
}
