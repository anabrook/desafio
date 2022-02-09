import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Backdrop,
  CircularProgress,
  Alert,
  Snackbar,
} from "@mui/material";

import { useFormik } from "formik";
import * as yup from "yup";
import Form from "../../components/Form";
import DataGrid from "../../components/DataGrid";
import axios from "../../config/axios";

import { Title, MainDiv } from "./styles";

const validationSchema = yup.object({
  tipoIndexacao: yup.string().required("Selecione um tipo de indexação"),
  tipoRendimento: yup.string().required("Selecione um tipo de rendimento"),
  aporteInicial: yup.number().required("O aporte inicial é obrigatório"),
  aporteMensal: yup.number().required("O aporte deve ser um número"),
  prazo: yup.number().required("O prazo é obrigatório"),
  rentabilidade: yup.number().required("A rentabilidade é obrigatória"),
  ipca: yup.number().required("IPCA é obrigatório"),
  cdi: yup.number().required("CDI é obrigatório"),
});

function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const submit = async ({ tipoIndexacao, tipoRendimento }) => {
    setLoading(oldState => !oldState);
    axios
      .get(
        `/simulacoes?tipoIndexacao=${tipoIndexacao}&tipoRendimento=${tipoRendimento}`
      )
      .then(({ data }) => {
        setLoading(oldState => !oldState);
        console.log(data);
        if (data.length <= 0) {
          return setData(null);
        }
        setData(data[0]);
      })
      .catch(error => {
        setLoading(oldState => !oldState);
        console.log(error);
        alert("Erro ao carregar dados");
      });
  };

  const formik = useFormik({
    initialValues: {
      tipoIndexacao: "",
      tipoRendimento: "",
      aporteInicial: "",
      aporteMensal: "",
      prazo: "",
      rentabilidade: "",
      ipca: "",
      cdi: "",
    },
    validationSchema: validationSchema,
    onSubmit: submit,
  });

  const getIndicatores = async () => {
    setLoading(oldState => !oldState);
    const cdi = await axios.get("/indicadores?nome=cdi");
    formik.setFieldValue("cdi", cdi.data[0].valor);
    const ipca = await axios.get("/indicadores?nome=ipca");
    formik.setFieldValue("ipca", ipca.data[0].valor);
    setLoading(oldState => !oldState);
  };

  useEffect(() => {
    getIndicatores();
    // eslint-disable-next-line
  }, []);

  return (
    <MainDiv>
      <Snackbar
        open={data === null}
        autoHideDuration={6000}
        onClose={() => setData(undefined)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setData(undefined)}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Sem dados
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item xs={12}>
          <Title variant="h1">Simulador de investimento</Title>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            align="left"
            fontWeight={"bold"}
          >
            Simulador  
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            align="left"
            fontWeight={"bold"}
          >
            Resultado da simulação
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Form formik={formik} />
            {data && <DataGrid data={data} />}
          </Grid>
        </Grid>
      </Grid>
    </MainDiv>
  );
}

export default Home;
