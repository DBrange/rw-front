import { AccordionContainer } from "@/styledComponents";
import { AccordionContent, FormOptionalContainer } from ".";

interface Props {
  children: JSX.Element;
  checked: boolean;
}

function FormOptional({ children, checked }: Props) {
  return (
    <FormOptionalContainer>
      <AccordionContainer checked={checked}>
        <AccordionContent>{children}</AccordionContent>
      </AccordionContainer>
    </FormOptionalContainer>
  );
}
export default FormOptional;
