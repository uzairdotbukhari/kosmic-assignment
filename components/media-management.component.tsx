import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "@mui/material";

import SliderElement from "@/elements/slider.element";
import RadioGroupElement from "@/elements/radio-group.element";
import AutoCompleteElement from "@/elements/auto-complete.element";

import { CONTENT_TYPES, CONTENT_TYPE_OPTIONS } from "@/utils/constants";

interface IMediaManagementFormValues {
  topic: string;
  title: string;
  duration: number;
}

const MediaManagement = () => {
  const { control, setValue, handleSubmit } =
    useForm<IMediaManagementFormValues>({
      defaultValues: {
        topic: "fun",
        title: "",
        duration: 700,
      },
    });
  const topicVal = useWatch({
    control,
    name: "topic",
  });
  const [data, setData] = useState<IMediaManagementFormValues | null>(null);

  const submitFormData = (data: IMediaManagementFormValues) => {
    setData(data);
    console.log("data => ", data);
  };

  useEffect(() => {
    setValue("title", ""); // reset title value when topic changes
  }, [topicVal]);

  return (
    <div className="wrapper p-8 md:p-0 w-full h-full min-h-[calc(100vh-234px)]">
      <div className="pt-16 pb-8 border-b border-slate-700">
        <h1 className="text-white text-2xl">Content Type</h1>
        <p className="font-light text-base mt-2">
          Choose a content type that best fits your needs
        </p>
      </div>
      <div className="py-8">
        <form onSubmit={handleSubmit(submitFormData)}>
          <RadioGroupElement
            title="What type of content are you creating?"
            name="topic"
            options={CONTENT_TYPES}
            validation={{
              required: {
                value: true,
                message: "**required",
              },
            }}
            reactHookControl={control}
            defaultValue="fun"
          />
          <div className="max-w-sm">
            <AutoCompleteElement
              name="title"
              title="What type of fun content you want to create?"
              options={CONTENT_TYPE_OPTIONS[topicVal] ?? []}
              validation={{
                required: {
                  value: true,
                  message: "**required",
                },
              }}
              reactHookControl={control}
            />
            <SliderElement
              name="duration"
              title="Set the number of words for output text."
              reactHookControl={control}
              validation={{
                required: {
                  value: false,
                  message: "**required",
                },
              }}
            />
          </div>
          <Button type="submit">Click to Log Data</Button>
        </form>
        {data ? (
          <code className="text-yellow-500">{JSON.stringify(data)}</code>
        ) : null}
      </div>
    </div>
  );
};

export default MediaManagement;
