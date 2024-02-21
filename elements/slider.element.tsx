import React from "react";
import {
  Controller,
  useFormState,
  useForm,
  Control,
  RegisterOptions,
} from "react-hook-form";
import { Box, FormLabel, Slider } from "@mui/material";

export interface ISliderElementProps {
  name: string;
  reactHookControl?: Control<any>;
  title?: string;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: number | number[]) => void;
  validation?: RegisterOptions;
}

const SliderElement: React.FC<ISliderElementProps> = ({
  name,
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
    <Box
      className={`${className ?? ""} ${
        disabled ? "opacity-5" : ""
      } my-8`}
    >
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
          <div className="bg-theme-dark mt-6 px-5 py-3 rounded-lg text-white">
            <Slider
              step={1}
              value={field.value}
              valueLabelDisplay="on"
              defaultValue={50}
              className="text-white"
              min={100}
              max={1000}
              onChange={(e, value) => {
                field.onChange(e);
                if (onChange) {
                  onChange(value)
                }
              }}
              marks={[
                {
                    value: 100,
                    label: "100",
                },
                {
                    value: 1000,
                    label: "1000",
                }
              ]}
              sx={{
                color: "#000000",
                margin: "auto",
                "& .MuiSlider-track": {
                  backgroundColor: "bg-gray-300",
                  backgroundImage: "linear-gradient(to right, #6546db, #ff7dff)",
                  border: 0
                },
                "& .MuiSlider-thumb": {
                  backgroundColor: "#d53a9d",
                  border: "2px solid",
                  borderColor: "#d53a9d",
                  width: 16,
                  height: 16,
                  "&:hover": {
                    boxShadow: "0 0 0 8px rgba(66, 153, 225, 0.16)",
                  },
                },
                "& .MuiSlider-valueLabel": {
                  color: "white",
                  backgroundColor: "#6546db",
                  padding: "2px 4px",
                },
                "& .MuiSlider-valueLabel:before": {
                  display: "none",
                },
                "& .MuiSlider-markLabel": {
                  color: "white",
                },
              }}
            />
          </div>
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

export default SliderElement;
