import { theme } from "@/styledComponents";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { InfoGraphQuantity, colors } from "../..";
import { DivCircularGraph } from "../AdminDashboardBox/AdminDashboardBox.styled";

interface Props {
  info: InfoGraphQuantity[];
  labels: string[];
}

export function CircularGraph({ info, labels }: Props) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const options = {
    plugins: {
      legend: {
        position: "top" as const,
        // align: "start" as "start",
        labels: {
          color: theme.textColor,
          font: {
            size: 10,
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
        ticks: {
          display: false,
          color: theme.textColor,
        },
      },
      y: {
        display: false,
        ticks: { display: false, color: theme.textColor },
      },
    },
  };

  const data = {
    labels,
    datasets: info.map((el) => {
      return {
        label: el.label,
        data: el.numbers,
        backgroundColor: colors,
        borderColor: ["#000"],
        borderWidth: 1,
      };
    }),
  };
  return (
    <>
      <DivCircularGraph>
        <Pie data={data} options={options} />
      </DivCircularGraph>
    </>
  );
}
