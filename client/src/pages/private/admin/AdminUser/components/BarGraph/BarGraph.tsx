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
import { GraphFormatEnum, InfoLineGraph, colors, months, weeks } from "../..";
import { subMonths, format } from "date-fns";
import esLocale from "date-fns/locale/es";
interface Props {
  type: string;
  info: InfoLineGraph[];
}

export function BarGraph({ info, type }: Props) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const last12Months = Array.from({ length: 12 }, (_, index) =>
    format(subMonths(new Date(), 11 - index), "MMM", {
      locale: esLocale,
    })
  ).reverse();
  
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
    labels: type === GraphFormatEnum.MONTHS ? last12Months : weeks,
    datasets: info.map((el, i) => {
      return {
        label: el.label,
        data: type === GraphFormatEnum.MONTHS ? el.months : el.weeks,
        backgroundColor: colors[i],
      };
    }),
  };

  return <Bar options={options} data={data} />;
}

//rgba(53, 162, 235, 0.5),
