import InputsPropsType from "@/app/helpers/validators/formsSchema";
import React from "react";

const InputField: React.FC<InputsPropsType> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  disabled,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="font-signika block text-2xl font-medium text-custume-light mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        className="w-full bg-black/50 border border-custume-light/30 focus:border-custume-orange text-white text-lg font-signika rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none transition-all duration-300"
      />
    </div>
  );
};

export default InputField;
