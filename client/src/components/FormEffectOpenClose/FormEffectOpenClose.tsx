interface Props {
  formName: string;
  isActive: boolean;
  form: JSX.Element;
}

function FormEffectOpenClose({formName, isActive, form }: Props) {
  return (
    <div className="w-full">
      <div
        className={`grid ${
          isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } transition-all duration-1000`}
      >
        {/* <h3>Datos del usuario</h3> */}
        <div className="overflow-hidden w-full">
          <h2 className="mb-10 text-violet-500 text-xl">{formName}</h2>
          <div>{form}</div>
        </div>
      </div>
    </div>
  );
}
export default FormEffectOpenClose