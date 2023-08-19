interface Props {
  children: JSX.Element
  checked: boolean | undefined;
}

function FormInputOptional({ children, checked }: Props) {
  return (
    <div className="overflow-hidden w-[100%] flex">
      <div
        className={`${
          checked ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }  grid transition-all duration-1000 w-full`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
export default FormInputOptional;
