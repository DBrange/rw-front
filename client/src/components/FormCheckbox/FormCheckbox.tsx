interface Props {
  register: any
  setChecked: any
  id: string;
  label: string;
}

function FormCheckbox({register, setChecked, id, label}: Props) {
  return (
    <div className="mb-7 mt-4 flex gap-4">
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        id={id}
        onClick={(e: React.ChangeEvent<HTMLInputElement>) =>
          setChecked(e.target.checked)
        }
        {...register}
      />
    </div>
  );
}
export default FormCheckbox