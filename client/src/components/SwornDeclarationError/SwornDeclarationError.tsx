function SwornDeclarationError({ onConfirmed, isError }: { onConfirmed: boolean, isError: boolean }) {
  return (
    <div
      className={`grid ${
        !onConfirmed && isError ? "grid-rows-[1fr] p-2 mb-5" : "grid-rows-[0fr] p-0 mb-0"
      } bg-red-200 rounded-md  text-center transition-all duration-1000`}
    >
      <div className="overflow-hidden">
        <p className="text-red-500">
          Debe aceptar la declaracion declaracion jurada para poder continuar
        </p>
      </div>
    </div>
  );
}
export default SwornDeclarationError;
