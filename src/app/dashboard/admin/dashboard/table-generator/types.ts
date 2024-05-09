import {
  FieldValues,
  SubmitHandler,
  UseFieldArrayRemove,
} from "react-hook-form";

export interface TableSchema {
  type: "text" | "number" | "email" | "date";
}

export interface InputTableFieldType {
  id: string;
  name: string;
  header: string;
  type: TableSchema["type"];
  required: boolean;
  placeholder?: string;
}

export interface TableCreatorFieldType {
  tableName: string;
  tableFields: Array<InputTableFieldType>;
}

// we need this type coz we're using the same generator for previewing as well as submitting
// using form tag within a form tag gives hydration error
// thats why we want to remove tag during form preview in table creator  form
export type TablePreview =
  | {
      preview: "true";
      // openEditModal?: (editData: EditModalData) => void;
      remove: UseFieldArrayRemove;
    }
  | { preview: "false"; onSubmit: SubmitHandler<FieldValues> };

// this one is for TableGenerator.tsx components
export interface TableGeneratorProps {
  tableColumns: Array<InputTableFieldType>;
  tablePreview: TablePreview;
}

// table gen props
export interface TableFormGenProps {
  tableColumns: TableGeneratorProps["tableColumns"];
  remove?: UseFieldArrayRemove;
}
