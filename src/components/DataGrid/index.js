import React from "react";
import { Grid, useTheme } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { CustomPaper, PaperTitle, PaperText } from "./styles";

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
      position: "top",
    },
    title: {
      display: true,
      text: "Projeção de valores",
    },
  },
};

export default function DataGrid(props) {
  const { data } = props;

  const theme = useTheme();

  const formatMoney = value => {
    if (!value) return "R$0,00";
    return `R$${value.toFixed(2)}`;
  };

  const dataComAporte = () => {
    const obj = data.graficoValores.comAporte;
    return Object.keys(obj).map(e => obj[e]);
  };

  const dataSemAporte = () => {
    const obj = data.graficoValores.semAporte;
    return Object.keys(obj).map(e => obj[e]);
  };

  const graphData = {
    labels: Object.keys(data?.graficoValores?.comAporte),
    datasets: [
      {
        label: "Sem aporte",
        data: dataSemAporte(),
        backgroundColor: "#000000",
      },
      {
        label: "Com aporte",
        data: dataComAporte(),
        backgroundColor: theme.palette.primary.main,
      },
    ],
  };

  return (
    <Grid item xs={12} md={7}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <CustomPaper>
                <PaperTitle>Valor final Bruto</PaperTitle>
                <PaperText>{formatMoney(data?.valorFinalBruto)}</PaperText>
              </CustomPaper>
            </Grid>
            <Grid item>
              <CustomPaper>
                <PaperTitle>Alíquota do IR</PaperTitle>
                <PaperText>{`${data?.aliquotaIR || 0}%`}</PaperText>
              </CustomPaper>
            </Grid>
            <Grid item>
              <CustomPaper>
                <PaperTitle>Valor Pago em IR</PaperTitle>
                <PaperText>{formatMoney(data?.valorPagoIR)}</PaperText>
              </CustomPaper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} direction="row">
            <Grid item>
              <CustomPaper>
                <PaperTitle>Valor Final Líquido</PaperTitle>
                <PaperText>{formatMoney(data?.valorFinalLiquido)}</PaperText>
              </CustomPaper>
            </Grid>
            <Grid item>
              <CustomPaper>
                <PaperTitle>Valor Total Investido</PaperTitle>
                <PaperText>{formatMoney(data?.valorTotalInvestido)}</PaperText>
              </CustomPaper>
            </Grid>
            <Grid item>
              <CustomPaper>
                <PaperTitle>Ganho Líquido</PaperTitle>
                <PaperText>{formatMoney(data?.ganhoLiquido)}</PaperText>
              </CustomPaper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Bar options={options} data={graphData} />
    </Grid>
  );
}
