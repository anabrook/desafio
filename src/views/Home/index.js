import React from "react";
import { Grid } from "@mui/material";

import { Title, MainDiv, Input, OkButton, ClearButton } from "./styles";

function Home() {
  return (
    <MainDiv>
      <Grid container justifyContent="center" alignItems="center" spacing={5}>
        <Grid item xs={12}>
          <Title variant="h1">Simulador de investimento</Title>
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
                  <Grid container spacing={5}>
                    <Grid item xs={12}>
                      <Input label="Aporte inicial" />
                    </Grid>
                    <Grid item xs={12}>
                      <Input label="Prazo (em meses)" />
                    </Grid>
                    <Grid item xs={12}>
                      <Input label="IPA (ao ano)" />
                    </Grid>
                    <Grid item xs={12}>
                      <ClearButton>Limpar campos</ClearButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={5}>
                    <Grid item xs={12}>
                      <Input label="Aporte mensal" />
                    </Grid>
                    <Grid item xs={12}>
                      <Input label="Rentabilidade" />
                    </Grid>
                    <Grid item xs={12}>
                      <Input fullWidth label="CDI (ao ano)" />
                    </Grid>
                    <Grid item xs={12}>
                      <OkButton>Simular</OkButton>
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
