import { useEffect, useState } from "react";
import { useReportContext } from "../..";

interface Props {
  schemaName: any;
}

interface InputValue {
  hour: string;
  minute: string;
}

function FormTimeInput({ schemaName }: Props) {
  const { setValue } = useReportContext();

  const [touched, setTouched] = useState(false);
  const [isString, setIsString] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<InputValue>({
    hour: "",
    minute: "",
  });

  const transformToSchedule = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const split = value.trim().split("");
    const twoLettersValue = split.slice(0, 2).join("");

    setInputValue({
      ...inputValue,
      [name]: twoLettersValue,
    });

    setTouched(true)
  };

  useEffect(() => {
    const regexIsNumber = /^\d+(\.\d+)?$/;
    regexIsNumber.test(inputValue.hour + inputValue.minute) &&
    inputValue.hour.length === 2 &&
    inputValue.minute.length === 2
      ? setIsString(false)
      : setIsString(true);
    const time = `${inputValue.hour}:${inputValue.minute}`;
    // if (!isString) {
      setValue(schemaName, time);
    // }
  }, [inputValue]);

  return (
    <div className="">
      <label
        htmlFor="time"
        className={`${isString && touched && "text-red-400"} mb-1`}
      >
        Horario del suceso*
      </label>
      <div className="flex items-center gap-1">
        <input
          id="time"
          type="text"
          className={`${
            isString && touched && "border-red-400"
          } border-2 h-8 pl-2 rounded outline-none focus:border-blue-400 w-8`}
          name="hour"
          value={inputValue?.hour}
          onChange={transformToSchedule}
          onBlur={transformToSchedule}
        />
        <span>:</span>
        <input
          type="text"
          className={`${
            isString && touched && "border-red-400"
          } border-2 h-8 pl-2 rounded outline-none focus:border-blue-400 w-8`}
          name="minute"
          value={inputValue?.minute}
          onChange={transformToSchedule}
        />
      </div>
      <p
        className={`${
          isString && touched ? "text-red-400" : "text-transparent"
        } text-xs select-none`}
      >
        {"Debe ingresar un horario valido"}
      </p>
    </div>
  );
}
export default FormTimeInput;
