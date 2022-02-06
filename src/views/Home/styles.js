import { Typography, Box, TextField, Button } from "@mui/material";
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
padding:10px;
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
padding:10px;
border-color: #000;
color: #000;
`;

export const GroupButton = styledComponents(Button).attrs({
  variant: "outlined",
  fullWidth: true,
})`
font-weight: bold;
padding:10px;

&&& {
  ${(props) =>
    props.selected ? "background-color:#ED8E53; color: white;" : ""}
  ${(props) => (props.textTransformNone ? "text-transform:none;" : "")}
}
`;

export const RowDiv = styledComponents.div`
  display: flex;
  flex-direction: column;
`;
