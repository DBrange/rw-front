import { FormTitle } from "@/components";
import { FilterField, SectionCard } from "./InspectLogin.styled";

interface Props {
  sectionName: string;
  error: any;
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  placeholder: string
  name: string;
  cards: JSX.Element;
}

function InspectLogin({
  sectionName,
  error,
  setSearchField,
  searchField,
  placeholder,
  cards,name
}: Props) {
  return (
    <>
      <FormTitle>{sectionName}</FormTitle>
      <FilterField
        type="text"
        id={name}
        name={name}
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
        placeholder={placeholder}
      />
      <SectionCard>{cards}</SectionCard>
    </>
  );
}
export default InspectLogin;
