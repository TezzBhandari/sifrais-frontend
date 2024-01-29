"use client";


import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { InputTableFieldType, TableGeneratorProps } from "../types";
import { TableFormGen } from "./TableFormGen";



const TableGenerator = ({
  tableColumns,
  tablePreview,
}: TableGeneratorProps) => {
  const tableForm = useForm();
  return (
    <FormProvider {...tableForm}>
      {tablePreview.preview === "true" ? (
        <div>
          <TableFormGen tableColumns={tableColumns} remove={tablePreview.remove} />
        </div>
      ) : (
        <form onSubmit={tableForm.handleSubmit(tablePreview.onSubmit)}>
          <TableFormGen tableColumns={tableColumns} />
          <button type="submit">submit</button>
        </form>
      )}
    </FormProvider>
  );
};

export default TableGenerator;
