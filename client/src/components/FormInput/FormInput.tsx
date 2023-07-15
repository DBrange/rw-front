import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  register: any;
  error: string | undefined;
  type: string ;
  id: string;
  label: string;
  placeholder: string;
  touched: boolean;
  checked?: boolean
}

function FormInput({ register, error, type, id, label, placeholder, touched, checked }: Props) {
  return (
    <div
      className={`${
        checked ? "w-full" : "w-[90%]"
      }  flex flex-col border overflow-hidden`}
    >
      <label className="mb-1" htmlFor={id}>
        {label}
      </label>
      <div className=" relative">
        <input
          className="w-full h-8 pl-2 rounded"
          type={type}
          id={id}
          {...register}
          placeholder={placeholder}
        />
        <i className="absolute right-2 top-2">
          <AiFillCloseCircle size={16} />
        </i>
      </div>
      <span>
        <p
          className={`${touched && error ? "text-red-400" : "text-transparent"} text-xs`}
        >
          {error || "a"}
        </p>
      </span>
    </div>
  );
}
export default FormInput;
