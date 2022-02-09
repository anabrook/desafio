import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import styledComponents from "styled-components";

export const MainDiv = styledComponents(Box)`
margin-left:50px;
margin-right:50px;
height: 100vh;
display: flex;
align-items:center;
justify-content: center;`;

export const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  fontSize: 30,
  textAlign: "center",
  fontWeight: "bold",
}));
