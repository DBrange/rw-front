import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  textaValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: string | undefined;
  touched: boolean;
}

function FormTextArea({ textaValue, error, touched }: Props) {
  return (
    <div className="">
      <label
        htmlFor="details"
        className={`${touched && error && "text-red-400"} mb-1`}
      >
        Deatalles del suceso
      </label>
      <div className="relative">
        <textarea
          className={`${
            touched && error && "border-red-400"
          } resize-none border-2 w-full h-32 pl-2 rounded outline-none focus:border-blue-400`}
          onChange={textaValue}
          id="details"
          cols={30}
          rows={30}
        ></textarea>
        {touched && error && (
          <i className="text-red-400 absolute right-2 top-2">
            <AiFillCloseCircle size={16} />
          </i>
        )}
      </div>
      <span>
        <p
          className={`${
            touched && error ? "text-red-400" : "text-transparent"
          } text-xs`}
        >
          {error || "a"}
        </p>
      </span>
    </div>
  );
}
export default FormTextArea;
