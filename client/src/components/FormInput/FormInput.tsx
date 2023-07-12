import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  register: any;
  error: string | undefined;
  type: string;
  id: string;
  label: string;
  placeholder: string;
}

function FormInput({ register, error, type, id, label, placeholder }: Props) {
  return (
    <div className="w-[90%] flex flex-col ">
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
        <p className=" text-red-400 text-xs">{error || "a"}</p>
      </span>
    </div>
  );
}
export default FormInput;
