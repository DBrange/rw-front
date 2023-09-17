import { ContainerField, Field, Label, P } from "@/styledComponents";
import { useEffect, useState } from "react";
import { DivForSchedule } from "./FormSchedule.styled";
import { PiWarningCircleFill } from "react-icons/pi";

interface Props {
  label: string;
  objectName: string;
  touched: boolean;
  error?: string;
  changeInputForSchedule: (name: string, schedule: string) => void;
}

interface Time {
  hour: string;
  minute: string;
}

function FormScheduleInput({
  label,
  objectName,
  changeInputForSchedule,
  error,
  touched,
}: Props) {
  const [time, setTime] = useState<Time>({
    hour: "",
    minute: "",
  });

  useEffect(() => {
    const schedule = `${time.hour}:${time.minute}`;

    changeInputForSchedule(objectName, schedule);
  }, [time]);

  const creatingSchedule = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setTime({
      ...time,
      [name]: value,
    });
  };

  return (
    <ContainerField>
      <Label $error={!!error && touched} htmlFor="hour">
        {label}
      </Label>
      <DivForSchedule>
        <Field
          $error={!!error && touched}
          type="text"
          id="hour"
          name="hour"
          value={time.hour}
          onChange={creatingSchedule}
        />
        <span>:</span>
        <Field
          $error={!!error && touched}
          type="text"
          name="minute"
          value={time.minute}
          onChange={creatingSchedule}
        />
      </DivForSchedule>
      <span>
        <P $error={!!error && touched}>
          <PiWarningCircleFill />
          {error || "a"}
        </P>
      </span>
    </ContainerField>
  );
}
export default FormScheduleInput;
