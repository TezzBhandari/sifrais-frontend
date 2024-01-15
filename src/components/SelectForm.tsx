"use client";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import ListBox from "./ListBox";
interface Province {
  province_en: string;
  province_np: string;
}

interface FormValues {
  province: string;
}

const SelectForm = () => {
  const provinces = [
    { id: 1, province_en: "Durward Reynolds", province_np: "ND" },
    { id: 2, province_en: "Kenton Towne", province_np: "Nk" },
    { id: 3, province_en: "Therese `  9++++Wunsch", province_np: "Nt" },
    { id: 4, province_en: "Benedict Kessler", province_np: "NB" },
    { id: 5, province_en: "Katelyn Rohan", province_np: "NKA" },
  ];
  const { handleSubmit, watch, control } = useForm<FormValues>({
    defaultValues: {
      province: provinces[0].province_np,
    },
  });
  const valueExtractor = ({ province_np }: Province) => province_np;

  const labelExtractor = ({ province_en }: Province) => province_en;

  return (
    <form>
      <Controller
        name="province"
        control={control}
        render={({ field: { name, onChange, onBlur, value } }) => (
          <ListBox<Province>
            options={provinces}
            onChange={onChange}
            valueExtractor={valueExtractor}
            labelExtractor={labelExtractor}
            value={value}
            name={name}
            labelExtractorByValue={(value) => {
              const province = provinces.find((p) => p.province_np === value);
              return province === undefined
                ? "label doesn't exist"
                : province.province_en;
            }}
          />
        )}
      />
    </form>
  );
};

export default SelectForm;
