"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

import { InputLabel } from "@/components/InputLabel";
import { InputField } from "@/components/InputField";
import { cn } from "@/lib/utils/classnames";
import type { Field } from "@/app/dashboard/admin/dashboard/system-configuration/sifaris/add/types";

interface EmailFieldProps {
  fieldAttribute: Field;
  name: string;
  className?: string;
  labelStyle?: string;
  inputStyle?: string;
}

const EmailField = ({ fieldAttribute, name, className }: EmailFieldProps) => {
  const { register } = useFormContext();
  const { id, label, type, required, ...rest } = fieldAttribute;
  return (
    <>
      <div className={cn("", className)}>
        <InputLabel htmlFor={id} labelName={label} />
        {required ? <span className="text-red-500">{"*"}</span> : null}
        <InputField
          className="bg-white"
          type="email"
          {...rest}
          {...register(name, { required: required })}
        />
      </div>
    </>
  );
};

export default EmailField;
