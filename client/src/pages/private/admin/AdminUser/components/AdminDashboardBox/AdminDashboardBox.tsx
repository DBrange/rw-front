import { BarGraph, BarInfoGraphQuantity, CircularGraph, GraphBox, LineGraph } from "..";
import {
  GraphFormatEnum,
  GraphTypeEnum,
  useAdminUserContext
} from "../..";
import { SectionAdminDashboard } from "./AdminDashboardBox.styled";

function AdminDashboardBox() {
  const {
    incomeData,
    newUserData,
    roleData,
    levellData,
    levelData,
    servicesData,
    userQuantityData,
    documentsData,
    graphType,
    graphFormatType,
    changeGraphType,
    changeGraphFormatType,
  } = useAdminUserContext();

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
          <LineGraph type={graphFormatType.income} info={incomeData || []} />
        }
        secondComponent={
          <BarGraph type={graphFormatType.income} info={incomeData || []} />
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
          <LineGraph type={graphFormatType.newUser} info={newUserData || []} />
        }
        secondComponent={
          <BarGraph type={graphFormatType.newUser} info={newUserData || []} />
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
          <LineGraph type={graphFormatType.userType} info={roleData || []} />
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
            info={levellData(levelData) || []}
          />
        }
        secondComponent={
          <BarGraph
            type={graphFormatType.brokerLevel}
            info={levellData(levelData) || []}
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
            info={documentsData || []}
          />
        }
        secondComponent={
          <BarGraph
            type={graphFormatType.documents}
            info={documentsData || []}
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
            info={userQuantityData || []}
          />
        }
        secondComponent={
          <BarInfoGraphQuantity
            labels={["Clientes", "Brokers"]}
            info={userQuantityData || []}
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
            info={servicesData || []}
          />
        }
        secondComponent={
          <BarInfoGraphQuantity
            labels={["Free", "Basic", "Premium", "Pro"]}
            info={servicesData || []}
          />
        }
        graphLabel="Servicios actuales"
      />
    </SectionAdminDashboard>
  );
}

export default AdminDashboardBox;
