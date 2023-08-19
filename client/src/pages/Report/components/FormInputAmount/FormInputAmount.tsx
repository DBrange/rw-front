import { useState } from "react";
import { useReportContext } from "../..";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  error: string | undefined;
  type: string;
  id: string;
  label: string;
  placeholder: string;
  touched: boolean;
  schemaName: any;
  setAmountValue: any;
}

function FormInputOptionalAmount({
  error,
  type,
  id,
  label,
  placeholder,
  touched,
  schemaName,
  setAmountValue,
}: Props) {
  const { setValue } = useReportContext();

  const [inputValue, setInputValue] = useState<number | string>(0);

  const amount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toString();
    const valueSlice = value.split("").slice(0, 2).join("");
    const valueNumber = !e.target.value ? "" : Number(valueSlice);

    setInputValue(valueNumber);
    setAmountValue(valueNumber);
    setValue(schemaName, valueNumber);
    console.log(valueNumber);
  };

  return (
    <div className="overflow-hidden w-[100%] flex">

        <section className="w-full">
          <div
            className={`flex flex-col w-full`}
          >
            <label
              className={`${touched && error && "text-red-400"} mb-1`}
              htmlFor={id}
            >
              {label}
            </label>
            <div className=" relative">
              <input
                className={`${
                  touched && error && "border-red-400"
                } border-2 w-full h-8 pl-2 rounded outline-none focus:border-blue-400`}
                type={type}
                id={id}
                onChange={amount}
                placeholder={placeholder}
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
                } text-xs`}
              >
                {error || "a"}
              </p>
            </span>
          </div>
        </section>
    </div>
  );
}
export default FormInputOptionalAmount;
