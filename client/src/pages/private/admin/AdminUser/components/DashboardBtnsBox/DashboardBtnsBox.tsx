import { ClickEventType } from "@/pages";
import { GraphFormatEnum, GraphTypeEnum } from "../..";
import {
  BtnAdminDashboard,
  ContainerBtnAdminDashboard,
  DivBtnAdminDashboard,
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
}

function DashboardBtnsBox({
  isActiveGraphTypeLine,
  isActiveGraphTypeBar,
  isActiveGraphTypeCircular,
  isActiveGraphFormatMonth,
  isActiveGraphFormatWeek,
  changeGraphType,
  changeGraphFormatType,
  name,
}: Props) {
  return (
    <ContainerBtnAdminDashboard $notLine={isActiveGraphTypeLine === undefined}>
      <DivBtnAdminDashboard>
        {isActiveGraphTypeLine !== undefined ? (
          <BtnAdminDashboard
            $active={isActiveGraphTypeLine}
            name={name}
            value={GraphTypeEnum.LINE}
            onClick={(e) => changeGraphType(e)}
          >
            Lineas
          </BtnAdminDashboard>
        ) : (
          <BtnAdminDashboard
            $active={isActiveGraphTypeCircular}
            name={name}
            value={GraphTypeEnum.CIRCULAR}
            onClick={(e) => changeGraphType(e)}
          >
            Circular
          </BtnAdminDashboard>
        )}
        <BtnAdminDashboard
          $active={isActiveGraphTypeBar}
          name={name}
          value={GraphTypeEnum.BAR}
          onClick={(e) => changeGraphType(e)}
        >
          Barras
        </BtnAdminDashboard>
      </DivBtnAdminDashboard>
      {isActiveGraphTypeLine !== undefined ? (
        <DivBtnAdminDashboard>
          <BtnAdminDashboard
            $active={isActiveGraphFormatMonth}
            name={name}
            value={GraphFormatEnum.MONTHS}
            onClick={(e) => changeGraphFormatType(e)}
          >
            Meses
          </BtnAdminDashboard>

          <BtnAdminDashboard
            $active={isActiveGraphFormatWeek}
            name={name}
            value={GraphFormatEnum.WEEKS}
            onClick={(e) => changeGraphFormatType(e)}
          >
            Semanas
          </BtnAdminDashboard>
        </DivBtnAdminDashboard>
      ) : (
        <></>
      )}
    </ContainerBtnAdminDashboard>
  );
}
export default DashboardBtnsBox;
