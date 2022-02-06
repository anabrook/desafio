import React from "react";
import { Grid, Typography, ButtonGroup } from "@mui/material";

import { useFormik } from "formik";
import * as yup from "yup";

import {
  Title,
  MainDiv,
  Input,
  OkButton,
  ClearButton,
  GroupButton,
  RowDiv,
} from "./styles";

const validationSchema = yup.object({
  tipoIndexacao: yup.string().required("Selecione um tipo de indexação"),
  tipoRendimento: yup.string().required("Selecione um tipo de rendimento"),
  aporteInicial: yup.number().required("O aporte inicial é obrigatório"),
  aporteMensal: yup.number().required("O aporte deve ser um número"),
  prazo: yup.number().required("O prazo é obrigatório"),
  rentabilidade: yup.number().required("A rentabilidade é obrigatória"),
  ipa: yup.number().required("IPA é obrigatório"),
  cdi: yup.number().required("CDI é obrigatório"),
});

function Home() {
  const formik = useFormik({
    initialValues: {
      tipoIndexacao: "",
      tipoRendimento: "",
      aporteInicial: undefined,
      aporteMensal: undefined,
      prazo: undefined,
      rentabilidade: undefined,
      ipa: undefined,
      cdi: undefined,
    },
    validationSchema: validationSchema,
  });

  const verificaBtnIndex = (value) => {
    if (value === formik.values.tipoIndexacao) {
      return true;
    }
    return false;
  };

  const verificaBtnRendi = (value) => {
    if (value === formik.values.tipoRendimento) {
      return true;
    }
    return false;
  };

  return (
    <MainDiv>
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item xs={12}>
          <Title variant="h1">Simulador de investimento</Title>
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={5}
          >
            {/* Left ITEMS */}
            <Grid item xs={12} md={5}>
              {/* Left Grid  */}
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={6}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                      >
                        Rendimento
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <RowDiv>
                        <ButtonGroup label="Rendimento">
                          <GroupButton
                            textTransformNone
                            onClick={() =>
                              formik.setFieldValue("tipoRendimento", "bruto")
                            }
                            selected={verificaBtnRendi("bruto")}
                          >
                            Bruto
                          </GroupButton>
                          <GroupButton
                            textTransformNone
                            onClick={() =>
                              formik.setFieldValue("tipoRendimento", "liquido")
                            }
                            selected={verificaBtnRendi("liquido")}
                          >
                            Líquido
                          </GroupButton>
                        </ButtonGroup>
                        {formik.errors.tipoRendimento && (
                          <Typography color={"#d32f2f"} variant="caption">
                            {formik.errors.tipoRendimento}
                          </Typography>
                        )}
                      </RowDiv>
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        label="Aporte inicial"
                        id="aporteInicial"
                        name="aporteInicial"
                        value={formik.values.aporteInicial}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.aporteInicial &&
                          Boolean(formik.errors.aporteInicial)
                        }
                        helperText={
                          formik.touched.aporteInicial &&
                          formik.errors.aporteInicial
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        label="Prazo (em meses)"
                        id="prazo"
                        name="prazo"
                        value={formik.values.prazo}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.prazo && Boolean(formik.errors.prazo)
                        }
                        helperText={formik.touched.prazo && formik.errors.prazo}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        label="IPA (ao ano)"
                        id="ipa"
                        name="ipa"
                        value={formik.values.ipa}
                        onChange={formik.handleChange}
                        error={formik.touched.ipa && Boolean(formik.errors.ipa)}
                        helperText={formik.touched.ipa && formik.errors.ipa}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ClearButton>Limpar campos</ClearButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                      >
                        Tipos de indexação
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <RowDiv>
                        <ButtonGroup>
                          <GroupButton
                            onClick={() =>
                              formik.setFieldValue("tipoIndexacao", "pre")
                            }
                            selected={verificaBtnIndex("pre")}
                          >
                            PRÉ
                          </GroupButton>
                          <GroupButton
                            onClick={() =>
                              formik.setFieldValue("tipoIndexacao", "pos")
                            }
                            selected={verificaBtnIndex("pos")}
                          >
                            POS
                          </GroupButton>
                          <GroupButton
                            onClick={() =>
                              formik.setFieldValue("tipoIndexacao", "fixado")
                            }
                            selected={verificaBtnIndex("fixado")}
                          >
                            FIXADO
                          </GroupButton>
                        </ButtonGroup>
                        {formik.errors.tipoIndexacao && (
                          <Typography color={"#d32f2f"} variant="caption">
                            {formik.errors.tipoIndexacao}
                          </Typography>
                        )}
                      </RowDiv>
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        label="Aporte mensal"
                        type="number"
                        id="aporteMensal"
                        name="aporteMensal"
                        value={formik.values.aporteMensal}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.aporteMensal &&
                          Boolean(formik.errors.aporteMensal)
                        }
                        helperText={
                          formik.touched.aporteMensal &&
                          formik.errors.aporteMensal
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        label="Rentabilidade"
                        id="rentabilidade"
                        name="rentabilidade"
                        type="number"
                        value={formik.values.rentabilidade}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.rentabilidade &&
                          Boolean(formik.errors.rentabilidade)
                        }
                        helperText={
                          formik.touched.rentabilidade &&
                          formik.errors.rentabilidade
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        fullWidth
                        label="CDI (ao ano)"
                        id="cdi"
                        name="cdi"
                        type="number"
                        value={formik.values.cdi}
                        onChange={formik.handleChange}
                        error={formik.touched.cdi && Boolean(formik.errors.cdi)}
                        helperText={formik.touched.cdi && formik.errors.cdi}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <OkButton onClick={() => formik.handleSubmit()}>
                        Simular
                      </OkButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} style={{ backgroundColor: "red" }}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainDiv>
  );
}

export default Home;
