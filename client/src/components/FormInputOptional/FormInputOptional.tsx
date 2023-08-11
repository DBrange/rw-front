import { UseFormRegisterReturn } from "react-hook-form";
import { FormInput } from "..";

interface Props {
  register: UseFormRegisterReturn<any>;
  error: string | undefined;
  checked: boolean | undefined;
  type: string;
  id: string;
  label: string;
  placeholder: string;
  touched: boolean;
}

function FormInputOptional({
  register,
  checked,
  error,
  type,
  id,
  label,
  placeholder,
  touched,
}: Props) {
  return (
    <div className="overflow-hidden w-[100%] flex">
      <div
        className={`${
          checked ? "h-full opacity-1" : "h-0 -translate-y-full opacity-0"
        } w-full flex transition-all duration-200`}
      >
        <FormInput
          register={register}
          error={error}
          type={type}
          id={id}
          label={label}
          placeholder={placeholder}
          checked={checked}
          touched={touched}
        />
      </div>
    </div>
  );
}
export default FormInputOptional;
