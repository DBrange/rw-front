import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  register: UseFormRegisterReturn<any>;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  label: string;
}


function FormCheckbox({ register, setChecked, id, label }: Props) {
  
  const check = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const {checked} = e.currentTarget
    setChecked(checked)
  }

  return (
    <div className="mb-7 mt-4 flex gap-4">
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        id={id}
        onClick={check}
        {...register}
      />
    </div>
  );
}
export default FormCheckbox