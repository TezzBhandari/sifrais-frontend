"use client";
import { InputLabel } from "@/components/InputLabel";
import ListBox from "@/components/ListBox";
import { Controller, useFormContext } from "react-hook-form";
import QueryOffices, { Office } from "../utils/api/QueryOffices";
import { AdminUserMutationType } from "../types";
import { Skeleton } from "@/components/Skeleton";

const OfficeInput = () => {
  const { control, formState: { errors } } = useFormContext<AdminUserMutationType>();
  const { data: offices, error, isError, isLoading } = QueryOffices();
  if (isLoading) {
    return <div >
      <Skeleton className="h-3 mb-1 rounded-[0.25rem] w-16 bg-gray-400" />
      <Skeleton className="h-11 bg-gray-400" />
    </div>;
  }

  if (isError) {
    return <div>failed to fetch offices {error.message}</div>;
  }

  return (
    <>
      <div>
        <InputLabel htmlFor="" labelName="office Name" />
        <div>
          <Controller
            control={control}
            render={({ field: { name, onChange, value } }) => (
              <ListBox<Office, number>
                className="shadow-none h-11"
                labelExtractor={(item) => item.office_name}
                valueExtractor={(item) => item.id}
                labelExtractorByValue={(value, options) =>
                  options.find((option) => option.id === value)
                    ?.office_name || "select office name"
                }
                options={offices !== undefined ? offices : []}
                value={value}
                onChange={onChange}
                name={name}
              />
            )}
            name={"office_id"}
          />
          <span className="text-red-500 text-xs tracking-wide">
            {errors.office_id !== undefined
              ? errors.office_id.message
              : null}
          </span>
        </div>
      </div>
    </>
  );
};

export type { Office };

export default OfficeInput;
