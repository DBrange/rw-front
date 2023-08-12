import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  register: UseFormRegisterReturn<string>;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  label: string;
  instructions: string;
}

function FormCheckbox({
  register,
  setChecked,
  id,
  label,
  instructions,
}: Props) {
  const check = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const { checked } = e.currentTarget;
    setChecked(checked);
  };

  return (
    <div className="mb-7 mt-4 flex flex-col">
      <div className="flex gap-4">
        <label htmlFor={id}>{label}</label>
        <input type="checkbox" id={id} onClick={check} {...register} />
      </div>
      {instructions && (
        <span className="block text-xs text-gray-400">{instructions}</span>
      )}
    </div>
  );
}
export default FormCheckbox;
