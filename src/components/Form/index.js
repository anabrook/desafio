import React from "react";
import {
  Grid,
  Typography,
  ButtonGroup,
  useMediaQuery,
  InputAdornment,
} from "@mui/material";

import {
  Input,
  OkButton,
  ClearButton,
  GroupButton,
  RowDiv,
  ColumnTitle,
} from "./styles";

export default function Form(props) {
  const mobile = useMediaQuery("(max-width:400px)");
  const { formik } = props;

  const verificaBtnIndex = value => {
    if (value === formik.values.tipoIndexacao) {
      return true;
    }
    return false;
  };

  const verificaBtnRendi = value => {
    if (value === formik.values.tipoRendimento) {
      return true;
    }
    return false;
  };

  return (
    <Grid item xs={12} md={4}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ColumnTitle variant="subtitle1" mobile={mobile}>
                Rendimento
              </ColumnTitle>
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
                {formik.errors.tipoRendimento && formik.touched.tipoRendimento && (
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
                placeholder="999.99"
                value={formik.values.aporteInicial}
                onChange={formik.handleChange}
                type="number"
                error={
                  formik.touched.aporteInicial &&
                  Boolean(formik.errors.aporteInicial)
                }
                helperText={
                  formik.touched.aporteInicial && formik.errors.aporteInicial
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                label="Prazo (em meses)"
                id="prazo"
                name="prazo"
                type="number"
                placeholder="em meses"
                value={formik.values.prazo}
                onChange={e => {
                  if (e.target.value > 12) {
                    return;
                  }
                  formik.handleChange(e);
                }}
                error={formik.touched.prazo && Boolean(formik.errors.prazo)}
                helperText={formik.touched.prazo && formik.errors.prazo}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                label="IPCA (ao ano)"
                id="ipca"
                name="ipca"
                type="number"
                placeholder="em %"
                value={formik.values.ipca}
                onChange={formik.handleChange}
                error={formik.touched.ipca && Boolean(formik.errors.ipca)}
                helperText={formik.touched.ipca && formik.errors.ipca}
              />
            </Grid>
            <Grid item xs={12}>
              <ClearButton onClick={() => formik.resetForm()}>
                Limpar campos
              </ClearButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <ColumnTitle variant="subtitle1" mobile={mobile}>
                Tipos de indexação
              </ColumnTitle>
            </Grid>
            <Grid item xs={12}>
              <RowDiv>
                <ButtonGroup>
                  <GroupButton
                    onClick={() => formik.setFieldValue("tipoIndexacao", "pre")}
                    selected={verificaBtnIndex("pre")}
                  >
                    PRÉ
                  </GroupButton>
                  <GroupButton
                    onClick={() => formik.setFieldValue("tipoIndexacao", "pos")}
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
                {formik.errors.tipoIndexacao && formik.touched.tipoIndexacao && (
                  <Typography color={"#d32f2f"} variant="caption">
                    {formik.errors.tipoIndexacao}
                  </Typography>
                )}
              </RowDiv>
            </Grid>
            <Grid item xs={12}>
              <Input
                label="Aporte mensal"
                value={formik.values.aporteMensal}
                onChange={formik.handleChange}
                placeholder="999.99"
                id="aporteMensal"
                name="aporteMensal"
                error={
                  formik.touched.aporteMensal &&
                  Boolean(formik.errors.aporteMensal)
                }
                helperText={
                  formik.touched.aporteMensal && formik.errors.aporteMensal
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                label="Rentabilidade"
                id="rentabilidade"
                name="rentabilidade"
                placeholder="em %"
                type="number"
                value={formik.values.rentabilidade}
                onChange={formik.handleChange}
                error={
                  formik.touched.rentabilidade &&
                  Boolean(formik.errors.rentabilidade)
                }
                helperText={
                  formik.touched.rentabilidade && formik.errors.rentabilidade
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
                placeholder="em %"
                value={formik.values.cdi}
                onChange={formik.handleChange}
                error={formik.touched.cdi && Boolean(formik.errors.cdi)}
                helperText={formik.touched.cdi && formik.errors.cdi}
              />
            </Grid>
            <Grid item xs={12}>
              <OkButton onClick={() => formik.handleSubmit()}>Simular</OkButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
