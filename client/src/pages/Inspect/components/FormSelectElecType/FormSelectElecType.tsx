interface Props {
  register: any;
  error: string | undefined;
  touched: boolean;
  electronicType: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormSelectElecType({ register, error, touched, electronicType }: Props) {
  return (
    <div className="w-[100%] flex flex-col">
      <label
        className={`${touched && error && "text-red-400"} mb-1`}
        htmlFor={"electronicType"}
      >
        {"Tipo de electrodomestico*"}
      </label>
      <select
        className={`${
          touched && error && "border-red-400"
        } border-2 w-full h-8 pl-2 rounded outline-none focus:border-blue-400`}
        id={"electronicType"}
        {...register}
        onClick={(e: React.ChangeEvent<HTMLInputElement>) => electronicType(e)}
      >
        <option value="default" hidden>
          Seleccionar
        </option>
        {["CELULAR", "TABLET", "NOTEBOOK"].map((el, i) => (
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
export default FormSelectElecType
