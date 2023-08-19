import { useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
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
  valueApi: string | number | undefined;
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
  valueApi,
}: Props) {

  const [inputValue, setInputValue] = useState<number | string | undefined>('');

  useEffect(() => {

      
      setInputValue(valueApi);

  }, [valueApi]);
  
  const value = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

   setInputValue(valueApi ? valueApi : value);
  };

  return (
    <div
      className={`${
        checked ? "w-full" : "w-[100%]"
      } flex flex-col overflow-hidden`}
    >
      <label
        className={`${touched && error && "text-red-400"} mb-1`}
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <input
          className={`${
            touched && error && "border-red-400"
          } border-2 w-full h-8 pl-2 rounded outline-none focus:border-blue-400`}
          type={type}
          id={id}
          {...register}
          placeholder={placeholder}
          onChange={value}
          value={inputValue}
        />
        {touched && error && (
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
