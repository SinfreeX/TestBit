import {styled} from "@mui/material";
import chart from "../../icons/stat-chart.png";

export const ChartStyled = styled("div")(({theme}) => ({
  backgroundImage: `url(${chart})`,
  width: '410px',
  height: '351px',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'calc(100vw / 1.288)',
    backgroundSize: 'contain'
  }
}))