interface Props {
  register: any;
  error: string | undefined;
  id: string;
  label: string;
  options: string[];
}

function FormSelect({ register, error, id, label, options }: Props) {
  return (
    <div className="w-[90%] flex flex-col">
      <label className="mb-1" htmlFor={id}>
        {label}
      </label>
        <select className="w-full h-8 pl-2 rounded" id={id} {...register}>
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
        <p className=" text-red-400 text-xs">{error || "a"}</p>
      </span>
    </div>
  );
}
export default FormSelect;