function ErrorBtn({ isError }: { isError: boolean }) {
  console.log(isError)
  return (
    <div
      className={`grid ${
        isError ? "grid-rows-[1fr] p-2" : "grid-rows-[0fr] p-0"
      } bg-red-200 rounded-md  text-center transition-all duration-1000`}
    >
      <div className="overflow-hidden">
        <p className="text-red-500">
          Verifique que todos los campos que contengan (*) esten completos
        </p>
      </div>
    </div>
  );
}
export default ErrorBtn