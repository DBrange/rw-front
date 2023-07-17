interface Props {
  textaValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function FormTextArea({ textaValue }: Props) {
  return (
    <div className="">
      <label htmlFor="details"></label>
      <textarea
        className="resize-none h-32"
        onChange={textaValue}
        id="details"
        cols={30}
        rows={30}
      ></textarea>
    </div>
  );
}
export default FormTextArea;
