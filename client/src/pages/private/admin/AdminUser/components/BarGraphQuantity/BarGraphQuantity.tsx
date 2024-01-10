import { theme } from "@/styledComponents";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useMediaQuery } from "react-responsive";
import { InfoGraphQuantity, colors } from "../..";

interface Props {
  info: InfoGraphQuantity[];
  labels: string[];
}

export function BarInfoGraphQuantity({ info, labels }: Props) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        align: "start" as "start",
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
        ticks: {
          color: theme.textColor,
          maxTicksLimit: isMobile ? 6 : undefined,
        },
      },
      y: {
        ticks: {
          color: theme.textColor,
        },
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
      };
    }),
  };

  return <Bar options={options} data={data} />;
}
