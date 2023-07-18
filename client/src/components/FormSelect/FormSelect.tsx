interface Props {
  register: any;
  error: string | undefined;
  id: string;
  label: string;
  options: string[];
  touched: boolean;
}

function FormSelect({ register, error, id, label, options, touched }: Props) {
  return (
    <div className="w-[100%] flex flex-col">
      <label
        className={`${touched && error && "text-red-400"} mb-1`}
        htmlFor={id}
      >
        {label}
      </label>
      <select
        defaultValue="default"
        className={`${
          touched && error && "border-red-400"
        } border-2 w-full h-8 pl-2 rounded outline-none focus:border-blue-400`}
        id={id}
        {...register}
      >
        <option value="default" hidden>
          Seleccionar
        </option>
        {options.map((el, i) => (
          <option value={el} key={i}>
            {el}
          </option>
        ))}
      </select>

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
  );
}
export default FormSelect;
