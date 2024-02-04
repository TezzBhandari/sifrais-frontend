"use client";
import { InputLabel } from "@/components/InputLabel";
import ListBox from "@/components/ListBox";
import { Controller, useFormContext } from "react-hook-form";
import QueryOfficeType, { OfficeType } from "../utils/api/QueryOfficeType";
import { Skeleton } from "@/components/Skeleton";

const OfficeTypeInput = () => {
  const { control } = useFormContext();
  const { data: officeTypes, error, isError, isLoading } = QueryOfficeType();
  if (isLoading) {
    return <div >
      <Skeleton className="h-3 mb-1 rounded-[0.25rem] w-16 bg-gray-400" />
      <Skeleton className="h-11 bg-gray-400" />
    </div>;;
  }

  if (isError) {
    return <div>failed to fetch office type {error.name}</div>;
  }

  return (
    <>
      <div>
        <InputLabel htmlFor="" labelName="office type" />
        <Controller
          control={control}
          render={({ field: { name, onChange, value } }) => (
            <ListBox<OfficeType>
              className="shadow-none h-11"
              labelExtractor={(item) => item.office_type}
              valueExtractor={(item) => item.id.toString()}
              labelExtractorByValue={(value, options) =>
                options.find((option) => option.id.toString() === value)
                  ?.office_type || "select office type"
              }
              options={officeTypes !== undefined ? officeTypes : []}
              value={value}
              onChange={onChange}
              name={name}
            />
          )}
          name={"officeDetails.officeType"}
        />
      </div>
    </>
  );
};

export type { OfficeType };

export default OfficeTypeInput;
