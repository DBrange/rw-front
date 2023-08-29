import { useEffect, useState } from "react";
import { useReportContext } from "../..";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  register: any;
  error: string | undefined;
  type: string;
  id: string;
  label: string;
  placeholder: string;
  touched: boolean;
  schemaName: any;
  setAmountValue: any;
  amountValue: any;
}

function FormInputAmount({
  register,
  error,
  type,
  id,
  label,
  placeholder,
  touched,
  schemaName,
  setAmountValue,
  amountValue,
}: Props) {
  const { setValue } = useReportContext();

  const [disable, setDisable] = useState<boolean>(false);

  const amount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toString();
    const valueSlice = value.split("").slice(0, 2).join("");
    const valueNumber = !e.target.value ? "" : Number(valueSlice);
    setDisable(true);

    setAmountValue(valueNumber === "" ? 1 : valueNumber);
    setValue(schemaName, valueNumber === "" ? 1 : valueNumber);
  };

  return (
    <div className="overflow-hidden w-[100%] flex">
      <section className="w-full">
        <div className={`flex flex-col w-full`}>
          <div>
            <label
              className={`${disable && "pointer-events-none"} ${
                touched && error && "text-red-400"
              } mb-1`}
              htmlFor={id}
            >
              {label}
            </label>
            <span className="block text-xs text-gray-400 mb-2">
              Una vez ingresado un numero, no podra cambiarse
            </span>
          </div>
          <div className=" relative">
            <input
              className={`${
                disable &&
                " pointer-events-none cursor-not-allowed bg-slate-600 bg-opacity-10"
              } ${
                touched && error && "border-red-400"
              } border-2 w-full h-8 pl-2 rounded outline-none focus:border-blue-400`}
              type={type}
              id={id}
              {...register}
              onBlur={amount}
              placeholder={placeholder}
            />
            {touched && error && (
              <i className="text-red-400 absolute right-2 top-2">
                <AiFillCloseCircle size={16} />
              </i>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
export default FormInputAmount;
