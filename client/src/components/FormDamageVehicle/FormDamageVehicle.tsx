import {
  AllReportValues,
  ChangeEventType,
  ClientCreateReportValues,
  ClientInspectedCreateReportValues,
  ErrorsAllReportValues,
  ErrorsClientCreateReportValues,
  ErrorsClientInspectedCreateReportValues,
  TouchedAllReportValues,
  TouchedClientCreateReportValues,
  TouchedClientInspectedCreateReportValues,
} from "@/pages";
import { SectionFormContainer } from "@/styledComponents";
import { objForArrOne } from "@/utilities/separateImages.utility";
import {
  FormInput,
  FormScheduleInput,
  FormSeparateImages
} from "..";

interface Props {
  inputValues:
    | AllReportValues
    | ClientCreateReportValues
    | ClientInspectedCreateReportValues;
  inputTouched:
    | TouchedAllReportValues
    | TouchedClientCreateReportValues
    | TouchedClientInspectedCreateReportValues;
  errorsInputValues:
    | Partial<ErrorsAllReportValues>
    | Partial<ErrorsClientCreateReportValues>
    | Partial<ErrorsClientInspectedCreateReportValues>
    | undefined;
  changeInputValues: (e: ChangeEventType) => void;
  changeInputForImages: (e: ChangeEventType, images: string[]) => void;
  changeInputForSchedule: (name: string, schedule: string) => void;
}

function FormDamageVehicle({
  inputValues,
  inputTouched,
  errorsInputValues,
  changeInputValues,
  changeInputForImages,
  changeInputForSchedule,
}: Props) {
  return (
    <SectionFormContainer>
      <FormScheduleInput
        error={errorsInputValues?.damageVehicle?.time}
        label="Horario del suceso"
        objectName="damageVehicle.time"
        touched={inputTouched?.damageVehicle?.time}
        changeInputForSchedule={changeInputForSchedule}
      />
      <FormInput
        label="Fecha del suceso*"
        value={inputValues?.damageVehicle?.date}
        touched={inputTouched?.damageVehicle?.date}
        error={errorsInputValues?.damageVehicle?.date}
        handleChange={changeInputValues}
        name="damageVehicle.date"
        id="damageVehicle.date"
        type="date"
        placeholder="Ingresar fecha"
      />
      <FormInput
        label="Ubicacion del suceso*"
        value={inputValues?.damageVehicle?.location}
        touched={inputTouched?.damageVehicle?.location}
        error={errorsInputValues?.damageVehicle?.location}
        handleChange={changeInputValues}
        name="damageVehicle.location"
        id="damageVehicle.location"
        type="text"
        placeholder="Ingresar ubicacion"
      />
      <FormInput
        label="Descripcion del daño*"
        value={inputValues?.damageVehicle?.details}
        touched={inputTouched?.damageVehicle?.details}
        error={errorsInputValues?.damageVehicle?.details}
        handleChange={changeInputValues}
        name="damageVehicle.details"
        id="damageVehicle.details"
        type="text"
        placeholder="Ingresar daño"
      />
      <FormSeparateImages
        label="Añadir foto del lugar dañado*"
        error={errorsInputValues?.damageVehicle?.reportPhoto}
        id="damageVehicle.reportPhoto"
        name="damageVehicle.reportPhoto"
        changeInputForImages={changeInputForImages}
        instructionsImages={["Daño"]}
        objForArr={objForArrOne}
        quantity={1}
      />
      <FormInput
        label="Monto de reparacion (si lo hubo)"
        value={inputValues?.damageVehicle?.budget}
        touched={inputTouched?.damageVehicle?.budget}
        error={errorsInputValues?.damageVehicle?.budget}
        handleChange={changeInputValues}
        name="damageVehicle.budget"
        id="damageVehicle.budget"
        type="text"
        placeholder="Ingresar monto"
      />
    </SectionFormContainer>
  );
}
export default FormDamageVehicle;
