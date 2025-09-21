import InputsPropsType from "@/app/helpers/validators/formsSchema";
import React from "react";

const InputField: React.FC<InputsPropsType> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="font-signika block text-2xl font-medium text-custume-light"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="bg-custume-light font-signika text-2xl mt-3 block w-100 h-10 rounded-md text-black"
      />
    </div>
  );
};

export default InputField;
