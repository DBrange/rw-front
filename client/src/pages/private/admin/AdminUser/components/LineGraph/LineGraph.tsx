import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { GraphFormatEnum, InfoLineGraph, colors, months, weeks } from "../..";
import { theme } from "@/styledComponents";
import { useMediaQuery } from "react-responsive";
import { subMonths, format } from "date-fns";
import esLocale from "date-fns/locale/es";
interface Props {
  type: GraphFormatEnum;
  info: InfoLineGraph[];
}

export default function LineGraph({ info, type }: Props) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const last12Months = Array.from({ length: 12 }, (_, index) =>
    format(subMonths(new Date(), 12 - index), "MMM", {
      locale: esLocale,
    })
  ).reverse();

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
        grid: {
          color: theme.tColor,
        },
        ticks: {
          color: theme.textColor,
          maxTicksLimit: isMobile ? 6 : undefined,
        },
      },
      y: {
        grid: {
          color: theme.tColor,
        },
        ticks: {
          color: theme.textColor,
        },
      },
    },
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: type === GraphFormatEnum.MONTHS ? last12Months.reverse() : weeks,
    datasets: info.map((el, i) => {
      return {
        label: el.label,
        data: type === GraphFormatEnum.MONTHS ? el.months : el.weeks,
        borderColor: colors[i],
        backgroundColor: colors[i],
      };
    }),
  };

  return <Line  data={data} options={options} />;
}
