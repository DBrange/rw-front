import { useEffect, useState } from "react";
import { UseFormRegisterReturn, useWatch } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
// import { AiFillCheckCircle } from "react-icons/ai";

// import { AiOutlineCloseCircle } from "react-icons/ai";
// import { AiOutlineCheckCircle } from "react-icons/ai";

interface Props {
  register: UseFormRegisterReturn<string>;
  error: string | undefined;
  type: string;
  id: string;
  label: string;
  placeholder: string;
  touched: boolean;
  checked?: boolean;
  schemaName: string
  control: any
}

function FormInputGet({
  register,
  error,
  type,
  id,
  label,
  placeholder,
  touched,
  checked,
  schemaName,
  control
}: Props) {
  
    const value = useWatch({
      control,
      name: schemaName,
    });

  return (
    <div
      className={`${
        checked ? "w-full" : "w-[100%]"
      } flex flex-col overflow-hidden`}
    >
      <label
        className={`${(touched && error) && "text-red-400"} mb-1`}
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <input
          className={`${
            (touched && error )&& "border-red-400"
          } border-2 w-full h-8 pl-2 rounded outline-none focus:border-blue-400`}
          type={type}
          id={id}
          placeholder={placeholder}
          value={value ? value : ''}
          {...register}
        />
        {(touched && error) && (
          <i className="text-red-400 absolute right-2 top-2">
            <AiFillCloseCircle size={16} />
          </i>
        )}
      </div>
      <span>
        <p
          className={`${
            touched && error ? "text-red-400" : "text-transparent"
          } text-xs select-none`}
        >
          {error || "a"}
        </p>
      </span>
    </div>
  );
}
export default FormInputGet;
