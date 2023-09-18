import { AccordionContainer } from "@/styledComponents";
import { FormOpenCloseContainer, FormToOpen, FormTitle, FormContent } from ".";



interface Props {
  formName: string;
  isActive: boolean;
  form: JSX.Element | JSX.Element[];
}

function FormOpenClose({ formName, isActive, form }: Props) {
  return (
    <FormOpenCloseContainer>
      <AccordionContainer checked={isActive} $openclose>
        <FormToOpen>
          <FormTitle>{formName}</FormTitle>
          <FormContent>{form}</FormContent>
        </FormToOpen>
      </AccordionContainer>
    </FormOpenCloseContainer>
  );
}
export default FormOpenClose;
