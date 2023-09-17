import { SwornDeclaration, ErrorsSwornDeclaration } from "@/models";


export const validateSwornDeclaration= ({ swornDeclaration }: SwornDeclaration) => {
  const errors: Partial<ErrorsSwornDeclaration> | null = {};

  if (swornDeclaration === false)
    errors.swornDeclaration = "Debe aceptar para poder continuar";
  
  return errors;
};
