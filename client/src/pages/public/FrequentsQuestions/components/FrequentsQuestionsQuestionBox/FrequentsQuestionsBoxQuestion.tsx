import { FormToOpen, FormContent } from "@/components";
import { AccordionContainer } from "@/styledComponents";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BoxQuestion } from "../..";
import { IFrequentsQuestions } from "../../interfaces/frequents-questions.interface";

interface Props {
  questionOpen: boolean;
  selectOpen: (value: keyof IFrequentsQuestions) => void;
  question: string;
  answer: string;
}

function FrequentsQuestionsBoxQuestion({
  questionOpen,
  selectOpen,
  question,
  answer,
}: Props) {
  return (
    <>
      <BoxQuestion $open={!!questionOpen}>
        <button
          value={"questionOne"}
          onClick={(e) =>
            selectOpen(e.currentTarget.value as keyof IFrequentsQuestions)
          }
        >
          <h2>{question}</h2>{" "}
          <i>
            <MdOutlineArrowForwardIos size={20} />
          </i>
        </button>
      </BoxQuestion>
      <AccordionContainer $speed checked={questionOpen} $openclose>
        <FormToOpen>
          <FormContent>
            <p>{answer}</p>
          </FormContent>
        </FormToOpen>
      </AccordionContainer>
    </>
  );
}
export default FrequentsQuestionsBoxQuestion;
