interface Props {
  btnOne: string;
  btnTwo: string;
  isActiveOne: boolean;
  isActiveTwo: boolean;
  selectedSchemaOne: () => void;
  selectedSchemaTwo: () => void;
}

function ButtonChoice({
  btnOne,
  btnTwo,
  isActiveOne,
  isActiveTwo,
  selectedSchemaOne,
  selectedSchemaTwo,
}: Props) {
  return (
    <div className="w-full flex rounded-md ">
      <button
        className={`${
          isActiveOne ? "bg-violet-500 text-white" : "hover:bg-violet-300"
        } p-2 rounded-s-md basis-1/2`}
        onClick={selectedSchemaOne}
      >
        {btnOne}
      </button>
      <button
        className={`${
          isActiveTwo ? "bg-violet-500 text-white" : "hover:bg-violet-300"
        } p-2 rounded-e-md basis-1/2`}
        onClick={selectedSchemaTwo}
      >
        {btnTwo}
      </button>
    </div>
  );
}
export default ButtonChoice;
