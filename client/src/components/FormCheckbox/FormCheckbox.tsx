interface Props {
  register: any
  setChecked: any
  id: string;
  label: string;
}

function FormCheckbox({register, setChecked, id, label}: Props) {
  return (
    <div>
      <label htmlFor={id}>{ label }</label>
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