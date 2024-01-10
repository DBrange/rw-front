import { ClickEventType } from "@/pages";
import { DashboardBtnsBox } from "..";
import {
  DivGraphBox,
  DivOnlyGraphBox,
  H3InspectionDetail,
} from "../AdminDashboardBox/AdminDashboardBox.styled";

interface Props {
  isActiveGraphTypeLine?: boolean;
  isActiveGraphTypeBar: boolean;
  isActiveGraphTypeCircular?: boolean;
  isActiveGraphFormatMonth?: boolean;
  isActiveGraphFormatWeek?: boolean;
  changeGraphType: (e: ClickEventType) => void;
  changeGraphFormatType: (e: ClickEventType) => void;
  name: string;
  graphActive?: boolean;
  firstComponent: JSX.Element;
  secondComponent: JSX.Element;
  graphLabel: string;
}

function GraphBox({
  isActiveGraphTypeLine,
  isActiveGraphTypeBar,
  isActiveGraphTypeCircular,
  isActiveGraphFormatMonth,
  isActiveGraphFormatWeek,
  changeGraphType,
  changeGraphFormatType,
  name,
  graphActive,
  firstComponent,
  secondComponent,
  graphLabel,
}: Props) {
  return (
    <DivGraphBox>
      <H3InspectionDetail>{graphLabel}</H3InspectionDetail>
      <DashboardBtnsBox
        isActiveGraphTypeLine={isActiveGraphTypeLine}
        isActiveGraphTypeBar={isActiveGraphTypeBar}
        isActiveGraphTypeCircular={isActiveGraphTypeCircular}
        isActiveGraphFormatMonth={isActiveGraphFormatMonth}
        isActiveGraphFormatWeek={isActiveGraphFormatWeek}
        changeGraphType={changeGraphType}
        changeGraphFormatType={changeGraphFormatType}
        name={name}
      />
      <DivOnlyGraphBox>{graphActive ? firstComponent : secondComponent}</DivOnlyGraphBox>
    </DivGraphBox>
  );
}
export default GraphBox;
