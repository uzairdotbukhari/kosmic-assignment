import React from "react";
import {
  Controller,
  useFormState,
  useForm,
  Control,
  RegisterOptions,
} from "react-hook-form";
import {
  Radio,
  FormControlLabel,
  Box,
  FormLabel,
  RadioGroup,
} from "@mui/material";

export interface IRadioOption {
  value: string;
  label: string;
}

export interface IRadioGroupElementProps {
  name: string;
  options: IRadioOption[];
  reactHookControl?: Control<any>;
  title?: string;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validation?: RegisterOptions;
}

const RadioGroupElement: React.FC<IRadioGroupElementProps> = ({
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
    <Box className={`${className ?? ""} ${disabled ? "opacity-5" : "my-8"}`}>
      {title ? (
        <FormLabel
          id="demo-radio-buttons-group-label"
          className="text-white text-lg"
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
          <RadioGroup
            row={true}
            className={"flex justify-start gap:1 md:gap-3 mt-4"}
            defaultValue={field.value}
            value={field.value}
          >
            {options.map((option: IRadioOption) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                label={option.label}
                className={`flex items-center justify-center my-1 md:my-0 px-6 py-3 text-white rounded-full border border-white cursor-pointer ${
                  field.value === option.value
                    ? "bg-theme-blue border-theme-blue"
                    : "bg-transparent"
                }`}
                disabled={disabled}
                name={name}
                control={
                  <Radio
                    className="hidden"
                    onChange={(e) => {
                      field.onChange(e);
                      if (onChange) {
                        onChange(e);
                      }
                    }}
                  />
                }
              />
            ))}
          </RadioGroup>
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

export default RadioGroupElement;
