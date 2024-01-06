import { ChangeEventType } from "@/pages";
import {
  ContainerField,
  Field,
  FieldIconBox,
  Icon,
  Label,
  P,
} from "@/styledComponents";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { PiWarningCircleFill } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import { DivLabelEye, IconEye } from "./FormInputPassword.styled";
import { useState } from "react";

interface Props {
  label: string;
  value: string | number;
  touched: boolean;
  error?: string;
  handleChange: (e: ChangeEventType) => void;
  name: string;
  id: string;
  type: string;
  placeholder: string;
}

function FormInputPassword({
  label,
  value,
  touched,
  error,
  handleChange,
  name,
  id,
  type,
  placeholder,
}: Props) {
  const [seePassword, setsetSeePassword] = useState<boolean>(false);


  return (
    <ContainerField as="section">
      <DivLabelEye>
        <Label $error={!!(error && touched)} htmlFor={id}>
          {label}
        </Label>
        <IconEye onClick={() => setsetSeePassword((el) => !el)}>
          <FaEye size={16} />
        </IconEye>
      </DivLabelEye>
      <FieldIconBox>
        <Field
          value={value}
          $error={!!(error && touched)}
          onChange={handleChange}
          onBlur={handleChange}
          name={name}
          id={id}
          type={seePassword ? 'text' : 'password'}
          placeholder={placeholder}
        />

        <Icon $error={!!error && touched} $touched={touched}>
          {type !== "date" &&
            (!!error && touched ? (
              <AiFillCloseCircle size={16} />
            ) : (
              <BsCheckLg size={16} />
            ))}
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
export default FormInputPassword;
