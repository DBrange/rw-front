import { ContainerLogin } from "@/styledComponents";
import { useState } from "react";
import {
  DivBoxQuestionsAnswers,
  FrequentsQuestionsBoxQuestion
} from "..";
import { IFrequentsQuestions } from "./interfaces/frequents-questions.interface";
import { emptyFrequentsQuestions } from "./utilities/frequents-questions.utility";

function FrequentsQuestions() {
  const [open, setOpen] = useState<IFrequentsQuestions>(
    emptyFrequentsQuestions
  );

  const selectOpen = (value: keyof IFrequentsQuestions) => {
    if (open[value]) {
      setOpen({
        ...emptyFrequentsQuestions,
      });
    } else {
      setOpen({
        ...emptyFrequentsQuestions,
        [value]: true,
      });
    }
  };

  return (
    <ContainerLogin>
      <DivBoxQuestionsAnswers>
        <FrequentsQuestionsBoxQuestion
          questionOpen={open.questionOne}
          selectOpen={selectOpen}
          question={`¿Como funciona el usuario Cliente?`}
          answer={` Una vez ingresado a su usuario, podra realizar inspecciones, y/o
              denuncias para sus distintos o unico broker, el cual se comunicara
              con usted y se encargara del restro del tramite.
              ${(<br />)}
              Ademas tambien, podra revisar todos los siniestros que se hayan
              registrado a su nombre (que hayan sido realizados dentro de la
              web)`}
        />
      </DivBoxQuestionsAnswers>
    </ContainerLogin>
  );
}
export default FrequentsQuestions;
