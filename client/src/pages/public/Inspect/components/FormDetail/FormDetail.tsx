import { AllInspectValues } from "../..";
// import { DivRenderProperty, DivRenderPropertys, DivRenderPropertysBox, H4PropertyName, H3PropertyTitle, SectionFormDetailContainer } from "./FormDetail.styled";

interface Props {
  values: AllInspectValues;
}

function FormDetail({  }: Props) {
  // const renderProperty = (name: string, value: any) => (
  //   <DivRenderProperty key={name}>
  //     <H4PropertyName>{name}:</H4PropertyName> {value}
  //   </DivRenderProperty>
  // );

  // const renderProperties = (obj: AllInspectValues) => {
  //   const propertyElements: JSX.Element[] = [];

  //   for (const propertyName in obj) {
  //       const propertyValue = obj[propertyName as keyof AllInspectValues];

  //       if (typeof propertyValue === "object") {
  //         propertyElements.push(
  //           <DivRenderPropertysBox key={propertyName}>
  //             <H3PropertyTitle>{propertyName}:</H3PropertyTitle>
  //             <DivRenderPropertys>{renderProperties(propertyValue as unknown as AllInspectValues)}</DivRenderPropertys>
  //           </DivRenderPropertysBox>
  //         );
  //       } else {
  //         propertyElements.push(renderProperty(propertyName, propertyValue));
  //       }
  //     }
    

  //   return propertyElements;
  // };

  // return <SectionFormDetailContainer>{renderProperties(values)}</SectionFormDetailContainer>;
  return<></>
}

export default FormDetail;
