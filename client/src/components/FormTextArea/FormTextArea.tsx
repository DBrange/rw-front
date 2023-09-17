import { ChangeEventTextAreaType } from "@/pages";
import {
  ContainerField,
  FieldIconBox,
  Icon,
  Label,
  P,
} from "@/styledComponents";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { PiWarningCircleFill } from "react-icons/pi";
import { TextArea } from "./FormTextArea.styled";

interface Props {
  label: string;
  touched: boolean;
  error?: string;
  value: string | number;
  handleChange: (e: ChangeEventTextAreaType) => void;
  name: string;
  id: string;
  placeholder: string;
}

function FormTextArea({
  label,
  value,
  touched,
  error,
  handleChange,
  name,
  id,
  placeholder,
}: Props) {
  return (
    <ContainerField as="section">
      <Label $error={!!error && touched} htmlFor={id}>
        {label}
      </Label>
      <FieldIconBox>
        <TextArea
          $error={!!error && touched}
          value={value}
          onChange={handleChange}
          onBlur={handleChange}
          name={name}
          id={id}
          placeholder={placeholder}
          cols={30}
          rows={20}
        ></TextArea>
        <Icon $error={!!error && touched} $touched={touched}>
          {!!error && touched ? (
            <AiFillCloseCircle size={16} />
          ) : (
            <BsCheckLg size={16} />
          )}
        </Icon>
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
export default FormTextArea;
