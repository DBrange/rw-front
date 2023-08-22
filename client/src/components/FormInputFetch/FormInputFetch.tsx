import { UseFormRegisterReturn } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import { fetchVehicleInfo } from "../../services";
import { VehicleApi, VehicleInfo } from "../../models/interfaces";
// import { AiFillCheckCircle } from "react-icons/ai";

// import { AiOutlineCloseCircle } from "react-icons/ai";
// import { AiOutlineCheckCircle } from "react-icons/ai";

interface Props {
  register: UseFormRegisterReturn<string>;
  error: string | undefined;
  type: string;
  id: string;
  label: string;
  placeholder: string;
  touched: boolean;
  checked?: boolean;
  value?: string | number;
  setVehicleApi: React.Dispatch<React.SetStateAction<VehicleApi>>;
  setValue: any;
  schemaName: string;
}

function FormInputFetch({
  register,
  error,
  type,
  id,
  label,
  placeholder,
  touched,
  checked,
  setVehicleApi,
  setValue,
  schemaName,
}: Props) {
  const vehicleInfo = async (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    const { value } = e.target;
    const vehicleInfo = await fetchVehicleInfo(value);

    let vehicleObj: VehicleInfo = {
      brand: "",
      model: "",
      year: "",
    };

    const info = vehicleInfo ? (vehicleObj = vehicleInfo) : vehicleObj;

    for (const key in info) {
      setValue(`${schemaName}.${key}`, info[key as keyof VehicleInfo]);
    }

    setVehicleApi(info);
  };

  return (
    <div
      className={`${
        checked ? "w-full" : "w-[100%]"
      } flex flex-col overflow-hidden`}
    >
      <label
        className={`${ error && "text-red-400"} mb-1`}
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <input
          className={`${
             error && "border-red-400"
          } border-2 w-full h-8 pl-2 rounded outline-none focus:border-blue-400`}
          type={type}
          id={id}
          {...register}
          onBlur={vehicleInfo}
          placeholder={placeholder}
        />
        { error && (
          <i className="text-red-400 absolute right-2 top-2">
            <AiFillCloseCircle size={16} />
          </i>
        )}
      </div>
      <span>
        <p
          className={`${
             error ? "text-red-400" : "text-transparent"
          } text-xs select-none`}
        >
          {error || "a"}
        </p>
      </span>
    </div>
  );
}
export default FormInputFetch;
