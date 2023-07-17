interface Props {
  register: any;
  error: string | undefined;
  touched: boolean;
  electronicType: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormSelectElecType({ register, error, touched, electronicType }: Props) {
  return (
    <div className="w-[90%] flex flex-col">
  <label className="mb-1" htmlFor={"electronicType"}>
    {"Tipo de electrodomestico"}
  </label>
  <select
    onClick={(e: React.ChangeEvent<HTMLInputElement>) => electronicType(e)}
    className="w-full h-8 pl-2 rounded"
    id={"electronicType"}
    {...register}
  >
    <option value="default" hidden>
      Seleccionar
    </option>
    {["celular", "tablet", "notebook"].map((el, i) => (
      <option value={el} key={i}>
        {el}
      </option>
    ))}
  </select>

  <span>
    <p
      className={`${
        touched && error
          ? "text-red-400"
          : "text-transparent"
      } text-xs`}
    >
      {error || "a"}
    </p>
  </span>
</div>
  )
}
export default FormSelectElecType
