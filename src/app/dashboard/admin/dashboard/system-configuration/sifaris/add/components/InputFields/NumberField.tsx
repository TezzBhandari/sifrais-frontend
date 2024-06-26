"use client";
import React from "react";
import { InputLabel } from "@/components/InputLabel";
import { InputField } from "@/components/InputField";
import { cn } from "@/lib/utils/classnames";
import { Field } from "../../types";

interface NumberFieldProps {
  fieldAttribute: Field;
  name: string;
  className?: string;
  labelStyle?: string;
  inputStyle?: string;
}

const NumberField = ({ fieldAttribute, name, className }: NumberFieldProps) => {
  const { id, label, type, required, ...rest } = fieldAttribute;
  return (
    <>
      <div className={cn("", className)}>
        <InputLabel htmlFor={id} labelName={label} />
        <InputField type="number" {...rest}
        />
      </div>
    </>
  );
};

export default NumberField;
