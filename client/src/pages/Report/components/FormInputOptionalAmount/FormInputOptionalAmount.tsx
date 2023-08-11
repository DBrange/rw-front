import { useEffect, useState } from "react";
import { useReportContext } from "../..";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  error: string | undefined;
  checked: boolean;
  type: string;
  id: string;
  label: string;
  placeholder: string;
  touched: boolean;
  schemaName: string;
  setAmountValue: any;
  amountValue: number;
}

function FormInputOptionalAmount({
  checked,
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

  const [inputValue, setInputValue] = useState<number | string>(0);

  useEffect(() => {
    if (!checked) {
      setInputValue(0);
      setAmountValue(0);
      setValue(schemaName, 0);
    } else {
      // setAmountValue(0);
      setValue(schemaName, inputValue);
      setInputValue(amountValue)
    }


  }, [checked, inputValue, amountValue]);

  // useEffect(() => {
  //   setInputValue(amountValue);
  // }, [amountValue, inputValue]);
  // useEffect(() => {
  //   if (!checked) {
  //     setInputValue(0);
  //     setAmountValue(0);
  //     setValue(schemaName, 0);
  //   }
  // }, [checked, inputValue]);
  // console.log(inputValue);

  const amount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toString();
    const valueSlice = value.split("").slice(0, 2).join("");
    const valueNumber = !e.target.value ? "" : Number(valueSlice);

    setInputValue(valueNumber);
    setAmountValue(valueNumber);
    setValue(schemaName, valueNumber);
    console.log(valueNumber)
  };

  return (
    <div className="overflow-hidden w-[100%] flex">
      <div
        className={`${
          checked ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }  grid transition-all duration-1000 w-full`}
      >
        <section className="overflow-hidden">
          <div
            className={`${
              checked ? "w-full" : "w-[100%]"
            }  flex flex-col overflow-hidden`}
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
                checked={checked}
                
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
    </div>
  );
}
export default FormInputOptionalAmount;
