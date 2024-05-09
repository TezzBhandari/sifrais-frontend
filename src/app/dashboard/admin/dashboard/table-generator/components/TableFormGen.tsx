import { useFormContext } from "react-hook-form";
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table/Table";
import { TableFormGenProps } from "../types";
import { InputField } from "@/components/InputField";

import DeleteIcon from "@/../public/assets/logo/DeleteIcon.svg"

// table generator
export function TableFormGen({ tableColumns, remove }: TableFormGenProps) {
  const { register } = useFormContext();
  return (
    <Table>
      {/* TABLE HEAD  */}
      <TableHeader>
        <TableRow>
          {tableColumns.map((tableItem, itemIndex) => {
            return (
              <TableHead key={tableItem.id} className="">
                <div className="flex items-center gap-2">
                  <span>{tableItem.header}</span>
                  {remove === undefined ? null : (
                    <button
                      className="p-1 border cursor-pointer"
                      onClick={() => remove(itemIndex)}
                    >
                      <Image
                        src={DeleteIcon}
                        alt={"Delete Icon for deleting field"}
                      />
                    </button>
                  )}
                </div>
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      {/* TABLE BODY */}
      <TableBody>
        <TableRow>
          {tableColumns.map((tableItem) => {
            return (
              <TableCell key={tableItem.id}>
                <InputField
                  type={tableItem.type}
                  {...register(tableItem.name)}
                />
              </TableCell>
            );
          })}
        </TableRow>
      </TableBody>
    </Table>
  );
}
