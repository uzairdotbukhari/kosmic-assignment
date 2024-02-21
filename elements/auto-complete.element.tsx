import React from "react";
import {
  Controller,
  useFormState,
  useForm,
  Control,
  RegisterOptions,
} from "react-hook-form";
import { FormLabel, Autocomplete, TextField, Box } from "@mui/material";

export interface IAutoCompleteElementOption {
  value: string;
  label: string;
}

export interface IAutoCompleteElementProps {
  name: string;
  options: IAutoCompleteElementOption[];
  reactHookControl?: Control<any>;
  title?: string;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  validation?: RegisterOptions;
}

const AutoCompleteElement: React.FC<IAutoCompleteElementProps> = ({
  name,
  options,
  reactHookControl,
  title,
  defaultValue,
  disabled,
  onChange,
  validation,
  className,
}) => {
  const { control } = useForm();
  const { errors } = useFormState({
    control: reactHookControl ? reactHookControl : control,
    name: name,
  });

  const extendedValidations: RegisterOptions = {
    ...validation,
    disabled: disabled,
  };

  return (
    <Box className={`${className ?? ""} ${disabled ? "opacity-5" : "my-4"}`}>
      {title ? (
        <FormLabel
          id="demo-radio-buttons-group-label"
          className="text-white text-lg mb-8"
        >
          {title}
        </FormLabel>
      ) : (
        <></>
      )}
      <Controller
        name={name}
        control={reactHookControl ? reactHookControl : control}
        defaultValue={defaultValue}
        rules={extendedValidations}
        render={({ field }) => (
          <Autocomplete
            id={name}
            options={options}
            getOptionLabel={(option) => option.label}
            disabled={disabled}
            value={
              options.find((option) => option.value === field.value) || null
            }
            onChange={(_, newValue) => {
              field.onChange(newValue?.value || "");
              if (onChange) {
                onChange(newValue?.value || "");
              }
            }}
            sx={{
              "& .MuiInputBase-root": {
                color: "white",
                backgroundColor: "#26242d",
                border: "1px solid transparent",
                outline: "none",
                borderRadius: "4px",
              },
              "& .MuiInputBase-root:hover": {
                borderImage: "linear-gradient(to left, #ff7dff, #6546db)",
                borderImageSlice: 1,
              },
            }}
            className="text-white mt-4"
            renderInput={(params) => (
              <TextField
                placeholder="Select"
                className="text-white bg-zinc-800 border-0 hover:border-0 active:border-0 outline-none rounded"
                {...params}
              />
            )}
          />
        )}
      />
      {errors?.[name] ? (
        <span className={"text-red-500"}>
          {errors?.[name]?.message?.toString() ?? "Invalid field"}
        </span>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default AutoCompleteElement;
