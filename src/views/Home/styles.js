import { Typography, Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import styledComponents from "styled-components";

export const MainDiv = styledComponents(Box)`
margin:20;
height: 100vh;
display: flex;
align-items:center;
justify-content: center;`;

export const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  fontSize: 28,
  textAlign: "center",
}));

export const Input = styledComponents(TextField).attrs({
  variant: "standard",
  fullWidth: true,
})``;

export const OkButton = styledComponents(Button).attrs({
  variant: "contained",
  fullWidth: true,
})`
text-transform: none;
font-weight: bold;
border-radius:8;
padding:10;
&:hover {
  color: #eee;
  background-color: #4AB377;
}
`;

export const ClearButton = styledComponents(Button).attrs({
  variant: "outlined",
  fullWidth: true,
})`
text-transform: none;
font-weight: bold;
border-radius:8;
padding:10;
border-color: #000;
color: #000;
`;
