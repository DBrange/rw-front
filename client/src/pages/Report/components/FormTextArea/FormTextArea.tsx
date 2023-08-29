import { AiFillCloseCircle } from "react-icons/ai";
import {  UseFormRegisterReturn } from "react-hook-form";

interface Props {
  register: UseFormRegisterReturn<string>;
  error: string | undefined;
  touched: boolean;
  id: string;
}

function FormTextArea({register, error, touched, id }: Props) {
  return (
    <div className="">
      <label
        htmlFor="details"
        className={`${touched && error && "text-red-400"} mb-1`}
      >
        Deatalles del suceso
      </label>
      <div className="relative">
        <textarea
          className={`${
            touched && error && "border-red-400"
          } resize-none border-2 w-full h-32 pl-2 rounded outline-none focus:border-blue-400`}
          id={id}
          cols={30}
          rows={30}
          {...register}
        ></textarea>
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
export default FormTextArea;
