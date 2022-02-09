import { Paper, Typography } from "@mui/material";
import styledComponents from "styled-components";

export const FlexColumn = styledComponents.div`
display: flex;
flex-direction: row;
`;

export const CustomPaper = styledComponents(Paper)`
&&&{
  width:190px;
  height:75px;
}
`;

export const PaperTitle = styledComponents(Typography)`
text-align:center;
&&&{
  font-weight:bold;
}
`;

export const PaperText = styledComponents(Typography)`
text-align:center;
`;
