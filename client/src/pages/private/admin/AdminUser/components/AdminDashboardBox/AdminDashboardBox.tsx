import { useState } from "react";
import {
  BarGraph,
  BarGraphQuantity,
  CircularGraph,
  DashboardBtnsBox,
  GraphBox,
  LineGraph,
} from "..";
import { GraphFormat, GraphFormatEnum, GraphType, GraphTypeEnum } from "../..";
import { ClickEventType } from "@/pages";
import {
  ContainerBtnAdminDashboard,
  H3InspectionDetail,
  BtnAdminDashboard,
  DivBtnAdminDashboard,
  SectionAdminDashboard,
} from "./AdminDashboardBox.styled";

function AdminDashboardBox() {
  const [graphType, setGraphType] = useState<GraphType>({
    newUser: GraphTypeEnum.LINE,
    userType: GraphTypeEnum.LINE,
    brokerLevel: GraphTypeEnum.LINE,
    documents: GraphTypeEnum.LINE,
    income: GraphTypeEnum.LINE,
    usersQuantity: GraphTypeEnum.CIRCULAR,
    actualUsers: GraphTypeEnum.CIRCULAR,
  });

  const [graphFormatType, setGraphFormatType] = useState<GraphFormat>({
    newUser: GraphFormatEnum.MONTHS,
    userType: GraphFormatEnum.MONTHS,
    brokerLevel: GraphFormatEnum.MONTHS,
    documents: GraphFormatEnum.MONTHS,
    income: GraphFormatEnum.MONTHS,
    usersQuantity: GraphFormatEnum.MONTHS,
    actualUsers: GraphFormatEnum.MONTHS,
  });

  const changeGraphType = (e: ClickEventType) => {
    const { name, value } = e.currentTarget;

    if (value === GraphTypeEnum.LINE) {
      setGraphType({
        ...graphType,
        [name]: value,
      });
    } else if (value === GraphTypeEnum.BAR) {
      setGraphType({
        ...graphType,
        [name]: value,
      });
    } else if (value === GraphTypeEnum.CIRCULAR) {
      setGraphType({
        ...graphType,
        [name]: value,
      });
    }
  };

  const changeGraphFormatType = (e: ClickEventType) => {
    const { name, value } = e.currentTarget;

    if (value === GraphFormatEnum.MONTHS) {
      setGraphFormatType({
        ...graphFormatType,
        [name]: value,
      });
    } else if (value === GraphFormatEnum.WEEKS) {
      setGraphFormatType({
        ...graphFormatType,
        [name]: value,
      });
    }
  };

  return (
    <SectionAdminDashboard>
      <GraphBox
        isActiveGraphTypeLine={graphType.income === GraphTypeEnum.LINE}
        isActiveGraphTypeBar={graphType.income === GraphTypeEnum.BAR}
        isActiveGraphTypeCircular={undefined}
        isActiveGraphFormatMonth={
          graphFormatType.income === GraphFormatEnum.MONTHS
        }
        isActiveGraphFormatWeek={
          graphFormatType.income === GraphFormatEnum.WEEKS
        }
        changeGraphType={changeGraphType}
        changeGraphFormatType={changeGraphFormatType}
        name="income"
        graphActive={graphType.income === GraphTypeEnum.LINE}
        firstComponent={
          <LineGraph
            type={graphFormatType.income}
            info={[
              {
                label: "Ganancias",
                months: [1000, 500, 300, 100, 0, -100, -300, -500, -1000],
                weeks: [
                  600, 350, 200, 800, 0, 100, -300, 500, -1000, 900, 700, 500,
                ],
              },
            ]}
          />
        }
        secondComponent={
          <BarGraph
            type={graphFormatType.income}
            info={[
              {
                label: "Usuarios",
                months: [1000, 500, 300, 100, 0, -100, -300, -500, -1000],
                weeks: [
                  600, 350, 200, 800, 0, 100, -300, 500, -1000, 900, 700, 500,
                ],
              },
            ]}
          />
        }
        graphLabel="Ingresos"
      />
      <GraphBox
        isActiveGraphTypeLine={graphType.newUser === GraphTypeEnum.LINE}
        isActiveGraphTypeBar={graphType.newUser === GraphTypeEnum.BAR}
        isActiveGraphTypeCircular={undefined}
        isActiveGraphFormatMonth={
          graphFormatType.newUser === GraphFormatEnum.MONTHS
        }
        isActiveGraphFormatWeek={
          graphFormatType.newUser === GraphFormatEnum.WEEKS
        }
        changeGraphType={changeGraphType}
        changeGraphFormatType={changeGraphFormatType}
        name="newUser"
        graphActive={graphType.newUser === GraphTypeEnum.LINE}
        firstComponent={
          <LineGraph
            type={graphFormatType.newUser}
            info={[
              {
                label: "Usuarios",
                months: [1000, 500, 300, 100, 0, 100, 300, 500, 1000,900,876,540],
                weeks: [
                  600, 350, 200, 800, 0, 100, -300, 500, -1000, 900, 700, 500,
                ],
              },
            ]}
          />
        }
        secondComponent={
          <BarGraph
            type={graphFormatType.newUser}
            info={[
              {
                label: "Usuarios",
                months: [1000, 500, 300, 100, 0, -100, -300, -500, -1000],
                weeks: [
                  600, 350, 200, 800, 0, 100, -300, 500, -1000, 900, 700, 500,
                ],
              },
            ]}
          />
        }
        graphLabel="Nuevos Usuarios"
      />
      <GraphBox
        isActiveGraphTypeLine={graphType.userType === GraphTypeEnum.LINE}
        isActiveGraphTypeBar={graphType.userType === GraphTypeEnum.BAR}
        isActiveGraphTypeCircular={undefined}
        isActiveGraphFormatMonth={
          graphFormatType.userType === GraphFormatEnum.MONTHS
        }
        isActiveGraphFormatWeek={
          graphFormatType.userType === GraphFormatEnum.WEEKS
        }
        changeGraphType={changeGraphType}
        changeGraphFormatType={changeGraphFormatType}
        name="userType"
        graphActive={graphType.userType === GraphTypeEnum.LINE}
        firstComponent={
          <LineGraph
            type={graphFormatType.userType}
            info={[
              {
                label: "Brokers",
                months: [1000, 500, 300, 100, 0, -100, -300, -500, -1000],
                weeks: [
                  600, 350, 200, 800, 0, 100, -300, 500, -1000, 900, 700, 500,
                ],
              },
              {
                label: "Clientes",
                months: [200, 100, 300, 0, 50, -100, -300, 500, 1000],
                weeks: [
                  1000, 500, 300, 100, 0, -100, 300, -500, -1000, 700, 500,
                ],
              },
            ]}
          />
        }
        secondComponent={
          <BarGraph
            type={graphFormatType.userType}
            info={[
              {
                label: "Brokers",
                months: [1000, 500, 300, 100, 0, -100, -300, -500, -1000],
                weeks: [
                  600, 350, 200, 800, 0, 100, -300, 500, -1000, 900, 700, 500,
                ],
              },
              {
                label: "Clientes",
                months: [200, 100, 300, 0, 50, -100, -300, 500, 1000],
                weeks: [
                  1000, 500, 300, 100, 0, -100, 300, -500, -1000, 700, 500,
                ],
              },
            ]}
          />
        }
        graphLabel="Tipo de usuarios"
      />
      <GraphBox
        isActiveGraphTypeLine={graphType.brokerLevel === GraphTypeEnum.LINE}
        isActiveGraphTypeBar={graphType.brokerLevel === GraphTypeEnum.BAR}
        isActiveGraphTypeCircular={undefined}
        isActiveGraphFormatMonth={
          graphFormatType.brokerLevel === GraphFormatEnum.MONTHS
        }
        isActiveGraphFormatWeek={
          graphFormatType.brokerLevel === GraphFormatEnum.WEEKS
        }
        changeGraphType={changeGraphType}
        changeGraphFormatType={changeGraphFormatType}
        name="brokerLevel"
        graphActive={graphType.brokerLevel === GraphTypeEnum.LINE}
        firstComponent={
          <LineGraph
            type={graphFormatType.brokerLevel}
            info={[
              {
                label: "Free",
                months: [1000, 500, 300, 100, 0, -100, -300, -500, -1000],
                weeks: [
                  600, 350, 200, 800, 0, 100, -300, 500, -1000, 900, 700, 500,
                ],
              },
              {
                label: "Basico",
                months: [1000, 500, 300, 100, 0, -100, -300, -500, -1000],
                weeks: [
                  600, 350, 200, 800, 0, 100, -300, 500, -1000, 900, 700, 500,
                ],
              },
              {
                label: "Premium",
                months: [200, 100, 300, 0, 50, -100, -300, 500, 1000],
                weeks: [
                  1000, 500, 300, 100, 0, -100, 300, -500, -1000, 700, 500,
                ],
              },
              {
                label: "Pro",
                months: [20, 10, 30, 0, 40, -10, -30, 50, 100],
                weeks: [
                  1000, 500, 300, 100, 0, -100, 300, -500, -1000, 700, 500,
                ],
              },
            ]}
          />
        }
        secondComponent={
          <BarGraph
            type={graphFormatType.brokerLevel}
            info={[
              {
                label: "Basic",
                months: [1000, 500, 300, 100, 0, -100, -300, -500, -1000],
                weeks: [
                  600, 350, 200, 800, 0, 100, -300, 500, -1000, 900, 700, 500,
                ],
              },
              {
                label: "Gold",
                months: [200, 100, 300, 0, 50, -100, -300, 500, 1000],
                weeks: [
                  1000, 500, 300, 100, 0, -100, 300, -500, -1000, 700, 500,
                ],
              },
              {
                label: "Premium",
                months: [20, 10, 30, 0, 40, -10, -30, 50, 100],
                weeks: [
                  1000, 500, 300, 100, 0, -100, 300, -500, -1000, 700, 500,
                ],
              },
            ]}
          />
        }
        graphLabel="Nivel de brokers"
      />
      <GraphBox
        isActiveGraphTypeLine={graphType.documents === GraphTypeEnum.LINE}
        isActiveGraphTypeBar={graphType.documents === GraphTypeEnum.BAR}
        isActiveGraphTypeCircular={undefined}
        isActiveGraphFormatMonth={
          graphFormatType.documents === GraphFormatEnum.MONTHS
        }
        isActiveGraphFormatWeek={
          graphFormatType.documents === GraphFormatEnum.WEEKS
        }
        changeGraphType={changeGraphType}
        changeGraphFormatType={changeGraphFormatType}
        name="documents"
        graphActive={graphType.documents === GraphTypeEnum.LINE}
        firstComponent={
          <LineGraph
            type={graphFormatType.documents}
            info={[
              {
                label: "Inspecciones",
                months: [1000, 500, 300, 100, 0, -100, -300, -500, -1000],
                weeks: [
                  600, 350, 200, 800, 0, 100, -300, 500, -1000, 900, 700, 500,
                ],
              },
              {
                label: "Siniestros",
                months: [200, 100, 300, 0, 50, -100, -300, 500, 1000],
                weeks: [
                  1000, 500, 300, 100, 0, -100, 300, -500, -1000, 700, 500,
                ],
              },
            ]}
          />
        }
        secondComponent={
          <BarGraph
            type={graphFormatType.documents}
            info={[
              {
                label: "Inspecciones",
                months: [1000, 500, 300, 100, 0, -100, -300, -500, -1000],
                weeks: [
                  600, 350, 200, 800, 0, 100, -300, 500, -1000, 900, 700, 500,
                ],
              },
              {
                label: "Siniestros",
                months: [200, 100, 300, 0, 50, -100, -300, 500, 1000],
                weeks: [
                  1000, 500, 300, 100, 0, -100, 300, -500, -1000, 700, 500,
                ],
              },
            ]}
          />
        }
        graphLabel="Documentos"
      />
      <GraphBox
        isActiveGraphTypeLine={undefined}
        isActiveGraphTypeBar={graphType.usersQuantity === GraphTypeEnum.BAR}
        isActiveGraphTypeCircular={
          graphType.usersQuantity === GraphTypeEnum.CIRCULAR
        }
        isActiveGraphFormatMonth={undefined}
        isActiveGraphFormatWeek={undefined}
        changeGraphType={changeGraphType}
        changeGraphFormatType={changeGraphFormatType}
        name="usersQuantity"
        graphActive={graphType.usersQuantity === GraphTypeEnum.CIRCULAR}
        firstComponent={
          <CircularGraph
            labels={["Clientes", "Brokers"]}
            info={[
              {
                label: "Usuarios",
                numbers: [800, 200],
              },
            ]}
          />
        }
        secondComponent={
          <BarGraphQuantity
            labels={["Clientes", "Brokers"]}
            info={[
              {
                label: "Usuarios",
                numbers: [800, 200],
              },
            ]}
          />
        }
        graphLabel="Usuarios cantidad"
      />
      <GraphBox
        isActiveGraphTypeLine={undefined}
        isActiveGraphTypeBar={graphType.actualUsers === GraphTypeEnum.BAR}
        isActiveGraphTypeCircular={
          graphType.actualUsers === GraphTypeEnum.CIRCULAR
        }
        isActiveGraphFormatMonth={undefined}
        isActiveGraphFormatWeek={undefined}
        changeGraphType={changeGraphType}
        changeGraphFormatType={changeGraphFormatType}
        name="actualUsers"
        graphActive={graphType.actualUsers === GraphTypeEnum.CIRCULAR}
        firstComponent={
          <CircularGraph
            labels={["Free", "Basic", "Premium", "Pro"]}
            info={[
              {
                label: "Servicios",
                numbers: [1000, 800, 200, 100],
              },
            ]}
          />
        }
        secondComponent={
          <BarGraphQuantity
            labels={["Free", "Basic", "Premium", "Pro"]}
            info={[
              {
                label: "Servicios",
                numbers: [1000, 800, 200, 100],
              },
            ]}
          />
        }
        graphLabel="Servicios actuales"
      />
    </SectionAdminDashboard>
  );
}

export default AdminDashboardBox;
