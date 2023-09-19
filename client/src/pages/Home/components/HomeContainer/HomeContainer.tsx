import { Container } from "@/styledComponents";

function HomeContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <Container $broad>{children}</Container>;
}
export default HomeContainer;
