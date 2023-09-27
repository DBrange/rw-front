import {
  BtnHome,
  DivBtnHome,
  DivHome,
  DivSection,
  DivText,
  H1Home,
  H3Home,
  H4Home,
  ImgHome,
  SectionHome,
  SpanHome,
} from ".";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import { LinkNavigate } from "@/styledComponents";
import person1 from "../../../assets/person1.svg";
import person5 from "../../../assets/person5.svg";
import person4 from "../../../assets/person4.svg";

function Home() {
  // const [isVisible, setIsVisible] = useState(false);

  // const toggleVisibility = () => {
  //   if (window.scrollY > 300) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", toggleVisibility);
  //   return () => {
  //     window.removeEventListener("scroll", toggleVisibility);
  //   };
  // }, []);
  return (
    <>
      {/* <button
        className={`fixed right-4 bottom-4 p-4 rounded-full shadow-md bg-violet-500 text-white ${
          isVisible ? "block" : "hidden"
        }`}
        onClick={scrollToTop}
        >
        <BsArrowUp />
      </button> */}
      {/* <ImgHome src={person1} alt="" /> */}
      <HomeContainer>
        <SectionHome>
          <DivSection>
            <DivHome>
              <H1Home>
                Bienvenido a <SpanHome>ReclamoWeb</SpanHome>.
              </H1Home>
              <H3Home>
                El primer y unico sitio para <SpanHome>asegurar</SpanHome> y{" "}
                <SpanHome>denunciar</SpanHome> online<SpanHome>.</SpanHome>
              </H3Home>
            </DivHome>
            <DivText>
              <H4Home>
                Toda informacion ingresada, sera verificada y enviada tanto a
                usted como al intermediario, el cual se comunicara contigo para
                poder seguir adelante con su denuncia o inspeccion.
              </H4Home>
              <H4Home>
                Toda la infomacion se mantendra en nuestra base de informacion,
                para asi en proximas actualizaciones, usted como usuario pueda
                tener todo su historial de denuncias e inspecciones a la vista,
                y mejorar su experiencia de usuario, facilitando su acceso a las
                mismas.
              </H4Home>
            </DivText>
          </DivSection>
          <ImgHome src={person1} alt="" />
        </SectionHome>

        <SectionHome>
          <ImgHome src={person4} alt="" />
          <DivSection>
            <DivHome $right>
              <H3Home>
                Podras realizar tus<SpanHome> DENUNCIAS</SpanHome> de robo, incendio o choque de la forma
                mas sencilla y rapida<SpanHome>.</SpanHome>
              </H3Home>
              <LinkNavigate to="/denuncia">
                <DivBtnHome>
                  <BtnHome>Denunciar</BtnHome>
                </DivBtnHome>
              </LinkNavigate>
            </DivHome>
          </DivSection>
        </SectionHome>

        <SectionHome>
          <DivSection>
            <DivHome>
              <H3Home>
                Tambien podras realizar inspecciones, para poder
                <SpanHome> ASEGURAR</SpanHome> de la forma mas sencilla y rapida tus electrodomesticos  o vehiculos
                <SpanHome>.</SpanHome>
              </H3Home>
              <LinkNavigate to="/inspeccion">
                <DivBtnHome>
                  <BtnHome>Inspeccionar</BtnHome>
                </DivBtnHome>
              </LinkNavigate>
            </DivHome>
          </DivSection>
          <ImgHome src={person5} alt="" />
        </SectionHome>
      </HomeContainer>
    </>
  );
}
export default Home;
