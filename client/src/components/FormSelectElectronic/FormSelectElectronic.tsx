import { SelectEventType } from "@/pages";
import { ContainerField, Label, FieldIconBox, P } from "@/styledComponents";
import { PiWarningCircleFill } from "react-icons/pi";
import { Option, Select } from "..";


interface Props {
  label: string;
  electronicType: (value: string) => void;
  value: string;
  touched: boolean;
  error?: string;
  handleChange: (e: SelectEventType) => void;
  name: string;
  id: string;
  options: string[];
}

function FormSelectElectronic({
  electronicType,
  label,
  value,
  touched,
  error,
  handleChange,
  name,
  id,
  options,
}: Props) {
  const typeOfElectronic = (e: SelectEventType) => {
    handleChange(e);
    electronicType(e.target.value);
  };

  return (
    <ContainerField>
      <Label $error={!!error && touched} htmlFor={id}>
        {label}
      </Label>
      <FieldIconBox>
        <Select
          value={value}
          $error={!!error && touched}
          onChange={typeOfElectronic}
          name={name}
          id={id}
        >
          <Option value="default" hidden>
            Seleccionar
          </Option>
          {options.map((el, i) => (
            <Option value={el} key={i}>
              {el}
            </Option>
          ))}
        </Select>
        {/* <Icon $error={!!error && touched} $touched={touched}>
          {!!error && touched ? (
            <AiFillCloseCircle size={16} />
          ) : (
            <BsCheckLg size={16} />
          )}
        </Icon> */}
      </FieldIconBox>
      <span>
        <P $error={!!error && touched}>
          <PiWarningCircleFill />
          {error || "a"}
        </P>
      </span>
    </ContainerField>
  );
}
export default FormSelectElectronic;