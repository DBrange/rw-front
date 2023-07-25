import { useReportContext } from "../..";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  error: any;
  checked: boolean;
  type: string;
  id: string;
  label: string;
  placeholder: string;
  touched: boolean;
  schemaName: string;
}

function FormInputOptionalAmount({
  checked,
  error,
  type,
  id,
  label,
  placeholder,
  touched,
  schemaName
}: Props) {

  const {setValue, setAmountValue} = useReportContext()

  const amount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    setAmountValue(value)
    setValue(schemaName, value)
  };
  return (
    <div className="overflow-hidden w-[100%] flex">
      <div
        className={`${
          checked ? "h-full opacity-1" : "h-0 -translate-y-full opacity-0"
        } w-full flex transition-all duration-200`}
      >
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
      </div>
    </div>
  );
}
export default FormInputOptionalAmount;
